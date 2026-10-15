import { useState, useEffect, useCallback } from 'react';

export type SceneId = 'rooftop' | 'story' | 'projects' | 'arsenal' | 'contact';

export interface ScrollTimelineState {
  progress: number; // 0 to 1
  activeScene: SceneId;
  activeProjectIndex: number; // 0 to 5
  reducedMotion: boolean;
  scrollToScene: (scene: SceneId) => void;
  scrollToProgress: (target: number) => void;
}

export const useScrollTimeline = (): ScrollTimelineState => {
  const [progress, setProgress] = useState(0);
  const [activeScene, setActiveScene] = useState<SceneId>('rooftop');
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');


    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    motionQuery.addEventListener('change', handleMotionChange);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      const p = Math.max(0, Math.min(1, scrollY / maxScroll));
      setProgress(p);

      // Determine active scene based on named progress ranges
      if (p < 0.15) {
        setActiveScene('rooftop');
      } else if (p < 0.35) {
        setActiveScene('story');
      } else if (p < 0.65) {
        setActiveScene('projects');
        // Map 0.35 -> 0.65 to 6 projects (each spanning ~0.05)
        const projP = (p - 0.35) / 0.30;
        const idx = Math.min(5, Math.max(0, Math.floor(projP * 6)));
        setActiveProjectIndex(idx);
      } else if (p < 0.82) {
        setActiveScene('arsenal');
      } else {
        setActiveScene('contact');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToProgress = useCallback((target: number) => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const targetY = target * maxScroll;
    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });
  }, []);

  const scrollToScene = useCallback((scene: SceneId) => {
    switch (scene) {
      case 'rooftop':
        scrollToProgress(0.0);
        break;
      case 'story':
        scrollToProgress(0.20);
        break;
      case 'projects':
        scrollToProgress(0.40);
        break;
      case 'arsenal':
        scrollToProgress(0.70);
        break;
      case 'contact':
        scrollToProgress(0.92);
        break;
    }
  }, [scrollToProgress]);

  return {
    progress,
    activeScene,
    activeProjectIndex,
    reducedMotion,
    scrollToScene,
    scrollToProgress,
  };
};
