// src/components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-100 dark:bg-gray-900 dark:text-white py-4">
      <nav className="container mx-auto flex justify-center space-x-6">
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
        <Link href="/delayed-audio" className="hover:text-gray-300">
          Left/Right Speaker Test
        </Link>
      </nav>
    </header>
  );
}