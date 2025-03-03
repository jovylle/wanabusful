"use client";
import { useEffect, useState } from 'react';

export default function DarkModeToggle () {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(prev => !prev)}
      className="fixed top-1 right-5 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg rounded-full h-12 w-12 flex items-center justify-center"
    >
      {isDark ? (
        // Sun icon (for light mode)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="h-6 w-6"
        >
          <path d="M12 4.354a.75.75 0 01.75.75v1.036a.75.75 0 01-1.5 0V5.104A.75.75 0 0112 4.354zM6.221 6.221a.75.75 0 011.06 0l.732.733a.75.75 0 11-1.06 1.06l-.732-.733a.75.75 0 010-1.06zM4.354 12a.75.75 0 01.75-.75h1.036a.75.75 0 010 1.5H5.104A.75.75 0 014.354 12zm1.867 5.778a.75.75 0 01.533-.22.75.75 0 01.533.22l.732.733a.75.75 0 11-1.06 1.06l-.733-.733a.75.75 0 01-.533-.84v-.012zm5.778 1.867a.75.75 0 01.75.75v1.036a.75.75 0 01-1.5 0v-1.036a.75.75 0 01.75-.75zm5.778-1.867a.75.75 0 010 1.06l-.733.733a.75.75 0 11-1.06-1.06l.733-.733a.75.75 0 011.06 0zM19.646 12a.75.75 0 01.75.75h1.036a.75.75 0 010 1.5h-1.036a.75.75 0 01-.75-.75.75.75 0 01.75-.75zM17.657 6.221a.75.75 0 011.06 0l.733.732a.75.75 0 11-1.06 1.06l-.733-.733a.75.75 0 010-1.06zM12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      ) : (
        // Simplified Moon icon (for dark mode)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="h-6 w-6"
        >
          <path d="M21 12.79A9 9 0 1112.21 3a7 7 0 008.79 9.79z" />
        </svg>
      )}
    </button>
  );
}