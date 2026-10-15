import React from 'react';
import type { SceneId } from '../../hooks/useScrollTimeline';
import { SpiderManEmblem } from '../MCUIcons';

interface ScrollProgressIndicatorProps {
  progress: number; // 0 to 1
  activeScene: SceneId;
}

export const ScrollProgressIndicator: React.FC<ScrollProgressIndicatorProps> = ({
  progress,
  activeScene,
}) => {
  const percent = Math.round(progress * 100);

  const sceneLabels: Record<SceneId, string> = {
    rooftop: 'Rooftop Overlook',
    story: 'Developer Story',
    projects: 'Project Web',
    arsenal: 'Infinity Arsenal',
    contact: 'Final Vantage',
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2.5 bg-slate-950/80 border border-white/15 px-3 py-1.5 rounded-full backdrop-blur-xl shadow-2xl pointer-events-none select-none">
      {/* Miniature MCU Spider-Man Emblem */}
      <div className="relative">
        <SpiderManEmblem size={20} glow={false} />
      </div>

      {/* Current Scene Name */}
      <span className="text-[11px] font-mono text-slate-200 uppercase tracking-wider font-semibold">
        {sceneLabels[activeScene]}
      </span>

      <span className="text-slate-600 font-mono">•</span>

      {/* Progress % */}
      <span className="text-[11px] font-mono text-cyan-400 font-bold min-w-[28px] text-right">
        {percent}%
      </span>

      {/* Mini Progress Bar */}
      <div className="w-12 h-1 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-red-500 to-cyan-400 transition-all duration-75"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};
