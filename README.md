# Wikasatrian — Immersive Digital Experience

An interactive demo website for Wikasatrian: a premium leadership, learning, and transformation
destination. Built as a single-page immersive journey with React, Vite, TypeScript, Tailwind CSS,
and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL in your browser.

To build for production:

```bash
npm run build
```

The production build is generated in `dist/`.

## Adding images

Place all photos in `public/images/wikasatrian/` using these exact filenames:

```
hero-forest.jpg          giri-budaya.jpg
hero-exterior.jpg        area-outdoor.jpg
building.jpg             ruang-kebugaran.jpg
lobby.jpg                packages-bg.jpg
philosophy-bg.jpg        contact-bg.jpg
tour-360.jpg              logo-wikasatrian.png
giri-wijaya-1.jpg
giri-wijaya-2.jpg
giri-sasana-1.jpg
giri-sasana-2.jpg
giri-unggul.jpg
```

If a file is missing, the site shows a dark fallback background instead of breaking — no crashes,
layout stays intact.

## Where content lives

- **Room data** (titles, descriptions, capacity, highlights): `src/data/rooms.ts`
- **Program data** (Leadership Development, Corporate Academy, etc.): `src/data/programs.ts`
- **Philosophy values**: `src/data/philosophy.ts`

All visible text is real HTML/React text — no text is embedded in images, and no PDF pages or
screenshots are used anywhere on the site.

## How the Room Explorer works

`src/components/RoomExplorer.tsx` renders a large image + detail panel for the currently selected
room (`src/data/rooms.ts`). Clicking a room in `RoomSelector` swaps the image (crossfade) and the
text in `RoomDetailPanel`. Clicking "Rasakan Pengalaman Ruang" opens `RoomExperienceModal` with
room-specific experience copy, highlights, and best-use cases. On mobile, the room selector
becomes a horizontally scrollable pill list and the modal becomes a bottom sheet.

## How the Consultation Journey works

`src/components/ConsultationJourney.tsx` is a 6-step guided flow (welcome → organization info →
challenge → program interest → timeline → contact details). State lives in local React state only
— there is no backend in this version. On submit, the data is logged to the console (see the
"Future integration point" comment in the submit handler) and a success state is shown
(`SuccessState.tsx`). No environment variables are required.

## Deploying to Netlify

1. Push this repo to GitHub.
2. In Netlify, create a new site from the GitHub repo.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. No environment variables are required for this version.

`netlify.toml` is already configured with the build command, publish directory, and an SPA
redirect rule.
