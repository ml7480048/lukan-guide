# Design

<!-- impeccable:design-schema 1 -->

Recorded from the built site, not from intention. Everything below exists in
`app/globals.css` unless another file is named.

## The idea it has to keep

A museum label states what a thing is. This site is a complete label system in which
every plate is filled with one historian's voice instead of institutional data. Room I
labels **Rome itself** as the exhibit; Oleksandra's credit line is the "led by" field.

Two things follow from that and must not be softened:

1. **Bone plates are objects mounted on a lit wall.** They are not cards. They have a
   machined edge-light, a real cast shadow with offset, a 3px radius, and — on the two
   largest plates — corner screws. Never a border and a shadow together.
2. **Cinnabar is institutional, not decorative.** It appears where a museum uses red:
   advance-booking flags, the "in preparation" flag, error and warning states, and the
   primary action. Nowhere else. Current coverage is roughly 2% of the page.

## Colour

The field is **caeruleum** — the blue pigment ancient Rome manufactured itself. Dark is
not a style choice here: the audience reads this on a phone late at night, and in a gallery
the room is dim while the objects are lit.

| Token | Value | Used for |
| --- | --- | --- |
| `--field-950` | `#050f1a` | Deepest edge, colophon ground |
| `--field-900` | `#07182a` | Page ground, `theme-color` |
| `--field-800` | `#0c2740` | Empty image wells |
| `--field-700` | `#10314b` | Reserved mid-field |
| `--field-500` | `#256b9e` | The spotlight wash in `body::before` |
| `--porphyry` | `#3a2230` | The Room IV band (imperial stone) |
| `--bone-100` / `--bone` / `--bone-200` | `#f5f0e6` / `#eee8db` / `#e4dcc9` | Plate face gradient, top to bottom |
| `--bone-300` | `#d3c9b2` | Screw heads, drawer pulls |
| `--ink` / `--ink-2` / `--ink-3` | `#1b1915` / `#57503f` / `#7c7460` | Iron gall on bone: primary, secondary, label |
| `--on-field` / `-2` / `-3` | `#f0ece2` / `#a8c2d8` / `#6f90ad` | On the field: primary, secondary, label. Secondary is tinted from the field hue, never grey |
| `--cinnabar` / `--cinnabar-lt` | `#a93018` / `#e57a5c` | On bone / on field |

Two fixed light sources: `body::before` is a fixed radial wash from above (blue) and below
right (porphyry); `.entry__spot` is the gallery spot over the opening plate.

## Type

Loaded by stylesheet link in `app/[locale]/layout.tsx`. All three have first-class
Cyrillic — this is why they were chosen, not their look alone.

- **Spectral** (`--serif`) — Oleksandra's voice and every display size. Low contrast,
  sharp terminals, comfortable at 19px on a phone. Real italics carry her own sentences.
- **Golos Text** (`--sans`) — labels, navigation, buttons, metadata keys. Cyrillic-first
  grotesque that reads as signage rather than product UI.
- **PT Mono** (`--mono`) — catalogue numbers, dates, durations, depths. Measurement only,
  never as a costume for "technical".

Scale: display `clamp(3.25rem, 9vw, 5.5rem)`, room standfirst `clamp(1.375rem, 2.8vw,
2.125rem)`, body `1.0625rem → 1.125rem` at 60rem, label `0.6875rem` uppercase / `0.14em`,
micro-label `0.5625rem` / `0.18–0.2em`. Tracking on display never passes `-0.035em`.
Reading measure 62–66ch. Headings are `text-wrap: balance`.

## Structure

- `.shell` — 1280px, gutter `clamp(1.125rem, 4vw, 3.5rem)`.
- `.room` — one numbered room. Vertical rhythm `clamp(3.5rem, 8vw, 7.5rem)`, hairline top
  rule. `.room--porphyry` for the one band that changes stone.
- `.plaque` — the room plate: black numeral block + bone name block. It is the anchor the
  room index links to, which is what makes the numeral information rather than decoration.
- `.plate` / `.plate__pad` — the mounted plate. `.plate--screwed` adds corner screws.
- `.plate__row` — the label's key/value line: `minmax(6.5rem, 8.5rem) 1fr`, collapsing to
  one column under 30rem.

Grids: catalogue `.hang` 1 → 2 (40rem) → 3 (68rem); reference `.refs` 1 → 2 (44rem) → 3
(68rem); reference panels `.panels` 1 → 2 (56rem) with `.panel--wide` spanning.

## Components

| Class | What it is |
| --- | --- |
| `.exhibit` | Room I's label for Rome. The only place the display size appears. |
| `.langs` | The trilingual museum label, printed as three cells; the active one inverts to bone. |
| `.rooms-btn` + `.index` | The audio-guide keypad and the full-screen room index, grouped by Excursions / About / Reference. Escape closes; body scroll locks. |
| `.work` | A catalogue plate: framed image, `Кат. N` in the corner, group, title, one line that has to earn the click, `<details>` for the full text, duration and flags on a hairline foot. |
| `.strata` | Room IV. San Clemente as a vertical section: depth in mono, era in cinnabar, one strange specific per layer, dashed rules between. The photograph beside it is `position: sticky`. |
| `.ticket` | The booking stub. Two panels split by a dashed perforation with punched holes in field colour; left is the fields, right composes the message live and hands it to WhatsApp or mail. See `components/Ticket.tsx`. |
| `.drawer` | A card-catalogue drawer front, with the pull, for the reference sections. |
| `.sheet` | Inner-page header: dimmed photograph, breadcrumb back to Room I, title, standfirst, optional "in preparation" flag. |

## Motion

One authored moment plus two small ones. Everything is inside
`@media (prefers-reduced-motion: no-preference)`.

1. **The spot warms up** — `.entry__spot` drifts over 18s, alternating. The page's signature.
2. **Plates arrive mounted** — `.mountable` fades from 0.5 and rises 10px, staggered
   90ms across a row, driven by `components/Mount.tsx`. The effect is gated on a `js`
   class so nothing is ever hidden without JavaScript, and the observer is rebuilt on
   pathname change.
3. **The stub flashes the line you changed** — `stub-flash`, 0.9s, in `Ticket.tsx`.

Easing everywhere: `--ease: cubic-bezier(0.16, 1, 0.3, 1)`.

## Rules for the next change

- Add a section by adding a room, with the next numeral and a plaque. Do not add an
  un-numbered section.
- Anything factual goes on a plate as a key/value row, in the label's grammar. Prose that
  is not in Oleksandra's voice does not belong on a plate.
- New copy goes in all three of `lib/ua.ts`, `lib/ru.ts`, `lib/en.ts` — the shared
  `Dictionary` type makes a missing translation a build error.
- No prices. No invented reviews. Placeholders are labelled in the UI, and every one is
  listed in README.md.
