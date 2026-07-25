'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { CONTACT } from '@/lib/content';
import type { Dictionary } from '@/lib/dict';

type Key = 'date' | 'tour' | 'time' | 'people' | 'contact';

/**
 * The ticket stub. Oleksandra's own instructions say an enquiry must carry a
 * date, a subject, a time and a reply address — so the form is that list, and
 * the stub composes the message instead of asking the traveller to write one.
 * Nothing is submitted to a server: the buttons hand the composed text to
 * WhatsApp or the traveller's mail client.
 */
export function Ticket({
  t,
  tourTitles,
}: {
  t: Dictionary['home']['desk'];
  tourTitles: string[];
}) {
  const f = t.form;
  const [values, setValues] = useState<Record<Key, string>>({
    date: '',
    tour: '',
    time: '',
    people: '',
    contact: '',
  });
  const [changed, setChanged] = useState<Key | null>(null);
  const tourRef = useRef<HTMLSelectElement>(null);

  const set = (key: Key) => (value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setChanged(key);
  };

  useEffect(() => {
    if (!changed) return;
    const id = window.setTimeout(() => setChanged(null), 900);
    return () => window.clearTimeout(id);
  }, [changed, values]);

  // A catalogue plate can hand its title straight to the stub.
  useEffect(() => {
    const onPick = (e: Event) => {
      const title = (e as CustomEvent<string>).detail;
      setValues((v) => ({ ...v, tour: title }));
      setChanged('tour');
      window.setTimeout(() => tourRef.current?.focus(), 700);
    };
    window.addEventListener('lukan:pick-tour', onPick);
    return () => window.removeEventListener('lukan:pick-tour', onPick);
  }, []);

  const dash = '—';
  const lines: [Key, string, string][] = [
    ['date', f.fields.date, values.date || dash],
    ['tour', f.fields.tour, values.tour || dash],
    ['time', f.fields.time, values.time || dash],
    ['people', f.fields.people, values.people || dash],
    ['contact', f.fields.contact, values.contact || dash],
  ];

  const message = useMemo(
    () =>
      [
        f.greeting,
        '',
        ...lines.map(([, label, value]) => `${label}: ${value}`),
        '',
        f.signature,
      ].join('\n'),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [values, f.greeting, f.signature],
  );

  const wa = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
  const mail = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    `${f.legend}${values.tour ? ` — ${values.tour}` : ''}`,
  )}&body=${encodeURIComponent(message)}`;

  return (
    <div className="ticket mountable">
      <div className="ticket__side">
        <div className="ticket__legend">
          <span>{f.legend}</span>
          <span className="mono" style={{ letterSpacing: '0.06em' }}>
            №&nbsp;{new Date().getFullYear()}
          </span>
        </div>

        <div className="fields">
          <label className="fld">
            <span>{f.date}</span>
            <input
              type="text"
              inputMode="text"
              value={values.date}
              placeholder={f.datePlaceholder}
              onChange={(e) => set('date')(e.target.value)}
              autoComplete="off"
            />
          </label>

          <label className="fld">
            <span>{f.time}</span>
            <input
              type="text"
              value={values.time}
              placeholder={f.timePlaceholder}
              onChange={(e) => set('time')(e.target.value)}
              autoComplete="off"
            />
          </label>

          <label className="fld fld--wide">
            <span>{f.tour}</span>
            <select
              ref={tourRef}
              value={values.tour}
              onChange={(e) => set('tour')(e.target.value)}
            >
              <option value="">{f.tourPlaceholder}</option>
              {tourTitles.map((title) => (
                <option key={title} value={title}>
                  {title}
                </option>
              ))}
            </select>
          </label>

          <label className="fld">
            <span>{f.people}</span>
            <input
              type="text"
              value={values.people}
              placeholder={f.peoplePlaceholder}
              onChange={(e) => set('people')(e.target.value)}
              autoComplete="off"
            />
          </label>

          <label className="fld">
            <span>{f.contact}</span>
            <input
              type="text"
              value={values.contact}
              placeholder={f.contactPlaceholder}
              onChange={(e) => set('contact')(e.target.value)}
              autoComplete="email"
            />
          </label>
        </div>
      </div>

      <div className="ticket__side">
        <p className="stub__title">{f.preview}</p>

        <div className="stub__msg" aria-live="polite">
          {f.greeting}
          {'\n\n'}
          {lines.map(([key, label, value]) => (
            <span key={key}>
              {label}:{' '}
              <b className={changed === key ? 'is-changed' : undefined}>{value}</b>
              {'\n'}
            </span>
          ))}
          {'\n'}
          {f.signature}
        </div>

        <div className="stub__actions">
          <a className="btn btn--primary" href={wa} target="_blank" rel="noopener noreferrer">
            {f.whatsapp}
          </a>
          <a className="btn btn--ghost" href={mail}>
            {f.email}
          </a>
        </div>

        <p className="stub__hint">{f.hint}</p>
      </div>
    </div>
  );
}
