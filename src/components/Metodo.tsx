import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  IllustrationDiagnostic,
  IllustrationPlan,
  IllustrationGovernance,
} from "@/components/icons/WineIcons";
import type { ComponentType, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const steps: {
  num: string;
  title: string;
  desc: string;
  saida: string;
  Illustration: ComponentType<IconProps>;
  dark: boolean;
}[] = [
  {
    num: "01",
    title: "Diagnóstico + proposta de valor",
    desc: "Entrevistas rápidas + leitura de dados para definir: para quem, qual dor, qual promessa e por que você vence.",
    saida: "Proposta de valor + mensagens-chave + prioridades",
    Illustration: IllustrationDiagnostic,
    dark: true,
  },
  {
    num: "02",
    title: "Plano de 90 dias",
    desc: "Prioridades, calendário macro, iniciativas, owners e indicadores — tudo num documento acionável.",
    saida: "Plano acionável",
    Illustration: IllustrationPlan,
    dark: false,
  },
  {
    num: "03",
    title: "Acompanhamento e governança",
    desc: "Cadência (weekly/quinzenal), checkpoints e ajustes para o plano sair do papel.",
    saida: "Execução consistente",
    Illustration: IllustrationGovernance,
    dark: true,
  },
];

const Metodo = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="metodo" ref={sectionRef}>
      {/* Section header */}
      <div className="py-20 md:py-28 text-center">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="animate-on-scroll font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] mb-6">
            Do diagnóstico à{" "}
            <span className="italic" style={{ color: "var(--gold)" }}>execução.</span>
          </h2>
          <p className="animate-on-scroll stagger-1 text-xl md:text-2xl text-muted-foreground">
            Sem complicar. Três etapas, um caminho claro.
          </p>
        </div>
      </div>

      {/* Infographic bands */}
      {steps.map((s, i) => {
        const isReversed = i % 2 !== 0;

        return (
          <div
            key={s.num}
            className={`relative overflow-hidden ${
              s.dark ? "bg-primary text-primary-foreground" : "bg-background text-foreground"
            }`}
          >
            {/* Giant watermark number */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 font-serif font-bold leading-none pointer-events-none select-none ${
                isReversed ? "left-4 md:left-12" : "right-4 md:right-12"
              }`}
              style={{
                fontSize: "clamp(120px, 20vw, 280px)",
                color: "var(--gold)",
                opacity: s.dark ? 0.06 : 0.05,
              }}
            >
              {s.num}
            </div>

            <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 relative z-10">
              <div
                className={`animate-on-scroll stagger-${i + 1} flex flex-col gap-10 items-center ${
                  isReversed ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {/* Illustration side */}
                <div className="w-full md:w-2/5 flex justify-center">
                  <div className="transition-transform duration-700 hover:scale-105">
                    <s.Illustration size={160} />
                  </div>
                </div>

                {/* Content side */}
                <div className="w-full md:w-3/5">
                  <span
                    className="inline-block font-serif text-5xl md:text-6xl font-bold mb-4"
                    style={{ color: "var(--gold)" }}
                  >
                    {s.num}
                  </span>

                  <h3 className="font-serif text-2xl md:text-4xl font-bold leading-snug mb-5">
                    {s.title}
                  </h3>

                  <p className={`text-lg md:text-xl leading-relaxed mb-6 ${
                    s.dark ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}>
                    {s.desc}
                  </p>

                  <span
                    className="inline-block text-sm font-semibold px-5 py-2 rounded-full"
                    style={{
                      background: s.dark ? "rgba(204,190,139,0.12)" : "rgba(204,190,139,0.15)",
                      color: "var(--gold)",
                    }}
                  >
                    Saída → {s.saida}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* CTA after steps */}
      <div className="py-16 md:py-20 text-center bg-background">
        <Button
          asChild
          size="lg"
          className="text-base font-semibold px-10 py-6"
        >
          <a href="#contato">Quero conversar</a>
        </Button>
      </div>
    </section>
  );
};

export default Metodo;
