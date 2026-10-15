import React, { useEffect, useRef, useState } from 'react';

interface ScrollVideoBackgroundProps {
  scrollProgress: number; // 0 to 1
  videoSrc?: string;
  fallbackSrc?: string;
  reducedMotion?: boolean;
}

export const ScrollVideoBackground: React.FC<ScrollVideoBackgroundProps> = ({
  scrollProgress,
  videoSrc = '/assets/spiderverse-scroll.mp4',
  reducedMotion = false,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const targetTimeRef = useRef<number>(0);
  const durationRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
  const [videoError, setVideoError] = useState<boolean>(false);

  // Update target time whenever scroll progress changes
  useEffect(() => {
    if (durationRef.current > 0) {
      const clamped = Math.max(0, Math.min(1, scrollProgress));
      targetTimeRef.current = clamped * durationRef.current;
    }
  }, [scrollProgress]);

  // Video metadata and event listeners
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video is paused and muted for scroll scrubbing
    video.pause();
    video.muted = true;

    const handleLoadedMetadata = () => {
      if (video.duration && !isNaN(video.duration) && isFinite(video.duration)) {
        durationRef.current = video.duration;
        targetTimeRef.current = Math.max(0, Math.min(1, scrollProgress)) * video.duration;
        setVideoLoaded(true);
      }
    };

    const handleSeeking = () => {
      isSeekingRef.current = true;
    };

    const handleSeeked = () => {
      isSeekingRef.current = false;
    };

    const handleError = () => {
      setVideoError(true);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('seeking', handleSeeking);
    video.addEventListener('seeked', handleSeeked);
    video.addEventListener('error', handleError);

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('seeking', handleSeeking);
      video.removeEventListener('seeked', handleSeeked);
      video.removeEventListener('error', handleError);
    };
  }, [videoSrc, scrollProgress]);

  // RequestAnimationFrame smooth scrubbing loop
  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;

    let animFrameId: number;

    const render = () => {
      if (durationRef.current > 0 && video.readyState >= 2) {
        const target = targetTimeRef.current;
        const current = video.currentTime;
        const diff = target - current;

        // If not actively seeking and there is a noticeable difference, scrub
        if (!isSeekingRef.current && Math.abs(diff) > 0.03) {
          // Smooth step towards target
          const step = Math.abs(diff) > 0.8 ? target : current + diff * 0.35;
          video.currentTime = Math.min(durationRef.current, Math.max(0, step));
        }
      }

      animFrameId = requestAnimationFrame(render);
    };

    animFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrameId);
    };
  }, [reducedMotion]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030712]"
      aria-hidden="true"
    >
      {/* Video Element (Scrubbed by scroll) */}
      {!videoError && !reducedMotion ? (
        <video
          ref={videoRef}
          src={videoSrc}
          playsInline
          muted
          preload="auto"
          className={`w-full h-full object-cover transition-opacity duration-700 select-none ${
            videoLoaded ? 'opacity-80' : 'opacity-0'
          }`}
          style={{
            objectPosition: 'center center',
            filter: 'brightness(0.9) contrast(1.12) saturate(1.25)',
          }}
        />
      ) : (
        /* Fallback background for errors or reduced-motion */
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#090e24] to-[#030712]" />
      )}

      {/* Spider-Verse Cinematic Atmospheric Color Grading & Overlays */}
      {/* 1. Smooth Cinematic Vignette to keep text readable without muddying the video */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_35%,rgba(3,7,18,0.5)_70%,#030712_100%)] pointer-events-none" />

      {/* 2. Top & Bottom gradient fades for navbar & footer readability */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#030712] via-[#030712]/80 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#030712] via-[#030712]/85 to-transparent pointer-events-none" />

      {/* 3. Subtle Spider-Man electric red & blue atmospheric edge wash */}
      <div className="absolute inset-0 bg-gradient-to-tr from-red-600/12 via-transparent to-cyan-500/12 pointer-events-none" />

      {/* 4. Fine Spider-Verse halftone texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
    </div>
  );
};
