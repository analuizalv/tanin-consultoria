import { Target, CalendarClock, BarChart3 } from "lucide-react";

const bullets = [
  { icon: Target, text: "Marca e performance na mesma direção" },
  { icon: CalendarClock, text: "Estratégia que cabe na rotina" },
  { icon: BarChart3, text: "Execução com método e cadência" },
];

const Tese = () => {
  return (
    <section id="tese" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-6">
          Performance digital e experiência física não são opostos.
        </h2>

        <p className="text-lg text-muted-foreground mb-12">
          São o mesmo negócio — e é assim que o vinho cresce de verdade.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {bullets.map(({ icon: Icon, text }) => (
            <div key={text} className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-accent flex items-center justify-center">
                <Icon size={18} className="text-accent" />
              </div>
              <p className="text-sm font-medium text-foreground">{text}</p>
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

export default Tese;
