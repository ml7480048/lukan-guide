import type { SVGProps } from 'react';

const base: SVGProps<SVGSVGElement> = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export const Play = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M8 5v14l11-7z" />
  </svg>
);

export const Arrow = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Phone = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

export const Mail = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

export const Camera = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

export const Menu = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

export const Close = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const Star = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
  </svg>
);

export const WhatsApp = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M17.5 14.4c-.3-.15-1.7-.85-2-.95-.26-.1-.45-.15-.64.15-.2.3-.74.94-.9 1.13-.17.2-.34.22-.63.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.45.13-.6.13-.13.3-.34.45-.5.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49h-.55c-.2 0-.5.07-.77.37-.26.3-1 1-1 2.42 0 1.43 1.03 2.8 1.17 3 .15.2 2.03 3.1 4.9 4.35.69.3 1.22.47 1.64.6.69.22 1.32.19 1.81.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.2-.55-.34zM12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.44 1.27 4.89L2 22l5.25-1.38A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.1.82.83-3.03-.2-.31A8.2 8.2 0 1 1 12 20.2z" />
  </svg>
);

export const Viber = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12 2C7.9 2 4 3.1 3.2 6.5c-.6 2.4-.6 5.6 0 8 .5 2 2 3.3 3.8 3.9V22l2.6-2.3c.8.1 1.6.1 2.4.1 4.1 0 8-1 8.8-4.4.6-2.4.6-5.6 0-8C20 3.1 16.1 2 12 2zm4.6 12c-.2.5-.9.9-1.4 1-.4 0-.5.3-2.5-.6-1.6-.8-2.6-2.4-2.7-2.5-.1-.1-.7-.9-.7-1.7 0-.8.4-1.2.6-1.4.1-.2.3-.2.4-.2h.4c.1 0 .3 0 .4.4l.5 1.2c0 .1.1.2 0 .3l-.2.3-.2.2c-.1.1-.2.2-.1.4.1.2.5.9 1.1 1.4.8.6 1.3.8 1.5.9.2.1.3 0 .4-.1l.5-.6c.1-.2.3-.1.4-.1l1.2.6c.1.1.2.1.3.1 0 .2 0 .6-.2 1zM13 8.4c1.7.2 2.5 1.1 2.6 2.8m-3-4.5c3 .1 4.4 1.6 4.5 4.7M11 4.9c4.4 0 6.6 2.3 6.7 6.9" opacity=".95" />
    <path d="M12 2C7.9 2 4 3.1 3.2 6.5c-.6 2.4-.6 5.6 0 8 .5 2 2 3.3 3.8 3.9V22l2.6-2.3c.8.1 1.6.1 2.4.1 4.1 0 8-1 8.8-4.4.6-2.4.6-5.6 0-8C20 3.1 16.1 2 12 2z" fill="currentColor" />
  </svg>
);

export const Instagram = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const Facebook = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M14 9V7c0-.9.6-1 1-1h2V3h-3c-2.2 0-4 1.8-4 4v2H8v3h2v9h3v-9h2.5l.5-3z" />
  </svg>
);

export const YouTube = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M23 12s0-3.4-.4-5c-.2-.9-.9-1.6-1.8-1.8C19.1 4.8 12 4.8 12 4.8s-7.1 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 8.6 1 12 1 12s0 3.4.4 5c.2.9.9 1.6 1.8 1.8 1.7.4 8.8.4 8.8.4s7.1 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-5 .4-5zM9.8 15.3V8.7l5.7 3.3z" />
  </svg>
);

export const Telegram = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M21.9 4.3 18.6 20c-.2 1-.9 1.3-1.8.8l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.3-4.9 9-8.1c.4-.3-.1-.5-.6-.2L6.4 13 1.6 11.5c-1-.3-1-1 .2-1.5l18.7-7.2c.9-.3 1.6.2 1.4 1.5z" />
  </svg>
);

export const SOCIAL_ICON = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: YouTube,
  telegram: Telegram,
} as const;

export const SOCIAL_LABEL = {
  instagram: 'Instagram',
  facebook: 'Facebook',
  youtube: 'YouTube',
  telegram: 'Telegram',
} as const;
