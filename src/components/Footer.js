"use client";
import { useEffect, useState } from "react";

export default function Footer () {
  const [hostname, setHostname] = useState("");

  useEffect(() => {
    setHostname(window.location.hostname);
  }, []);

  const isBeta = hostname.includes("beta");
  const isLive = hostname === "uft1.com";

  return (
    <footer className="dark:bg-gray-900 bg-gray-100 dark:text-white text-black py-4 text-center">
      <div className="container mx-auto">
        {/* About Section */}
        <section className="grid md:grid-cols-2 gap-8 mt-12">
          <div>
            <h2 className="text-2xl font-semibold">About This Site</h2>
            <p className="mt-4 dark:text-gray-300 text-black">
              This site is a curated collection of handy online tools, built to
              showcase modern web development techniques with Next.js and Tailwind CSS.
            </p>
            <br />
            <p>
              <a
                href="https://github.com/jovylle/wanabusful"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub repo link
              </a>
            </p>
            {/* Example: Render extra links only when not on Beta or Live */}
            {isBeta && !isLive && (
              <>
                <p>
                  <a
                    href="http://beta.uft1.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Beta Version
                  </a>
                </p>
              </>
            )}
            {!isBeta && isLive && (
              <>
                <p>
                  <a
                    href="http://uft1.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Version
                  </a>
                </p>
              </>
            )}
          </div>
          <div>
            <h2 className="text-2xl font-semibold">About Us</h2>
            <p className="mt-4 dark:text-gray-300 text-black">
              We are a passionate team of web developers hunting for career opportunities and building dynamic, responsive websites using modern technologies.
            </p>
            <br />
            <p>Contributors:</p>
            <p>
              &nbsp;<a href="https://jovylle.com">Jovylle</a>
            </p>
          </div>
        </section>
      </div>
      <div className="container mx-auto mt-8">
        <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  );
}