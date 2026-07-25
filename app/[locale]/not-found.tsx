import Link from 'next/link';
import { dict } from '@/lib/content';
import { DEFAULT_LOCALE } from '@/lib/types';

export default function LocaleNotFound() {
  const t = dict(DEFAULT_LOCALE);
  return (
    <main className="void">
      <div className="shell">
        <p className="label" style={{ color: 'var(--on-field-3)' }}>
          404
        </p>
        <h1 className="sheet__title" style={{ marginTop: '1rem' }}>
          {t.ui.notFound}
        </h1>
        <p className="sheet__standfirst">{t.ui.notFoundBody}</p>
        <p style={{ marginTop: '2rem' }}>
          <Link className="btn btn--onfield" href={`/${DEFAULT_LOCALE}`}>
            {t.ui.backHome}
          </Link>
        </p>
      </div>
    </main>
  );
}
