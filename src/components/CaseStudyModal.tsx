import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Sparkles, ChevronRight, CheckCircle2, AlertTriangle, Layers, BrainCircuit, Compass, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../types/portfolio';


interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;


  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl stark-glass-card border border-white/20 text-slate-200 shadow-2xl p-5 sm:p-8"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: `0 0 50px -15px ${project.theme.primaryColor}40`,
        }}
      >
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${project.theme.badgeBg}`}
              >
                <Sparkles className="w-3 h-3 animate-pulse" />
                {project.dimensionTitle}
              </span>
              <span className="text-xs font-mono text-cyan-300">
                {project.category}
              </span>
            </div>

            <h2 id="case-study-title" className="font-marvel text-3xl sm:text-5xl font-normal text-white uppercase tracking-wider">
              {project.name}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Links & Tech Stack Ribbon */}
        <div className="py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono rounded bg-slate-800/70 text-slate-300 border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-white/10 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/40 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Deployed Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Real Screenshots Gallery */}
        <div className="py-6 border-b border-white/10">
          <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>Verified Interface Artifacts & Screenshots</span>
          </h3>

          <div className="rounded-xl overflow-hidden bg-slate-950 border border-white/10 shadow-xl mb-3">
            <img
              src={project.screenshots[activeImageIndex]?.url}
              alt={project.screenshots[activeImageIndex]?.caption || `${project.name} Screenshot`}
              className="w-full max-h-[460px] object-contain mx-auto bg-slate-950"
            />
            <div className="p-3 bg-slate-900/90 border-t border-white/5 text-xs text-slate-300 font-mono flex items-center justify-between">
              <span>{project.screenshots[activeImageIndex]?.caption}</span>
              <span className="text-slate-500">
                {activeImageIndex + 1} / {project.screenshots.length}
              </span>
            </div>
          </div>

          {/* Thumbnails if multiple */}
          {project.screenshots.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {project.screenshots.map((img, idx) => (
                <button
                  key={img.url}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`flex-shrink-0 w-24 h-14 rounded-lg overflow-hidden border transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-cyan-400 ring-2 ring-cyan-400/30'
                      : 'border-white/10 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img.url} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Case Study Detailed Content */}
        <div className="py-6 space-y-8">
          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-900/50 border border-red-500/20">
              <h4 className="text-sm font-mono uppercase tracking-wider text-red-400 mb-2 flex items-center gap-2 font-bold">
                <AlertTriangle className="w-4 h-4" />
                <span>The Problem</span>
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {project.caseStudy.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/50 border border-emerald-500/20">
              <h4 className="text-sm font-mono uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-2 font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Solution & Decisions</span>
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {project.caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Architecture Pipeline Flow Diagram */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2 font-bold">
              <Compass className="w-4 h-4" />
              <span>System Architecture & Data Flow</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {project.caseStudy.architectureFlow.steps.map((st, i) => (
                <div
                  key={st.step}
                  className="relative p-4 rounded-xl bg-slate-900/60 border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {st.step}
                      </span>
                      {i < project.caseStudy.architectureFlow.steps.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-slate-500 hidden lg:block" />
                      )}
                    </div>
                    <h5 className="text-xs font-bold text-white mb-1.5">{st.title}</h5>
                    <p className="text-[11px] text-slate-400 leading-normal font-light">
                      {st.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Implementation Highlights */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-2 font-bold">
              <Layers className="w-4 h-4" />
              <span>Core Implementation Highlights</span>
            </h4>

            <ul className="space-y-2.5">
              {project.caseStudy.coreImplementation.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-900/30 p-3 rounded-lg border border-white/5"
                >
                  <ChevronRight className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ML Methodology & Evaluation (if applicable) */}
          {project.caseStudy.mlMethodology && (
            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-950/30 via-slate-900/50 to-indigo-950/30 border border-purple-500/30">
              <h4 className="text-sm font-mono uppercase tracking-wider text-purple-300 mb-3 flex items-center gap-2 font-bold">
                <BrainCircuit className="w-4 h-4 text-purple-400" />
                <span>ML Methodology & Evaluation Framework</span>
              </h4>

              <p className="text-sm text-slate-200 mb-4 font-light">
                {project.caseStudy.mlMethodology.overview}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="p-3 rounded-lg bg-slate-900/60 border border-white/5">
                  <p className="text-[11px] font-mono uppercase text-slate-400 mb-1.5">Evaluated Models</p>
                  <ul className="text-xs text-slate-300 space-y-1">
                    {project.caseStudy.mlMethodology.models.map((m) => (
                      <li key={m} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/60 border border-white/5">
                  <p className="text-[11px] font-mono uppercase text-slate-400 mb-1.5">Reported Metrics</p>
                  <ul className="text-xs text-emerald-300 space-y-1 font-mono">
                    {project.caseStudy.mlMethodology.metrics.map((met) => (
                      <li key={met} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>{met}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-xs text-slate-400 italic font-light">
                {project.caseStudy.mlMethodology.evaluationDetails}
              </p>
            </div>
          )}

          {/* Challenges & Trade-offs */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2 font-bold">
              <Compass className="w-4 h-4" />
              <span>Engineering Challenges & Trade-offs</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.caseStudy.challengesAndTradeoffs.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/40 border border-amber-500/20 text-xs sm:text-sm text-slate-300 leading-relaxed font-light"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Verified Results & Future Improvements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-emerald-400 mb-3 font-bold">
                Verified Benchmark Results
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {project.caseStudy.verifiedResults.map((r, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 mb-3 font-bold">
                Future Improvements
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                {project.caseStudy.futureImprovements.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between">
          <p className="text-xs font-mono text-slate-500">
            Source of Truth: GitHub Repository & Verified Codebase
          </p>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-white/10 cursor-pointer"
          >
            Close Dimension
          </button>
        </div>
      </div>
    </div>
  );
};
