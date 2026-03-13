export const metadata = {
  title: "Free online camera test — webcam preview & photo capture | UFT1 Tools",
  description:
    "Test your webcam in the browser: live preview, capture photos, MediaDevices API. No install. Privacy-friendly — video stays on your device.",
  alternates: { canonical: "https://other.uft1.com/camera" },
  openGraph: {
    title: "Camera test — online webcam tool",
    description: "Preview your camera and capture stills in the browser.",
    url: "https://other.uft1.com/camera",
    siteName: "UFT1 Tools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Camera test — UFT1 Tools",
    description: "Webcam preview and capture in your browser.",
  },
  keywords: ["camera test", "webcam test", "online camera", "getUserMedia", "browser camera"],
};

export default function CameraLayout ({ children }) {
  return children;
}
