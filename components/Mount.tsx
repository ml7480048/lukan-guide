'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * The one orchestrated motion in the page body: plates arrive mounted on the
 * wall rather than sliding in from nowhere. Nothing is hidden until JS is
 * present (the `js` class gates the whole effect), and reduced-motion users
 * never see it at all.
 */
export function Mount() {
  // This component lives in the layout, so without the pathname dependency the
  // observer would never be rebuilt for a client-side navigation and every
  // plate on the next page would stay half-faded.
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    root.classList.add('js');

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('.mountable:not(.is-mounted)'),
    );
    if (!targets.length || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-mounted'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.mountDelay ?? 0);
          window.setTimeout(() => el.classList.add('is-mounted'), delay);
          io.unobserve(el);
        }
      },
      { rootMargin: '160px 0px -6% 0px', threshold: 0.01 },
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
