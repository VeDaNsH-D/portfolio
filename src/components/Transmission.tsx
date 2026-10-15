import React, { useState } from 'react';
import { Mail, FileText, Send, Copy, Check, Sparkles, MapPin, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PROFILE } from '../data/portfolioData';


interface TransmissionProps {
  onOpenResume: () => void;
}

export const Transmission: React.FC<TransmissionProps> = ({ onOpenResume }) => {
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
      subject || 'Engineering Collaboration'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="transmission" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-950/90 border border-white/10 p-6 sm:p-12 overflow-hidden shadow-2xl backdrop-blur-xl">
        {/* Ambient Portal Light Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Coordinates & Direct Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>INTERSTELLAR TRANSMISSION // INITIATE CONTACT</span>
              </div>

              {/* Exact Prompt Heading */}
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight mb-4">
                {PROFILE.contact.heading}
              </h2>

              {/* Exact Prompt Supporting Text */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light mb-8">
                {PROFILE.contact.subheading}
              </p>
            </div>

            {/* Direct Connect Buttons */}
            <div className="space-y-3">
              {/* Copy Email Button */}
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-800/60 border border-white/10 backdrop-blur-md">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-slate-200 truncate flex-1">
                  {PROFILE.contact.email}
                </span>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-slate-700/80 hover:bg-slate-600 text-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-300" />}
                </button>
              </div>

              {/* Links Row */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <a
                  href={PROFILE.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={PROFILE.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-white" />
                  <span>GitHub Profile</span>
                </a>


                <a
                  href={PROFILE.contact.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                >
                  <Code2 className="w-4 h-4 text-amber-400" />
                  <span>LeetCode Stats</span>
                </a>

                <button
                  onClick={onOpenResume}
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r from-purple-600/30 to-indigo-600/30 hover:from-purple-600/50 hover:to-indigo-600/50 border border-purple-500/30 text-xs font-semibold text-white transition-colors cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-cyan-300" />
                  <span>View Resume</span>
                </button>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{PROFILE.contact.location} • Ready for SDE & AI/ML Roles</span>
              </div>
            </div>
          </div>

          {/* Right Column: Transmission Dispatch Form */}
          <div className="lg:col-span-7 bg-slate-900/50 p-6 sm:p-8 rounded-2xl border border-white/10">
            <h3 className="text-lg font-bold text-white font-heading mb-1">
              Direct Communication Dispatch
            </h3>
            <p className="text-xs text-slate-400 font-light mb-6">
              Compose a transmission. Submitting triggers your native email client with pre-filled context.
            </p>

            <form onSubmit={handleSendEmail} className="space-y-4">
              <div>
                <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Subject / Scope
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="e.g. SDE Role / AI Engineering Opportunity / Collaboration"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  Transmission Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Describe the opportunity, engineering problem, or collaboration scope..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 shadow-lg shadow-purple-900/30 transition-all duration-300 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Transmit Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
