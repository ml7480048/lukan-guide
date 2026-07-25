import { NextResponse, type NextRequest } from 'next/server';
import { DEFAULT_LOCALE, LOCALES } from './lib/types';

const PREFERENCE: Record<string, string> = {
  uk: 'ua',
  ua: 'ua',
  ru: 'ru',
  be: 'ru',
  kk: 'ru',
  en: 'en',
};

function pick(header: string | null): string {
  if (!header) return DEFAULT_LOCALE;
  for (const part of header.split(',')) {
    const tag = part.split(';')[0].trim().toLowerCase();
    const base = tag.split('-')[0];
    const hit = PREFERENCE[tag] ?? PREFERENCE[base];
    if (hit) return hit;
  }
  return DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return NextResponse.next();

  const locale = pick(request.headers.get('accept-language'));
  const url = request.nextUrl.clone();
  url.pathname = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|favicon|icon|apple-icon|opengraph|robots.txt|sitemap.xml|.*\\..*).*)'],
};
