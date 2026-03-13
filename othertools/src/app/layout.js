import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const productionUrl = "https://other.uft1.com";

export const metadata = {
  metadataBase: new URL(productionUrl),
  title: {
    default: "UFT1 Tools — free online utilities (camera, audio, signature)",
    template: "%s | UFT1 Tools",
  },
  description:
    "Free online tools: camera test, signature pad, delayed audio, stereo channel test. Browser-based utilities — no install.",
  keywords: [
    "online tools",
    "free web tools",
    "camera test",
    "signature pad",
    "audio test",
    "UFT1",
  ],
  authors: [{ name: "Jovylle B. Bermudez", url: "https://jovylle.com" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: productionUrl,
    siteName: "UFT1 Tools",
    title: "UFT1 Tools — free online utilities",
    description:
      "Camera test, signature pad, delayed audio, left/right stereo test. All in your browser.",
    images: [{ url: "/android-chrome-512x512.png", width: 512, height: 512 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "UFT1 Tools — free online utilities",
    description: "Camera, signature, audio tools in the browser.",
    images: ["/android-chrome-512x512.png"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

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
