'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { VIDEOS } from '@/lib/site';
import { Arrow, Play } from './icons';

/**
 * Home video carousel: three slides, the centre one active, scroll left/right
 * to the others (native swipe on touch, arrows on desktop). The slide most in
 * view autoplays its looping, muted clip; the rest hold on their poster. A
 * real YouTube video (if `youtubeId` is ever set) takes priority and plays on
 * click.
 */
export function VideoCarousel({ caption, soon, watch }: { caption: string; soon: string; watch: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState<number | null>(null);
  const [active, setActive] = useState(0);

  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.querySelector<HTMLElement>('.video');
    const step = slide ? slide.clientWidth + 16 : track.clientWidth * 0.7;
    track.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  // Track which slide is centred so only that clip plays.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const slides = Array.from(track.querySelectorAll<HTMLElement>('.video'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio >= 0.6) {
            const i = slides.indexOf(e.target as HTMLElement);
            if (i >= 0) setActive(i);
          }
        });
      },
      { root: track, threshold: [0.6] },
    );
    slides.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <div className="vcarousel reveal">
      <button type="button" className="vcarousel__btn vcarousel__btn--prev" onClick={() => scroll(-1)} aria-label="←">
        <Arrow style={{ transform: 'rotate(180deg)' }} />
      </button>

      <div className="vcarousel__track" ref={trackRef}>
        {VIDEOS.map((v, i) => {
          const isYouTube = playing === i && v.youtubeId;
          const isActive = active === i;
          return (
            <div className={`video${isActive ? ' video--active' : ''}`} key={i}>
              {isYouTube ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}?autoplay=1&rel=0`}
                  title={`${caption} — ${i + 1}`}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              ) : v.src ? (
                <>
                  <video
                    src={v.src}
                    poster={`${v.poster}?w=1000&q=70`}
                    muted
                    loop
                    playsInline
                    preload={i === 0 ? 'auto' : 'metadata'}
                    autoPlay={isActive}
                    ref={(el) => {
                      if (!el) return;
                      if (isActive) el.play().catch(() => {});
                      else el.pause();
                    }}
                  />
                  <div className="video__scrim" />
                  {i === 0 && <span className="video__caption">{caption}</span>}
                </>
              ) : (
                <>
                  <Image
                    src={`${v.poster}?w=1000&q=70`}
                    alt=""
                    fill
                    sizes="(min-width: 62rem) 40vw, 80vw"
                    priority={i === 0}
                  />
                  <div className="video__scrim" />
                  <button
                    type="button"
                    className="video__play"
                    onClick={() => v.youtubeId && setPlaying(i)}
                    aria-label={v.youtubeId ? watch : soon}
                  >
                    <span className="video__disc">
                      <Play />
                    </span>
                    {i === 0 && <span className="video__caption">{caption}</span>}
                  </button>
                  {!v.youtubeId && <span className="video__tag">{soon}</span>}
                </>
              )}
            </div>
          );
        })}
      </div>

      <button type="button" className="vcarousel__btn vcarousel__btn--next" onClick={() => scroll(1)} aria-label="→">
        <Arrow />
      </button>
    </div>
  );
}
