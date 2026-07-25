import Link from 'next/link';
import './globals.css';
import { dict } from '@/lib/content';
import { DEFAULT_LOCALE } from '@/lib/types';

/**
 * Global 404. The locale segment holds the root layout, so anything that never
 * reaches it has to bring its own document shell.
 */
export default function NotFound() {
  const t = dict(DEFAULT_LOCALE);
  return (
    <html lang="uk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,300;0,400;0,600;1,400&family=Golos+Text:wght@400;600&family=PT+Mono&display=swap"
        />
        <title>404 — lukan.guide</title>
      </head>
      <body>
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
      </body>
    </html>
  );
}
