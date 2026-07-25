import { dict } from '@/lib/content';
import type { Locale } from '@/lib/types';

/**
 * The room plaque. It is the section anchor and the thing the room index links
 * to, so the numeral is wayfinding rather than decoration.
 */
export function Plaque({
  locale,
  no,
  name,
}: {
  locale: Locale;
  no: string;
  name: string;
}) {
  const t = dict(locale);
  return (
    <div className="plaque">
      <span className="plaque__no" aria-hidden="true">
        {no}
      </span>
      <span className="plaque__name">
        <span className="plaque__kicker">
          {t.ui.room} {no}
        </span>
        <span className="plaque__label">{name}</span>
      </span>
    </div>
  );
}
