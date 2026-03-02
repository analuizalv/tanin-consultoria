import { Button } from "@/components/ui/button";

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
  return (
    <section id="metodo" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-16">
          Do diagnóstico à execução, sem complicar.
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((s) => (
            <div
              key={s.num}
              className="border border-border rounded-lg p-6 md:p-8 flex flex-col"
            >
              <span className="text-accent font-serif text-2xl font-semibold mb-4">
                {s.num}
              </span>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {s.desc}
              </p>
              <p className="text-xs text-accent font-medium">
                Saída: {s.saida}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/5">
            <a href="#contato">Quero conversar</a>
          </Button>
        </div>
      </div>

      <div className="container mx-auto mt-20">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  );
};

export default Metodo;
