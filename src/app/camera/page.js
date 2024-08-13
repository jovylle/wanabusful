// src/app/camera/page.js

"use client";

import { useEffect, useRef } from 'react';

export default function Camera() {
  const videoRef = useRef(null);

  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    }

    startCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-[1280px] w-full">
        <h1 className="text-center mb-4">Camera View</h1>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="w-full h-auto"
        ></video>
      </div>
    </div>
  );
}
