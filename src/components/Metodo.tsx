import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    num: "01",
    title: "Diagnóstico + proposta de valor",
    desc: "Entrevistas rápidas + leitura de dados para definir: para quem, qual dor, qual promessa e por que você vence.",
    saida: "Proposta de valor + mensagens-chave + prioridades.",
  },
  {
    num: "02",
    title: "Plano de 90 dias",
    desc: "Prioridades, calendário macro, iniciativas, owners e indicadores.",
    saida: "Plano acionável.",
  },
  {
    num: "03",
    title: "Acompanhamento e governança",
    desc: "Cadência (weekly/quinzenal), checkpoints e ajustes para o plano sair do papel.",
    saida: "Execução consistente.",
  },
];

const Metodo = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="metodo" className="py-24 md:py-32" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="animate-on-scroll font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-16">
          Do diagnóstico à execução, sem complicar.
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`animate-on-scroll stagger-${i + 1} group relative border border-border rounded-lg p-6 md:p-8 flex flex-col
                transition-all duration-300 hover:shadow-md hover:border-[var(--gold)]/40
                overflow-hidden`}
            >
              {/* Gold left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-300
                  group-hover:opacity-100 opacity-0"
                style={{ background: "var(--gold)" }}
              />

              <span
                className="font-serif text-3xl font-semibold mb-4 transition-colors duration-300"
                style={{ color: "var(--gold)" }}
              >
                {s.num}
              </span>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {s.desc}
              </p>
              <p className="text-xs font-medium" style={{ color: "var(--gold)" }}>
                Saída: {s.saida}
              </p>
            </div>
          ))}
        </div>

        {/* Connecting line between cards (desktop only) */}
        <div className="hidden md:flex justify-center mt-[-1px] mb-0 max-w-5xl mx-auto px-[17%]">
          <div className="w-full gold-line opacity-20" />
        </div>

        <div className="animate-on-scroll stagger-4 text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="border-primary/30 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
          >
            <a href="#contato">Quero conversar</a>
          </Button>
        </div>
      </div>

      <div className="container mx-auto mt-20">
        <div className="gold-line opacity-20" />
      </div>
    </section>
  );
};

export default Metodo;
