# Wellbeing OS

A personal written journal and interactive creative project about the difference between being productive and being well. The simplified interface has four chapters, a persistent navigation menu, and a separate supporting project description. No backend, account, analytics, or external runtime requests are needed.

**Live site:** https://kevinrczhang.github.io/wellbeing-os/

**Source:** https://github.com/kevinrczhang/wellbeing-os

## Run locally

Requires Node.js 20.9 or newer and npm. The deployment workflow uses Node.js 24.

```sh
cd wellbeing-os
npm install
npm run dev
```

Open http://localhost:3000. If already inside this project directory, omit `cd wellbeing-os`.

```sh
npm test
npm run build
npm run typecheck
```

The production build creates a complete static website in `out/`. `npm run build` uses Webpack to avoid Turbopack's process/port requirements in restricted environments.

## Project content

The author's supplied reflections and 221-word project description live in **`content/journal.ts`**. The four journal entries, wellbeing signals, changed understanding, broader circumstances, and description are complete. Reflections are required strings and render as readable paragraphs.

The presentation uses text, typography, and the interactive resource model. All visual media assets have been removed. The supporting description displays its word count. Its reference section appears only when reference entries are present.

See `PROJECT-NOTES.md` for the assignment and rubric map.

## Reading experience

1. **What helps** — four personal reflections about connection, purpose, recovery, and environment.
2. **My signals** — signs of doing well or needing to pause, plus reflection on how understanding changes.
3. **Beyond me** — reciprocal care, community, the earth, institutional expectations, resources, and cultural influences.
4. **Find balance** — an interactive workload experiment, with an accessible range control and three example settings.

The project description is always accessible from the header and is also linked after the closing summary. All chapters remain visible on the page. Keyboard focus, a skip link, native anchor navigation, readable mobile layouts, and reduced-motion preferences are supported.

## GitHub Pages

Push updates to `main` to run `.github/workflows/deploy-pages.yml`. The workflow installs dependencies, tests the resource model, builds a static export, and deploys it through GitHub's Pages actions. Repository **Settings → Pages → Source** is set to **GitHub Actions**.

The workflow reads the Pages base path automatically. `NEXT_PUBLIC_BASE_PATH` prefixes routes and public assets; fonts are bundled by the CSS pipeline. Local development works at `/` without this variable.

```sh
NEXT_PUBLIC_BASE_PATH=/wellbeing-os npm run build
```

This creates a build for the repository URL. To preview it, serve the parent of an `out/` directory mounted as `wellbeing-os/`. For a root-path production preview, run `npm run build` without the variable, followed by `python3 -m http.server 3000 --directory out`.

## Alternative hosting

For Vercel, import this directory as a Next.js project with `npm run build`. No environment variables are needed for a root-domain deployment. Any static host can serve the `out/` directory. `.openai/hosting.json` preserves the original Sites identity; GitHub Pages and Vercel do not use it.

## Model and typography

`lib/metrics.ts` contains an explicitly fictional resource model. Its tests cover initial gains from work, the productivity/wellbeing tradeoff, all 101 workload values, clamping, and status boundaries. Scores are never represented as validated health measurements.

DM Sans and IBM Plex Mono are distributed under the SIL Open Font License; copies of the licenses are included in `public/fonts/`.
