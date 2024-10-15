import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UFT1 Tools - Your Hub for Online Utilities and Tools",
  description: "Explore a wide range of online utilities and tools at UFT1 Tools. From signature pads to camera testers, find everything you need to enhance your digital experience.",
};

// Use the production URL for meta tags
const productionUrl = 'https://tools.uft1.com';

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <Head>
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
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}