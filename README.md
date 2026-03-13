## Wanabusful mini projects

Wanabusful now exposes a single static landing page at the repository root (`index.html`),
because Netlify can point directly to this file. That page links to:

- standalone static HTML tools, each in its own folder:
  - `csv-to-json/` – Dynamo CSV → JSON converter
  - `base64/` – Base64 encode/decode
  - `json-formatter/` – JSON pretty-print / minify
  - `lorem/` – Lorem Ipsum generator
  - `url-encode/` – URL encode/decode (percent-encoding)
  - `uuid/` – UUID v4 generator
  - `markdown-preview/` – Live Markdown preview (marked.js)
  - `timestamp/` – Unix timestamp ↔ human date converter
  - `color-converter/` – Hex ↔ RGB color converter with preview
  - `slug-generator/` – Title to URL slug (lowercase, hyphens)
  - `clock/` – Tiny embed clock + full analog/digital (URL options)
- the richer Next.js tool suite inside `othertools/` (camera, signature, audio, etc.)

Each project can live in its own folder so heavier apps can evolve independently without dragging down the simple hub.

## Live sites

- `https://uft1.com/` – the primary showcase for Wanabusful and related mini projects.
- `https://other.uft1.com/` – the hosted Next.js runtime that mirrors every route in `othertools/` (camera, signature, delayed audio, audio test, etc.), so visit it whenever you just want to see the full React experience without running the repo locally.
- `https://jovylle.com/` – Jovylle’s portfolio of projects and experiments you can explore for inspiration.

## Repository layout

- `index.html` – the lightweight hub that lists every mini project (links, descriptions, CTA badges).
- `csv-to-json/`, `base64/`, `json-formatter/`, `lorem/`, `url-encode/`, `uuid/`, `markdown-preview/`, `timestamp/`, `color-converter/`, `slug-generator/`, `clock/` – self-contained HTML + JS tools (no build step).
- `othertools/` – the Next.js workspace that hosts the camera test, signature pad, delayed audio, and audio channel tests. Treat this folder as a standalone Next.js app.
- `https://other.uft1.com/` – the deployed runtime experience. Every Next.js route (camera, signature, delayed audio, audio test) mirrors what is hosted at that URL, so point your Netlify/hosting config there when you need a full runtime.

## Developing the Next.js tools

1. `cd othertools`
2. `npm install` (or `pnpm install` / `yarn install` if you prefer).
3. `npm run dev` (starts the Next.js dev server on `http://localhost:3000` by default).
4. Edit pages under `othertools/src/app/` and run the usual testing/linting workflows from inside that folder.

When you’re ready to deploy the Next.js suite, use the same workflow you would for any Next.js project located at `othertools/`.

## Contributing

1. Fork the repository, clone your fork, and `cd wanabusful`.
2. `git checkout -b your-feature-branch`.
3. Work inside either the root (for static HTML edits) or the `othertools/` app (for React/Next.js changes).
4. Run linters/tests relevant to the folder you touched.
5. `git add ...`, `git commit -m "Describe your change"`, and `git push origin your-feature-branch`.
6. Open a pull request against the main repo and describe which folders/tools your changes affect.

## Additional notes

- Keep root-level assets (static HTML, root CSS, etc.) small so the landing page loads quickly.
- Use `othertools/` for more complex interactions—it already contains its own `package.json`, `.eslintrc.json`, and Tailwind setup.
- If you add another static tool, place it in a new folder at the root level and link it from `index.html`.
- Contributors: Jovylle, ByteSurfer23, Maynard Rosales.
- When updating the runtime tools, redeploy `https://other.uft1.com/` so the hosted routes stay in sync with what’s listed on this landing page (see `https://other.uft1.com/camera` as proof-of-deployment).

## SEO (search discoverability)

- **Static hub (`index.html` + tool folders)**  
  - Unique `<title>` and `description` per page, **canonical** URLs (`https://uft1.com/...`), **Open Graph** + Twitter cards, **JSON-LD** (`WebSite` + `ItemList` on home; `WebApplication` on each tool).  
  - **`robots.txt`** and **`sitemap.xml`** at the repo root — submit the sitemap in [Google Search Console](https://search.google.com/search-console) (property: `https://uft1.com`).  
  - If the site is ever served from another domain, update canonicals, `sitemap.xml`, and `robots.txt` to match.

- **Next.js app (`othertools/`)**  
  - App Router **`sitemap.js`** and **`robots.js`** (base URL `https://other.uft1.com`).  
  - Per-route **`layout.js`** metadata (camera, signature, delayed-audio, audio-test) with titles/descriptions aimed at real searches (e.g. “camera test”, “signature pad online”).  
  - Root **`layout.js`** uses `metadataBase` + default OG/Twitter. Submit `https://other.uft1.com/sitemap.xml` in Search Console for that host.

Ranking still depends on relevance, backlinks, and time — technical SEO makes pages *eligible* and *understandable* for search engines.

Happy coding! 🚀

