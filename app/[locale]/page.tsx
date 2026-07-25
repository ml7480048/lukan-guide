import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CONTACT, dict } from '@/lib/content';
import { IMG } from '@/lib/images';
import { FEATURED, TOURS } from '@/lib/tours';
import { isLocale, type Locale } from '@/lib/types';
import { Catalogue, type CatalogueItem } from '@/components/Catalogue';
import { Plaque } from '@/components/Plaque';
import { Ticket } from '@/components/Ticket';

const CONTRACT = `<!--
DIRECTION CONTRACT — home, mode: Persuade. Seed b9b6c0b8, grounded candidate 3 of 7.

THESIS: A museum label states what a thing is; this site is a complete label system
whose every plate is filled with one historian's voice instead of institutional data.
It refuses the category page: golden-hour Colosseum photograph, centred serif headline,
gold "book now" button — which is exactly what the previous lukan.guide shipped.

OWN-WORLD: A lit caeruleum field (the blue pigment Rome manufactured) with bone plates
mounted on it: 3px radius, machined edge-light, real cast shadow, corner screws. Cinnabar
appears only where a museum uses red — mandatory booking, warnings, the primary action.
Spectral for voice, Golos Text for labels, PT Mono for numbers. Sections are rooms with
numbered plaques; the language switch is a trilingual museum label.

STORY: A traveller planning the trip of the decade learns in seconds that a
university-trained historian will narrate Rome in her own language, sees the depth she can
offer proved rather than claimed (San Clemente in four strata), and leaves with an enquiry
already written.

FIRST VIEWPORT: Blue-hour Forum, dimmed, behind a drifting gallery spot. Left: one large
bone plate labelling ROME ITSELF as the exhibit — title at 5.5rem, dates and materials in
mono, then the thesis in italic. Right: the ticket plate carrying the primary action.

FORM: Museum interpretation system. Candidate 3 of the ordered grounded list; degraded
roll, no challengers dealt and no quality-bar boards available. Staging: the wall label
and the timed-entry ticket.
-->`;

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = dict(loc);
  const h = t.home;

  const items: CatalogueItem[] = TOURS.filter((tour) => FEATURED.includes(tour.id)).map((tour) => ({
    ...tour,
    text: t.tours[tour.id],
  }));

  const tourTitles = TOURS.filter((tour) => !tour.draft).map((tour) => t.tours[tour.id].title);

  const refs = t.navGroups.find((g) => g.items.includes('info'))?.items ?? [];

  return (
    <main>
      <div hidden dangerouslySetInnerHTML={{ __html: CONTRACT }} />

      {/* ------------------------------------------------------ Room I — Rome */}
      <section className="entry" id="room-1" aria-labelledby="exhibit-title">
        <div className="entry__photo">
          <Image
            src={`${IMG.hero}?auto=format&fit=crop&w=2200&q=72`}
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="entry__wash" />
        <div className="entry__spot" aria-hidden="true" />

        <div className="shell">
          <p className="label entry__eyebrow">{h.eyebrow}</p>

          <div className="entry__grid">
            <article className="plate plate--screwed exhibit">
              <div className="exhibit__pad">
                <p className="exhibit__kicker">
                  {t.ui.room} I
                </p>
                <h1 className="exhibit__title" id="exhibit-title">
                  {h.exhibit.title}
                </h1>
                <p className="exhibit__dates">{h.exhibit.dates}</p>

                <div className="plate__rule" />

                <div className="plate__meta">
                  <div className="plate__row">
                    <span className="plate__key">{h.exhibit.materialsLabel}</span>
                    <span className="plate__val">{h.exhibit.materials}</span>
                  </div>
                  <div className="plate__row">
                    <span className="plate__key">{h.exhibit.provenanceLabel}</span>
                    <span className="plate__val">{h.exhibit.provenance}</span>
                  </div>
                  <div className="plate__row">
                    <span className="plate__key">{h.exhibit.guideLabel}</span>
                    <span className="plate__val">{h.exhibit.guide}</span>
                  </div>
                </div>

                <div className="plate__rule" />

                <p className="exhibit__thesis">{h.thesis}</p>
                <p className="exhibit__attr">{h.thesisAttribution}</p>
              </div>
            </article>

            {/* The action, in the form's own vocabulary. */}
            <aside className="plate plate__pad" aria-label={h.desk.form.legend}>
              <div className="ticket__legend" style={{ marginBottom: '1rem' }}>
                <span>{h.desk.form.legend}</span>
                <span className="mono">№</span>
              </div>

              <div style={{ display: 'grid', gap: '0.75rem' }} aria-hidden="true">
                {[h.desk.form.date, h.desk.form.tour, h.desk.form.time].map((field) => (
                  <div className="fld" key={field}>
                    <span>{field}</span>
                    <div
                      style={{
                        height: '1.75rem',
                        borderBottom: '1px solid color-mix(in srgb, var(--ink) 32%, transparent)',
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="stub__actions" style={{ marginTop: '1.25rem' }}>
                <a className="btn btn--primary" href="#desk">
                  {h.section.cta}
                </a>
                <a className="btn btn--ghost" href={`tel:${CONTACT.phoneTel}`}>
                  {CONTACT.phoneHuman}
                </a>
              </div>

              <p className="stub__hint">{h.desk.hours}</p>
            </aside>
          </div>

          <a className="entry__scroll" href="#room-2">
            <span>{h.scroll}</span>
            <span aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* ------------------------------------------------ Room II — who leads */}
      <section className="room" id="room-2" aria-labelledby="room-2-h">
        <div className="shell">
          <Plaque locale={loc} no="II" name={h.rooms.guide} />
          <h2 className="room__standfirst" id="room-2-h">
            {h.guide.standfirst}
          </h2>

          <div className="guide" style={{ marginTop: 'clamp(1.75rem, 4vw, 3rem)' }}>
            <div>
              <div className="guide__prose">
                {h.guide.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <blockquote className="guide__quote">
                <p>{h.guide.pullquote}</p>
                <cite>{h.exhibit.guide}</cite>
              </blockquote>

              <p style={{ marginTop: '1.5rem' }}>
                <Link href={`/${loc}/about`} className="textlink">
                  {h.guide.more}
                </Link>
              </p>
            </div>

            <div className="guide__aside">
              <figure className="portrait mountable" style={{ margin: 0 }}>
                <Image
                  src={`${IMG.guide}?auto=format&fit=crop&w=900&q=72`}
                  alt=""
                  width={900}
                  height={1125}
                  sizes="(min-width: 64rem) 24vw, 92vw"
                />
                <figcaption className="portrait__tag">{h.guide.portraitPlaceholder}</figcaption>
              </figure>

              <div className="plate plate__pad">
                <dl className="rows">
                  {h.guide.facts.map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Room III — catalogue */}
      <section className="room" id="room-3" aria-labelledby="room-3-h">
        <div className="shell">
          <Plaque locale={loc} no="III" name={h.rooms.catalogue} />
          <h2 className="room__standfirst" id="room-3-h">
            {h.catalogue.standfirst}
          </h2>
          <p className="room__note">{h.catalogue.note}</p>

          <div style={{ marginTop: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
            <Catalogue
              items={items}
              ui={t.ui}
              groups={['antiquity', 'christian', 'art', 'museums', 'around']}
              filterable={false}
              bookLabel={h.section.cta}
            />
          </div>

          <p style={{ marginTop: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
            <Link href={`/${loc}/tours`} className="textlink">
              {h.catalogue.allTours}
            </Link>
          </p>
        </div>
      </section>

      {/* -------------------------------- Room IV — one tour taken apart */}
      <section className="room room--porphyry" id="room-4" aria-labelledby="room-4-h">
        <div className="shell">
          <Plaque locale={loc} no="IV" name={h.rooms.section} />
          <h2 className="room__standfirst" id="room-4-h">
            {h.section.standfirst}
          </h2>
          <p className="room__note">{h.section.intro}</p>

          <div className="section-cut" style={{ marginTop: 'clamp(1.75rem, 4vw, 3rem)' }}>
            <figure className="section-cut__photo mountable" style={{ margin: 0 }}>
              <Image
                src={`${IMG.underground}?auto=format&fit=crop&w=900&q=72`}
                alt=""
                width={900}
                height={1200}
                sizes="(min-width: 62rem) 30vw, 92vw"
              />
            </figure>

            <div>
              <ol className="strata">
                {h.section.layers.map((layer) => (
                  <li className="stratum" key={layer.depth}>
                    <span className="stratum__depth mono">{layer.depth}</span>
                    <div className="stratum__body">
                      <span className="stratum__era">{layer.era}</span>
                      <h3 className="stratum__title">{layer.title}</h3>
                      <p className="stratum__text">{layer.text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="section-cut__outro">
                <p>{h.section.outro}</p>
                <a className="btn btn--onfield" href="#desk">
                  {h.section.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------- Room V — the services */}
      <section className="room" id="room-5" aria-labelledby="room-5-h">
        <div className="shell">
          <Plaque locale={loc} no="V" name={h.rooms.services} />
          <h2 className="room__standfirst" id="room-5-h">
            {h.services.standfirst}
          </h2>

          <div className="services" style={{ marginTop: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            {h.services.items.map((service, i) => (
              <div className="service" key={service.title}>
                <span className="service__no">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="service__title">{service.title}</h3>
                <p className="service__text">{service.text}</p>
              </div>
            ))}
          </div>

          <p className="room__note">{h.services.note}</p>
        </div>
      </section>

      {/* --------------------------------------------- Room VI — the reference */}
      <section className="room" id="room-6" aria-labelledby="room-6-h">
        <div className="shell">
          <Plaque locale={loc} no="VI" name={h.rooms.reference} />
          <h2 className="room__standfirst" id="room-6-h">
            {h.reference.standfirst}
          </h2>

          <ul className="refs" style={{ marginTop: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            {refs.map((slug, i) => (
              <li key={slug}>
                <Link href={`/${loc}/${slug}`} className="drawer mountable" data-mount-delay={String((i % 3) * 80)}>
                  <span className="drawer__title">{t.nav[slug]}</span>
                  <span className="drawer__meta">{t.sections[slug].standfirst}</span>
                </Link>
              </li>
            ))}
          </ul>

          <p className="room__note">{h.reference.note}</p>
        </div>
      </section>

      {/* --------------------------------------------- Room VII — ticket desk */}
      <section className="room" id="desk" aria-labelledby="room-7-h">
        <div className="shell">
          <Plaque locale={loc} no="VII" name={h.rooms.desk} />
          <h2 className="room__standfirst" id="room-7-h">
            {h.desk.standfirst}
          </h2>
          <p className="room__note">{h.desk.intro}</p>

          <div className="desk" style={{ marginTop: 'clamp(1.75rem, 4vw, 3rem)' }}>
            <Ticket t={h.desk} tourTitles={tourTitles} />

            <div>
              <ul className="contacts">
                {h.desk.contacts.map((c) => (
                  <li key={c.label}>
                    <span className="k">{c.label}</span>
                    {c.href ? (
                      <a className="v" href={c.href}>
                        {c.value}
                      </a>
                    ) : (
                      <span className="v">{c.value}</span>
                    )}
                  </li>
                ))}
                <li>
                  <span className="k">{t.ui.booking}</span>
                  <span className="v">{t.ui.bookingValue}</span>
                </li>
              </ul>
              <p className="desk__hours">{h.footer.credit}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
