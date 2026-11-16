# Wellbeing OS

An interactive editorial website about the difference between being productive and being well. Built with Next.js, TypeScript, Tailwind CSS, and Motion. No backend, account, analytics, or external runtime requests are required.

## Local development

Requires Node.js 20.9 or newer and npm.

```sh
cd wellbeing-os
npm install
npm run dev
```

Open http://localhost:3000. From this project directory, omit `cd wellbeing-os`.

```sh
npm run typecheck
npm test
npm run build
```

`npm run build` creates the complete static website in `out/`. Webpack is selected explicitly so builds do not depend on Turbopack's process/port requirements in restricted environments. To preview a production build, run `python3 -m http.server 3000 --directory out` and open http://localhost:3000.

## Make it yours

Edit **`content/journal.ts`** for the four journals, reflection prompts, timeline, project description, and APA 7 references. The project description is an editable draft of 200–300 words, with its current word count displayed. Replace its final paragraph when you add your personal reflections.

Replace the four sample photographs in **`public/images/`**, then update `image`, `alt`, and `caption` in the content file. The existing images are explicitly marked illustrative; no personal life events are invented. Remove the placeholder labels only when real content has been supplied. Image credit links live in `components/ProjectDescription.tsx`.

The workload model lives in **`lib/metrics.ts`**. All scores are illustrative, never validated health measurements. Theme variables and responsive layouts live in **`app/globals.css`**. Type is bundled locally with licenses in `public/fonts/`.

## Interactions

- Open applications with the desktop icons, Explore menu, or bottom taskbar.
- Drag a desktop window by its title bar; click a window to bring it forward.
- Focus a title bar and use arrow keys to move it; Shift moves in larger steps.
- Close and minimize with the two square controls. Restore minimized applications from the taskbar. Escape closes the foreground window.
- Maximize with the right square control or double-click the title bar. Arrange resets window positions and restores minimized windows.
- Adjust workload with the mouse, touch, or native range-input arrow keys. Reset returns to 45%.
- Recovery has a separate illustrative recharge experiment.
- Mobile uses application switching and one visible window at a time, with scrollable journal content.
- The concluding System Summary connects the four themes; About opens the editable project description, also available at `/project-description/`.
- Reduced-motion preferences disable interface transitions. Exploration and workload state last for the current page session.

## GitHub Pages

The live site is deployed at **https://kevinrczhang.github.io/wellbeing-os/** from **https://github.com/kevinrczhang/wellbeing-os**.

Push updates to `main` to run `.github/workflows/deploy-pages.yml`. The workflow installs dependencies, tests the resource model, builds a static export, and deploys it through GitHub's Pages actions. Repository **Settings → Pages → Source** must be **GitHub Actions**.

The workflow reads the Pages base path automatically. `next.config.ts` uses `NEXT_PUBLIC_BASE_PATH` to prefix routes, JavaScript, styles, images, and the favicon for repository hosting. Fonts are bundled by the CSS pipeline so their URLs also use the correct prefix. Local development continues to work at `/` without setting an environment variable.

To verify a repository-path build locally:

```sh
NEXT_PUBLIC_BASE_PATH=/wellbeing-os npm run build
```

## Alternative: deploy to Vercel

1. Push this directory to your own Git repository.
2. Import it into Vercel and select **Next.js**. If importing the parent folder, set Root Directory to `wellbeing-os`.
3. Use `npm run build` as the build command. No environment variables are needed. The Next.js static export uses `out/`.
4. Deploy. Both `/` and `/project-description/` are statically generated.

You may also serve `out/` with any static host. `.openai/hosting.json` holds the separate Sites identity and static output path; Vercel does not use this file.

## Validation

The model tests cover the intended productivity/wellbeing tradeoff, initial gains from meaningful work, all 101 workload values, boundary clamping, and system message thresholds. TypeScript and the production build validate both routes and the React application. Visual browser QA should cover desktop dragging/layering, mobile navigation, keyboard focus, and reduced motion when browser access is available.

## Asset credits

The illustrative photographs are downloaded from Unsplash and listed in the application's image credits. They are bundled locally and must be replaced to make the submission personal. DM Sans and IBM Plex Mono are open-source fonts under the SIL Open Font License. No images are represented as original personal photography.
