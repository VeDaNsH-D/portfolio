import React from 'react';

interface EmblemProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

/**
 * Spider-Man MCU Circular Superhero Emblem
 * Direct inspiration from Reference Image 1 & 2
 */
export const SpiderManEmblem: React.FC<EmblemProps> = ({
  className = 'w-10 h-10',
  size = 40,
  glow = true,
}) => (
  <div
    className={`relative inline-flex items-center justify-center rounded-full group cursor-pointer transition-transform duration-300 hover:scale-105 ${className}`}
    style={{ width: size, height: size }}
  >
    {/* Outer Glow Halo */}
    {glow && (
      <div className="absolute inset-0 rounded-full bg-red-600/20 blur-md group-hover:bg-red-500/40 transition-colors" />
    )}
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full relative z-10 drop-shadow-md"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="spideyBg" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#25080c" />
          <stop offset="60%" stopColor="#120306" />
          <stop offset="100%" stopColor="#050102" />
        </radialGradient>
        <linearGradient id="spideyRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="50%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
      </defs>

      {/* Outer Metallic Bevel Ring */}
      <circle cx="50" cy="50" r="47" stroke="url(#spideyRing)" strokeWidth="3" opacity="0.9" />
      <circle cx="50" cy="50" r="44" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
      {/* Inner Dark Badge Base */}
      <circle cx="50" cy="50" r="43" fill="url(#spideyBg)" />

      {/* Subtle Spider-Web Radial Lines */}
      <line x1="50" y1="7" x2="50" y2="93" stroke="#ffffff" strokeWidth="0.5" opacity="0.12" />
      <line x1="7" y1="50" x2="93" y2="50" stroke="#ffffff" strokeWidth="0.5" opacity="0.12" />
      <line x1="19" y1="19" x2="81" y2="81" stroke="#ffffff" strokeWidth="0.5" opacity="0.1" />
      <line x1="19" y1="81" x2="81" y2="19" stroke="#ffffff" strokeWidth="0.5" opacity="0.1" />

      {/* Spider-Man MCU Angular Spider Insignia */}
      {/* Head & Body */}
      <polygon points="50,28 53,34 50,38 47,34" fill="#ffffff" />
      <polygon points="50,39 56,48 50,72 44,48" fill="#e23636" />
      <polygon points="50,42 54,48 50,68 46,48" fill="#ffffff" opacity="0.3" />

      {/* Upper Legs (Left & Right, sharp angular geometry) */}
      {/* Upper 1 */}
      <path d="M48 37 L38 27 L28 32 L22 44" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M52 37 L62 27 L72 32 L78 44" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      {/* Upper 2 */}
      <path d="M47 43 L34 38 L24 48 L18 60" stroke="#e23636" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M53 43 L66 38 L76 48 L82 60" stroke="#e23636" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Lower Legs */}
      {/* Lower 1 */}
      <path d="M47 50 L32 58 L24 67 L26 77" stroke="#e23636" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M53 50 L68 58 L76 67 L74 77" stroke="#e23636" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Lower 2 */}
      <path d="M48 57 L38 68 L36 78 L38 84" stroke="#38bdf8" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M52 57 L62 68 L64 78 L62 84" stroke="#38bdf8" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

/**
 * Iron Man Arc Reactor Circular Emblem
 * Direct inspiration from Reference Image 1 (Iron Man 1, 2, 3)
 */
export const IronManReactorEmblem: React.FC<EmblemProps> = ({
  className = 'w-10 h-10',
  size = 40,
  glow = true,
}) => (
  <div
    className={`relative inline-flex items-center justify-center rounded-full group cursor-pointer transition-transform duration-300 hover:scale-105 ${className}`}
    style={{ width: size, height: size }}
  >
    {glow && (
      <div className="absolute inset-0 rounded-full bg-cyan-500/25 blur-md group-hover:bg-cyan-400/40 transition-colors" />
    )}
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full relative z-10 drop-shadow-md"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="reactorCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#38bdf8" />
          <stop offset="70%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#082f49" />
        </radialGradient>
      </defs>

      {/* Outer Metallic Ring */}
      <circle cx="50" cy="50" r="47" stroke="#f59e0b" strokeWidth="3" opacity="0.8" />
      <circle cx="50" cy="50" r="44" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
      <circle cx="50" cy="50" r="43" fill="#030712" />

      {/* Segments in outer ring */}
      {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((deg) => (
        <circle
          key={deg}
          cx={50 + 36 * Math.cos((deg * Math.PI) / 180)}
          cy={50 + 36 * Math.sin((deg * Math.PI) / 180)}
          r="2"
          fill="#f59e0b"
          opacity="0.7"
        />
      ))}

      {/* Inverted Geometric Triangle (Stark Mark VI) */}
      <polygon
        points="50,76 24,31 76,31"
        stroke="#f59e0b"
        strokeWidth="3.5"
        strokeLinejoin="round"
        fill="none"
      />
      <polygon
        points="50,70 29,35 71,35"
        stroke="#38bdf8"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
        opacity="0.8"
      />

      {/* Glowing Inner Center */}
      <circle cx="50" cy="48" r="14" fill="url(#reactorCore)" />
      <circle cx="50" cy="48" r="6" fill="#ffffff" />
    </svg>
  </div>
);

/**
 * Captain America Shield Emblem
 * Direct inspiration from Reference Image 1
 */
export const CaptainAmericaShieldEmblem: React.FC<EmblemProps> = ({
  className = 'w-10 h-10',
  size = 40,
  glow = true,
}) => (
  <div
    className={`relative inline-flex items-center justify-center rounded-full group cursor-pointer transition-transform duration-300 hover:scale-105 ${className}`}
    style={{ width: size, height: size }}
  >
    {glow && (
      <div className="absolute inset-0 rounded-full bg-blue-500/25 blur-md group-hover:bg-blue-400/40 transition-colors" />
    )}
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full relative z-10 drop-shadow-md"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Red Ring */}
      <circle cx="50" cy="50" r="46" fill="#dc2626" stroke="#ffffff" strokeWidth="1" />
      {/* Silver Ring */}
      <circle cx="50" cy="50" r="37" fill="#e2e8f0" />
      {/* Second Red Ring */}
      <circle cx="50" cy="50" r="28" fill="#dc2626" />
      {/* Blue Center Circle */}
      <circle cx="50" cy="50" r="19" fill="#0284c7" />

      {/* Central Five-Point Star */}
      <polygon
        points="50,34 54,44 65,44 56,51 60,61 50,55 40,61 44,51 35,44 46,44"
        fill="#ffffff"
      />
    </svg>
  </div>
);

/**
 * Avengers 'A' Emblem
 * Direct inspiration from Reference Image 1
 */
export const AvengersEmblem: React.FC<EmblemProps> = ({
  className = 'w-10 h-10',
  size = 40,
  glow = true,
}) => (
  <div
    className={`relative inline-flex items-center justify-center rounded-full group cursor-pointer transition-transform duration-300 hover:scale-105 ${className}`}
    style={{ width: size, height: size }}
  >
    {glow && (
      <div className="absolute inset-0 rounded-full bg-blue-600/30 blur-md group-hover:bg-blue-500/45 transition-colors" />
    )}
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full relative z-10 drop-shadow-md"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="avengersBg" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#09142e" />
        </radialGradient>
      </defs>

      {/* Badge Circle */}
      <circle cx="50" cy="50" r="47" stroke="#38bdf8" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="44" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
      <circle cx="50" cy="50" r="43" fill="url(#avengersBg)" />

      {/* Iconic Avengers 'A' with Arrow Slash */}
      {/* Outer Ring Circle segment */}
      <path
        d="M 50 14 A 36 36 0 1 0 85 54"
        stroke="#38bdf8"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />

      {/* Main A Shape */}
      <path
        d="M 54 22 L 34 78 L 44 78 L 48 66 L 68 66 L 72 78 L 82 78 L 62 22 Z"
        fill="#ffffff"
      />
      {/* A Inner Triangle cutout */}
      <polygon points="58,36 50,58 64,58" fill="#09142e" />

      {/* Arrow Slash through Crossbar */}
      <polygon points="30,58 76,58 68,52 82,58 68,64 76,58" fill="#38bdf8" />
    </svg>
  </div>
);

/**
 * Doctor Strange Sanctum Emblem
 * Direct inspiration from Reference Image 1
 */
export const DoctorStrangeEmblem: React.FC<EmblemProps> = ({
  className = 'w-10 h-10',
  size = 40,
  glow = true,
}) => (
  <div
    className={`relative inline-flex items-center justify-center rounded-full group cursor-pointer transition-transform duration-300 hover:scale-105 ${className}`}
    style={{ width: size, height: size }}
  >
    {glow && (
      <div className="absolute inset-0 rounded-full bg-amber-500/25 blur-md group-hover:bg-amber-400/40 transition-colors" />
    )}
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full relative z-10 drop-shadow-md"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="47" stroke="#f59e0b" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="43" fill="#180e03" />

      {/* Sanctum Sanctorum 4 curved lines intersecting */}
      <path
        d="M 22 22 Q 50 42 78 78"
        stroke="#fbbf24"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 78 22 Q 50 42 22 78"
        stroke="#fbbf24"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 50 14 Q 38 50 50 86"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 14 50 Q 50 62 86 50"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="50" cy="50" r="7" fill="#fbbf24" opacity="0.9" />
    </svg>
  </div>
);

/**
 * Thor Mjolnir Emblem
 * Direct inspiration from Reference Image 1
 */
export const ThorMjolnirEmblem: React.FC<EmblemProps> = ({
  className = 'w-10 h-10',
  size = 40,
  glow = true,
}) => (
  <div
    className={`relative inline-flex items-center justify-center rounded-full group cursor-pointer transition-transform duration-300 hover:scale-105 ${className}`}
    style={{ width: size, height: size }}
  >
    {glow && (
      <div className="absolute inset-0 rounded-full bg-cyan-400/25 blur-md group-hover:bg-cyan-300/40 transition-colors" />
    )}
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full relative z-10 drop-shadow-md"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="47" stroke="#38bdf8" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="43" fill="#082f49" />

      {/* Mjolnir Angled Silhouette */}
      <g transform="rotate(-35 50 50)">
        {/* Hammer Head */}
        <rect x="30" y="24" width="40" height="26" rx="4" fill="#ffffff" />
        <rect x="34" y="27" width="32" height="20" rx="2" fill="#0284c7" opacity="0.3" />
        {/* Handle */}
        <rect x="47" y="50" width="6" height="34" rx="2" fill="#e2e8f0" />
        {/* Strap loop */}
        <path d="M 50 84 Q 55 92 45 92" stroke="#38bdf8" strokeWidth="2" fill="none" />
      </g>
    </svg>
  </div>
);

/**
 * Marvel Studios Authentic Box Badge
 * Direct inspiration from Reference Image 2 & 3
 */
export const MarvelBoxBadge: React.FC<{
  leftText?: string;
  rightText?: string;
  className?: string;
}> = ({
  leftText = 'MARVEL',
  rightText = 'STUDIOS',
  className = '',
}) => (
  <div className={`inline-flex items-center font-marvel select-none shadow-lg tracking-wider ${className}`}>
    <div className="bg-[#e23636] text-white px-2 py-0.5 text-xs sm:text-sm font-bold border border-[#e23636] flex items-center justify-center leading-none">
      {leftText}
    </div>
    <div className="bg-transparent text-white px-2 py-0.5 text-xs sm:text-sm font-bold border border-white/40 border-l-0 flex items-center justify-center leading-none tracking-widest">
      {rightText}
    </div>
  </div>
);

/**
 * Comic Star Rating Spec (from Reference Image 1)
 */
export const MCUStarRating: React.FC<{
  stars?: number;
  max?: number;
  label?: string;
  className?: string;
}> = ({ stars = 5, max = 5, label, className = '' }) => (
  <div className={`flex flex-col items-center gap-0.5 select-none ${className}`}>
    {label && (
      <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase">
        {label}
      </span>
    )}
    <div className="flex items-center gap-0.5 text-[10px] text-amber-400">
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} className={i < stars ? 'text-amber-400' : 'text-slate-600'}>
          ★
        </span>
      ))}
    </div>
  </div>
);
