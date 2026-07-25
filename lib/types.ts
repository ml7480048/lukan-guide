export const LOCALES = ['ua', 'ru', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'ua';

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** The section slugs are shared across locales so a language switch never loses the page. */
export const SECTIONS = [
  'about',
  'tours',
  'around',
  'kids',
  'museums',
  'events',
  'hotels',
  'nightlife',
  'shopping',
  'info',
  'phrasebook',
  'figures',
] as const;
export type SectionSlug = (typeof SECTIONS)[number];

export function isSection(value: string): value is SectionSlug {
  return (SECTIONS as readonly string[]).includes(value);
}

export type TourGroup = 'antiquity' | 'christian' | 'art' | 'around' | 'museums';

export type Tour = {
  id: string;
  /** Catalogue number, rendered as a Roman numeral on the plate. */
  n: number;
  group: TourGroup;
  image: string;
  /** Marked as work-in-progress by Oleksandra herself. Never presented as bookable. */
  draft?: boolean;
};

export type TourText = {
  title: string;
  /** One line that has to earn the click on its own. */
  lede: string;
  body: string;
  duration: string;
  /** Short factual tags: transport, advance booking, seasonal window. */
  notes?: string[];
};

/** A block of reference content on an inner page. */
export type Panel =
  | { kind: 'prose'; heading?: string; paragraphs: string[] }
  | { kind: 'facts'; heading?: string; rows: [string, string][] }
  | { kind: 'list'; heading?: string; items: string[] }
  | {
      kind: 'links';
      heading?: string;
      note?: string;
      items: { label: string; meta?: string; href?: string }[];
    }
  | { kind: 'note'; text: string };

export type SectionText = {
  /** Room plate title. */
  title: string;
  /** Museum-label subtitle: what this room holds. */
  standfirst: string;
  intro?: string[];
  panels?: Panel[];
  /** Renders the tour catalogue filtered to these groups. */
  catalogue?: TourGroup[];
  draft?: boolean;
};
