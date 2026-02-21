"use client";

import { useEffect, useRef, useState } from "react";

type LazyVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  label?: string;
};

export default function LazyVideo({
  src,
  poster,
  className,
  autoPlay = false,
  loop = true,
  muted = true,
  label = "Project highlight video",
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [allowMotion, setAllowMotion] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setAllowMotion(!mediaQuery.matches);
    update();
    mediaQuery.addEventListener?.("change", update);
    return () => mediaQuery.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    const element = videoRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const element = videoRef.current;
    if (!element || !shouldLoad) return;

    element.src = src;
    element.load();

    if (autoPlay && allowMotion) {
      element.play().catch(() => undefined);
    }
  }, [allowMotion, autoPlay, shouldLoad, src]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      muted={muted}
      loop={loop}
      playsInline
      preload="none"
      aria-label={label}
    />
  );
}
