export const metadata = {
  title: "Delayed audio player — Web Audio delay online | UFT1 Tools",
  description:
    "Play audio with a configurable delay using the Web Audio API. Test latency, sync, and playback in the browser.",
  alternates: { canonical: "https://other.uft1.com/delayed-audio" },
  openGraph: {
    title: "Delayed audio — online tool",
    description: "Play audio with configurable delay in the browser.",
    url: "https://other.uft1.com/delayed-audio",
    siteName: "UFT1 Tools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delayed audio — UFT1 Tools",
    description: "Audio playback with configurable delay.",
  },
  keywords: ["delayed audio", "Web Audio API", "audio delay", "online audio tool"],
};

export default function DelayedAudioLayout ({ children }) {
  return children;
}
