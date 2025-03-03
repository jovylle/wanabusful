// src/app/delayed-audio/page.js
"use client";

import { useState, useRef, useEffect } from "react";
import Layout from "@/components/Layout";

export default function DelayedAudioPage () {
  const [isPlaying, setIsPlaying] = useState(false);
  const [delay, setDelay] = useState(1); // Default delay: 1 second
  const audioContextRef = useRef(null);
  const delayNodeRef = useRef(null);
  const sourceNodeRef = useRef(null);
  const streamRef = useRef(null);

  // Start real-time delayed audio playback
  const startPlayback = async () => {
    try {
      // Initialize AudioContext if not already done
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }

      // Get microphone stream
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      // Create source node from the microphone stream
      sourceNodeRef.current = audioContextRef.current.createMediaStreamSource(stream);

      // Create delay node
      delayNodeRef.current = audioContextRef.current.createDelay(60); // Max delay of 60 seconds
      delayNodeRef.current.delayTime.value = delay; // Set initial delay

      // Connect nodes: source -> delay -> output
      sourceNodeRef.current.connect(delayNodeRef.current);
      delayNodeRef.current.connect(audioContextRef.current.destination);

      setIsPlaying(true);
    } catch (error) {
      console.error("Error starting playback:", error);
      alert("Failed to access microphone. Please allow permission and try again.");
    }
  };

  // Stop playback and clean up
  const stopPlayback = () => {
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setIsPlaying(false);
  };

  // Update delay in real-time
  useEffect(() => {
    if (delayNodeRef.current) {
      delayNodeRef.current.delayTime.value = delay;
    }
  }, [delay]);

  // Handle delay selection
  const handleDelayChange = (e) => {
    setDelay(parseInt(e.target.value));
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopPlayback(); // Ensure resources are released when component unmounts
    };
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Delayed Live Audio Playback</h1>
        <p className="mb-4 dark:text-gray-300">
          Hear your voice played back in real-time with a selected delay.
        </p>

        {/* Controls */}
        <div className="flex flex-col items-center space-y-4">
          {/* Start/Stop Buttons */}
          <div className="space-x-4">
            <button
              onClick={startPlayback}
              disabled={isPlaying}
              className={`px-4 py-2 rounded text-white ${isPlaying ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
                } transition`}
            >
              Start
            </button>
            <button
              onClick={stopPlayback}
              disabled={!isPlaying}
              className={`px-4 py-2 rounded text-white ${!isPlaying ? "bg-gray-400" : "bg-red-500 hover:bg-red-600"
                } transition`}
            >
              Stop
            </button>
          </div>

          {/* Delay Selection */}
          <div className="flex flex-col items-center">
            <label htmlFor="delay" className="mb-2 dark:text-gray-300">
              Select Delay (seconds):
            </label>
            <select
              id="delay"
              value={delay}
              onChange={handleDelayChange}
              className="p-2 rounded bg-gray-100 dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600"
            >
              {[1, 3, 5, 10, 30, 60].map((sec) => (
                <option key={sec} value={sec}>
                  {sec}
                </option>
              ))}
            </select>
          </div>

          {/* Feedback */}
          {isPlaying && (
            <p className="text-green-500 mt-4 animate-pulse">
              Listening and playing back with {delay}-second delay...
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
}