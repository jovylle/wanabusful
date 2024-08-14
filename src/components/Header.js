// src/components/Header.js
import Link from 'next/link'; // Import Link from Next.js

export default function Header () {
  return (
    <header style={{ backgroundColor: '#333', color: '#fff', padding: '1rem', textAlign: 'center' }}>
      <h1>
        <Link href="/" style={{ color: '#fff', textDecoration: 'none', marginRight: '1rem' }}>
          Home
        </Link>
        <Link href="/camera" style={{ color: '#fff', textDecoration: 'none' }}>
          Camera Test
        </Link>
      </h1>
    </header>
  );
}
