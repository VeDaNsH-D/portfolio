import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { SpiderManEmblem } from './MCUIcons';
import { PROFILE } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#030712] py-12 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2.5 mb-2">
            <SpiderManEmblem size={28} glow={false} />
            <span className="font-marvel tracking-wider text-xl text-white uppercase">
              VEDANSH DUBEY
            </span>
            <span className="marvel-studios-badge text-[9px] py-[1px] px-1.5">
              STUDIOS
            </span>
          </div>
          <p className="text-xs text-slate-300 font-light max-w-md">
            Software Development Engineer & AI/ML Engineer. B.Tech at S.P.I.T. Mumbai (Class of 2028).
          </p>
        </div>

        {/* Center Links */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <a
            href={PROFILE.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href={PROFILE.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href={PROFILE.contact.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
          >
            <Code2 className="w-4 h-4" />
            <span>LeetCode</span>
          </a>

          <button
            onClick={onOpenResume}
            className="text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
          >
            Resume
          </button>
        </div>

        {/* Right Back to Top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Back to top"
        >
          <span>Return to Rooftop</span>
          <ArrowUp className="w-3.5 h-3.5 text-red-400" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-2 text-center">
        <span>Designed with cinematic 3D web-slinging city aesthetics & clean engineering rigor.</span>
        <span>© {CURRENT_YEAR} Vedansh Dubey. All rights reserved.</span>
      </div>
    </footer>
  );
};

