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
    <section id="metodo" className="py-24 md:py-32" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="animate-on-scroll font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-4">
          Do diagnóstico à execução, sem complicar.
        </h2>
        <div className="animate-on-scroll stagger-1 mx-auto mb-16 w-12 h-[1px]" style={{ background: "var(--gold)" }} />

        {/* Cards with timeline connector */}
        <div className="relative max-w-5xl mx-auto">
          {/* Horizontal connector line (desktop only) */}
          <div
            className="hidden md:block absolute top-[88px] left-[15%] right-[15%] h-[1px]"
            style={{
              background: "repeating-linear-gradient(to right, var(--gold) 0px, var(--gold) 6px, transparent 6px, transparent 14px)",
              opacity: 0.35,
            }}
          />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div
                key={s.num}
                className={`animate-on-scroll stagger-${i + 2} group relative border border-border rounded-xl p-8 md:p-10 flex flex-col items-center text-center
                  bg-background transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                style={{
                  // subtle gold glow on hover via box-shadow
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(204, 190, 139, 0.4)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(204, 190, 139, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    borderColor: "rgba(204, 190, 139, 0.25)",
                    backgroundColor: "rgba(204, 190, 139, 0.06)",
                    border: "1px solid rgba(204, 190, 139, 0.25)",
                  }}
                >
                  <s.Icon size={34} />
                </div>

                {/* Step number */}
                <span
                  className="font-serif text-3xl font-semibold mb-4 block"
                  style={{ color: "var(--gold)" }}
                >
                  {s.num}
                </span>

                <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                  {s.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-5 flex-1">
                  {s.desc}
                </p>
                <p className="text-sm font-medium" style={{ color: "var(--gold)" }}>
                  Saída: {s.saida}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-on-scroll stagger-5 text-center mt-14">
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

export default Metodo;
