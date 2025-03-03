"use client";

import { useRef, useState, useEffect } from 'react';
import Layout from '../../components/Layout';

export default function Signature () {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    // Set the canvas dimensions to match the rendered size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
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
      <h1 className="mt-8 mb-4 text-3xl font-bold text-center">Signature Pad</h1>
      <div
        className="flex justify-center items-center mx-auto max-w-screen-xl my-10"
      >
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseOut={stopDrawing}
          className="border border-black w-full h-[400px] cursor-crosshair bg-white"
        ></canvas>
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <button
          onClick={downloadImage}
          className="rounded bg-blue-500 px-4 py-2 font-semibold text-white transition hover:bg-blue-600"
        >
          Download
        </button>
        <button
          onClick={copyImage}
          className="rounded bg-green-500 px-4 py-2 font-semibold text-white transition hover:bg-green-600"
        >
          Copy
        </button>
        <button
          onClick={clearCanvas}
          className="rounded bg-red-500 px-4 py-2 font-semibold text-white transition hover:bg-red-600"
        >
          Clear
        </button>
      </div>
    </Layout>
  );
}