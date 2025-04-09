"use client";
import { useEffect, useState } from "react";

export default function Footer() {
  const [hostname, setHostname] = useState("");

  useEffect(() => {
    setHostname(window.location.hostname);
  }, []);

  const isBeta = hostname.includes("beta");
  const isLive = hostname === "uft1.com";

  return (
    <footer className="dark:bg-gray-900 bg-gray-100 dark:text-white text-black py-8 text-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {/* About This Site */}
          <div>
            <h2 className="text-2xl font-semibold">About This Site</h2>
            <p className="mt-4 dark:text-gray-300 text-gray-800">
              This site is a curated collection of handy online tools, built to
              showcase modern web development techniques with Next.js and Tailwind CSS.
            </p>
            <p className="mt-4 underline">
              <a
                href="https://github.com/jovylle/wanabusful?tab=readme-ov-file#getting-started-in-contributing-to-this-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                Want to contribute?
              </a>
            </p>
            {/* Links for Beta and Live Versions */}
            {!isBeta && isLive && (
              <p className="mt-4 underline">
                <a href="http://beta.uft1.com/" target="_blank" rel="noopener noreferrer">
                  Beta Version
                </a>
              </p>
            )}
            {isBeta && !isLive && (
              <p className="mt-4 underline">
                <a href="http://uft1.com/" target="_blank" rel="noopener noreferrer">
                  Live Version
                </a>
              </p>
            )}
          </div>
          
          {/* About Us */}
          <div>
            <h2 className="text-2xl font-semibold">About Us</h2>
            <p className="mt-4 dark:text-gray-300 text-gray-800">
              We are a passionate team of web developers hunting for career opportunities and building dynamic, responsive websites using modern technologies.
            </p>
            <p className="mt-4 font-semibold">Contributors:</p>
            <p>
              <a href="https://jovylle.com" className="underline">Jovylle</a>
            </p>
            <p>
              <a href="https://github.com/ByteSurfer23" className="underline">ByteSurfer23</a>
            </p>
          </div>
          
          {/* Contact or Extra Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="mt-4 dark:text-gray-300 text-gray-800">
            Have questions or feedback? Reach out to us.
We value your input and strive to improve our services based on your suggestions.

            </p>
            <p className="mt-4 underline">
              <a href="mailto:support@uft1.com">support@uft1.com</a>
            </p>
          </div>
        </section>
      </div>
      <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} UFT1. All rights reserved.</p>
      </div>
    </footer>
  );
}