import React from 'react';
import { Compass, Sparkles, Terminal, Zap } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';


export const Origins: React.FC = () => {
  return (
    <section id="origins" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Multiverse Doctor Strange Portal Mandala Visualizer */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center">
            {/* Spinning Outer Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/30 animate-portal-cw" />
            
            {/* Counter Spinning Inner Ring */}
            <div className="absolute inset-4 rounded-full border border-purple-500/40 animate-portal-ccw" />
            
            {/* Diamond Geometry */}
            <div className="absolute inset-10 border border-amber-500/30 rotate-45 animate-portal-cw" />

            {/* Core Orb */}
            <div className="relative z-10 w-44 h-44 rounded-full bg-gradient-to-br from-[#0c1229] via-[#090d1e] to-[#04060d] border border-cyan-400/40 p-4 shadow-2xl shadow-cyan-500/20 flex flex-col items-center justify-center text-center">
              <Compass className="w-8 h-8 text-cyan-400 mb-2 animate-pulse" />
              <p className="text-xs font-mono font-bold text-white tracking-widest uppercase">
                VEDANSH DUBEY
              </p>
              <p className="text-[10px] font-mono text-purple-300 mt-1">
                SDE // AI/ML
              </p>
              <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[9px] font-mono text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                SYSTEM ONLINE
              </div>
            </div>

            {/* Floating Coordinate Badges */}
            <div className="absolute -top-2 left-4 px-2.5 py-1 rounded-md bg-slate-900/90 border border-white/10 text-[10px] font-mono text-cyan-300 backdrop-blur-md">
              LOC: S.P.I.T. MUMBAI
            </div>
            <div className="absolute -bottom-2 right-4 px-2.5 py-1 rounded-md bg-slate-900/90 border border-white/10 text-[10px] font-mono text-amber-300 backdrop-blur-md">
              CP: CODEFORCES 1240
            </div>
          </div>
        </div>

        {/* Right Column: Exact Resume Copy & Engineering Pillars */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>ORIGINS & PHILOSOPHY // THE ARCHITECT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading mb-6">
            Beyond the Interface
          </h2>

          {/* Verbatim About Copy */}
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-8">
            {PROFILE.aboutCopy.map((para, i) => (
              <p key={i} className="text-balance">
                {para}
              </p>
            ))}
          </div>

          {/* Key Engineering Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-cyan-400 mb-1.5 font-bold text-xs font-mono uppercase">
                <Terminal className="w-4 h-4" />
                <span>Backend Architecture</span>
              </div>
              <p className="text-xs text-slate-400 leading-normal font-light">
                Distributed worker queues (BullMQ, Redis), atomic ACID transactions, and robust REST/WebSocket streaming.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-purple-400 mb-1.5 font-bold text-xs font-mono uppercase">
                <Zap className="w-4 h-4" />
                <span>Machine Learning Systems</span>
              </div>
              <p className="text-xs text-slate-400 leading-normal font-light">
                Causal expected net-value optimization (+8.93% benchmark uplift), predictive scoring, and multi-model LLM cascades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
