import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const bullets = [
  "Marca e performance na mesma direção",
  "Estratégia que cabe na rotina",
  "Execução com método e cadência",
];

const Tese = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="tese" className="py-24 md:py-32 bg-primary text-primary-foreground" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
        <h2 className="animate-on-scroll font-serif text-3xl md:text-4xl font-semibold leading-tight mb-6">
          Performance digital e experiência física não são opostos.
        </h2>

        <p className="animate-on-scroll stagger-1 text-lg text-primary-foreground/70 mb-16">
          São o mesmo negócio — e é assim que o vinho cresce de verdade.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {bullets.map((text, i) => (
            <div
              key={text}
              className={`animate-on-scroll stagger-${i + 2} flex items-start gap-3 max-w-[220px] text-left`}
            >
              <span
                className="shrink-0 font-serif text-2xl leading-none mt-0.5"
                style={{ color: "var(--gold)" }}
              >
                —
              </span>
              <p className="text-base font-medium text-primary-foreground/90 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tese;
