import Link from 'next/link';
import { CONTACT, dict, type Locale } from '@/lib/site';
import { Mail, Phone } from './icons';
import { Socials } from './Socials';

const BRAND: Record<Locale, string> = {
  ua: 'Олександра Лукань',
  ru: 'Александра Лукань',
  en: 'Oleksandra Lukan',
};

export function Footer({ locale }: { locale: Locale }) {
  const t = dict(locale);

  const links: [string, string][] = [
    [`/${locale}#about`, t.nav.about],
    [`/${locale}/vatican`, t.nav.vatican],
    [`/${locale}/rome`, t.nav.rome],
    [`/${locale}/vienna`, t.nav.vienna],
    [`/${locale}/reviews`, t.nav.reviews],
    [`/${locale}/glossary`, t.nav.glossary],
  ];

  return (
    <footer className="footer">
      <div className="shell footer__grid">
        <div>
          <div className="footer__brand">{BRAND[locale]}</div>
          <p className="footer__tag">{t.footer.tagline}</p>
          <p className="footer__tag" style={{ marginTop: '0.75rem' }}>
            {t.footer.made}
          </p>
          <div className="footer__socials">
            <Socials soonLabel={t.ui.socialSoon} />
          </div>
        </div>

        <div>
          <h3>{t.footer.rooms}</h3>
          <ul>
            {links.map(([href, label]) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>{t.book.contactsTitle}</h3>
          <ul>
            <li>
              <a href={`tel:${CONTACT.phoneTel}`} style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center' }}>
                <Phone />
                {CONTACT.phoneHuman}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center' }}>
                <Mail />
                {CONTACT.email}
              </a>
            </li>
            <li>Viber · WhatsApp</li>
          </ul>
        </div>
      </div>

      <div className="shell footer__fine">
        <p>{t.footer.imagery}</p>
        <p>© {new Date().getFullYear()} lukan.guide</p>
      </div>
    </footer>
  );
}
