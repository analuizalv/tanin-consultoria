import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  IllustrationImporter,
  IllustrationWinery,
  IllustrationBrand,
  IconCRM,
  IconContent,
  IconPR,
  IconExperience,
  IconAI,
} from "@/components/icons/WineIcons";
import type { ComponentType, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const segments: {
  label: string;
  sub: string;
  Illustration: ComponentType<IconProps>;
}[] = [
  { label: "Importadoras", sub: "Posicionamento, sell-out e diferenciação no portfólio", Illustration: IllustrationImporter },
  { label: "Vinícolas", sub: "Marca, DTC e presença direta no mercado", Illustration: IllustrationWinery },
  { label: "Marcas do setor", sub: "Growth, storytelling e estratégia competitiva", Illustration: IllustrationBrand },
];

const alavancas: { text: string; Icon: ComponentType<IconProps> }[] = [
  { text: "CRM & retenção", Icon: IconCRM },
  { text: "Conteúdo e mídia", Icon: IconContent },
  { text: "PR estratégico", Icon: IconPR },
  { text: "Experiências e ativações", Icon: IconExperience },
  { text: "IA para escala", Icon: IconAI },
];

const ParaQuem = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="para-quem" className="relative bg-primary text-primary-foreground py-28 md:py-40 overflow-hidden" ref={sectionRef}>
      {/* Background wine image (mesa dourada com frutas e taças) */}
      <div className="absolute inset-0">
        <img
          src="/images/wine-background.png"
          alt=""
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, hsl(350 63% 24% / 0.85) 0%, hsl(350 63% 24% / 0.7) 50%, hsl(350 63% 24% / 0.9) 100%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Bold heading */}
        <div className="max-w-5xl mb-20 md:mb-28">
          <h2 className="animate-on-scroll font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
            Para quem a Tanin{" "}
            <span className="italic" style={{ color: "var(--gold)" }}>existe.</span>
          </h2>
          <p className="animate-on-scroll stagger-1 text-xl md:text-2xl text-primary-foreground/60">
            Consultoria focada em três perfis do mercado de vinhos.
          </p>
        </div>

        {/* Segment horizontal cards */}
        <div className="flex flex-col gap-6 md:gap-0 mb-24 md:mb-32">
          {segments.map((s, i) => (
            <div
              key={s.label}
              className={`animate-on-scroll stagger-${i + 2} group flex flex-col md:flex-row items-center gap-8 md:gap-12
                py-8 md:py-12 ${i < segments.length - 1 ? "border-b" : ""}`}
              style={{ borderColor: "rgba(204,190,139,0.12)" }}
            >
              {/* Illustration */}
              <div className="shrink-0 transition-transform duration-500 group-hover:scale-110">
                <s.Illustration size={90} />
              </div>

              {/* Text */}
              <div className="text-center md:text-left">
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">{s.label}</h3>
                <p className="text-base md:text-lg text-primary-foreground/55">{s.sub}</p>
              </div>

              {/* Decorative arrow (desktop) */}
              <div className="hidden md:block ml-auto opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-0 group-hover:translate-x-2">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Alavancas heading + pills */}
        <div>
          <h3 className="animate-on-scroll font-serif text-2xl md:text-4xl font-bold mb-10">
            Alavancas que entram no plano
          </h3>

          <div className="animate-on-scroll stagger-1 flex flex-wrap gap-4">
            {alavancas.map((a) => (
              <div
                key={a.text}
                className="group flex items-center gap-3 px-6 py-4 rounded-full
                  transition-all duration-300 hover:scale-105 cursor-default"
                style={{
                  background: "rgba(204,190,139,0.1)",
                  border: "1px solid rgba(204,190,139,0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(204,190,139,0.18)";
                  e.currentTarget.style.borderColor = "rgba(204,190,139,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(204,190,139,0.1)";
                  e.currentTarget.style.borderColor = "rgba(204,190,139,0.2)";
                }}
              >
                <a.Icon size={22} />
                <span className="text-base md:text-lg font-medium text-primary-foreground/90">{a.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Texture overlay for extra depth */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ccbe8b' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
    </section>
  );
};

export default ParaQuem;
