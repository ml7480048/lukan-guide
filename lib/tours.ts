import { TOUR_IMG } from './images';
import type { Tour } from './types';

/**
 * The catalogue. Order and numbering follow Oleksandra's own list.
 * Text lives in the locale files, keyed by `id`.
 */
export const TOURS: Tour[] = [
  { id: 'classic', n: 1, group: 'antiquity', image: TOUR_IMG.classic },
  { id: 'night', n: 2, group: 'antiquity', image: TOUR_IMG.night },
  { id: 'antique', n: 3, group: 'antiquity', image: TOUR_IMG.antique },
  { id: 'squares', n: 4, group: 'art', image: TOUR_IMG.squares },
  { id: 'trastevere', n: 5, group: 'christian', image: TOUR_IMG.trastevere },
  { id: 'christian', n: 6, group: 'christian', image: TOUR_IMG.christian },
  { id: 'clement', n: 7, group: 'christian', image: TOUR_IMG.clement },
  { id: 'borghese', n: 8, group: 'museums', image: TOUR_IMG.borghese },
  { id: 'centuries', n: 9, group: 'antiquity', image: TOUR_IMG.centuries },
  { id: 'vatican', n: 10, group: 'christian', image: TOUR_IMG.vatican },
  { id: 'tivoli', n: 11, group: 'around', image: TOUR_IMG.tivoli },
  { id: 'castelli', n: 12, group: 'around', image: TOUR_IMG.castelli },
  { id: 'farnesina', n: 13, group: 'art', image: TOUR_IMG.farnesina },
  { id: 'massimo', n: 14, group: 'museums', image: TOUR_IMG.massimo },
  { id: 'capitoline', n: 15, group: 'museums', image: TOUR_IMG.capitoline },
  { id: 'giulia', n: 16, group: 'museums', image: TOUR_IMG.giulia },
  { id: 'legends', n: 17, group: 'antiquity', image: TOUR_IMG.legends, draft: true },
  { id: 'caravaggio', n: 18, group: 'art', image: TOUR_IMG.caravaggio },
  { id: 'bernini', n: 19, group: 'art', image: TOUR_IMG.bernini },
  { id: 'bracciano', n: 20, group: 'around', image: TOUR_IMG.bracciano },
  { id: 'ostia', n: 21, group: 'around', image: TOUR_IMG.ostia },
  { id: 'subiaco', n: 22, group: 'around', image: TOUR_IMG.subiaco },
];

const ROMAN = [
  '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI',
  'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX', 'XXI', 'XXII',
];

export function roman(n: number): string {
  return ROMAN[n] ?? String(n);
}

/** Tours shown in Room III on the home page — the eight that carry the offer. */
export const FEATURED = [
  'classic',
  'antique',
  'vatican',
  'clement',
  'borghese',
  'centuries',
  'night',
  'tivoli',
];
