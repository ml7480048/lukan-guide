import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import '../globals.css';
import { HTML_LANG, SITE_URL, dict } from '@/lib/content';
import { LOCALES, isLocale, type Locale } from '@/lib/types';
import { Masthead } from '@/components/Masthead';
import { Colophon } from '@/components/Colophon';
import { Mount } from '@/components/Mount';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = dict(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        uk: '/ua',
        ru: '/ru',
        en: '/en',
        'x-default': '/ua',
      },
    },
    openGraph: {
      type: 'website',
      title: t.meta.title,
      description: t.meta.description,
      url: `${SITE_URL}/${locale}`,
      locale: HTML_LANG[locale],
      siteName: 'lukan.guide',
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = dict(loc);

  return (
    <html lang={HTML_LANG[loc]}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Golos+Text:wght@400;500;600&family=PT+Mono&display=swap"
        />
        <meta name="theme-color" content="#07182a" />
      </head>
      <body>
        <Mount />
        <a className="skip" href="#room-1">
          {t.ui.skipToContent}
        </a>
        <Masthead locale={loc} />
        {children}
        <Colophon locale={loc} />
      </body>
    </html>
  );
}
