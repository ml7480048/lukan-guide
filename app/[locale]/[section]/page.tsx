import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CONTACT, SITE_URL, dict } from '@/lib/content';
import { IMG } from '@/lib/images';
import { TOURS } from '@/lib/tours';
import { LOCALES, SECTIONS, isLocale, isSection, type Locale, type SectionSlug } from '@/lib/types';
import { Catalogue, type CatalogueItem } from '@/components/Catalogue';
import { Panels } from '@/components/Panels';

const SHEET_IMG: Record<SectionSlug, string> = {
  about: IMG.guide,
  tours: IMG.desk,
  around: IMG.around,
  kids: IMG.kids,
  museums: IMG.museums,
  events: IMG.events,
  hotels: IMG.hotels,
  nightlife: IMG.nightlife,
  shopping: IMG.shopping,
  info: IMG.info,
  phrasebook: IMG.phrasebook,
  figures: IMG.figures,
};

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
  const s = t.sections[section];

  return {
    title: `${s.title} — ${locale === 'en' ? 'Oleksandra Lukan' : locale === 'ru' ? 'Александра Лукань' : 'Олександра Лукань'}`,
    description: s.standfirst,
    alternates: {
      canonical: `/${locale}/${section}`,
      languages: {
        uk: `/ua/${section}`,
        ru: `/ru/${section}`,
        en: `/en/${section}`,
        'x-default': `/ua/${section}`,
      },
    },
    openGraph: {
      title: s.title,
      description: s.standfirst,
      url: `${SITE_URL}/${locale}/${section}`,
    },
  };
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
  const s = t.sections[section];

  const items: CatalogueItem[] = s.catalogue
    ? TOURS.filter((tour) => s.catalogue!.includes(tour.group)).map((tour) => ({
        ...tour,
        text: t.tours[tour.id],
      }))
    : [];

  return (
    <main>
      <section className="sheet">
        <div className="sheet__photo">
          <Image src={`${SHEET_IMG[section]}?auto=format&fit=crop&w=2000&q=68`} alt="" fill priority sizes="100vw" />
        </div>
        <div className="sheet__wash" />

        <div className="shell">
          <nav className="sheet__crumbs" aria-label="breadcrumb">
            <Link href={`/${loc}`}>{t.ui.backHome}</Link>
            <span aria-hidden="true">·</span>
            <span>{t.nav[section]}</span>
          </nav>

          <h1 className="sheet__title">{s.title}</h1>
          <p className="sheet__standfirst">{s.standfirst}</p>

          {s.draft && <p className="sheet__flag">{t.ui.inPreparation}</p>}
        </div>
      </section>

      {s.intro && s.intro.length > 0 && (
        <section className="body-copy">
          <div className="shell">
            {s.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      )}

      {items.length > 0 && (
        <section className="room" style={{ paddingTop: 0 }} aria-label={t.nav.tours}>
          <div className="shell">
            <Catalogue
              items={items}
              ui={t.ui}
              groups={s.catalogue ?? []}
              filterable={(s.catalogue?.length ?? 0) > 1}
              bookLabel={t.home.section.cta}
            />
          </div>
        </section>
      )}

      {s.panels && s.panels.length > 0 && (
        <section className="room" style={{ paddingTop: items.length ? undefined : 0 }} aria-label={s.title}>
          <div className="shell">
            <Panels panels={s.panels} />
          </div>
        </section>
      )}

      <section className="cta-band">
        <div className="shell cta-band__in">
          <h2>{t.home.desk.standfirst}</h2>
          <p style={{ color: 'var(--on-field-2)', maxWidth: '52ch' }}>{t.home.desk.intro}</p>
          <div className="cta-band__row">
            <Link className="btn btn--onfield" href={`/${loc}#desk`}>
              {t.home.section.cta}
            </Link>
            <a className="btn btn--ghost" href={`tel:${CONTACT.phoneTel}`} style={{ borderColor: 'color-mix(in srgb, var(--on-field) 32%, transparent)', color: 'var(--on-field)' }}>
              {CONTACT.phoneHuman}
            </a>
            <a className="btn btn--ghost" href={`mailto:${CONTACT.email}`} style={{ borderColor: 'color-mix(in srgb, var(--on-field) 32%, transparent)', color: 'var(--on-field)' }}>
              {CONTACT.email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
