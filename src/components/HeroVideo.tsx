"use client";

import { useEffect, useState } from "react";

type HeroVideoProps = {
  src: string;
  poster?: string;
  className?: string;
};

export default function HeroVideo({ src, poster, className }: HeroVideoProps) {
  const [allowMotion, setAllowMotion] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setAllowMotion(!mediaQuery.matches);
    update();
    mediaQuery.addEventListener?.("change", update);
    return () => mediaQuery.removeEventListener?.("change", update);
  }, []);

  return (
    <video
      className={className}
      src={src}
      poster={poster}
      autoPlay={allowMotion}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label="Drone montage of recent construction projects"
    />
  );
}
