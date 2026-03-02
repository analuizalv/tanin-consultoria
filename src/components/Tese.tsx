import { Target, CalendarClock, BarChart3 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const bullets = [
  { icon: Target, text: "Marca e performance na mesma direção" },
  { icon: CalendarClock, text: "Estratégia que cabe na rotina" },
  { icon: BarChart3, text: "Execução com método e cadência" },
];

const Tese = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="tese" className="py-24 md:py-32" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
        <h2 className="animate-on-scroll font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-6">
          Performance digital e experiência física não são opostos.
        </h2>

        <p className="animate-on-scroll stagger-1 text-lg text-muted-foreground mb-14">
          São o mesmo negócio — e é assim que o vinho cresce de verdade.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {bullets.map(({ icon: Icon, text }, i) => (
            <div
              key={text}
              className={`animate-on-scroll stagger-${i + 2} group flex flex-col items-center gap-4`}
            >
              <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center
                transition-all duration-300 group-hover:border-[var(--gold)] group-hover:shadow-[0_0_12px_rgba(204,190,139,0.15)]">
                <Icon size={20} className="text-accent transition-colors duration-300 group-hover:text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto mt-20">
        <div className="gold-line opacity-20" />
      </div>
    </section>
  );
};

export default Tese;
