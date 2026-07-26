import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PIC, dict, isLocale, type Locale } from '@/lib/site';
import { VideoHero } from '@/components/VideoHero';
import { Socials } from '@/components/Socials';
import { Arrow, Camera, Star } from '@/components/icons';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const loc = locale as Locale;
  const t = dict(loc);

  return (
    <>
      {/* ---------------------------------------------------- Hero + video */}
      <section className="hero">
        <div className="shell hero__grid">
          <div className="reveal">
            <p className="kicker">{t.hero.kicker}</p>
            <h1 className="hero__title">{t.hero.title}</h1>
            <p className="hero__lead">{t.hero.lead}</p>
            <div className="hero__actions">
              <Link href={`/${loc}/book`} className="btn btn--primary btn--lg">
                {t.hero.primary}
              </Link>
              <a href="#about" className="btn btn--ghost btn--lg">
                {t.hero.secondary}
              </a>
            </div>
            <div className="socials">
              <span className="socials__label">{t.ui.followMe}:</span>
              <Socials soonLabel={t.ui.socialSoon} />
            </div>
          </div>

          <VideoHero caption={t.hero.videoCaption} soon={t.ui.videoSoon} watch={t.ui.watchVideo} />
        </div>
      </section>

      {/* ---------------------------------------------------------- About */}
      <section className="section section--sky" id="about">
        <div className="shell">
          <div className="section__head reveal">
            <p className="kicker">{t.about.title}</p>
            <h2 className="section__title">{t.about.lead}</h2>
          </div>

          <div className="about">
            <div className="reveal">
              <div className="prose">
                {t.about.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <dl className="facts">
                {t.about.facts.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="reveal">
              <figure className="portrait" style={{ margin: 0 }}>
                <Image src={`${PIC.about}?auto=format&fit=crop&w=800&q=72`} alt="" width={800} height={1000} sizes="(min-width: 60rem) 20rem, 100vw" />
                <figcaption className="portrait__tag">{t.reviewsBlock.photoAlt}</figcaption>
              </figure>
            </div>
          </div>

          <p className="quote reveal">{t.about.quote}</p>
        </div>
      </section>

      {/* --------------------------------------------------- Destinations */}
      <section className="section" id="destinations">
        <div className="shell">
          <div className="section__head reveal">
            <p className="kicker">{t.destinations.title}</p>
            <h2 className="section__title">{t.destinations.lead}</h2>
          </div>

          <div className="dcards">
            {t.destinations.cards.map((c) => (
              <Link key={c.slug} href={`/${loc}/${c.slug}`} className="dcard reveal">
                <div className="dcard__img">
                  <Image src={`${PIC[c.slug as 'vatican' | 'rome' | 'vienna']}?auto=format&fit=crop&w=800&q=70`} alt="" width={800} height={534} sizes="(min-width: 52rem) 33vw, 100vw" />
                  <span className="dcard__meta">{c.meta}</span>
                </div>
                <div className="dcard__body">
                  <h3 className="dcard__name">{c.name}</h3>
                  <p className="dcard__tag">{c.tagline}</p>
                  <span className="dcard__go">
                    {t.ui.seeTours}
                    <Arrow />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- Reviews teaser */}
      <section className="section section--sky" id="reviews-teaser">
        <div className="shell">
          <div className="section__head reveal">
            <p className="kicker">{t.reviewsBlock.title}</p>
            <h2 className="section__title">{t.reviewsBlock.lead}</h2>
          </div>

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

          <p className="reveal" style={{ marginTop: '1.5rem' }}>
            <Link href={`/${loc}/reviews`} className="btn btn--ghost">
              {t.ui.seeReviews}
              <Arrow />
            </Link>
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------ CTA band */}
      <section className="section">
        <div className="shell">
          <div className="ctaband reveal">
            <h2>{t.book.title}</h2>
            <p>{t.book.note}</p>
            <div className="ctaband__row">
              <Link href={`/${loc}/book`} className="btn btn--primary btn--lg">
                {t.book.form.whatsapp}
              </Link>
              <Link href={`/${loc}/glossary`} className="btn btn--ghost btn--lg">
                {t.nav.glossary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
