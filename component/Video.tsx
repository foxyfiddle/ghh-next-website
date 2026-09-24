'use client';

import React, { useEffect, useRef } from 'react';

interface VideoProps {
  src: string;
  className?: string; // Optional additional CSS classes
}

function Video({ src, className }: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // React doesn't put the `muted` attribute in server-rendered HTML,
  // so browsers block autoplay. Set it on the element and start playback here.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

export default Video;
