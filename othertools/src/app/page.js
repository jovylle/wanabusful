import Link from "next/link";
import Layout from "../components/Layout";

const tools = [
  { title: "Camera Test", href: "/camera", desc: "Test your camera and capture photos.", tag: "MediaDevices" },
  { title: "Signature Pad", href: "/signature", desc: "Draw and export signatures with mouse or touch.", tag: "Canvas" },
  { title: "Delayed Audio", href: "/delayed-audio", desc: "Play audio with configurable delay.", tag: "Web Audio" },
  { title: "Audio Channel Test", href: "/audio-test", desc: "Verify left/right stereo channels.", tag: "Web Audio" },
];

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen bg-transparent px-6 py-8 flex flex-col items-center rounded-md">
        <section className="w-full max-w-4xl">
          <p className="uppercase tracking-widest text-sm text-gray-500 dark:text-gray-400 mb-2">Tool suite</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">Explore Our Tools</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-2xl">
            A collection of practical utilities designed to enhance your workflow and efficiency.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {tools.map(({ title, href, desc, tag }) => (
              <article
                key={href}
                className="rounded-2xl p-6 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800/90 shadow-lg dark:shadow-xl flex flex-col gap-4"
              >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1">{desc}</p>
                <span className="text-xs tracking-wider text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-500 rounded-full px-3 py-1 w-fit">
                  {tag}
                </span>
                <Link
                  href={href}
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-medium text-white bg-gradient-to-r from-cyan-400 to-indigo-500 hover:opacity-95 transition-opacity"
                >
                  Open {title} →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
