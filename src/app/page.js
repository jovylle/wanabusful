// src/app/page.js
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>Random Utility/Mini Tools List Site</h1>
      {/* <p style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <a href="/camera">Camera test</a>
        <a href="/signature">Signature Pad</a>
        <a href="https://github.com/jovylle/wanabusful">Github public repo link</a>
        <a href="/">Othe tools to be added</a>
      </p> */}
    </Layout>
  );
}
