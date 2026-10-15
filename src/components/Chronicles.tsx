import React from 'react';
import { Trophy, Award, Users, BookOpen, Terminal, GraduationCap } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';


export const Chronicles: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'hackathon':
        return <Trophy className="w-4 h-4 text-amber-400" />;
      case 'leadership':
        return <Users className="w-4 h-4 text-purple-400" />;
      case 'competitive-programming':
        return <Terminal className="w-4 h-4 text-cyan-400" />;
      case 'publication':
        return <BookOpen className="w-4 h-4 text-emerald-400" />;
      case 'academics':
        return <GraduationCap className="w-4 h-4 text-blue-400" />;
      default:
        return <Award className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="chronicles" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4 backdrop-blur-md">
          <Award className="w-3.5 h-3.5 text-cyan-400" />
          <span>PROVEN TRACK RECORD // CHRONICLES OF EXCELLENCE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading mb-4">
          Achievements & Experience
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
          Verified milestones in competitive programming, national hackathon podiums, research authorship, and
          high-pressure team leadership.
        </p>
      </div>

      {/* Timeline Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ACHIEVEMENTS.map((item) => (
          <div
            key={item.id}
            className="group relative flex flex-col rounded-2xl bg-slate-900/60 border border-white/10 hover:border-white/20 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/20"
          >
            {/* Header with Badge & Date */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-800/80 border border-white/10 text-slate-300">
                {getCategoryIcon(item.category)}
                <span>{item.badge}</span>
              </span>

              <span className="text-[11px] font-mono text-slate-500">
                {item.date}
              </span>
            </div>

            {/* Title & Role */}
            <h3 className="text-lg font-bold text-white font-heading mb-1 group-hover:text-cyan-300 transition-colors">
              {item.title}
            </h3>

            <div className="text-xs font-mono text-cyan-400 font-medium mb-1">
              {item.roleOrResult}
            </div>

            <div className="text-xs font-mono text-slate-400 mb-4">
              {item.organization}
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mt-auto pt-3 border-t border-white/5">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
