// src/app/camera/page.js
"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import styles from '../../styles/Camera.module.css';

export default function Camera() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const startCamera = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: 'user'
        } 
      });
      
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error('Camera access error:', err);
      
      if (err.name === 'NotAllowedError') {
        setError('Camera access was denied. Please allow camera permissions and try again.');
      } else if (err.name === 'NotFoundError') {
        setError('No camera found on this device.');
      } else if (err.name === 'NotSupportedError') {
        setError('Camera is not supported in this browser.');
      } else if (err.name === 'NotReadableError') {
        setError('Camera is already in use by another application.');
      } else {
        setError('Failed to access camera. Please check your camera settings and try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
      setCapturedImage(null);
      setError('');
    }
  };

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;
    
    try {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const context = canvas.getContext('2d');
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      context.drawImage(video, 0, 0);
      const imageDataUrl = canvas.toDataURL('image/jpeg');
      setCapturedImage(imageDataUrl);
      setError('');
    } catch (err) {
      console.error('Capture error:', err);
      setError('Failed to capture photo. Please try again.');
    }
  };

  const downloadPhoto = () => {
    if (!capturedImage) return;
    
    try {
      const link = document.createElement('a');
      link.href = capturedImage;
      link.download = `photo-${Date.now()}.jpg`;
      link.click();
      setError('');
    } catch (err) {
      console.error('Download error:', err);
      setError('Failed to download photo. Please try again.');
    }
  };

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  return (
    <Layout>
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">
          Camera Test
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
          Test your camera functionality and capture photos
        </p>

        {error && (
          <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 px-4 py-3 rounded mb-4 max-w-2xl mx-auto">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          </div>
        )}

        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="text-center mb-6">
              {!stream ? (
                <button
                  onClick={startCamera}
                  disabled={isLoading}
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white rounded-lg transition-colors duration-200 font-medium disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Starting Camera...
                    </span>
                  ) : (
                    'Start Camera'
                  )}
                </button>
              ) : (
                <div className="space-x-4">
                  <button
                    onClick={capturePhoto}
                    className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200 font-medium"
                  >
                    Capture Photo
                  </button>
                  <button
                    onClick={stopCamera}
                    className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200 font-medium"
                  >
                    Stop Camera
                  </button>
                </div>
              )}
            </div>

            {stream && (
              <div className="mb-6">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            )}

            {capturedImage && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 dark:text-white">Captured Photo:</h3>
                <div className="relative w-full h-64">
                  <Image
                    src={capturedImage}
                    alt="Captured photo"
                    fill
                    className="rounded-lg shadow-md object-contain"
                  />
                </div>
                <button
                  onClick={downloadPhoto}
                  className="w-full mt-4 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors duration-200 font-medium"
                >
                  Download Photo
                </button>
              </div>
            )}

            <canvas ref={canvasRef} style={{ display: 'none' }} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
