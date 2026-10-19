import React from 'react';
import { Code2, Server, Layout, Database, BrainCircuit, Sparkles, Terminal } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';


export const InfinityArsenal: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-purple-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-blue-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-emerald-400" />;
      default:
        return <Terminal className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="arsenal" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>TECHNICAL CAPABILITIES // INFINITY ARSENAL</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading mb-4">
          The Infinity Arsenal
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
          A rigorous toolchain honed across distributed architectures, production hackathon deployments, and
          reproducible machine learning experiments. Every technology is verified by repository implementations.
        </p>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat) => (
          <div
            key={cat.category}
            className="group relative flex flex-col rounded-2xl bg-slate-900/60 border border-white/10 hover:border-white/20 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-950/20"
          >
            {/* Top Bar Accent */}
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-xl bg-slate-800/80 border border-white/5 flex items-center justify-center">
                {getCategoryIcon(cat.iconName)}
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                {cat.skills.length} Capabilities
              </span>
            </div>

            {/* Category Title & Description */}
            <h3 className="text-lg font-bold text-white font-heading mb-1.5 group-hover:text-cyan-300 transition-colors">
              {cat.category}
            </h3>
            <p className="text-xs text-slate-400 font-light mb-5 leading-relaxed">
              {cat.description}
            </p>

            {/* Skills List - Flow from top to bottom */}
            <div className="space-y-2 pt-3 border-t border-white/5">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-2.5 rounded-lg bg-slate-800/40 hover:bg-slate-800/80 border border-white/5 transition-colors flex items-center justify-between gap-2"
                >
                  <span className="text-xs sm:text-sm font-semibold text-white font-mono">
                    {skill.name}
                  </span>
                  {skill.highlight && (
                    <span className="text-[11px] font-mono text-slate-400 text-right truncate">
                      {skill.highlight}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Verification Notice */}
      <div className="mt-10 text-center">
        <p className="text-xs font-mono text-slate-500">
          Strict Engineering Standard: No arbitrary proficiency percentages. Capabilities are demonstrated through source code and delivered architectures.
        </p>
      </div>
    </section>
  );
};
