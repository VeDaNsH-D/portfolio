import React, { useEffect } from 'react';
import { X, Download, ExternalLink, ShieldCheck } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';


interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#090d1a] border border-white/15 text-slate-200 shadow-2xl p-5 sm:p-8 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                VERIFIED CREDENTIAL
              </span>
              <span className="text-xs font-mono text-slate-400">PDF SOURCE</span>
            </div>
            <h2 id="resume-modal-title" className="text-2xl font-bold text-white font-heading">
              {PROFILE.name} — Official Curriculum Vitae
            </h2>
            <p className="text-xs font-mono text-slate-400 mt-0.5">
              S.P.I.T. Mumbai • Class of 2028 • CGPA: 8.95 / 10.0
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
            aria-label="Close Resume Preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Buttons Toolbar */}
        <div className="py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <a
              href={PROFILE.contact.resumeUrl}
              download="Vedansh_Dubey_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-950/40 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Official PDF</span>
            </a>

            <a
              href={PROFILE.contact.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open in New Tab</span>
            </a>
          </div>

          <span className="text-xs font-mono text-slate-400">
            Targeting SDE & AI/ML Roles
          </span>
        </div>

        {/* Live PDF Viewer Frame */}
        <div className="flex-1 min-h-[500px] w-full mt-4 rounded-xl overflow-hidden bg-slate-950 border border-white/10 relative">
          <iframe
            src={`${PROFILE.contact.resumeUrl}#toolbar=1&navpanes=0`}
            title="Vedansh Dubey Resume PDF"
            className="w-full h-full min-h-[500px] border-none"
          />
        </div>

        {/* Footer info */}
        <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>Official PDF copy verified from local build artifacts.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-white/10 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
