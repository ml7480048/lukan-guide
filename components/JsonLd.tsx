import { CONTACT, SITE_URL, dict, type Locale } from '@/lib/site';

/**
 * Structured data for search and generative engines (GEO). A Person/LocalBusiness
 * describing Oleksandra, plus an optional FAQPage built from a page's Q&A. Kept
 * factual: no invented ratings or review counts.
 */
export function JsonLd({ locale, faq }: { locale: Locale; faq?: [string, string][] }) {
  const t = dict(locale);
  const name =
    locale === 'en' ? 'Oleksandra Lukan' : locale === 'ru' ? 'Александра Лукань' : 'Олександра Лукань';

  const person = {
    '@context': 'https://schema.org',
    '@type': ['Person', 'TouristInformationCenter'],
    name,
    jobTitle:
      locale === 'en' ? 'Historian and licensed tour guide' : locale === 'ru' ? 'Историк и лицензированный гид' : 'Історик і ліцензований гід',
    url: `${SITE_URL}/${locale}`,
    email: CONTACT.email,
    telephone: CONTACT.phoneHuman,
    knowsLanguage: ['uk', 'ru', 'it'],
    areaServed: ['Rome', 'Vatican City', 'Vienna'],
    description: t.meta.description,
  };

  const faqLd = faq && faq.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map(([q, a]) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}
    </>
  );
}
