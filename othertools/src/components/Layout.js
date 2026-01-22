//// filepath: /c:/Users/me/fore/lab/wanabusful/src/components/Layout.js
import Header from './Header';
import Footer from './Footer';
import DarkModeToggle from './DarkModeToggle';

export default function Layout ({ children }) {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-800 dark:text-white">
      <Header />
      <div className="container mx-auto p-4 flex justify-end">
        <DarkModeToggle />
      </div>
      <main className="flex-1 p-8 text-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}