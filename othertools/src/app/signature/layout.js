export const metadata = {
  title: "Free signature pad — draw & export PNG/SVG online | UFT1 Tools",
  description:
    "Draw signatures with mouse or touch, export as image. Canvas-based e-signature pad in the browser. No account required.",
  alternates: { canonical: "https://other.uft1.com/signature" },
  openGraph: {
    title: "Signature pad — draw & export online",
    description: "Draw and export signatures. Touch and mouse support.",
    url: "https://other.uft1.com/signature",
    siteName: "UFT1 Tools",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Signature pad — UFT1 Tools",
    description: "Draw signatures in the browser and export.",
  },
  keywords: ["signature pad", "e-signature", "draw signature online", "export signature PNG"],
};

export default function SignatureLayout ({ children }) {
  return children;
}
