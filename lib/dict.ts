import type { SectionSlug, SectionText, TourGroup, TourText } from './types';

export type Dictionary = {
  /** Language name as it appears on the trilingual label. */
  langName: string;
  meta: {
    title: string;
    description: string;
  };
  ui: {
    room: string;
    skipToContent: string;
    menu: string;
    close: string;
    rooms: string;
    language: string;
    catalogueNo: string;
    duration: string;
    languages: string;
    languagesValue: string;
    booking: string;
    bookingValue: string;
    inPreparation: string;
    inPreparationNote: string;
    all: string;
    groups: Record<TourGroup, string>;
    readMore: string;
    less: string;
    write: string;
    call: string;
    backHome: string;
    notFound: string;
    notFoundBody: string;
  };
  nav: Record<SectionSlug, string>;
  navGroups: { label: string; items: SectionSlug[] }[];
  home: {
    eyebrow: string;
    exhibit: {
      title: string;
      dates: string;
      materialsLabel: string;
      materials: string;
      provenanceLabel: string;
      provenance: string;
      guideLabel: string;
      guide: string;
    };
    thesis: string;
    thesisAttribution: string;
    scroll: string;
    rooms: {
      guide: string;
      catalogue: string;
      section: string;
      services: string;
      reference: string;
      desk: string;
    };
    guide: {
      standfirst: string;
      paragraphs: string[];
      facts: [string, string][];
      portraitPlaceholder: string;
      pullquote: string;
      more: string;
    };
    catalogue: {
      standfirst: string;
      note: string;
      allTours: string;
    };
    /** Room IV — one tour taken apart to show the method. */
    section: {
      standfirst: string;
      intro: string;
      layers: { depth: string; era: string; title: string; text: string }[];
      outro: string;
      cta: string;
    };
    services: {
      standfirst: string;
      items: { title: string; text: string }[];
      note: string;
    };
    reference: {
      standfirst: string;
      note: string;
    };
    desk: {
      standfirst: string;
      intro: string;
      form: {
        legend: string;
        date: string;
        datePlaceholder: string;
        tour: string;
        tourPlaceholder: string;
        time: string;
        timePlaceholder: string;
        people: string;
        peoplePlaceholder: string;
        contact: string;
        contactPlaceholder: string;
        message: string;
        whatsapp: string;
        email: string;
        hint: string;
        preview: string;
        greeting: string;
        fields: { date: string; tour: string; time: string; people: string; contact: string };
        signature: string;
      };
      contacts: { label: string; value: string; href?: string }[];
      hours: string;
    };
    footer: {
      note: string;
      imagery: string;
      credit: string;
    };
  };
  tours: Record<string, TourText>;
  sections: Record<SectionSlug, SectionText>;
};
