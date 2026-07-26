import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import '../globals.css';
import { LOCALES, SITE_URL, dict, isLocale, type Locale } from '@/lib/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Reveal } from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';

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
      languages: { uk: '/ua', ru: '/ru', en: '/en', 'x-default': '/ua' },
    },
    openGraph: {
      type: 'website',
      title: t.meta.title,
      description: t.meta.description,
      url: `${SITE_URL}/${locale}`,
      siteName: 'lukan.guide',
      locale: t.htmlLang,
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
    <html lang={t.htmlLang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600&display=swap"
        />
        <meta name="theme-color" content="#f3f7fc" />
      </head>
      <body>
        <JsonLd locale={loc} />
        <a className="skip" href="#main">
          {t.ui.backHome}
        </a>
        <Reveal />
        <Header locale={loc} />
        <main id="main">{children}</main>
        <Footer locale={loc} />
      </body>
    </html>
  );
}
