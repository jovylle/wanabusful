"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";

export default function AudioTest () {
  const [activeChannel, setActiveChannel] = useState(null);
  const audioRefLeft = useRef(null);
  const audioRefRight = useRef(null);

  const playLeftChannel = () => {
    if (audioRefLeft.current) {
      audioRefLeft.current.play();
      setActiveChannel("left");
    }
  };

  const playRightChannel = () => {
    if (audioRefRight.current) {
      audioRefRight.current.play();
      setActiveChannel("right");
    }
  };

  const stopAudio = () => {
    if (audioRefLeft.current) {
      audioRefLeft.current.pause();
      audioRefLeft.current.currentTime = 0;
    }
    if (audioRefRight.current) {
      audioRefRight.current.pause();
      audioRefRight.current.currentTime = 0;
    }
    setActiveChannel(null);
  };

  return (
    <Layout>
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6">Audio Speaker Test</h1>
        <p>Test your left and right speakers to ensure they&rsquo;re working correctly.</p>

        {/* Hidden audio elements */}
        <audio
          ref={audioRefLeft}
          src="/audio/left.mp3"
          onEnded={() => setActiveChannel(null)}
        />
        <audio
          ref={audioRefRight}
          src="/audio/right.mp3"
          onEnded={() => setActiveChannel(null)}
        />

        <div className="flex flex-col md:flex-row gap-6 mb-8 justify-center">
          <button
            onClick={playLeftChannel}
            disabled={activeChannel === "left"}
            className={`py-4 px-8 rounded-lg text-lg font-medium ${activeChannel === "left"
                ? "bg-green-600 text-white"
                : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
          >
            {activeChannel === "left" ? "Playing Left Speaker" : "Test Left Speaker"}
          </button>

          <button
            onClick={playRightChannel}
            disabled={activeChannel === "right"}
            className={`py-4 px-8 rounded-lg text-lg font-medium ${activeChannel === "right"
                ? "bg-green-600 text-white"
                : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
          >
            {activeChannel === "right" ? "Playing Right Speaker" : "Test Right Speaker"}
          </button>

          <button
            onClick={stopAudio}
            disabled={!activeChannel}
            className="py-4 px-8 rounded-lg text-lg font-medium bg-red-500 hover:bg-red-600 text-white disabled:bg-gray-400"
          >
            Stop Audio
          </button>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-blue-500 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}