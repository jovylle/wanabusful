"use client";

import { useRef, useEffect, useState } from 'react';
import Layout from '../../components/Layout';

export default function Signature() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set up canvas
    canvas.width = canvas.offsetWidth;
    canvas.height = 300;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000';

    // Mouse events
    const startDrawing = (e) => {
      setIsDrawing(true);
      const rect = canvas.getBoundingClientRect();
      ctx.beginPath();
      ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    };

    const draw = (e) => {
      if (!isDrawing) return;
      const rect = canvas.getBoundingClientRect();
      ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
      ctx.stroke();
    };

    const stopDrawing = () => {
      if (!isDrawing) return;
      setIsDrawing(false);
      ctx.beginPath();
    };

    // Touch events for mobile
    const startDrawingTouch = (e) => {
      e.preventDefault();
      setIsDrawing(true);
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      ctx.beginPath();
      ctx.moveTo(touch.clientX - rect.left, touch.clientY - rect.top);
    };

    const drawTouch = (e) => {
      e.preventDefault();
      if (!isDrawing) return;
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      ctx.lineTo(touch.clientX - rect.left, touch.clientY - rect.top);
      ctx.stroke();
    };

    const stopDrawingTouch = (e) => {
      e.preventDefault();
      if (!isDrawing) return;
      setIsDrawing(false);
      ctx.beginPath();
    };

    // Add event listeners
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    // Touch events
    canvas.addEventListener('touchstart', startDrawingTouch, { passive: false });
    canvas.addEventListener('touchmove', drawTouch, { passive: false });
    canvas.addEventListener('touchend', stopDrawingTouch, { passive: false });

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseout', stopDrawing);
      canvas.removeEventListener('touchstart', startDrawingTouch);
      canvas.removeEventListener('touchmove', drawTouch);
      canvas.removeEventListener('touchend', stopDrawingTouch);
    };
  }, [isDrawing]);

  const clearSignature = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setError('');
  };

  const copyToClipboard = async () => {
    try {
      const canvas = canvasRef.current;
      canvas.toBlob(async (blob) => {
        try {
          await navigator.clipboard.write([
            new ClipboardItem({ 'image/png': blob })
          ]);
          alert('Signature copied to clipboard!');
          setError('');
        } catch (err) {
          setError('Failed to copy to clipboard. Your browser may not support this feature.');
          console.error('Clipboard error:', err);
        }
      });
    } catch (err) {
      setError('Failed to copy signature. Please try again.');
      console.error('Signature copy error:', err);
    }
  };

  const downloadSignature = () => {
    try {
      const canvas = canvasRef.current;
      const link = document.createElement('a');
      link.download = 'signature.png';
      link.href = canvas.toDataURL();
      link.click();
      setError('');
    } catch (err) {
      setError('Failed to download signature. Please try again.');
      console.error('Download error:', err);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">
          Signature Pad
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
          Draw your signature using mouse or touch. Works on mobile devices!
        </p>
        
        {error && (
          <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="max-w-2xl mx-auto">
          <canvas
            ref={canvasRef}
            className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 touch-none"
            style={{ height: '300px' }}
          />
          
          <div className="flex flex-wrap gap-4 mt-6 justify-center">
            <button
              onClick={clearSignature}
              className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200 font-medium"
            >
              Clear
            </button>
            <button
              onClick={copyToClipboard}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 font-medium"
            >
              Copy to Clipboard
            </button>
            <button
              onClick={downloadSignature}
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200 font-medium"
            >
              Download PNG
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}