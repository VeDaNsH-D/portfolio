import React from 'react';
import { ExternalLink, Sparkles, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../types/portfolio';


interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <article
      className="group relative flex flex-col rounded-2xl bg-slate-900/60 border border-white/10 hover:border-white/25 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-950/30"
      style={{
        boxShadow: `0 10px 30px -15px ${project.theme.primaryColor}25`,
      }}
    >
      {/* Dimension Top Accent Bar */}
      <div
        className="h-1 w-full"
        style={{
          background: `linear-gradient(to right, ${project.theme.primaryColor}, ${project.theme.secondaryColor})`,
        }}
      />

      {/* Screenshot Preview with Portal Glow */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-white/5 cursor-pointer" onClick={() => onSelect(project)}>
        <img
          src={project.screenshots[0]?.url || '/projects/scout-dashboard.jpg'}
          alt={`${project.name} Interface Screenshot`}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

        {/* Dimension Badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium backdrop-blur-md border ${project.theme.badgeBg}`}
          >
            <Sparkles className="w-3 h-3 animate-pulse" />
            {project.dimensionTitle}
          </span>
        </div>

        {/* Live Demo Status Pill if exists */}
        {project.demoUrl && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              LIVE DEMO
            </span>
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="flex-1 flex flex-col p-5 sm:p-6">
        {/* Category */}
        <p className="text-xs font-mono font-medium text-slate-400 mb-1 tracking-wider uppercase">
          {project.category}
        </p>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors font-heading flex items-center justify-between">
          <span>{project.name}</span>
          <span
            className="text-xs font-mono font-normal opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
            style={{ color: project.theme.primaryColor }}
          >
            Explore <ArrowUpRight className="w-4 h-4" />
          </span>
        </h3>

        {/* Concise Problem-Oriented Summary */}
        <p className="text-sm text-slate-300 line-clamp-3 mb-4 leading-relaxed font-light">
          {project.summary}
        </p>

        {/* Tech Stack Pills */}
        <div className="mt-auto pt-3 border-t border-white/5">
          <p className="text-[10px] font-mono uppercase text-slate-500 mb-2">Verified Stack</p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.techStack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs font-mono rounded bg-slate-800/80 text-slate-300 border border-white/5"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 5 && (
              <span className="px-2 py-0.5 text-xs font-mono rounded bg-slate-800/40 text-slate-400 border border-white/5">
                +{project.techStack.length - 5} more
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 pt-1">
            {/* Case Study Details Button */}
            <button
              onClick={() => onSelect(project)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-purple-600/30 to-indigo-600/30 hover:from-purple-600/50 hover:to-indigo-600/50 text-white border border-purple-500/30 hover:border-purple-400 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span>Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* GitHub Repo Button */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label={`View ${project.name} on GitHub`}
              title="View Repository on GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* Live Demo Button (Only if valid demoUrl exists) */}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-2 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-500/30 transition-colors text-xs font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                aria-label={`Open ${project.name} Live Demo`}
                title="Open Live Deployed Demo"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
