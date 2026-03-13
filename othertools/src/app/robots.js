/** @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots */
export default function robots () {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://other.uft1.com/sitemap.xml",
  };
}
