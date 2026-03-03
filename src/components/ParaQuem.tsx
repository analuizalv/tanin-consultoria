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

const segments: { label: string; sub: string; Icon: ComponentType<IconProps> }[] = [
  { label: "Importadoras", sub: "Posicionamento e sell-out", Icon: IconImporter },
  { label: "Vinícolas", sub: "Marca e DTC", Icon: IconWinery },
  { label: "Marcas do setor", sub: "Growth e diferenciação", Icon: IconBrand },
];

const alavancas: { text: string; Icon: ComponentType<IconProps>; wide?: boolean }[] = [
  { text: "CRM & retenção", Icon: IconCRM, wide: true },
  { text: "Conteúdo e mídia", Icon: IconContent, wide: true },
  { text: "PR estratégico e influência", Icon: IconPR },
  { text: "Experiências e ativações", Icon: IconExperience },
  { text: "IA para escala", Icon: IconAI },
];

const ParaQuem = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="para-quem" className="overflow-hidden" ref={sectionRef}>
      {/* Segments — dark featured strip */}
      <div className="bg-primary text-primary-foreground py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <h2 className="animate-on-scroll font-serif text-3xl md:text-4xl font-semibold text-center mb-4">
            Para quem a Tanin é
          </h2>
          <div className="animate-on-scroll stagger-1 mx-auto mb-16 w-12 h-[1px]" style={{ background: "var(--gold)" }} />

          <div className="animate-on-scroll stagger-2 grid md:grid-cols-3 gap-0 rounded-2xl overflow-hidden border"
            style={{ borderColor: "rgba(204, 190, 139, 0.15)" }}
          >
            {segments.map((s, i) => (
              <div
                key={s.label}
                className={`group relative flex flex-col items-center justify-center py-14 px-8 text-center
                  transition-all duration-500 hover:bg-primary-foreground/[0.04]
                  ${i < segments.length - 1 ? "border-b md:border-b-0 md:border-r" : ""}`}
                style={{ borderColor: "rgba(204, 190, 139, 0.15)" }}
              >
                {/* Large icon */}
                <div className="mb-6 transition-transform duration-500 group-hover:scale-110">
                  <s.Icon size={48} />
                </div>

                <h3 className="font-serif text-xl font-semibold mb-2">{s.label}</h3>
                <p className="text-sm text-primary-foreground/50">{s.sub}</p>

                {/* Gold accent bar on hover */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-16 transition-all duration-500"
                  style={{ background: "var(--gold)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alavancas — bento grid on light bg */}
      <div className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h3 className="animate-on-scroll font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-14">
            Alavancas que podem entrar no plano
          </h3>

          {/* Bento grid: 2 wide on top, 3 equal below */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {alavancas.map((a, i) => (
              <div
                key={a.text}
                className={`animate-on-scroll stagger-${i + 1} group
                  rounded-xl border border-border bg-background p-6
                  flex flex-col items-center justify-center gap-3 text-center
                  transition-all duration-300 hover:-translate-y-1
                  ${a.wide ? "col-span-2 md:col-span-3" : "col-span-2"}`}
                style={{ minHeight: "120px" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(204, 190, 139, 0.4)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(204, 190, 139, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <span className="opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <a.Icon size={28} />
                </span>
                <span className="text-sm font-medium text-foreground">{a.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParaQuem;
