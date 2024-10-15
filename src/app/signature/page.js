"use client";

import { useRef, useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import styles from '../../styles/Signature.module.css';

export default function Signature () {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    // Set the canvas dimensions to match the CSS dimensions
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    ctx.lineWidth = 2; // Set the line width for drawing
    ctx.lineCap = 'round'; // Set the line cap style
  }, []);

  const startDrawing = (event) => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const draw = (event) => {
    if (!isDrawing) return;
    const ctx = canvasRef.current.getContext('2d');
    ctx.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    const ctx = canvasRef.current.getContext('2d');
    ctx.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'signature.png';
    link.click();
  };

  const copyImage = () => {
    const canvas = canvasRef.current;
    canvas.toBlob((blob) => {
      const item = new ClipboardItem({ 'image/png': blob });
      navigator.clipboard.write([item]);
    });
  };

  return (
    <Layout>
      <h1>Signature Pad</h1>
      <div className={styles.container}>
        <canvas
          ref={canvasRef}
          className={styles.canvas}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseOut={stopDrawing}
        ></canvas>
      </div>
      <button className={styles.button} onClick={downloadImage}>Download</button>
      <button className={styles.button} onClick={copyImage}>Copy</button>
      <button className={styles.button} onClick={clearCanvas}>Clear</button>
    </Layout>
  );
}