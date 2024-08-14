// src/components/Layout.js
import Header from './Header';
import Footer from './Footer';

export default function Layout ({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, padding: '2rem', textAlign: 'center' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
