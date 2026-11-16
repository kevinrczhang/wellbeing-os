# Wellbeing OS

A guided photo journal and interactive creative project about the difference between being productive and being well. The simplified interface has four chapters, a persistent navigation menu, and a separate supporting project description. No backend, account, analytics, or external runtime requests are needed.

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

## Make the reflection yours

All project writing lives in **`content/journal.ts`**:

- Replace `personalReflection: null` with your real reflection. Prompts disappear automatically when text is supplied.
- Replace the example `wellbeingSignals.well` and `wellbeingSignals.struggling` lists with your own observations.
- Add your changed understanding and a concrete example of a broader context in `changedUnderstanding` and `contextReflection`.
- Replace sample photographs in `public/images/`, update their alternative text and captions, and set each entry's `imageIsPersonal` to `true` when appropriate.
- Personalise `projectDescription`, particularly its final paragraph, once the real experiences have been added. The page displays its word count; keep it between 200 and 300 words.
- Add references actually used to `references`, formatted in APA 7 if needed. Image credit links live in `components/ProjectDescription.tsx`.

The introductory “personal edition in progress” note and the project-description draft label are in `app/page.tsx` and `components/ProjectDescription.tsx`. Remove them only when the project has been personalised. Do not submit sample cues or reflection prompts as personal experiences. See `PROJECT-NOTES.md` for a rubric map and the remaining author work.

## Reading experience

1. **What helps** — four photo-journal entries about connection, purpose, recovery, and environment, with space for meaning and personal evidence.
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

## Model and assets

`lib/metrics.ts` contains an explicitly fictional resource model. Its tests cover initial gains from work, the productivity/wellbeing tradeoff, all 101 workload values, clamping, and status boundaries. Scores are never represented as validated health measurements.

Sample photographs are bundled from Unsplash and labelled as illustrative. DM Sans and IBM Plex Mono are distributed under the SIL Open Font License; copies of the licenses are included in `public/fonts/`.
