## Wanabusful mini projects

Wanabusful now exposes a single static landing page at the repository root (`index.html`),
because Netlify can point directly to this file. That page links to:

- a standalone CSV→JSON converter served from `csv-to-json/index.html`
- the richer Next.js tool suite inside the renamed `othertools/` folder (formerly `acoolprojectaah`)

Each project can live in its own folder so heavier apps can evolve independently without dragging down the simple hub.

## Repository layout

- `index.html` – the lightweight hub that lists every mini project (links, descriptions, CTA badges).
- `csv-to-json/` – the Dynamo CSV parser running as a self-contained HTML + JS toolpath.
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
- When updating the runtime tools, redeploy `https://other.uft1.com/` so the hosted routes stay in sync with what’s listed on this landing page (see `https://other.uft1.com/camera` as proof-of-deployment).

Happy coding! 🚀

