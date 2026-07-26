'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * The one motion moment: content rises gently into place on scroll. Gated on a
 * `js` class so nothing is ever hidden without JavaScript, skipped entirely for
 * reduced-motion, and rebuilt on navigation so the next page animates too.
 */
export function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    root.classList.add('js');

    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.in)'));
    if (!els.length || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('in');
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
