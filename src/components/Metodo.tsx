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
        <h2 className="animate-on-scroll font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-4">
          Do diagnóstico à execução, sem complicar.
        </h2>
        <div className="animate-on-scroll stagger-1 mx-auto mb-16 w-12 h-[1px]" style={{ background: "var(--gold)" }} />

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`animate-on-scroll stagger-${i + 2} group relative border border-border rounded-lg p-8 md:p-10 flex flex-col text-center
                transition-all duration-300 hover:shadow-lg hover:border-accent/40`}
            >
              <span
                className="font-serif text-4xl font-semibold mb-5 block"
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
