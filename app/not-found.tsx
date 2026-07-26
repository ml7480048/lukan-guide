import Link from 'next/link';
import './globals.css';
import { DEFAULT_LOCALE, dict } from '@/lib/site';

/** Global 404 — needs its own document shell since it sits above the locale layout. */
export default function NotFound() {
  const t = dict(DEFAULT_LOCALE);
  return (
    <html lang="uk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600&display=swap" />
        <title>404 — lukan.guide</title>
      </head>
      <body>
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
      </body>
    </html>
  );
}
