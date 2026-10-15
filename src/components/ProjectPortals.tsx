import React, { useState } from 'react';
import { Sparkles, Orbit } from 'lucide-react';
import type { Project } from '../types/portfolio';

import { PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

interface ProjectPortalsProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectPortals: React.FC<ProjectPortalsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Dimensions', count: 6 },
    { id: 'ai-workflows', label: 'Autonomous AI', count: 1 },
    { id: 'security', label: 'Cyber Defense', count: 1 },
    { id: 'realtime', label: 'Real-Time & Sync', count: 2 },
    { id: 'decision-ml', label: 'Decision ML', count: 1 },
    { id: 'voice', label: 'Voice Systems', count: 1 },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.domainFilter === activeFilter;
  });

  return (
    <section id="portals" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-4 backdrop-blur-md">
          <Orbit className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '10s' }} />
          <span>PROJECT PORTALS // 6 EXPLORABLE REALMS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading mb-4">
          The Engineering Multiverse
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
          Six distinct production repositories spanning distributed orchestration, multi-channel cyber defense,
          real-time WebSockets, voice processing pipelines, and causal machine learning decision engines.
        </p>
      </div>

      {/* Multiverse Realm Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                isActive
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/40 border border-purple-400/40'
                  : 'bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/5'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onSelect={onSelectProject} />
        ))}
      </div>

      {/* Multiverse Continuity Note */}
      <div className="mt-12 p-4 rounded-xl bg-slate-900/40 border border-white/5 backdrop-blur-sm text-center max-w-2xl mx-auto flex items-center justify-center gap-3 text-xs text-slate-400">
        <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0" />
        <span>
          Every project is backed by active source code repositories, verified benchmarks, and authentic screenshots.
        </span>
      </div>
    </section>
  );
};
