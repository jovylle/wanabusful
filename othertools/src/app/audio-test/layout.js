export const metadata = {
  title: "Stereo audio test — left/right channel checker online | UFT1 Tools",
  description:
    "Verify left and right speaker channels. Stereo channel test in the browser — no download.",
  alternates: { canonical: "https://other.uft1.com/audio-test" },
  openGraph: {
    title: "Left/right audio channel test",
    description: "Test stereo speakers and headphones in the browser.",
    url: "https://other.uft1.com/audio-test",
    siteName: "UFT1 Tools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audio channel test — UFT1 Tools",
    description: "Stereo left/right speaker test.",
  },
  keywords: ["stereo test", "left right audio", "speaker test", "headphone test"],
};

export default function AudioTestLayout ({ children }) {
  return children;
}
