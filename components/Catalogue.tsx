'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import type { Dictionary } from '@/lib/dict';
import { roman } from '@/lib/tours';
import type { Tour, TourGroup } from '@/lib/types';

export type CatalogueItem = Tour & { text: Dictionary['tours'][string] };

export function pickTour(title: string) {
  window.dispatchEvent(new CustomEvent('lukan:pick-tour', { detail: title }));
  document.getElementById('desk')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Catalogue({
  items,
  ui,
  groups,
  filterable = true,
  bookLabel,
}: {
  items: CatalogueItem[];
  ui: Dictionary['ui'];
  /** Groups offered as filters, in display order. */
  groups: TourGroup[];
  filterable?: boolean;
  bookLabel: string;
}) {
  const [active, setActive] = useState<TourGroup | 'all'>('all');

  const shown = useMemo(
    () => (active === 'all' ? items : items.filter((i) => i.group === active)),
    [items, active],
  );

  const showFilters = filterable && groups.length > 1;

  return (
    <div>
      {showFilters && (
        <div className="filters" role="group" aria-label={ui.groups.antiquity}>
          <button type="button" aria-pressed={active === 'all'} onClick={() => setActive('all')}>
            {ui.all} · {items.length}
          </button>
          {groups.map((g) => {
            const count = items.filter((i) => i.group === g).length;
            if (!count) return null;
            return (
              <button key={g} type="button" aria-pressed={active === g} onClick={() => setActive(g)}>
                {ui.groups[g]} · {count}
              </button>
            );
          })}
        </div>
      )}

      <ul className="hang">
        {shown.map((item, i) => (
          <li
            key={item.id}
            className="plate work mountable"
            data-mount-delay={String((i % 3) * 90)}
          >
            <div className="work__frame">
              <Image
                src={`${item.image}?auto=format&fit=crop&w=800&q=70`}
                alt=""
                width={800}
                height={600}
                sizes="(min-width: 68rem) 30vw, (min-width: 40rem) 46vw, 92vw"
                loading={i < 3 ? 'eager' : 'lazy'}
              />
              <span className="work__no mono">
                {ui.catalogueNo} {roman(item.n)}
              </span>
              {item.draft && <span className="work__flag">{ui.inPreparation}</span>}
            </div>

            <div className="work__body">
              <span className="work__group">{ui.groups[item.group]}</span>
              <h3 className="work__title">{item.text.title}</h3>
              <p className="work__lede">{item.text.lede}</p>

              <details>
                <summary>{ui.readMore}</summary>
                <p>{item.text.body}</p>
              </details>

              <div className="work__foot">
                <span className="work__dur">{item.text.duration}</span>
                {(item.text.notes ?? []).map((note) => (
                  <span
                    key={note}
                    className={`work__note${/бронюв|Bookin|booked|заздалег|заранее|advance/i.test(note) ? ' work__note--flag' : ''}`}
                  >
                    {note}
                  </span>
                ))}
              </div>

              {item.draft ? (
                <p className="work__note" style={{ marginTop: '0.5rem' }}>
                  {ui.inPreparationNote}
                </p>
              ) : (
                <button
                  type="button"
                  className="textlink textlink--ink"
                  style={{ marginTop: '0.5rem', background: 'none', border: 0, padding: 0, cursor: 'pointer' }}
                  onClick={() => pickTour(item.text.title)}
                >
                  {bookLabel}
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
