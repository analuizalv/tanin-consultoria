import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface PhotoDividerProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  quote?: string;
  height?: string;
  overlay?: "dark" | "wine" | "none";
}

const overlayStyles = {
  dark: "linear-gradient(to bottom, hsl(350 63% 24% / 0.5) 0%, hsl(350 63% 24% / 0.3) 50%, hsl(350 63% 24% / 0.5) 100%)",
  wine: "linear-gradient(to bottom, hsl(350 63% 24% / 0.7) 0%, hsl(350 63% 24% / 0.35) 40%, hsl(350 63% 24% / 0.7) 100%)",
  none: "none",
};

const PhotoDivider = ({
  src,
  fallbackSrc,
  alt,
  quote,
  height = "h-[40vh] md:h-[50vh]",
  overlay = "dark",
}: PhotoDividerProps) => {
  const sectionRef = useScrollAnimation();

  return (
    <div className={`relative ${height} overflow-hidden`} ref={sectionRef}>
      {/* Photo background */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        onError={(e) => {
          if (fallbackSrc) {
            const target = e.currentTarget;
            if (!target.dataset.fallback) {
              target.dataset.fallback = "true";
              target.src = fallbackSrc;
            }
          }
        }}
      />

      {/* Overlay */}
      {overlay !== "none" && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: overlayStyles[overlay] }}
        />
      )}

      {/* Top and bottom border accents */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] opacity-30"
        style={{ background: "var(--gold)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px] opacity-30"
        style={{ background: "var(--gold)" }}
      />

      {/* Optional quote */}
      {quote && (
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
          <p className="animate-on-scroll font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-center max-w-4xl leading-snug">
            {quote}
          </p>
        </div>
      )}
    </div>
  );
};

export default PhotoDivider;
