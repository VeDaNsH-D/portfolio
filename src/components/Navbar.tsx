import React, { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';

import { GithubIcon } from './Icons';
import { SpiderManEmblem } from './MCUIcons';
import { PROFILE } from '../data/portfolioData';
import type { SceneId } from '../hooks/useScrollTimeline';

interface NavbarProps {
  activeScene: SceneId;
  scrollProgress: number;
  onNavigate: (scene: SceneId) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeScene,
  scrollProgress,
  onNavigate,
  onOpenResume,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scenes: { id: SceneId; label: string; code: string }[] = [
    { id: 'rooftop', label: 'Rooftop', code: '01' },
    { id: 'story', label: 'Story', code: '02' },
    { id: 'projects', label: 'Projects', code: '03' },
    { id: 'arsenal', label: 'Arsenal', code: '04' },
    { id: 'contact', label: 'Contact', code: '05' },
  ];

  const handleSelectScene = (scene: SceneId) => {
    setMobileMenuOpen(false);
    onNavigate(scene);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#030712]/80 backdrop-blur-md border-b border-white/10 shadow-2xl py-3">
      {/* Spider-Silk Glowing Scroll Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-slate-900 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-red-500 via-cyan-400 to-red-500 transition-all duration-75 shadow-[0_0_8px_rgba(244,63,94,0.8)]"
          style={{ width: `${Math.max(2, scrollProgress * 100)}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Web-Slinger Identity */}
          <button
            onClick={() => handleSelectScene('rooftop')}
            className="flex items-center gap-3 group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 rounded-lg p-1 cursor-pointer"
            aria-label="Vedansh Dubey Web-Slinger Home"
          >
            {/* Authentic MCU Spider-Man Superhero Emblem from Reference Image 1 */}
            <div className="relative">
              <SpiderManEmblem size={38} glow={true} />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-marvel text-lg sm:text-xl tracking-wider text-white group-hover:text-red-400 transition-colors uppercase leading-none">
                  VEDANSH DUBEY
                </span>
                <span className="marvel-studios-badge text-[10px] py-[1px] px-1.5 hidden sm:inline-flex">
                  STUDIOS
                </span>
              </div>
              <p className="text-[10px] font-mono text-slate-400 tracking-tight hidden sm:block">
                SCROLL TO SWING // S.P.I.T. MUMBAI '28
              </p>
            </div>
          </button>

          {/* Desktop Navigation / Flight Plan */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-900/80 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {scenes.map((s) => {
              const isActive = activeScene === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => handleSelectScene(s.id)}
                  className={`px-3 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-600/40 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-[10px] font-mono opacity-60">{s.code}</span>
                  <span>{s.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-red-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-500/30 transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-red-400" />
              <span>Resume</span>
            </button>

            <a
              href={PROFILE.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-white/10 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1 text-xs font-semibold rounded-md bg-red-500/20 text-red-300 border border-red-500/40"
            >
              Resume
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900/80 border border-white/10"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#030712]/95 border-b border-white/10 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {scenes.map((s) => (
              <button
                key={s.id}
                onClick={() => handleSelectScene(s.id)}
                className={`px-3 py-2 text-left text-sm font-medium rounded-lg transition-colors flex items-center justify-between ${
                  activeScene === s.id
                    ? 'bg-red-600/30 text-red-300 border border-red-500/40'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                <span>{s.label}</span>
                <span className="text-[10px] font-mono opacity-50">{s.code}</span>
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <a
              href={PROFILE.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white py-2"
            >
              <GithubIcon className="w-4 h-4 text-cyan-400" />
              <span>github.com/VeDaNsH-D</span>
            </a>
            <span className="text-[11px] font-mono text-cyan-400">CGPA 8.95 / 10.0</span>
          </div>
        </div>
      )}
    </header>
  );
};
