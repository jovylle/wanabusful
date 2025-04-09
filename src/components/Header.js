"use client"
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-100 dark:bg-gray-900 dark:text-white py-4">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-900 dark:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:hidden absolute top-16 left-0 w-full bg-gray-100 dark:bg-gray-900 transition-all duration-300 ease-in-out transform ${
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          } z-10`}
        >
          <Link href="/" className="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700">
            Home
          </Link>
          <Link href="/camera" className="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700">
            Camera
          </Link>
          <Link href="/signature" className="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700">
            SignaturePad
          </Link>
          <Link href="/delayed-audio" className="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700">
            Delayed Audio
          </Link>
          <Link href="/speaker-test" className="block py-2 px-4 hover:bg-gray-200 dark:hover:bg-gray-700">
            Left/Right Speaker Test
          </Link>
        </div>
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-6 w-full">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/camera" className="hover:text-gray-300">
            Camera
          </Link>
          <Link href="/signature" className="hover:text-gray-300">
            SignaturePad
          </Link>
          <Link href="/delayed-audio" className="hover:text-gray-300">
            Delayed Audio
          </Link>
          <Link href="/speaker-test" className="hover:text-gray-300">
            Left/Right Speaker Test
          </Link>
        </div>
      </nav>
    </header>
  );
}