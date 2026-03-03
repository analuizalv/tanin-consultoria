import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

/* ═══════════════════════════════════════════════
   LARGE EDITORIAL ILLUSTRATIONS (100-180px)
   Wine-themed, with fills, layered, high presence
   ═══════════════════════════════════════════════ */

/* ─── Hero: Wine bottle + glass scene ─── */
export const IllustrationWineScene = ({ size = 180, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 180 180" fill="none" {...props}>
    {/* Background glow */}
    <circle cx="90" cy="100" r="70" fill="var(--gold)" fillOpacity="0.06" />
    {/* Bottle */}
    <path d="M70 45h12v15c8 4 14 12 14 22v55c0 4-3 7-7 7H63c-4 0-7-3-7-7V82c0-10 6-18 14-22V45Z"
      fill="hsl(350,63%,24%)" fillOpacity="0.15" stroke="var(--gold)" strokeWidth="1.5" />
    <rect x="72" y="35" width="8" height="12" rx="2" stroke="var(--gold)" strokeWidth="1.5" />
    <path d="M63 95h26" stroke="var(--gold)" strokeWidth="1" strokeOpacity="0.4" />
    <rect x="67" y="100" width="18" height="20" rx="2" fill="var(--gold)" fillOpacity="0.08"
      stroke="var(--gold)" strokeWidth="1" strokeOpacity="0.3" />
    {/* Glass */}
    <path d="M105 70h30l-4 28a10 10 0 0 1-10 9h-2a10 10 0 0 1-10-9L105 70Z"
      fill="hsl(350,63%,24%)" fillOpacity="0.1" stroke="var(--gold)" strokeWidth="1.5" />
    <path d="M108 80h24" stroke="var(--gold)" strokeWidth="1" strokeOpacity="0.5" />
    <ellipse cx="120" cy="70" rx="15" ry="3" stroke="var(--gold)" strokeWidth="1.5" />
    <line x1="120" y1="107" x2="120" y2="130" stroke="var(--gold)" strokeWidth="1.5" />
    <ellipse cx="120" cy="132" rx="12" ry="3" stroke="var(--gold)" strokeWidth="1.5" />
    {/* Wine drops / sparkle */}
    <circle cx="140" cy="60" r="2" fill="var(--gold)" fillOpacity="0.3" />
    <circle cx="148" cy="72" r="1.5" fill="var(--gold)" fillOpacity="0.2" />
    <circle cx="52" cy="80" r="1.5" fill="var(--gold)" fillOpacity="0.25" />
  </svg>
);

/* ─── Tese: Target with arrow rising ─── */
export const IllustrationTarget = ({ size = 100, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" {...props}>
    <circle cx="50" cy="55" r="35" stroke="var(--gold)" strokeWidth="1.5" strokeOpacity="0.25" />
    <circle cx="50" cy="55" r="24" stroke="var(--gold)" strokeWidth="1.5" strokeOpacity="0.4" />
    <circle cx="50" cy="55" r="12" fill="var(--gold)" fillOpacity="0.12" stroke="var(--gold)" strokeWidth="1.5" />
    <circle cx="50" cy="55" r="4" fill="var(--gold)" fillOpacity="0.3" />
    {/* Arrow going up-right */}
    <path d="M58 47L78 18" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" />
    <path d="M78 18l-8 2 6 6Z" fill="var(--gold)" fillOpacity="0.5" stroke="var(--gold)" strokeWidth="1.5" />
    {/* Small chart bars */}
    <rect x="14" y="78" width="6" height="12" rx="1" fill="var(--gold)" fillOpacity="0.15" />
    <rect x="23" y="72" width="6" height="18" rx="1" fill="var(--gold)" fillOpacity="0.2" />
    <rect x="32" y="65" width="6" height="25" rx="1" fill="var(--gold)" fillOpacity="0.25" />
  </svg>
);

/* ─── Tese: Calendar with checkmark ─── */
export const IllustrationCalendar = ({ size = 100, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" {...props}>
    <rect x="15" y="20" width="70" height="65" rx="8" fill="var(--gold)" fillOpacity="0.06"
      stroke="var(--gold)" strokeWidth="1.5" />
    <path d="M15 38h70" stroke="var(--gold)" strokeWidth="1.5" />
    <line x1="35" y1="12" x2="35" y2="26" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" />
    <line x1="65" y1="12" x2="65" y2="26" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" />
    {/* Calendar grid dots */}
    {[48, 58, 68].map(y => [30, 42, 54, 66].map(x => (
      <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill="var(--gold)" fillOpacity="0.15" />
    )))}
    {/* Big checkmark */}
    <polyline points="38,60 46,70 62,50" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── Tese: Gears / cadence ─── */
export const IllustrationCadence = ({ size = 100, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" {...props}>
    {/* Large gear */}
    <circle cx="42" cy="52" r="20" stroke="var(--gold)" strokeWidth="1.5" />
    <circle cx="42" cy="52" r="12" fill="var(--gold)" fillOpacity="0.08" stroke="var(--gold)" strokeWidth="1" />
    <circle cx="42" cy="52" r="5" fill="var(--gold)" fillOpacity="0.2" />
    {/* Gear teeth (large) */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
      const rad = (angle * Math.PI) / 180;
      const x1 = 42 + 19 * Math.cos(rad);
      const y1 = 52 + 19 * Math.sin(rad);
      const x2 = 42 + 25 * Math.cos(rad);
      const y2 = 52 + 25 * Math.sin(rad);
      return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />;
    })}
    {/* Small gear */}
    <circle cx="72" cy="34" r="12" stroke="var(--gold)" strokeWidth="1.5" />
    <circle cx="72" cy="34" r="7" fill="var(--gold)" fillOpacity="0.08" stroke="var(--gold)" strokeWidth="1" />
    <circle cx="72" cy="34" r="3" fill="var(--gold)" fillOpacity="0.2" />
    {[0, 60, 120, 180, 240, 300].map(angle => {
      const rad = (angle * Math.PI) / 180;
      const x1 = 72 + 11 * Math.cos(rad);
      const y1 = 34 + 11 * Math.sin(rad);
      const x2 = 72 + 16 * Math.cos(rad);
      const y2 = 34 + 16 * Math.sin(rad);
      return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" />;
    })}
    {/* Pulse wave at bottom */}
    <path d="M10 85 L30 85 L35 72 L40 90 L45 78 L50 85 L90 85" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── Método: Magnifying glass with chart ─── */
export const IllustrationDiagnostic = ({ size = 140, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 140 140" fill="none" {...props}>
    {/* Lens glow */}
    <circle cx="62" cy="58" r="40" fill="var(--gold)" fillOpacity="0.04" />
    {/* Magnifying glass body */}
    <circle cx="62" cy="58" r="35" stroke="var(--gold)" strokeWidth="2" />
    <circle cx="62" cy="58" r="30" stroke="var(--gold)" strokeWidth="1" strokeOpacity="0.3" />
    {/* Handle */}
    <line x1="88" y1="84" x2="118" y2="118" stroke="var(--gold)" strokeWidth="4" strokeLinecap="round" />
    <line x1="88" y1="84" x2="118" y2="118" stroke="var(--gold)" strokeWidth="8" strokeLinecap="round" strokeOpacity="0.15" />
    {/* Chart inside lens */}
    <rect x="38" y="68" width="8" height="16" rx="2" fill="var(--gold)" fillOpacity="0.2" />
    <rect x="50" y="58" width="8" height="26" rx="2" fill="var(--gold)" fillOpacity="0.25" />
    <rect x="62" y="48" width="8" height="36" rx="2" fill="var(--gold)" fillOpacity="0.3" />
    <rect x="74" y="38" width="8" height="46" rx="2" fill="var(--gold)" fillOpacity="0.35" />
    {/* Trend line */}
    <path d="M42 66 L54 56 L66 46 L78 36" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3" />
  </svg>
);

/* ─── Método: Map with route ─── */
export const IllustrationPlan = ({ size = 140, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 140 140" fill="none" {...props}>
    {/* Map bg */}
    <rect x="15" y="15" width="110" height="110" rx="12" fill="var(--gold)" fillOpacity="0.05"
      stroke="var(--gold)" strokeWidth="1.5" />
    {/* Map fold lines */}
    <line x1="60" y1="15" x2="60" y2="125" stroke="var(--gold)" strokeWidth="1" strokeOpacity="0.15" />
    <line x1="95" y1="15" x2="95" y2="125" stroke="var(--gold)" strokeWidth="1" strokeOpacity="0.15" />
    {/* Route path */}
    <path d="M30 100 C30 80, 50 75, 50 60 C50 45, 75 50, 80 40 C85 30, 105 35, 110 50"
      stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 4" fill="none" />
    {/* Waypoints */}
    <circle cx="30" cy="100" r="6" fill="var(--gold)" fillOpacity="0.2" stroke="var(--gold)" strokeWidth="1.5" />
    <circle cx="30" cy="100" r="3" fill="var(--gold)" fillOpacity="0.4" />
    <circle cx="50" cy="60" r="5" fill="var(--gold)" fillOpacity="0.15" stroke="var(--gold)" strokeWidth="1.5" />
    <circle cx="80" cy="40" r="5" fill="var(--gold)" fillOpacity="0.15" stroke="var(--gold)" strokeWidth="1.5" />
    {/* Destination pin */}
    <path d="M110 30 C110 22, 118 18, 118 30 C118 38, 110 42, 110 42 C110 42, 102 38, 102 30 C102 18, 110 22, 110 30Z"
      fill="var(--gold)" fillOpacity="0.3" stroke="var(--gold)" strokeWidth="1.5" />
    <circle cx="110" cy="30" r="3" fill="var(--gold)" fillOpacity="0.5" />
    {/* Flag at start */}
    <line x1="30" y1="94" x2="30" y2="78" stroke="var(--gold)" strokeWidth="1.5" />
    <path d="M30 78 L44 83 L30 88Z" fill="var(--gold)" fillOpacity="0.25" stroke="var(--gold)" strokeWidth="1" />
  </svg>
);

/* ─── Método: Compass with gauge ─── */
export const IllustrationGovernance = ({ size = 140, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 140 140" fill="none" {...props}>
    {/* Outer ring */}
    <circle cx="70" cy="70" r="55" stroke="var(--gold)" strokeWidth="1.5" />
    <circle cx="70" cy="70" r="50" stroke="var(--gold)" strokeWidth="1" strokeOpacity="0.3" />
    {/* Inner filled ring */}
    <circle cx="70" cy="70" r="42" fill="var(--gold)" fillOpacity="0.04" />
    {/* Cardinal markers */}
    {[0, 90, 180, 270].map(angle => {
      const rad = (angle * Math.PI) / 180;
      const x1 = 70 + 45 * Math.cos(rad);
      const y1 = 70 + 45 * Math.sin(rad);
      const x2 = 70 + 55 * Math.cos(rad);
      const y2 = 70 + 55 * Math.sin(rad);
      return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" />;
    })}
    {/* Minor tick marks */}
    {[30, 60, 120, 150, 210, 240, 300, 330].map(angle => {
      const rad = (angle * Math.PI) / 180;
      const x1 = 70 + 48 * Math.cos(rad);
      const y1 = 70 + 48 * Math.sin(rad);
      const x2 = 70 + 55 * Math.cos(rad);
      const y2 = 70 + 55 * Math.sin(rad);
      return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--gold)" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.4" />;
    })}
    {/* Needle - north */}
    <polygon points="70,22 74,62 70,70 66,62" fill="var(--gold)" fillOpacity="0.4" stroke="var(--gold)" strokeWidth="1" />
    {/* Needle - south */}
    <polygon points="70,118 66,78 70,70 74,78" fill="var(--gold)" fillOpacity="0.1" stroke="var(--gold)" strokeWidth="1" />
    {/* Center */}
    <circle cx="70" cy="70" r="6" fill="var(--gold)" fillOpacity="0.25" stroke="var(--gold)" strokeWidth="1.5" />
    <circle cx="70" cy="70" r="3" fill="var(--gold)" fillOpacity="0.5" />
    {/* N label */}
    <text x="70" y="18" textAnchor="middle" fill="var(--gold)" fontSize="10" fontWeight="600" fontFamily="Inter">N</text>
  </svg>
);

/* ─── ParaQuem segment icons (medium size) ─── */

export const IllustrationImporter = ({ size = 80, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" {...props}>
    <circle cx="40" cy="40" r="35" fill="var(--gold)" fillOpacity="0.05" />
    {/* Globe */}
    <circle cx="40" cy="38" r="22" stroke="var(--gold)" strokeWidth="1.5" />
    <ellipse cx="40" cy="38" rx="10" ry="22" stroke="var(--gold)" strokeWidth="1" strokeOpacity="0.4" />
    <path d="M18 38h44" stroke="var(--gold)" strokeWidth="1" strokeOpacity="0.3" />
    <path d="M22 26h36" stroke="var(--gold)" strokeWidth="1" strokeOpacity="0.2" />
    <path d="M22 50h36" stroke="var(--gold)" strokeWidth="1" strokeOpacity="0.2" />
    {/* Airplane arc */}
    <path d="M20 55 C30 45, 50 45, 65 30" stroke="var(--gold)" strokeWidth="1.5" strokeDasharray="3 3" />
    <path d="M65 30l-5 1 3 4Z" fill="var(--gold)" fillOpacity="0.5" />
  </svg>
);

export const IllustrationWinery = ({ size = 80, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" {...props}>
    <circle cx="40" cy="42" r="35" fill="var(--gold)" fillOpacity="0.05" />
    {/* Grape cluster */}
    {[
      [32, 35], [40, 35], [48, 35],
      [28, 44], [36, 44], [44, 44], [52, 44],
      [32, 53], [40, 53], [48, 53],
      [36, 62], [44, 62],
      [40, 70],
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="5.5"
        fill="var(--gold)" fillOpacity={0.1 + i * 0.015}
        stroke="var(--gold)" strokeWidth="1" strokeOpacity="0.3" />
    ))}
    {/* Stem & leaf */}
    <path d="M40 30 C40 18, 44 14, 48 10" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M44 18 C50 14, 58 16, 56 22 C54 26, 48 24, 44 18Z" fill="var(--gold)" fillOpacity="0.15" stroke="var(--gold)" strokeWidth="1" />
  </svg>
);

export const IllustrationBrand = ({ size = 80, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" {...props}>
    <circle cx="40" cy="42" r="35" fill="var(--gold)" fillOpacity="0.05" />
    {/* Trophy */}
    <path d="M28 18h24v8c0 10-5 18-12 20v0c-7-2-12-10-12-20V18Z"
      fill="var(--gold)" fillOpacity="0.1" stroke="var(--gold)" strokeWidth="1.5" />
    {/* Handles */}
    <path d="M28 22h-4c-3 0-6 3-6 6s3 6 6 6h4" stroke="var(--gold)" strokeWidth="1.5" />
    <path d="M52 22h4c3 0 6 3 6 6s-3 6-6 6h-4" stroke="var(--gold)" strokeWidth="1.5" />
    {/* Stem & base */}
    <line x1="40" y1="46" x2="40" y2="56" stroke="var(--gold)" strokeWidth="1.5" />
    <rect x="30" y="56" width="20" height="4" rx="2" fill="var(--gold)" fillOpacity="0.15" stroke="var(--gold)" strokeWidth="1.5" />
    {/* Star inside */}
    <polygon points="40,24 42,30 48,30 43,34 45,40 40,36 35,40 37,34 32,30 38,30"
      fill="var(--gold)" fillOpacity="0.25" stroke="var(--gold)" strokeWidth="0.8" />
    {/* Sparkles */}
    <circle cx="22" cy="14" r="1.5" fill="var(--gold)" fillOpacity="0.3" />
    <circle cx="58" cy="12" r="1" fill="var(--gold)" fillOpacity="0.25" />
    <circle cx="62" cy="20" r="1.5" fill="var(--gold)" fillOpacity="0.2" />
  </svg>
);

/* ─── Alavancas icons (medium) ─── */

export const IconCRM = ({ size = 28, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="9" cy="7" r="3" />
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    <circle cx="18" cy="9" r="2.5" />
    <path d="M21 21v-1.5a3 3 0 0 0-2-2.83" />
  </svg>
);

export const IconContent = ({ size = 28, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
  </svg>
);

export const IconPR = ({ size = 28, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M21 5l-3 3" />
    <path d="M21 11l-3-3" />
    <path d="M3.5 17a2 2 0 0 0 4 0" />
  </svg>
);

export const IconExperience = ({ size = 28, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8Z" fill="var(--gold)" fillOpacity="0.1" />
  </svg>
);

export const IconAI = ({ size = 28, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <rect x="9" y="9" width="6" height="6" rx="1" fill="var(--gold)" fillOpacity="0.15" />
    <line x1="9" y1="6" x2="9" y2="3" /><line x1="15" y1="6" x2="15" y2="3" />
    <line x1="9" y1="18" x2="9" y2="21" /><line x1="15" y1="18" x2="15" y2="21" />
    <line x1="6" y1="9" x2="3" y2="9" /><line x1="6" y1="15" x2="3" y2="15" />
    <line x1="18" y1="9" x2="21" y2="9" /><line x1="18" y1="15" x2="21" y2="15" />
  </svg>
);
