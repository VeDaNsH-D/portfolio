import React from 'react';
import { Zap } from 'lucide-react';
import {
  CaptainAmericaShieldEmblem,
  IronManReactorEmblem,
  DoctorStrangeEmblem,
  AvengersEmblem,
  MCUStarRating,
} from '../MCUIcons';

export const Scene02DeveloperStory: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 z-10">
      <div className="max-w-4xl mx-auto w-full">
        {/* Floating Comic-Inspired Stark-HUD Glass Panel */}
        <div className="relative rounded-3xl stark-glass-card p-6 sm:p-10 overflow-hidden">
          {/* Top Edge Superhero Color Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-cyan-400" />

          {/* Scene Tag */}
          <div className="flex items-center justify-between gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-red-950/80 border border-red-500/40 text-red-300">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              SCENE 02 // MID-AIR REVELATION
            </span>
            <span className="text-xs font-mono text-cyan-300/80">
              S.P.I.T. MUMBAI • CLASS OF 2028
            </span>
          </div>

          {/* Headline (Marvel Cinematic Style) */}
          <h2 className="font-marvel text-3xl sm:text-5xl md:text-6xl text-white tracking-wide uppercase leading-tight mb-4">
            <span>EVERY GREAT BUILD </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-cyan-400">
              STARTS WITH A QUESTION.
            </span>
          </h2>

          {/* Story Narrative */}
          <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed font-light mb-8">
            <p>
              I'm Vedansh Dubey, an engineering student at S.P.I.T., Mumbai, passionate about backend engineering, machine learning, and building intelligent software systems.
            </p>
            <p>
              I enjoy designing APIs, orchestrating asynchronous workflows, developing real-time applications, and evaluating machine learning systems with reproducible experiments.
            </p>
          </div>

          {/* MCU Superhero Emblems Dossier Grid (Directly inspired by Reference Image 1) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 pt-6 border-t border-white/10">
            {/* Education (Captain America Shield Emblem) */}
            <div className="p-4 rounded-2xl bg-slate-900/50 hover:bg-slate-900/80 border border-white/10 transition-all duration-300 group flex flex-col items-center text-center">
              <div className="mb-2">
                <CaptainAmericaShieldEmblem size={44} />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-0.5">
                Education
              </span>
              <p className="text-xs sm:text-sm font-bold text-white font-heading">S.P.I.T. Mumbai</p>
              <p className="text-[11px] font-mono text-cyan-300 font-semibold mb-2">CGPA: 8.95 / 10.0</p>
              <MCUStarRating stars={5} label="EXCELLENCE" />
            </div>

            {/* Primary Focus (Iron Man Arc Reactor Emblem) */}
            <div className="p-4 rounded-2xl bg-slate-900/50 hover:bg-slate-900/80 border border-white/10 transition-all duration-300 group flex flex-col items-center text-center">
              <div className="mb-2">
                <IronManReactorEmblem size={44} />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-0.5">
                Primary Focus
              </span>
              <p className="text-xs sm:text-sm font-bold text-white font-heading">SDE & AI/ML</p>
              <p className="text-[11px] font-mono text-red-400 font-semibold mb-2">Backend & Systems</p>
              <MCUStarRating stars={5} label="SPECIALTY" />
            </div>

            {/* Algorithms (Doctor Strange Sanctum Emblem) */}
            <div className="p-4 rounded-2xl bg-slate-900/50 hover:bg-slate-900/80 border border-white/10 transition-all duration-300 group flex flex-col items-center text-center">
              <div className="mb-2">
                <DoctorStrangeEmblem size={44} />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-0.5">
                Algorithms
              </span>
              <p className="text-xs sm:text-sm font-bold text-white font-heading">Codeforces Pupil</p>
              <p className="text-[11px] font-mono text-amber-300 font-semibold mb-2">1240 Rating · 200+ Solved</p>
              <MCUStarRating stars={4} label="RANKING" />
            </div>

            {/* Leadership (Avengers 'A' Emblem) */}
            <div className="p-4 rounded-2xl bg-slate-900/50 hover:bg-slate-900/80 border border-white/10 transition-all duration-300 group flex flex-col items-center text-center">
              <div className="mb-2">
                <AvengersEmblem size={44} />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-0.5">
                Leadership
              </span>
              <p className="text-xs sm:text-sm font-bold text-white font-heading">Team NODEtorious</p>
              <p className="text-[11px] font-mono text-emerald-300 font-semibold mb-2">4 Hackathon Podiums</p>
              <MCUStarRating stars={5} label="VICTORIES" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
