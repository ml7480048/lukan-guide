'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { dict, LOCALES, type Locale } from '@/lib/site';
import { Close, Menu } from './icons';

const BRAND: Record<Locale, string> = {
  ua: 'Олександра Лукань',
  ru: 'Александра Лукань',
  en: 'Oleksandra Lukan',
};

export function Header({ locale }: { locale: Locale }) {
  const t = dict(locale);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rest = pathname.replace(/^\/(ua|ru|en)/, '');

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const links: [string, string][] = [
    [`/${locale}#about`, t.nav.about],
    [`/${locale}/vatican`, t.nav.vatican],
    [`/${locale}/rome`, t.nav.rome],
    [`/${locale}/vienna`, t.nav.vienna],
    [`/${locale}/reviews`, t.nav.reviews],
    [`/${locale}/glossary`, t.nav.glossary],
  ];

  const isCurrent = (href: string) => {
    const path = href.split('#')[0];
    return path !== `/${locale}` && pathname === path;
  };

  return (
    <header className="header">
      <div className="shell header__in">
        <Link href={`/${locale}`} className="brand">
          <span className="brand__name">{BRAND[locale]}</span>
          <span className="brand__role">{t.footer.tagline}</span>
        </Link>

        <nav className="header__nav" aria-label={t.ui.menu}>
          {links.map(([href, label]) => (
            <Link key={href} href={href} className="navlink" aria-current={isCurrent(href) ? 'page' : undefined}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="header__right">
          <div className="langs" role="group" aria-label={t.ui.language}>
            {LOCALES.map((l) => (
              <Link key={l} href={`/${l}${rest}`} aria-current={l === locale} hrefLang={l === 'ua' ? 'uk' : l}>
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
          <Link href={`/${locale}/book`} className="btn btn--primary header__book">
            {t.nav.book}
          </Link>
          <button type="button" className="burger" onClick={() => setOpen(true)} aria-label={t.ui.menu} aria-expanded={open}>
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="sheet" role="dialog" aria-modal="true" aria-label={t.ui.menu}>
          <div className="shell sheet__bar">
            <span className="brand__name">{BRAND[locale]}</span>
            <button type="button" className="burger" onClick={() => setOpen(false)} aria-label={t.ui.close}>
              <Close />
            </button>
          </div>
          <div className="shell sheet__nav">
            {links.map(([href, label]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
            <Link href={`/${locale}/book`} className="btn btn--primary btn--lg sheet__cta">
              {t.nav.book}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
