'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * The one motion moment: content rises gently into place on scroll. Gated on a
 * `js` class so nothing is ever hidden without JavaScript, skipped for
 * reduced-motion, and rebuilt on navigation so the next page animates too.
 *
 * Anything already inside (or near) the viewport on load is revealed at once —
 * only elements further down wait for the observer. This keeps the first
 * viewport from ever sitting faded.
 */
export function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const root = document.documentElement;
    root.classList.add('js');

    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.in)'));
    if (!els.length) return;

    if (!('IntersectionObserver' in window)) {
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
      { rootMargin: '0px 0px -8% 0px', threshold: 0.04 },
    );

    // First frame: reveal what's already on screen; observe the rest.
    const raf = requestAnimationFrame(() => {
      const trigger = window.innerHeight * 0.92;
      for (const el of els) {
        if (el.classList.contains('in')) continue;
        if (el.getBoundingClientRect().top < trigger) {
          el.classList.add('in');
        } else {
          io.observe(el);
        }
      }
    });

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
