"use client";

import { useRef, useState } from 'react';
import Link from "next/link";
import Layout from '@/components/Layout';

export default function AudioTest() {
  const leftAudioRef = useRef(null);
  const rightAudioRef = useRef(null);
  const [activeChannel, setActiveChannel] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState('');

  const playLeftChannel = async () => {
    setIsLoading('left');
    setError('');
    setActiveChannel('left');
    
    try {
      if (leftAudioRef.current) {
        await leftAudioRef.current.play();
      }
    } catch (err) {
      console.error('Left audio play error:', err);
      setError('Failed to play left channel audio. Please check your audio settings.');
      setActiveChannel(null);
    } finally {
      setIsLoading('');
    }
  };

  const playRightChannel = async () => {
    setIsLoading('right');
    setError('');
    setActiveChannel('right');
    
    try {
      if (rightAudioRef.current) {
        await rightAudioRef.current.play();
      }
    } catch (err) {
      console.error('Right audio play error:', err);
      setError('Failed to play right channel audio. Please check your audio settings.');
      setActiveChannel(null);
    } finally {
      setIsLoading('');
    }
  };

  const stopAudio = () => {
    if (leftAudioRef.current) {
      leftAudioRef.current.pause();
      leftAudioRef.current.currentTime = 0;
    }
    if (rightAudioRef.current) {
      rightAudioRef.current.pause();
      rightAudioRef.current.currentTime = 0;
    }
    setActiveChannel(null);
    setError('');
  };

  const handleAudioError = (channel) => {
    setError(`Failed to load ${channel} channel audio file. Please check your internet connection.`);
    setIsLoading('');
    setActiveChannel(null);
  };

  return (
    <Layout>
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">
          Audio Channel Test
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
          Test your left and right audio channels with dedicated audio files
        </p>

        {error && (
          <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 px-4 py-3 rounded mb-6 max-w-2xl mx-auto">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <h2 className="text-xl font-semibold mb-4 dark:text-white">Left Channel</h2>
              <button
                onClick={playLeftChannel}
                disabled={isLoading === 'left' || activeChannel === 'left'}
                className={`px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200 disabled:cursor-not-allowed ${
                  activeChannel === 'left'
                    ? 'bg-green-600 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white'
                }`}
              >
                {isLoading === 'left' ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Loading...
                  </span>
                ) : activeChannel === 'left' ? (
                  'Playing Left Audio'
                ) : (
                  'Test Left Speaker'
                )}
              </button>
              <audio
                ref={leftAudioRef}
                preload="metadata"
                onError={() => handleAudioError('left')}
                onEnded={() => setActiveChannel(null)}
              >
                <source src="/audio/left.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <h2 className="text-xl font-semibold mb-4 dark:text-white">Right Channel</h2>
              <button
                onClick={playRightChannel}
                disabled={isLoading === 'right' || activeChannel === 'right'}
                className={`px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200 disabled:cursor-not-allowed ${
                  activeChannel === 'right'
                    ? 'bg-green-600 text-white'
                    : 'bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white'
                }`}
              >
                {isLoading === 'right' ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Loading...
                  </span>
                ) : activeChannel === 'right' ? (
                  'Playing Right Audio'
                ) : (
                  'Test Right Speaker'
                )}
              </button>
              <audio
                ref={rightAudioRef}
                preload="metadata"
                onError={() => handleAudioError('right')}
                onEnded={() => setActiveChannel(null)}
              >
                <source src="/audio/right.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={stopAudio}
              disabled={!activeChannel}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white rounded-lg font-medium transition-colors duration-200 disabled:cursor-not-allowed"
            >
              Stop Audio
            </button>
          </div>

          <div className="mt-8 bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Instructions:</h3>
            <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
              <li>• Put on headphones or ensure proper speaker setup</li>
              <li>• Click &ldquo;Test Left Speaker&rdquo; - you should hear sound only in your left ear/speaker</li>
              <li>• Click &ldquo;Test Right Speaker&rdquo; - you should hear sound only in your right ear/speaker</li>
              <li>• If both channels play in both ears, check your audio settings</li>
            </ul>
          </div>

          <div className="mt-6 text-center">
            <Link href="/" className="text-blue-500 hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}