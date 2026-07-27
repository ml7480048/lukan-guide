import { AVAILABILITY } from '@/lib/site';

/**
 * Availability calendar for the booking page. When a public Google Calendar
 * embed URL is configured in AVAILABILITY.googleCalendarSrc, it shows a live
 * month view of the days Oleksandra is in Rome / Vienna and which slots are
 * free — she keeps it up to date from her own Google Calendar, nothing to code.
 * Until it's configured, a friendly explanation shows in its place.
 */
export function Availability({
  t,
}: {
  t: { title: string; lead: string; legend: string; soon: string };
}) {
  const src = AVAILABILITY.googleCalendarSrc;

  if (src) {
    return (
      <div className="calendar reveal">
        <iframe src={src} title={t.title} loading="lazy" />
        <p className="calendar__legend">{t.legend}</p>
      </div>
    );
  }

  return (
    <div className="calendar calendar--soon reveal">
      <span className="calendar__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      </span>
      <p>{t.soon}</p>
    </div>
  );
}
