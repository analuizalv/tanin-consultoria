import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";
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
    <section id="para-quem" className="py-24 md:py-32" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left: Content */}
          <div>
            <h2 className="animate-on-scroll font-serif text-3xl md:text-4xl font-semibold text-foreground mb-10">
              Para quem a Tanin é
            </h2>

            <div className="animate-on-scroll stagger-1 flex flex-wrap gap-3 mb-14">
              {segments.map((s) => (
                <Badge
                  key={s}
                  className="text-sm px-5 py-2 font-medium bg-primary/10 text-primary border-primary/20
                    transition-all duration-300 hover:scale-105 hover:border-[var(--gold)]/50 hover:shadow-sm cursor-default"
                  variant="outline"
                >
                  {s}
                </Badge>
              ))}
            </div>

            <h3 className="animate-on-scroll stagger-2 font-serif text-xl font-semibold text-foreground mb-8">
              Alavancas que podem entrar no plano
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {alavancas.map((a, i) => (
                <div
                  key={a}
                  className={`animate-on-scroll stagger-${i + 3} group border border-border rounded-lg px-5 py-4 text-sm text-foreground
                    transition-all duration-300 hover:border-[var(--gold)]/40 hover:shadow-sm
                    relative overflow-hidden`}
                >
                  {/* Gold left accent on hover */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[2px] transition-opacity duration-300
                      group-hover:opacity-100 opacity-0"
                    style={{ background: "var(--gold)" }}
                  />
                  <span className="pl-1">{a}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo placeholder */}
          <div className="animate-on-scroll-right stagger-2 hidden lg:flex justify-center">
            <div className="relative">
              {/* Gold frame */}
              <div
                className="absolute -inset-3 rounded-2xl opacity-25"
                style={{ border: "1px solid var(--gold)" }}
              />

              <div className="relative w-72 h-80 rounded-2xl overflow-hidden photo-placeholder">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-muted-foreground/60">
                  <div className="w-16 h-16 rounded-full border-2 border-muted-foreground/20 flex items-center justify-center">
                    <User size={28} className="opacity-40" />
                  </div>
                  <span className="text-xs font-medium text-center px-4">Foto da Ana em contexto de trabalho</span>
                </div>
              </div>

              {/* Decorative gold dot */}
              <div
                className="absolute -top-3 -left-3 w-2 h-2 rounded-full"
                style={{ background: "var(--gold)" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-20">
        <div className="gold-line opacity-20" />
      </div>
    </section>
  );
};

export default ParaQuem;
