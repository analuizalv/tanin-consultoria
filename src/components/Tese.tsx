import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  IllustrationTarget,
  IllustrationCalendar,
  IllustrationCadence,
} from "@/components/icons/WineIcons";
import type { ComponentType, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const pillars: {
  title: string;
  desc: string;
  Illustration: ComponentType<IconProps>;
}[] = [
  {
    title: "Marca e performance na mesma direção",
    desc: "Branding e growth não são forças opostas. São a mesma alavanca.",
    Illustration: IllustrationTarget,
  },
  {
    title: "Estratégia que cabe na rotina",
    desc: "Plano realista, com cadência e prioridades que o time consegue executar.",
    Illustration: IllustrationCalendar,
  },
  {
    title: "Execução com método e cadência",
    desc: "Checkpoints, ajustes e ritmo. Sem improviso, sem complicar.",
    Illustration: IllustrationCadence,
  },
];

const Tese = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="tese" className="py-28 md:py-40" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        {/* Big statement */}
        <div className="max-w-5xl mb-20 md:mb-28">
          <h2 className="animate-on-scroll font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] mb-6">
            Performance digital e experiência física{" "}
            <span className="italic" style={{ color: "var(--gold)" }}>não são opostos.</span>
          </h2>
          <p className="animate-on-scroll stagger-1 text-xl md:text-2xl text-muted-foreground max-w-2xl">
            São o mesmo negócio — e é assim que o vinho cresce de verdade.
          </p>
        </div>

        {/* 3 pillar cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map(({ title, desc, Illustration }, i) => (
            <div
              key={title}
              className={`animate-on-scroll stagger-${i + 2} group relative overflow-hidden rounded-2xl p-8 md:p-10
                transition-all duration-500 hover:-translate-y-1`}
              style={{
                backgroundColor: "hsl(var(--primary) / 0.04)",
                borderLeft: "4px solid var(--gold)",
              }}
            >
              {/* Illustration */}
              <div className="mb-6 transition-transform duration-500 group-hover:scale-105">
                <Illustration size={100} />
              </div>

              <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground leading-snug mb-3">
                {title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tese;
