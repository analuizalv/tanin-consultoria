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
        {/* Big statement + editorial photo */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 mb-20 md:mb-28">
          {/* Text */}
          <div className="flex-1 max-w-3xl">
            <h2 className="animate-on-scroll font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] mb-6">
              Performance digital e experiência física{" "}
              <span className="italic" style={{ color: "var(--gold)" }}>não são opostos.</span>
            </h2>
            <p className="animate-on-scroll stagger-1 text-xl md:text-2xl text-muted-foreground max-w-2xl">
              São o mesmo negócio — e é assim que o vinho cresce de verdade.
            </p>
          </div>

          {/* Editorial wine photo — 3 taças (tinto, branco, rosé) */}
          <div className="animate-on-scroll stagger-2 flex-shrink-0 w-full max-w-[280px] lg:max-w-[320px] mx-auto lg:mx-0 lg:mt-4">
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[2/3]">
              <img
                src="/images/wine-detail.png"
                alt="Três taças de vinho — tinto, branco e rosé"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Soft blend at bottom */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, hsl(var(--background)) 0%, transparent 20%)",
                }}
              />
            </div>
          </div>
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
