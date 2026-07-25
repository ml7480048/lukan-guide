import Link from 'next/link';
import { CONTACT, dict } from '@/lib/content';
import type { Locale } from '@/lib/types';

export function Colophon({ locale }: { locale: Locale }) {
  const t = dict(locale);
  const year = 2026;

  return (
    <footer className="colophon">
      <div className="shell colophon__in">
        <div>
          <h2>{t.ui.room} 0</h2>
          <p style={{ fontFamily: 'var(--serif)', fontSize: '1.0625rem', color: 'var(--on-field)' }}>
            {t.home.footer.note}
          </p>
          <p style={{ marginTop: '0.75rem' }}>{t.home.desk.hours}</p>
        </div>

        <div>
          <h2>{t.home.rooms.desk}</h2>
          <ul>
            <li>
              <a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phoneHuman}</a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
            <li>Viber · WhatsApp · Telegram</li>
          </ul>
        </div>

        <div>
          <h2>{t.ui.rooms}</h2>
          <ul>
            {t.navGroups.flatMap((g) => g.items).slice(0, 6).map((slug) => (
              <li key={slug}>
                <Link href={`/${locale}/${slug}`}>{t.nav[slug]}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="shell colophon__fine">
        <p>{t.home.footer.credit}</p>
        <p>{t.home.footer.imagery}</p>
        <p>© {year} lukan.guide</p>
      </div>
    </footer>
  );
}
