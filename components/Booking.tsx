'use client';

import { useMemo, useState } from 'react';
import { CONTACT } from '@/lib/site';
import type { Dict } from '@/lib/site';
import { Mail, Phone, WhatsApp, Viber } from './icons';

/**
 * The whole booking mechanism, per the brief: WhatsApp/Viber with a ready
 * message. The form composes the text; the buttons hand it to WhatsApp, Viber
 * or email. Nothing is submitted to a server, so there is nothing for
 * Oleksandra to set up — she just receives a normal message.
 */
export function Booking({ t, presetPlace }: { t: Dict['book']; presetPlace?: string }) {
  const f = t.form;
  const [date, setDate] = useState('');
  const [place, setPlace] = useState(presetPlace ?? '');
  const [people, setPeople] = useState('');
  const [name, setName] = useState('');

  const dash = '—';
  const message = useMemo(() => {
    return [
      f.greeting,
      '',
      `${f.lineDate}: ${date || dash}`,
      `${f.linePlace}: ${place || dash}`,
      `${f.linePeople}: ${people || dash}`,
      `${f.lineName}: ${name || dash}`,
    ].join('\n');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, place, people, name]);

  const enc = encodeURIComponent(message);
  const wa = `https://wa.me/${CONTACT.whatsapp}?text=${enc}`;
  const viber = `viber://chat?number=%2B${CONTACT.viber}`;
  const mail = `mailto:${CONTACT.email}?subject=${encodeURIComponent(t.title)}&body=${enc}`;

  return (
    <div className="bookcard reveal">
      <div className="field">
        <label htmlFor="bk-date">{f.date}</label>
        <input id="bk-date" value={date} onChange={(e) => setDate(e.target.value)} placeholder={f.datePh} autoComplete="off" />
      </div>
      <div className="field">
        <label htmlFor="bk-place">{f.place}</label>
        <input id="bk-place" value={place} onChange={(e) => setPlace(e.target.value)} placeholder={f.placePh} autoComplete="off" />
      </div>
      <div className="field">
        <label htmlFor="bk-people">{f.people}</label>
        <input id="bk-people" value={people} onChange={(e) => setPeople(e.target.value)} placeholder={f.peoplePh} autoComplete="off" />
      </div>
      <div className="field">
        <label htmlFor="bk-name">{f.name}</label>
        <input id="bk-name" value={name} onChange={(e) => setName(e.target.value)} placeholder={f.namePh} autoComplete="name" />
      </div>

      <div className="bookcard__actions">
        <a className="btn btn--wa btn--lg btn--block" href={wa} target="_blank" rel="noopener noreferrer">
          <WhatsApp />
          {f.whatsapp}
        </a>
        <a className="btn btn--viber btn--block" href={viber}>
          <Viber />
          {f.viber}
        </a>
        <a className="btn btn--ghost btn--block" href={mail}>
          <Mail />
          {f.email}
        </a>
      </div>

      <p className="bookcard__hint">{f.hint}</p>

      <div className="contacts">
        <a href={`tel:${CONTACT.phoneTel}`}>
          <Phone />
          {CONTACT.phoneHuman}
        </a>
        <a href={`mailto:${CONTACT.email}`}>
          <Mail />
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
}
