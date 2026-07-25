# lukan.guide

Site for **Oleksandra Lukan** — historian and licensed guide in Rome, the Vatican and Vienna.
Next.js 15 (App Router), TypeScript, no CSS framework. Three languages: `ua`, `ru`, `en`.

```bash
npm install
npm run dev      # http://localhost:3000 → redirects to /ua
npm run build
```

## Structure

```
app/[locale]/page.tsx              home — the seven rooms
app/[locale]/[section]/page.tsx    every inner section, one dynamic route
app/globals.css                    the whole design system
lib/ua.ts · ru.ts · en.ts          all copy, one file per language
lib/tours.ts                       the 22-tour catalogue (order, groups, images)
lib/images.ts                      every image URL, in one place
middleware.ts                      language detection for `/`
components/                        Masthead, Catalogue, Ticket, Panels, Plaque, Colophon
```

## Editing content

All text lives in `lib/ua.ts`, `lib/ru.ts`, `lib/en.ts`. They share one type
(`lib/dict.ts`), so if a field is missing in one language TypeScript says so at build
time. Adding a tour means one line in `lib/tours.ts` plus an entry with the same `id` in
each of the three language files.

Section slugs (`about`, `tours`, `around`, …) are identical in all languages on purpose:
switching language keeps the reader on the same page.

## The design

Rome's own blue pigment as the field, bone plates mounted on it, cinnabar only where a
museum uses red — mandatory booking, warnings, the primary action. Sections are numbered
rooms; the language switch is a trilingual museum label; the booking form is a ticket stub
that composes the WhatsApp or email message Oleksandra asked for (date, tour, time, reply
address). The full direction contract is an HTML comment at the top of the home page
markup.

Fonts are loaded from Google Fonts by stylesheet link: **Spectral** (voice),
**Golos Text** (labels), **PT Mono** (numbers) — all three with first-class Cyrillic.

## To replace before this is finished

Everything below is a deliberate placeholder, not an oversight.

| What | Where | Notes |
| --- | --- | --- |
| **Photograph of Oleksandra** | `lib/images.ts` → `IMG.guide` | Currently a marble face, captioned as a placeholder in Room II. This is the single highest-value replacement on the site. |
| **All other photography** | `lib/images.ts` | Verified Unsplash stock, chosen to fit the palette. Drop files into `/public` and change the values; nothing else needs to change. |
| **Prices** | — | Deliberately absent: the site says "price on request" everywhere. The old list (150 € / 3 h etc.) is stale and must not be republished as-is. |
| **Reviews / testimonials** | — | None invented. When real ones exist, they belong as a new room between III and IV. |
| **Sections marked "in preparation"** | `lib/*.ts` → `sections.kids`, `sections.phrasebook`, `sections.figures`, `tours.legends` | Flagged in the UI as unfinished, exactly as Oleksandra describes them. Remove `draft: true` when they are ready. |
| **Vienna** | — | Named in the masthead and metadata, but there is no Vienna tour in the catalogue yet. |
| **Addresses and opening hours** | `lib/*.ts` reference sections | Checked against official sites at build time, but they change. |

## Deployment

Pushing to `main` deploys to Vercel (project `9x16/lukan-guide`). No environment variables
are needed. `next.config.mjs` allows remote images from `images.unsplash.com` and
`upload.wikimedia.org`; add any new image host there.
