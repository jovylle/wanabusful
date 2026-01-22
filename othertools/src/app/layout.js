import { Inter } from "next/font/google";
import Script from "next/script"; // ✅ import this for chatbot
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "UFT1 Tools - Your Hub for Online Utilities and Tools",
  description: "Explore a wide range of online utilities and tools at UFT1 Tools. From signature pads to camera testers, find everything you need to enhance your digital experience.",
};

const productionUrl = "https://tools.uft1.com";

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={`${productionUrl}/android-chrome-512x512.png`} />
        <meta property="og:url" content={productionUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={`${productionUrl}/android-chrome-512x512.png`} />
      </head>
      <body className={inter.className}>
        {children}

        {/* ✅ Inject chatbot config + script here */}
        <Script
          id="chat-config"
          type="application/json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                siteID: "uft1-tools",
                theme: "light",
                position: "bottom-right",
                instructions:
                  "You're the assistant for UFT1 Tools, a collection of online utilities including camera testers, left/right audio checkers, signature pads, and delayed audio playback tools. Help users understand how to use the tools and answer basic questions. New tools are planned and coming soon. The site was built by Jovylle B., the main author — learn more at jovylle.com.",
            }),
          }}
        />

        <Script
          src="https://chat-widget.jovylle.com/embed.js"
          strategy="afterInteractive"
          async
        />
      </body>
    </html>
  );
}
