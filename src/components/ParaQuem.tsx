import { Badge } from "@/components/ui/badge";

const segments = ["Importadoras", "Vinícolas", "Marcas do setor"];

const alavancas = [
  "CRM & retenção",
  "Conteúdo e mídia",
  "PR estratégico e influência",
  "Experiências (eventos, parcerias, ativações)",
  "IA para escala (processos e produtividade)",
];

const ParaQuem = () => {
  return (
    <section id="para-quem" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-10">
          Para quem a Tanin é
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {segments.map((s) => (
            <Badge
              key={s}
              className="text-sm px-5 py-2 font-medium bg-primary/10 text-primary border-primary/20"
              variant="outline"
            >
              {s}
            </Badge>
          ))}
        </div>

        <h3 className="font-serif text-xl font-semibold text-foreground text-center mb-8">
          Alavancas que podem entrar no plano
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {alavancas.map((a) => (
            <div
              key={a}
              className="border border-border rounded-lg px-5 py-4 text-sm text-foreground text-center"
            >
              {a}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto mt-20">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  );
};

export default ParaQuem;
