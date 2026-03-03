import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const defaults = (size = 40): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: "var(--gold)",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

/* ─── Tese icons ─── */

/** Wine glass + arrow up — brand & performance together */
export const IconBrandPerformance = ({ size, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props}>
    <path d="M14 8h12l-1.5 10a4.5 4.5 0 0 1-9 0L14 8Z" />
    <line x1="20" y1="22" x2="20" y2="28" />
    <line x1="16" y1="28" x2="24" y2="28" />
    <path d="M28 12l4-4m0 0v3m0-3h-3" strokeWidth="1.6" />
  </svg>
);

/** Calendar with checkmark — strategy that fits routine */
export const IconStrategyRoutine = ({ size, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props}>
    <rect x="8" y="10" width="24" height="22" rx="3" />
    <line x1="8" y1="16" x2="32" y2="16" />
    <line x1="15" y1="6" x2="15" y2="12" />
    <line x1="25" y1="6" x2="25" y2="12" />
    <polyline points="15,24 18,27 25,20" strokeWidth="1.6" />
  </svg>
);

/** Metronome / rhythm — execution with cadence */
export const IconCadence = ({ size, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props}>
    <path d="M12 34L16 6h8l4 28" />
    <circle cx="20" cy="34" r="2" />
    <line x1="20" y1="14" x2="28" y2="8" strokeWidth="1.6" />
    <circle cx="20" cy="14" r="2.5" fill="var(--gold)" fillOpacity="0.2" />
  </svg>
);

/* ─── Método icons ─── */

/** Magnifying glass — diagnostic */
export const IconDiagnostic = ({ size, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props}>
    <circle cx="18" cy="18" r="9" />
    <line x1="24.5" y1="24.5" x2="32" y2="32" strokeWidth="1.8" />
    <circle cx="18" cy="18" r="3" strokeDasharray="2 2" />
  </svg>
);

/** Route map — 90-day plan */
export const IconPlan = ({ size, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props}>
    <path d="M8 10l8 4 8-4 8 4v20l-8-4-8 4-8-4Z" />
    <line x1="16" y1="14" x2="16" y2="30" strokeDasharray="2 3" />
    <line x1="24" y1="10" x2="24" y2="26" strokeDasharray="2 3" />
  </svg>
);

/** Compass — governance & follow-up */
export const IconGovernance = ({ size, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props}>
    <circle cx="20" cy="20" r="14" />
    <circle cx="20" cy="20" r="3" fill="var(--gold)" fillOpacity="0.2" />
    <polygon points="20,7 22,17 20,20 18,17" fill="var(--gold)" fillOpacity="0.3" stroke="var(--gold)" />
    <polygon points="20,33 18,23 20,20 22,23" fill="none" stroke="var(--gold)" />
  </svg>
);

/* ─── ParaQuem segment icons ─── */

/** Ship — importadoras */
export const IconImporter = ({ size, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props}>
    <path d="M4 28c4-2 8 0 12-2s8 0 12-2 8 0 8 0" />
    <path d="M10 28v-8h20v8" />
    <path d="M20 12v8" />
    <path d="M20 12l8 4v4" />
    <line x1="20" y1="12" x2="20" y2="8" />
    <line x1="20" y1="8" x2="28" y2="8" />
  </svg>
);

/** Grape cluster — vinícolas */
export const IconWinery = ({ size, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props}>
    <circle cx="16" cy="18" r="4" fill="var(--gold)" fillOpacity="0.15" />
    <circle cx="24" cy="18" r="4" fill="var(--gold)" fillOpacity="0.15" />
    <circle cx="20" cy="24" r="4" fill="var(--gold)" fillOpacity="0.15" />
    <circle cx="12" cy="24" r="4" fill="var(--gold)" fillOpacity="0.15" />
    <circle cx="28" cy="24" r="4" fill="var(--gold)" fillOpacity="0.15" />
    <path d="M20 14c0-4 3-6 3-10" />
    <path d="M20 10c2 0 5 0 7-2" />
  </svg>
);

/** Star badge — marcas do setor */
export const IconBrand = ({ size, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props}>
    <polygon
      points="20,6 23.5,14 32,15 26,21 27.5,30 20,26 12.5,30 14,21 8,15 16.5,14"
      fill="var(--gold)"
      fillOpacity="0.12"
    />
  </svg>
);

/* ─── Alavancas icons ─── */

/** People — CRM */
export const IconCRM = ({ size = 22, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props} viewBox="0 0 24 24" strokeWidth={1.5}>
    <circle cx="9" cy="7" r="3" />
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    <circle cx="18" cy="9" r="2.5" />
    <path d="M21 21v-1.5a3 3 0 0 0-2-2.83" />
  </svg>
);

/** Pen — conteúdo */
export const IconContent = ({ size = 22, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props} viewBox="0 0 24 24" strokeWidth={1.5}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
  </svg>
);

/** Megaphone — PR */
export const IconPR = ({ size = 22, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props} viewBox="0 0 24 24" strokeWidth={1.5}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M21 5l-3 3" />
    <path d="M21 11l-3-3" />
    <path d="M3.5 17a2 2 0 0 0 4 0" />
  </svg>
);

/** Sparkle — experiências */
export const IconExperience = ({ size = 22, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props} viewBox="0 0 24 24" strokeWidth={1.5}>
    <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8Z" fill="var(--gold)" fillOpacity="0.1" />
  </svg>
);

/** CPU chip — IA */
export const IconAI = ({ size = 22, ...props }: IconProps) => (
  <svg {...defaults(size)} {...props} viewBox="0 0 24 24" strokeWidth={1.5}>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <rect x="9" y="9" width="6" height="6" rx="1" fill="var(--gold)" fillOpacity="0.15" />
    <line x1="9" y1="6" x2="9" y2="3" />
    <line x1="15" y1="6" x2="15" y2="3" />
    <line x1="9" y1="18" x2="9" y2="21" />
    <line x1="15" y1="18" x2="15" y2="21" />
    <line x1="6" y1="9" x2="3" y2="9" />
    <line x1="6" y1="15" x2="3" y2="15" />
    <line x1="18" y1="9" x2="21" y2="9" />
    <line x1="18" y1="15" x2="21" y2="15" />
  </svg>
);
