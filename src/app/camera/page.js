// src/app/camera/page.js
"use client";

import { useEffect, useRef } from 'react';
import Layout from '../../components/Layout';
import styles from '../../styles/Camera.module.css'; // Import the CSS module

export default function Camera () {
  const videoRef = useRef(null);

  useEffect(() => {
    async function startCamera () {
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
    <Layout>
      <h1>Camera View</h1>
      <div className={styles.videoContainer}>
        <video ref={videoRef} autoPlay playsInline className={styles.video}></video>
      </div>
    </Layout>
  );
}
