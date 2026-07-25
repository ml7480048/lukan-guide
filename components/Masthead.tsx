'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { dict } from '@/lib/content';
import { LOCALES, type Locale, type SectionSlug } from '@/lib/types';

const SHORT: Record<Locale, string> = { ua: 'UA', ru: 'RU', en: 'EN' };

/** A room number for every section, so the index reads like a floor plan. */
const ROOM_NO: Record<SectionSlug, string> = {
  about: 'II',
  tours: 'III',
  around: 'III·b',
  museums: 'III·c',
  kids: 'III·d',
  events: 'VI·a',
  hotels: 'VI·b',
  shopping: 'VI·c',
  nightlife: 'VI·d',
  info: 'VI',
  phrasebook: 'VI·e',
  figures: 'II·b',
};

export function Masthead({ locale }: { locale: Locale }) {
  const t = dict(locale);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  // The rest of the path, so switching language keeps the reader in place.
  const rest = pathname.replace(/^\/(ua|ru|en)/, '');

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className="masthead">
        <div className="shell masthead__in">
          <Link href={`/${locale}`} className="wordmark">
            <span className="wordmark__name">
              {locale === 'en' ? 'Oleksandra Lukan' : locale === 'ru' ? 'Александра Лукань' : 'Олександра Лукань'}
            </span>
            <span className="wordmark__role">
              {locale === 'en' ? 'Historian · Rome · Vatican · Vienna' : locale === 'ru' ? 'Историк · Рим · Ватикан · Вена' : 'Історик · Рим · Ватикан · Відень'}
            </span>
          </Link>

          <div className="masthead__right">
            <nav className="langs" aria-label={t.ui.language}>
              {LOCALES.map((l) => (
                <Link key={l} href={`/${l}${rest}`} aria-current={l === locale} hrefLang={l === 'ua' ? 'uk' : l}>
                  {SHORT[l]}
                </Link>
              ))}
            </nav>
            <button
              type="button"
              className="rooms-btn"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="room-index"
            >
              <span className="rooms-btn__keys" aria-hidden="true">
                <i /><i /><i /><i /><i /><i /><i /><i /><i />
              </span>
              {t.ui.menu}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="index" id="room-index" role="dialog" aria-modal="true" aria-label={t.ui.rooms}>
          <div className="shell index__bar">
            <span className="label" style={{ color: 'var(--on-field-3)' }}>
              {t.ui.rooms}
            </span>
            <button type="button" className="index__close" onClick={() => setOpen(false)} ref={closeRef}>
              {t.ui.close}
            </button>
          </div>
          <div className="index__body">
            <div className="shell index__groups">
              {t.navGroups.map((group) => (
                <div className="index__group" key={group.label}>
                  <h2>{group.label}</h2>
                  <ul>
                    {group.items.map((slug) => {
                      const href = `/${locale}/${slug}`;
                      return (
                        <li key={slug}>
                          <Link
                            href={href}
                            className="index__link"
                            aria-current={pathname === href ? 'page' : undefined}
                          >
                            <span className="mono">{ROOM_NO[slug]}</span>
                            <span>{t.nav[slug]}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
