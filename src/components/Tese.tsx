import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  IconBrandPerformance,
  IconStrategyRoutine,
  IconCadence,
} from "@/components/icons/WineIcons";

const bullets = [
  {
    text: "Marca e performance na mesma direção",
    Icon: IconBrandPerformance,
  },
  {
    text: "Estratégia que cabe na rotina",
    Icon: IconStrategyRoutine,
  },
  {
    text: "Execução com método e cadência",
    Icon: IconCadence,
  },
];

const Tese = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="tese" className="py-24 md:py-32 bg-primary text-primary-foreground" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
        <h2 className="animate-on-scroll font-serif text-3xl md:text-4xl font-semibold leading-tight mb-6">
          Performance digital e experiência física não são opostos.
        </h2>

        <p className="animate-on-scroll stagger-1 text-lg text-primary-foreground/70 mb-16">
          São o mesmo negócio — e é assim que o vinho cresce de verdade.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          {bullets.map(({ text, Icon }, i) => (
            <div
              key={text}
              className={`animate-on-scroll stagger-${i + 2} flex flex-col items-center gap-5 max-w-[220px]`}
            >
              {/* Icon container */}
              <div
                className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center
                  border border-[var(--gold)]/30 bg-[var(--gold)]/[0.06]
                  transition-all duration-300 group-hover:bg-[var(--gold)]/[0.12]"
                style={{
                  borderColor: "rgba(204, 190, 139, 0.25)",
                  backgroundColor: "rgba(204, 190, 139, 0.06)",
                }}
              >
                <Icon size={36} />
              </div>
              <p className="text-base font-medium text-primary-foreground/90 leading-relaxed text-center">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tese;
