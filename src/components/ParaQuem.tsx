import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  IconImporter,
  IconWinery,
  IconBrand,
  IconCRM,
  IconContent,
  IconPR,
  IconExperience,
  IconAI,
} from "@/components/icons/WineIcons";
import type { ComponentType, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const segments: { label: string; Icon: ComponentType<IconProps> }[] = [
  { label: "Importadoras", Icon: IconImporter },
  { label: "Vinícolas", Icon: IconWinery },
  { label: "Marcas do setor", Icon: IconBrand },
];

const alavancas: { text: string; Icon: ComponentType<IconProps> }[] = [
  { text: "CRM & retenção", Icon: IconCRM },
  { text: "Conteúdo e mídia", Icon: IconContent },
  { text: "PR estratégico e influência", Icon: IconPR },
  { text: "Experiências (eventos, parcerias, ativações)", Icon: IconExperience },
  { text: "IA para escala (processos e produtividade)", Icon: IconAI },
];

const ParaQuem = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="para-quem" className="py-24 md:py-32 bg-muted/50" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
        <h2 className="animate-on-scroll font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
          Para quem a Tanin é
        </h2>
        <div className="animate-on-scroll stagger-1 mx-auto mb-12 w-12 h-[1px]" style={{ background: "var(--gold)" }} />

        {/* Segment cards with icons */}
        <div className="animate-on-scroll stagger-1 flex flex-wrap justify-center gap-6 mb-16">
          {segments.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-3 px-8 py-6 rounded-xl border bg-background
                transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{ borderColor: "rgba(204, 190, 139, 0.2)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(204, 190, 139, 0.45)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(204, 190, 139, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(204, 190, 139, 0.2)";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <s.Icon size={36} />
              <span className="text-sm font-semibold text-foreground">{s.label}</span>
            </div>
          ))}
        </div>

        <h3 className="animate-on-scroll stagger-2 font-serif text-xl font-semibold text-foreground mb-10">
          Alavancas que podem entrar no plano
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {alavancas.map((a, i) => (
            <div
              key={a.text}
              className={`animate-on-scroll stagger-${i + 3} group border border-border bg-background rounded-lg px-5 py-4
                transition-all duration-300 hover:border-accent/40 hover:shadow-sm`}
            >
              <div className="flex items-center gap-3">
                <span className="shrink-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <a.Icon size={20} />
                </span>
                <span className="text-base text-foreground text-left">{a.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParaQuem;
