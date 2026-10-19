import React, { useState } from 'react';
import {
  Sparkles,
} from 'lucide-react';
import { SKILL_CATEGORIES, ACHIEVEMENTS } from '../../data/portfolioData';
import {
  SpiderManEmblem,
  IronManReactorEmblem,
  DoctorStrangeEmblem,
  CaptainAmericaShieldEmblem,
  ThorMjolnirEmblem,
  AvengersEmblem,
  MCUStarRating,
} from '../MCUIcons';

export const Scene04Arsenal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'skills' | 'achievements'>('skills');

  const getCategoryEmblem = (category: string) => {
    switch (category) {
      case 'Programming':
        return <SpiderManEmblem size={42} />;
      case 'Backend & APIs':
        return <IronManReactorEmblem size={42} />;
      case 'Frontend':
        return <ThorMjolnirEmblem size={42} />;
      case 'Data & Infrastructure':
        return <CaptainAmericaShieldEmblem size={42} />;
      case 'AI / ML':
        return <DoctorStrangeEmblem size={42} />;
      default:
        return <SpiderManEmblem size={42} />;
    }
  };

  const getAchievementEmblem = (cat: string) => {
    switch (cat) {
      case 'hackathon':
        return <AvengersEmblem size={38} />;
      case 'leadership':
        return <AvengersEmblem size={38} />;
      case 'competitive-programming':
        return <IronManReactorEmblem size={38} />;
      case 'publication':
        return <DoctorStrangeEmblem size={38} />;
      case 'academics':
        return <CaptainAmericaShieldEmblem size={38} />;
      default:
        return <SpiderManEmblem size={38} />;
    }
  };

  return (
    <section className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 z-10 max-w-7xl mx-auto flex flex-col justify-center">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono mb-3 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-red-400" />
          <span>SCENE 04 // ELEVATED PLATFORM & TECHNICAL MASTERY</span>
        </div>

        <h2 className="font-marvel text-4xl sm:text-6xl md:text-7xl tracking-wide text-white uppercase leading-none">
          The Developer's Arsenal
        </h2>
        <p className="text-slate-200 text-xs sm:text-sm font-light mt-2 max-w-xl mx-auto">
          Web-connected capabilities and verified competitive milestones. Rigorously backed by production code and official competition rankings.
        </p>

        {/* View Switcher Tabs */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-marvel tracking-wider uppercase transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 ${
              activeTab === 'skills'
                ? 'bg-[#e23636] text-white shadow-lg shadow-red-950/50 border border-red-400/40 font-bold'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            Technical Toolchain ({SKILL_CATEGORIES.length} Clusters)
          </button>
          <button
            onClick={() => setActiveTab('achievements')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-marvel tracking-wider uppercase transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
              activeTab === 'achievements'
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-950/50 border border-cyan-400/40 font-bold'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/10'
            }`}
          >
            Milestones & Hackathons ({ACHIEVEMENTS.length} Records)
          </button>
        </div>
      </div>

      {/* Content View 1: Skills Clusters */}
      {activeTab === 'skills' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="rounded-2xl stark-glass-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-950/30 flex flex-col justify-start"
            >
              <div>
                {/* Category Header with MCU Superhero Emblem */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-1">
                    {getCategoryEmblem(cat.category)}
                  </div>
                  <MCUStarRating stars={5} label="VERIFIED" />
                </div>

                <h3 className="font-marvel text-2xl text-white uppercase tracking-wider mb-1">
                  {cat.category}
                </h3>
                <p className="text-xs text-slate-300 font-light mb-4 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Skills Tags - Listed directly from top to bottom */}
              <div className="space-y-2 pt-3 border-t border-white/10">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-900 border border-white/5 transition-colors flex items-center justify-between gap-2"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-white font-mono">
                      {skill.name}
                    </span>
                    {skill.highlight && (
                      <span className="text-[11px] font-mono text-cyan-300 text-right truncate">
                        {skill.highlight}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Content View 2: Achievements & Leadership */}
      {activeTab === 'achievements' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl stark-glass-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30 flex flex-col justify-start"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    {getAchievementEmblem(item.category)}
                    <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-900/90 border border-white/10 text-cyan-300">
                      {item.badge}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    {item.date}
                  </span>
                </div>

                <h3 className="font-marvel text-xl sm:text-2xl text-white uppercase tracking-wider mb-1">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-red-400 font-semibold mb-1">
                  {item.roleOrResult}
                </div>
                <div className="text-xs font-mono text-slate-400 mb-4">
                  {item.organization}
                </div>
              </div>

              <p className="text-xs text-slate-300 font-light leading-relaxed pt-3 border-t border-white/10">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 text-center">
        <p className="text-xs font-mono text-slate-500">
          Academic & Technical Standard: Zero arbitrary percentages. Demonstrated strictly through verified GitHub projects, competitive standings, and published research.
        </p>
      </div>
    </section>
  );
};
