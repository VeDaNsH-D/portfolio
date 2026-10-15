import React from 'react';
import { Sparkles, ArrowRight, FileText, Terminal, ShieldCheck, Zap, Activity } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROFILE } from '../data/portfolioData';


interface HeroProps {
  onOpenResume: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onExploreProjects }) => {
  return (
    <section
      id="nexus"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative Doctor Strange Geometric Portal Rings in Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-40">
        {/* Outer Runic / Geometric Ring */}
        <div className="w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] lg:w-[800px] lg:h-[800px] rounded-full border border-purple-500/20 animate-portal-cw flex items-center justify-center">
          <div className="w-[90%] h-[90%] rounded-full border border-dashed border-cyan-400/25 flex items-center justify-center">
            {/* Spark mandala square rotation */}
            <div className="w-[75%] h-[75%] border border-amber-500/20 rotate-45 animate-portal-ccw flex items-center justify-center">
              <div className="w-[85%] h-[85%] rounded-full border border-indigo-500/30"></div>
            </div>
          </div>
        </div>

        {/* Ambient cosmic radial gradients */}
        <div className="absolute w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-gradient-to-tr from-purple-700/20 via-cyan-500/10 to-amber-500/10 rounded-full blur-3xl -z-10 animate-pulse-glow" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Status / Identity Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-mono mb-6 backdrop-blur-md shadow-lg shadow-purple-950/30 animate-in fade-in zoom-in-95 duration-500">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="tracking-wide text-slate-200">{PROFILE.primaryIdentity}</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase font-heading leading-tight mb-6">
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400">
            I BUILD THINGS
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-amber-400 text-glow-cyan">
            THAT SHOULD EXIST.
          </span>
        </h1>

        {/* Hero Copy */}
        <p className="max-w-3xl text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-8 text-balance">
          {PROFILE.heroCopy}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {/* CTA 1: Explore My Universe */}
          <button
            onClick={onExploreProjects}
            className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:via-indigo-500 hover:to-cyan-400 shadow-xl shadow-purple-900/40 hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <Sparkles className="w-4 h-4 text-amber-300 transition-transform group-hover:rotate-12" />
            <span>Explore My Universe</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* CTA 2: View Resume */}
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-cyan-200 bg-slate-900/80 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400 backdrop-blur-md shadow-lg shadow-black/40 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>View Resume</span>
          </button>

          {/* CTA 3: GitHub */}
          <a
            href={PROFILE.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-white/10 hover:border-white/25 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Academic & Multiverse Coordinate Stats Badge */}
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-white/10 text-left">
          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-white/5 backdrop-blur-sm hover:border-purple-500/30 transition-colors">
            <div className="flex items-center gap-2 text-purple-400 mb-1">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Education</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-white">S.P.I.T. Mumbai</p>
            <p className="text-[11px] font-mono text-cyan-300">CGPA 8.95 / 10.0</p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-white/5 backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
            <div className="flex items-center gap-2 text-cyan-400 mb-1">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Graduation</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-white">May 2028</p>
            <p className="text-[11px] font-mono text-slate-400">B.Tech Engineering</p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-white/5 backdrop-blur-sm hover:border-amber-500/30 transition-colors">
            <div className="flex items-center gap-2 text-amber-400 mb-1">
              <Terminal className="w-4 h-4 text-amber-400" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Problem Solving</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-white">Codeforces Pupil</p>
            <p className="text-[11px] font-mono text-amber-300">1240 Rating • 200+ Solved</p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/50 border border-white/5 backdrop-blur-sm hover:border-emerald-500/30 transition-colors">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">Leadership</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-white">Team NODEtorious</p>
            <p className="text-[11px] font-mono text-emerald-300">Lead • 4 Hackathon Podiums</p>
          </div>
        </div>
      </div>
    </section>
  );
};
