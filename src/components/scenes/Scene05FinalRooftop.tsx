import React, { useState } from 'react';
import { Mail, Send, Copy, Check, Sparkles, MapPin, Download, ArrowUp } from 'lucide-react';

import { GithubIcon, LinkedinIcon } from '../Icons';
import { PROFILE } from '../../data/portfolioData';

interface Scene05FinalRooftopProps {
  onOpenResume: () => void;
  onReturnToTop: () => void;
}

export const Scene05FinalRooftop: React.FC<Scene05FinalRooftopProps> = ({
  onOpenResume,
  onReturnToTop,
}) => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PROFILE.contact.email}?subject=${encodeURIComponent(
      subject || 'Engineering Opportunity / Collaboration'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 z-10 max-w-7xl mx-auto flex flex-col justify-center">
      <div className="relative rounded-3xl stark-glass-card p-6 sm:p-12 overflow-hidden shadow-2xl">
        {/* Top Edge Red Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-rose-500 to-cyan-400" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Heading & Official Credentials */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-mono mb-4 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>SCENE 05 // THE FINAL ROOFTOP</span>
              </div>

              {/* Exact Prompt Headline */}
              <h2 className="font-marvel text-4xl sm:text-6xl text-white tracking-wide mb-4 uppercase leading-none">
                THE NEXT GREAT BUILD COULD START HERE.
              </h2>

              {/* Exact Prompt Supporting Text */}
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-light mb-8">
                Have an ambitious idea, an interesting engineering problem, or an opportunity to collaborate? Let's build something meaningful.
              </p>
            </div>

            {/* Direct Connect Buttons & Verified Channels */}
            <div className="space-y-3">
              {/* Copy Email Button */}
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-slate-200 truncate flex-1">
                  {PROFILE.contact.email}
                </span>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-300" />}
                </button>
              </div>

              {/* Action Buttons Grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <a
                  href={`mailto:${PROFILE.contact.email}`}
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#e23636] hover:bg-[#dc2626] font-marvel text-sm tracking-wider text-white shadow-lg shadow-red-950/40 transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>GET IN TOUCH</span>
                </a>

                <a
                  href={PROFILE.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 font-marvel text-sm tracking-wider text-slate-200 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-white" />
                  <span>GITHUB</span>
                </a>

                <a
                  href={PROFILE.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 font-marvel text-sm tracking-wider text-slate-200 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
                  <span>LINKEDIN</span>
                </a>

                <button
                  onClick={onOpenResume}
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-500/40 font-marvel text-sm tracking-wider text-cyan-300 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>DOWNLOAD RESUME</span>
                </button>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                <span>{PROFILE.contact.location} • Targeting SDE & AI/ML Opportunities</span>
              </div>
            </div>
          </div>

          {/* Right Column: Native Dispatch Form */}
          <div className="lg:col-span-7 bg-slate-900/60 p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="font-marvel text-2xl text-white uppercase tracking-wider mb-1">
                Direct Dispatch Transmission
              </h3>
              <p className="text-xs text-slate-300 font-light mb-6">
                Send a project proposal, engineering challenge, or internship inquiry directly to Vedansh.
              </p>

              <form onSubmit={handleSendEmail} className="space-y-4">
                <div>
                  <label htmlFor="final-subject" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Subject / Engineering Scope
                  </label>
                  <input
                    id="final-subject"
                    type="text"
                    required
                    placeholder="e.g. SDE Role / AI Engineer Position / Hackathon Collaboration"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-red-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="final-message" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="final-message"
                    required
                    rows={4}
                    placeholder="Describe the opportunity, technical stack, or project context..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-red-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-marvel text-lg tracking-wider text-white bg-[#e23636] hover:bg-[#dc2626] shadow-lg shadow-red-950/40 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>DISPATCH TRANSMISSION</span>
                </button>
              </form>
            </div>

            {/* Return To Rooftop */}
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-500">
                End of Flight Line
              </span>
              <button
                onClick={onReturnToTop}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                <span>Return to Rooftop Overlook</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
