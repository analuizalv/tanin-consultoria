import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import taninLogo from "@/assets/tanin.png";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23651827' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Decorative radial glow behind logo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06] pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Big centered logo */}
          <div className="hero-animate-logo mb-8">
            <img
              src={taninLogo}
              alt="Tanin Consultoria"
              className="h-20 md:h-28 mx-auto"
            />
          </div>

          {/* Gold decorative line below logo */}
          <div className="hero-animate-subtitle mx-auto mb-10 w-24 h-[1px]" style={{ background: "linear-gradient(to right, transparent, var(--gold), transparent)" }} />

          <h1 className="hero-animate-title font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
            Por que eu deveria escolher o seu vinho?
          </h1>

          <p className="hero-animate-subtitle text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            Eu ajudo importadoras, vinícolas e marcas do setor a responder essa pergunta com clareza
            — e transformar isso em estratégia 360 e execução (digital + experiência), com IA como alavanca.
          </p>

          <div className="hero-animate-cta flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Button asChild size="lg" className="text-base font-medium px-8">
              <a href="#contato">Agendar conversa</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base font-medium px-8 border-primary/30 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
            >
              <a href="#boletim">Assinar o Boletim Tanin</a>
            </Button>
          </div>

          <div className="hero-animate-badges flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="text-xs font-normal px-4 py-1.5 border-accent/50 text-muted-foreground">
              Evino + Grand Cru
            </Badge>
            <Badge variant="outline" className="text-xs font-normal px-4 py-1.5 border-accent/50 text-muted-foreground">
              Prêmio ABComm 2024
            </Badge>
            <Badge variant="outline" className="text-xs font-normal px-4 py-1.5 border-accent/50 text-muted-foreground">
              Fractional CMO
            </Badge>
          </div>
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="gold-line opacity-30" />
      </div>
    </section>
  );
};

export default Hero;
