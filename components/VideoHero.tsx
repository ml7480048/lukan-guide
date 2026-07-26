'use client';

import Image from 'next/image';
import { useState } from 'react';
import { VIDEO } from '@/lib/site';
import { Play } from './icons';

/**
 * The video is the heart of this version. When VIDEO.youtubeId is set, the
 * poster is replaced by the embedded player on click. Until then, a labelled
 * poster makes clear that Oleksandra's own video is coming.
 */
export function VideoHero({ caption, soon, watch }: { caption: string; soon: string; watch: string }) {
  const [playing, setPlaying] = useState(false);
  const id = VIDEO.youtubeId;

  if (playing && id) {
    return (
      <div className="video reveal">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={caption}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="video reveal">
      <Image src={`${VIDEO.poster}?auto=format&fit=crop&w=1200&q=70`} alt="" fill priority sizes="(min-width: 62rem) 50vw, 100vw" />
      <div className="video__scrim" />
      <button type="button" className="video__play" onClick={() => id && setPlaying(true)} aria-label={id ? watch : soon}>
        <span className="video__disc">
          <Play />
        </span>
        <span className="video__caption">{caption}</span>
      </button>
      {!id && <span className="video__tag">{soon}</span>}
    </div>
  );
}
