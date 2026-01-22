import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="max-h-screen bg-transparent px-6 py-6 flex flex-col items-center rounded-md">
        {/* Hero Section */}
        <section className="w-full max-w-6xl text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Explore Our Tools</h1>
          <p className="text-lg text-gray-400 mb-8">
            A collection of practical utilities designed to enhance your workflow and efficiency.
          </p>
          
          {/* Tool List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Link href="/camera" className="bg-blue-500 text-white p-5 rounded-lg shadow-lg hover:bg-blue-600 transition-all text-center">
              Camera Test
            </Link>
            <Link href="/signature" className="bg-green-500 text-white p-5 rounded-lg shadow-lg hover:bg-green-600 transition-all text-center">
              Signature Pad
            </Link>
            <Link href="/delayed-audio" className="bg-purple-500 text-white p-5 rounded-lg shadow-lg hover:bg-purple-600 transition-all text-center">
              Delayed Audio
            </Link>
            <Link href="/audio-test" className="bg-orange-500 text-white p-5 rounded-lg shadow-lg hover:bg-orange-600 transition-all text-center">
              Audio Test
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
