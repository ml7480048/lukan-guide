import Link from 'next/link';
import { DEFAULT_LOCALE, dict } from '@/lib/site';

export default function LocaleNotFound() {
  const t = dict(DEFAULT_LOCALE);
  return (
    <div className="void">
      <p className="kicker">404</p>
      <h1 className="section__title">{t.ui.notFound}</h1>
      <p className="section__lead" style={{ marginInline: 'auto' }}>
        {t.ui.notFoundText}
      </p>
      <p style={{ marginTop: '1rem' }}>
        <Link href={`/${DEFAULT_LOCALE}`} className="btn btn--primary">
          {t.ui.backHome}
        </Link>
      </p>
    </div>
  );
}
