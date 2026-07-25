import type { Dictionary } from './dict';
import { en } from './en';
import { ru } from './ru';
import { ua } from './ua';
import { DEFAULT_LOCALE, type Locale } from './types';

export const DICTS: Record<Locale, Dictionary> = { ua, ru, en };

export function dict(locale: Locale): Dictionary {
  return DICTS[locale] ?? DICTS[DEFAULT_LOCALE];
}

/** BCP-47 tags for <html lang> and hreflang. */
export const HTML_LANG: Record<Locale, string> = {
  ua: 'uk',
  ru: 'ru',
  en: 'en',
};

export const SITE_URL = 'https://lukan.guide';

export const CONTACT = {
  phoneHuman: '+39 389 966 44 55',
  phoneTel: '+393899664455',
  whatsapp: '393899664455',
  email: 'alessandralukan@gmail.com',
} as const;
