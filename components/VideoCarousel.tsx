'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { VIDEOS } from '@/lib/site';
import { Arrow, Play } from './icons';

/**
 * Home video carousel: three slides, the centre one active, scroll left/right
 * to the others (native swipe on touch, arrows on desktop). Each slide plays
 * its YouTube video on click once `youtubeId` is set; until then a labelled
 * poster shows.
 */
export function VideoCarousel({ caption, soon, watch }: { caption: string; soon: string; watch: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState<number | null>(null);

  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.querySelector<HTMLElement>('.video');
    const step = slide ? slide.clientWidth + 16 : track.clientWidth * 0.7;
    track.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <div className="vcarousel reveal">
      <button type="button" className="vcarousel__btn vcarousel__btn--prev" onClick={() => scroll(-1)} aria-label="←">
        <Arrow style={{ transform: 'rotate(180deg)' }} />
      </button>

      <div className="vcarousel__track" ref={trackRef}>
        {VIDEOS.map((v, i) => {
          const isPlaying = playing === i && v.youtubeId;
          return (
            <div className="video" key={i}>
              {isPlaying ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}?autoplay=1&rel=0`}
                  title={`${caption} — ${i + 1}`}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <Image
                    src={`${v.poster}?auto=format&fit=crop&w=1000&q=70`}
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
