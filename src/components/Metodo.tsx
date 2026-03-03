import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  IconDiagnostic,
  IconPlan,
  IconGovernance,
} from "@/components/icons/WineIcons";
import type { ComponentType, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const steps: {
  num: string;
  title: string;
  desc: string;
  saida: string;
  Icon: ComponentType<IconProps>;
}[] = [
  {
    num: "01",
    title: "Diagnóstico + proposta de valor",
    desc: "Entrevistas rápidas + leitura de dados para definir: para quem, qual dor, qual promessa e por que você vence.",
    saida: "Proposta de valor + mensagens-chave + prioridades.",
    Icon: IconDiagnostic,
  },
  {
    num: "02",
    title: "Plano de 90 dias",
    desc: "Prioridades, calendário macro, iniciativas, owners e indicadores.",
    saida: "Plano acionável.",
    Icon: IconPlan,
  },
  {
    num: "03",
    title: "Acompanhamento e governança",
    desc: "Cadência (weekly/quinzenal), checkpoints e ajustes para o plano sair do papel.",
    saida: "Execução consistente.",
    Icon: IconGovernance,
  },
];

const Metodo = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="metodo" className="py-24 md:py-36" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <h2 className="animate-on-scroll font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-4">
          Do diagnóstico à execução, sem complicar.
        </h2>
        <div className="animate-on-scroll stagger-1 mx-auto mb-20 w-12 h-[1px]" style={{ background: "var(--gold)" }} />

        {/* Vertical timeline */}
        <div className="relative">
          {/* Central gold line (desktop) / left line (mobile) */}
          <div
            className="absolute top-0 bottom-0 left-6 md:left-1/2 w-[1px] md:-translate-x-[0.5px]"
            style={{
              background: "linear-gradient(to bottom, transparent, var(--gold) 10%, var(--gold) 90%, transparent)",
              opacity: 0.3,
            }}
          />

          <div className="flex flex-col gap-16 md:gap-24">
            {steps.map((s, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={s.num}
                  className={`animate-on-scroll stagger-${i + 2} relative flex items-start md:items-center gap-6 md:gap-0`}
                >
                  {/* Waypoint dot */}
                  <div
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 w-4 h-4 rounded-full border-2 bg-background"
                    style={{ borderColor: "var(--gold)" }}
                  >
                    <div
                      className="absolute inset-1 rounded-full"
                      style={{ backgroundColor: "var(--gold)", opacity: 0.5 }}
                    />
                  </div>

                  {/* Desktop: alternating sides */}
                  {/* Left content (desktop) */}
                  <div className={`hidden md:flex w-1/2 ${isLeft ? "justify-end pr-12" : ""}`}>
                    {isLeft && <StepCard step={s} align="right" />}
                  </div>

                  {/* Right content (desktop) */}
                  <div className={`hidden md:flex w-1/2 ${!isLeft ? "justify-start pl-12" : ""}`}>
                    {!isLeft && <StepCard step={s} align="left" />}
                  </div>

                  {/* Mobile: all on the right */}
                  <div className="md:hidden pl-12 flex-1">
                    <StepCard step={s} align="left" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="animate-on-scroll stagger-5 text-center mt-20">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-base border-primary/30 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
          >
            <a href="#contato">Quero conversar</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

function StepCard({
  step,
  align,
}: {
  step: (typeof steps)[number];
  align: "left" | "right";
}) {
  return (
    <div
      className={`group max-w-md flex flex-col ${
        align === "right" ? "items-end text-right" : "items-start text-left"
      }`}
    >
      {/* Icon + number row */}
      <div className={`flex items-center gap-4 mb-5 ${align === "right" ? "flex-row-reverse" : ""}`}>
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0
            transition-all duration-300 group-hover:scale-105"
          style={{
            backgroundColor: "rgba(204, 190, 139, 0.08)",
            border: "1px solid rgba(204, 190, 139, 0.25)",
          }}
        >
          <step.Icon size={30} />
        </div>
        <span
          className="font-serif text-5xl font-bold leading-none opacity-20"
          style={{ color: "var(--gold)" }}
        >
          {step.num}
        </span>
      </div>

      <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
        {step.title}
      </h3>
      <p className="text-base text-muted-foreground leading-relaxed mb-4">
        {step.desc}
      </p>
      <p className="text-sm font-medium" style={{ color: "var(--gold)" }}>
        Saída: {step.saida}
      </p>
    </div>
  );
}

export default Metodo;
