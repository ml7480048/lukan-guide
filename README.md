# lukan.guide

Site for **Oleksandra Lukan** — historian and private guide in Rome, the Vatican and Vienna.
Next.js 15 (App Router), TypeScript, no CSS framework. Three languages: `ua`, `ru`, `en`.

```bash
npm install
npm run dev      # http://localhost:3000 → redirects to /ua
npm run build
```

## Two designs, two branches

- **`main`** — the current, third iteration: light, blue, simple. This is what deploys to
  production (`lukan-guide.vercel.app`).
- **`museum`** — the previous "museum label" design (dark blue, bone plates), preserved in
  full. Vercel serves it at its own branch preview URL. Nothing was thrown away.

## Structure (main)

```
app/[locale]/page.tsx              home — Познайомимося + video + destinations + reviews
app/[locale]/[section]/page.tsx    book · vatican · rome · vienna · reviews · glossary
app/globals.css                    the whole design system
lib/site.ts                        ALL content + all copy, one file, three languages
components/                        Header, Footer, VideoHero, Booking, Socials, Reveal, JsonLd, icons
```

Everything a non-developer needs to edit lives in **`lib/site.ts`**. It holds the three
language dictionaries (`ua`, `ru`, `en`) sharing one TypeScript type, so a missing
translation becomes a build error rather than a broken page.

## The design

Light and airy, blue-forward — the blue Oleksandra likes, on a soft blue-white ground
(the "too dark" note from the previous version is addressed). One type family (**Onest**),
large sizes, no bold and no italics: emphasis comes from size and colour. Lots of lists.
Booking is a simple form that opens **WhatsApp** (or Viber / email) with a ready-made
message — nothing to set up, Oleksandra just receives a normal message.

Built for GEO/SEO: semantic headings, FAQ blocks, a glossary of terms, and JSON-LD
(`Person` + `FAQPage`) on every relevant page.

## To add — everything below is a deliberate placeholder

| What | Where | How |
| --- | --- | --- |
| **Oleksandra’s video** | `lib/site.ts` → `VIDEO.youtubeId` | Set it to the YouTube id (the part after `watch?v=`). The hero poster then plays the real video. Until then a labelled poster shows. |
| **Social links** | `lib/site.ts` → `SOCIALS` | Replace each `href: null` with the real profile URL (Instagram, Facebook, YouTube, Telegram). `null` renders a greyed “soon” icon. |
| **Reviews + tourist photos** | `lib/site.ts` → each language’s `reviewsBlock.items` | Sample reviews are in place. Swap in Oleksandra’s real reviews; to show a photo with a tourist, replace the camera placeholder in `app/[locale]/[section]/page.tsx` and `page.tsx` (the `review__photo` block) with an `<Image>`. |
| **Photo of Oleksandra** | `lib/site.ts` → `PIC.about` | Currently a stock portrait, captioned as a placeholder. |
| **All other photography** | `lib/site.ts` → `PIC` | Verified Unsplash stock chosen to fit the blue palette. Drop files into `/public` and change the values. |
| **Prices** | — | Deliberately absent: the site says the price is given on request via WhatsApp. |
| **Vienna tours** | `lib/site.ts` → `pages.vienna` | Marked “on request”. Fill in real Vienna programmes when ready and remove `draft: true`. |

## Contacts used on the site

Phone / WhatsApp / Viber `+39 389 966 44 55`, email `alessandralukan@gmail.com`. Change
them in one place: `lib/site.ts` → `CONTACT`.

## Deployment

Pushing to `main` deploys to Vercel (project `9x16/lukan-guide`, framework preset
**Next.js**). No environment variables. Remote images are allowed from
`images.unsplash.com` in `next.config.mjs`; add any new host there.
