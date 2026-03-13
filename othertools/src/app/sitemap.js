/** @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap */
const base = "https://other.uft1.com";

export default function sitemap () {
  const routes = ["", "/camera", "/signature", "/delayed-audio", "/audio-test"];
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${base}${path === "" ? "/" : path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.85,
  }));
}
