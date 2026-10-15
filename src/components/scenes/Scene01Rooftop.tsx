import React from 'react';
import { ArrowDown, FileText, Sparkles } from 'lucide-react';
import { PROFILE } from '../../data/portfolioData';


interface Scene01RooftopProps {
  onOpenResume: () => void;
  onExplore: () => void;
}

export const Scene01Rooftop: React.FC<Scene01RooftopProps> = ({
  onOpenResume,
  onExplore,
}) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center select-none">
      {/* Decorative spider-web corner watermarks */}
      <div className="absolute top-20 left-4 sm:left-12 opacity-20 pointer-events-none text-red-500 font-mono text-[10px] tracking-widest hidden sm:block">
        ROOFTOP_OVERLOOK // ALTITUDE 145M
      </div>
      <div className="absolute top-20 right-4 sm:right-12 opacity-20 pointer-events-none text-cyan-400 font-mono text-[10px] tracking-widest hidden sm:block">
        SECTOR: S.P.I.T. MUMBAI
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center z-10 pt-20 sm:pt-24">
        {/* Marvel Studios Style Box Badge from Reference Images 2 & 3 */}
        <div className="mb-6 flex flex-col sm:flex-row items-center gap-2.5">
          <div className="flex items-center gap-2">
            <span className="marvel-studios-badge text-xs sm:text-sm">
              {PROFILE.name.toUpperCase()} STUDIOS
            </span>
            <span className="text-[11px] font-mono tracking-widest text-cyan-300 uppercase px-2.5 py-1 rounded bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md">
              S.P.I.T. MUMBAI • CLASS OF 2028
            </span>
          </div>
        </div>

        {/* Hero Cinematic Headline (Inspired by Reference Images 2 & 3) */}
        <h1 className="font-marvel text-5xl sm:text-7xl md:text-8xl tracking-wider text-white uppercase leading-[0.95] mb-6 drop-shadow-2xl">
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-300">
            I BUILD THINGS
          </span>
          <span className="inline-block">
            <span className="font-editorial italic font-normal text-3xl sm:text-5xl md:text-6xl text-cyan-300 lowercase mr-3 align-middle font-serif">
              that
            </span>
            <span className="spiderman-3d-title align-middle">
              SHOULD EXIST.
            </span>
          </span>
        </h1>

        {/* Script Subtitle (Spider-Man No Way Home Style from Reference Image 2) */}
        <div className="mb-4">
          <span className="spiderman-script-sub text-base sm:text-xl text-cyan-200">
            Systems Architecture • Autonomous AI • Distributed Engines
          </span>
        </div>

        {/* Supporting Professional Bio Text */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-slate-200 font-light leading-relaxed mb-8 text-balance drop-shadow-md bg-slate-950/40 p-3 sm:p-4 rounded-2xl border border-white/5 backdrop-blur-md">
          Engineering student at S.P.I.T. Mumbai specializing in backend systems, distributed architectures, and machine learning decision engines. Rigorous builder with 4 hackathon wins and a 8.95 CGPA.
        </p>

        {/* CTAs (Directly inspired by Reference Image 3 EXPLORE button) */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <button
            onClick={onExplore}
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-marvel text-lg tracking-wider text-white bg-[#e23636] hover:bg-[#dc2626] border border-white/20 shadow-2xl shadow-red-950/60 hover:shadow-red-500/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
          >
            <Sparkles className="w-4 h-4 text-white transition-transform group-hover:rotate-12" />
            <span>EXPLORE UNIVERSE</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1 text-white" />
          </button>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-marvel text-lg tracking-wider text-cyan-300 bg-slate-950/80 hover:bg-slate-900 border border-cyan-500/50 hover:border-cyan-400 backdrop-blur-xl shadow-xl shadow-black/50 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>VIEW RESUME</span>
          </button>
        </div>

        {/* Scroll To Swing Indicator */}
        <div className="flex flex-col items-center gap-2 text-slate-400 animate-bounce">
          <span className="text-[10px] font-mono tracking-widest text-red-400 uppercase">
            Scroll to traverse skyline
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-red-500/40 flex items-start justify-center p-1 bg-slate-950/60 backdrop-blur-sm">
            <div className="w-1.5 h-2 bg-cyan-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
