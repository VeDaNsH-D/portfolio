import React, { useState } from 'react';
import { ExternalLink, Sparkles, ArrowUpRight, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

import { GithubIcon } from '../Icons';
import type { Project } from '../../types/portfolio';
import { PROJECTS } from '../../data/portfolioData';

interface Scene03ProjectWebProps {
  activeProjectIndex: number;
  onSelectProject: (project: Project) => void;
}

export const Scene03ProjectWeb: React.FC<Scene03ProjectWebProps> = ({
  activeProjectIndex,
  onSelectProject,
}) => {
  // Allow local override for manual tab clicking
  const [localIndex, setLocalIndex] = useState<number | null>(null);

  const currentIndex = localIndex !== null ? localIndex : activeProjectIndex;
  const currentProject = PROJECTS[currentIndex] || PROJECTS[0];

  const handlePrev = () => {
    setLocalIndex((prev) => {
      const cur = prev !== null ? prev : activeProjectIndex;
      return cur > 0 ? cur - 1 : PROJECTS.length - 1;
    });
  };

  const handleNext = () => {
    setLocalIndex((prev) => {
      const cur = prev !== null ? prev : activeProjectIndex;
      return cur < PROJECTS.length - 1 ? cur + 1 : 0;
    });
  };

  return (
    <section className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 z-10 flex flex-col justify-center max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-mono mb-3 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>SCENE 03 // THE PROJECT WEB (6 LOCATIONS)</span>
        </div>

        <h2 className="font-marvel text-4xl sm:text-6xl md:text-7xl tracking-wide text-white uppercase leading-none">
          Skyline Engineering Showcase
        </h2>
        <p className="text-slate-200 text-xs sm:text-sm font-light mt-2 max-w-xl mx-auto">
          Swinging past six production repositories. Scroll to traverse the city or jump directly to any building node below.
        </p>
      </div>

      {/* Spider-Web Quick Location Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {PROJECTS.map((proj, idx) => {
          const isSelected = currentIndex === idx;
          return (
            <button
              key={proj.id}
              onClick={() => setLocalIndex(idx)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-pointer flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 ${
                isSelected
                  ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-900/50 border border-red-400/50 font-bold'
                  : 'bg-slate-900/70 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/10'
              }`}
            >
              <span className="opacity-60">{`0${idx + 1}`}</span>
              <span>{proj.name}</span>
            </button>
          );
        })}
      </div>

      {/* Central Suspended Stark-HUD High-Rise Project Card */}
      <div className="relative rounded-3xl stark-glass-card p-6 sm:p-10 overflow-hidden transition-all duration-500">
        {/* Accent Top Bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1.5"
          style={{
            background: `linear-gradient(to right, ${currentProject.theme.primaryColor}, ${currentProject.theme.secondaryColor})`,
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Project Real Screenshot with Comic Framing */}
          <div className="lg:col-span-6 relative group">
            <div
              className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl cursor-pointer"
              onClick={() => onSelectProject(currentProject)}
            >
              <img
                src={currentProject.screenshots[0]?.url}
                alt={`${currentProject.name} Screenshot`}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

              {/* View Case Study Overlay on Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#e23636] text-white font-semibold text-xs shadow-xl font-marvel tracking-wider">
                  <Eye className="w-4 h-4" />
                  <span>INSPECT FULL CASE STUDY</span>
                </span>
              </div>

              {/* Dimension Badge */}
              <div className="absolute top-3 left-3">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium backdrop-blur-md border ${currentProject.theme.badgeBg}`}
                >
                  <Sparkles className="w-3 h-3 animate-pulse" />
                  {currentProject.dimensionTitle}
                </span>
              </div>

              {/* Live Demo Pill */}
              {currentProject.demoUrl && (
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    LIVE DEMO
                  </span>
                </div>
              )}
            </div>

            {/* Screenshot Caption */}
            <p className="mt-2 text-[11px] font-mono text-slate-400 truncate">
              {currentProject.screenshots[0]?.caption}
            </p>
          </div>

          {/* Right Column: Project Narrative & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-400">
                  {currentProject.category}
                </span>
                <span className="text-xs font-mono text-cyan-300/80">
                  Node {currentIndex + 1} of 6
                </span>
              </div>

              <h3 className="font-marvel text-3xl sm:text-5xl font-normal text-white uppercase tracking-wide mb-3">
                {currentProject.name}
              </h3>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-light mb-6">
                {currentProject.summary}
              </p>

              {/* Tech Stack Pills */}
              <div className="mb-8">
                <p className="text-[10px] font-mono uppercase text-slate-400 mb-2 font-semibold">
                  Verified Technology Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {currentProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-900/80 text-slate-200 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions Toolbar */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
              {/* Detailed Case Study Trigger */}
              <button
                onClick={() => onSelectProject(currentProject)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-marvel text-base tracking-wider text-white bg-[#e23636] hover:bg-[#dc2626] shadow-lg shadow-red-950/40 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span>Full Case Study & Architecture</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {/* GitHub Repo */}
              <a
                href={currentProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/10 transition-colors text-xs font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              {/* Live Demo if exists */}
              {currentProject.demoUrl && (
                <a
                  href={currentProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/40 transition-colors text-xs font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}

              {/* Carousel arrows */}
              <div className="ml-auto flex items-center gap-1.5">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Previous Project"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Next Project"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
