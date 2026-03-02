import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const segments = ["Importadoras", "Vinícolas", "Marcas do setor"];

const alavancas = [
  "CRM & retenção",
  "Conteúdo e mídia",
  "PR estratégico e influência",
  "Experiências (eventos, parcerias, ativações)",
  "IA para escala (processos e produtividade)",
];

const ParaQuem = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="para-quem" className="py-24 md:py-32 bg-muted/50" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
        <h2 className="animate-on-scroll font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
          Para quem a Tanin é
        </h2>
        <div className="animate-on-scroll stagger-1 mx-auto mb-10 w-12 h-[1px]" style={{ background: "var(--gold)" }} />

        <div className="animate-on-scroll stagger-1 flex flex-wrap justify-center gap-3 mb-16">
          {segments.map((s) => (
            <Badge
              key={s}
              className="text-sm px-6 py-2.5 font-medium bg-primary/10 text-primary border-primary/20
                transition-all duration-300 hover:border-accent/50 cursor-default"
              variant="outline"
            >
              {s}
            </Badge>
          ))}
        </div>

        <h3 className="animate-on-scroll stagger-2 font-serif text-xl font-semibold text-foreground mb-10">
          Alavancas que podem entrar no plano
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {alavancas.map((a, i) => (
            <div
              key={a}
              className={`animate-on-scroll stagger-${i + 3} group border border-border bg-background rounded-lg px-5 py-4
                transition-all duration-300 hover:border-accent/40 hover:shadow-sm`}
            >
              <div className="flex items-center gap-3">
                <span className="shrink-0 font-serif text-lg" style={{ color: "var(--gold)" }}>—</span>
                <span className="text-base text-foreground">{a}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParaQuem;
