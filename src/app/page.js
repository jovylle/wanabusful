// src/app/page.js
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home () {
  return (
    <Layout>
      <div className="container mx-auto h-full px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-8">
            Random Utility/Mini Tools List Site
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <Link
              href="/camera"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Camera Test
            </Link>
            <Link
              href="/signature"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Signature Pad
            </Link>
            <Link
              href="/delayed-audio"
              className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
            >
              Delayed Audio
            </Link>
            <Link
              href="/audio-test"
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
            >
              Audio Left/Right Speaker Test
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}