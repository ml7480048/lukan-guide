import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LOCALES, PIC, SECTIONS, SITE_URL, dict, isLocale, isSection, type Locale, type SectionSlug } from '@/lib/site';
import { Booking } from '@/components/Booking';
import { JsonLd } from '@/components/JsonLd';
import { Arrow, Camera, Star } from '@/components/icons';

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => SECTIONS.map((section) => ({ locale, section })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; section: string }>;
}): Promise<Metadata> {
  const { locale, section } = await params;
  if (!isLocale(locale) || !isSection(section)) return {};
  const t = dict(locale);
  const title = sectionTitle(t, section);
  const description = sectionLead(t, section);
  return {
    title: `${title} — ${brand(locale)}`,
    description,
    alternates: {
      canonical: `/${locale}/${section}`,
      languages: { uk: `/ua/${section}`, ru: `/ru/${section}`, en: `/en/${section}`, 'x-default': `/ua/${section}` },
    },
    openGraph: { title, description, url: `${SITE_URL}/${locale}/${section}` },
  };
}

function brand(locale: string) {
  return locale === 'en' ? 'Oleksandra Lukan' : locale === 'ru' ? 'Александра Лукань' : 'Олександра Лукань';
}

type Dict = ReturnType<typeof dict>;
type DestSlug = 'vatican' | 'rome' | 'vienna';

function sectionTitle(t: Dict, s: SectionSlug): string {
  if (s === 'book') return t.book.title;
  if (s === 'reviews') return t.reviewsBlock.title;
  if (s === 'glossary') return t.glossary.title;
  return t.pages[s as DestSlug].title;
}
function sectionLead(t: Dict, s: SectionSlug): string {
  if (s === 'book') return t.book.lead;
  if (s === 'reviews') return t.reviewsBlock.lead;
  if (s === 'glossary') return t.glossary.lead;
  return t.pages[s as DestSlug].lead;
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ locale: string; section: string }>;
}) {
  const { locale, section } = await params;
  if (!isLocale(locale) || !isSection(section)) notFound();
  const loc = locale as Locale;
  const t = dict(loc);

  const crumbs = (
    <nav className="crumbs" aria-label="breadcrumb">
      <Link href={`/${loc}`}>{t.ui.backHome}</Link>
      <span aria-hidden="true">·</span>
      <span>{sectionTitle(t, section)}</span>
    </nav>
  );

  const cta = (
    <section className="section">
      <div className="shell">
        <div className="ctaband reveal">
          <h2>{t.book.title}</h2>
          <p>{t.book.note}</p>
          <div className="ctaband__row">
            <Link href={`/${loc}/book`} className="btn btn--primary btn--lg">
              {t.book.form.whatsapp}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );

  // ------------------------------------------------------------- Booking ---
  if (section === 'book') {
    return (
      <>
        <section className="pagehero">
          <div className="shell">
            {crumbs}
            <h1 className="pagehero__title">{t.book.title}</h1>
            <p className="pagehero__lead">{t.book.lead}</p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="shell booking">
            <div className="reveal">
              <ol className="steps">
                {t.book.steps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
              <p className="section__lead" style={{ maxWidth: '34em' }}>
                {t.book.note}
              </p>
            </div>
            <Booking t={t.book} />
          </div>
        </section>
      </>
    );
  }

  // ------------------------------------------------------------- Reviews ---
  if (section === 'reviews') {
    return (
      <>
        <section className="pagehero">
          <div className="shell">
            {crumbs}
            <h1 className="pagehero__title">{t.reviewsBlock.title}</h1>
            <p className="pagehero__lead">{t.reviewsBlock.lead}</p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="shell">
            <div className="reviews">
              {t.reviewsBlock.items.map((r) => (
                <figure key={r.name} className="review reveal" style={{ margin: 0 }}>
                  <div className="review__stars" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} />
                    ))}
                  </div>
                  <blockquote className="review__text" style={{ margin: 0 }}>
                    {r.text}
                  </blockquote>
                  <figcaption className="review__who">
                    <span className="review__photo" aria-hidden="true">
                      <Camera />
                    </span>
                    <span>
                      <span className="review__name">{r.name}</span>
                      <br />
                      <span className="review__from">{r.from}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="notice reveal">{t.reviewsBlock.note}</p>
          </div>
        </section>
        {cta}
      </>
    );
  }

  // ------------------------------------------------------------ Glossary ---
  if (section === 'glossary') {
    return (
      <>
        <JsonLd locale={loc} faq={t.glossary.faq} />
        <section className="pagehero">
          <div className="shell">
            {crumbs}
            <h1 className="pagehero__title">{t.glossary.title}</h1>
            <p className="pagehero__lead">{t.glossary.lead}</p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="shell">
            <dl className="glossary">
              {t.glossary.terms.map(([term, def]) => (
                <div className="term reveal" key={term}>
                  <dt>
                    <dfn style={{ fontStyle: 'normal' }}>{term}</dfn>
                  </dt>
                  <dd>{def}</dd>
                </div>
              ))}
            </dl>
            <p className="notice reveal">{t.glossary.note}</p>
          </div>
        </section>

        <section className="section section--sky">
          <div className="shell">
            <div className="section__head reveal">
              <h2 className="section__title">{t.glossary.faqTitle}</h2>
            </div>
            <div className="faq">
              {t.glossary.faq.map(([q, a]) => (
                <details key={q} className="reveal">
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        {cta}
      </>
    );
  }

  // ----------------------------------------------- Destination pages -------
  const dest = section as DestSlug;
  const page = t.pages[dest];
  return (
    <>
      <JsonLd locale={loc} faq={page.faq} />
      <section className="pagehero">
        <div className="shell pagehero__grid">
          <div className="reveal">
            {crumbs}
            <h1 className="pagehero__title">{page.title}</h1>
            <p className="pagehero__lead">{page.lead}</p>
            {page.draft && <span className="flag">{t.ui.onRequest}</span>}
            <div className="hero__actions" style={{ marginTop: '1.5rem' }}>
              <Link href={`/${loc}/book`} className="btn btn--primary">
                {t.ui.bookCta}
              </Link>
            </div>
          </div>
          <div className="pagehero__img reveal">
            <Image src={`${PIC[dest]}?auto=format&fit=crop&w=1000&q=72`} alt="" width={1000} height={750} priority sizes="(min-width: 60rem) 45vw, 100vw" />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="shell">
          <div className="prose reveal" style={{ marginBottom: '2.5rem' }}>
            {page.intro.map((p, i) => (
              <p key={i} style={{ fontSize: '1.25rem', color: 'var(--blue-ink)' }}>
                {p}
              </p>
            ))}
          </div>

          <div className="section__head reveal">
            <h2 className="section__title">{page.highlightsTitle}</h2>
          </div>
          <ul className="checklist reveal" style={{ marginBottom: '3rem' }}>
            {page.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          <div className="section__head reveal">
            <h2 className="section__title">{page.toursTitle}</h2>
          </div>
          <div className="tours">
            {page.tours.map((tour) => (
              <article key={tour.title} className="tour reveal">
                <div className="tour__top">
                  <h3 className="tour__title">{tour.title}</h3>
                  <span className="tour__dur">{tour.duration}</span>
                </div>
                <p className="tour__text">{tour.text}</p>
                {(tour.highlights?.length || tour.note) && (
                  <div className="tour__tags">
                    {tour.highlights?.map((h) => (
                      <span key={h} className="tag">
                        {h}
                      </span>
                    ))}
                    {tour.note && <span className="tag tag--flag">{tour.note}</span>}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--sky">
        <div className="shell">
          <div className="section__head reveal">
            <h2 className="section__title">{t.glossary.faqTitle}</h2>
          </div>
          <div className="faq">
            {page.faq.map(([q, a]) => (
              <details key={q} className="reveal">
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {cta}
    </>
  );
}
