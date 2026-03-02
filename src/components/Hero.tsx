import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";
import taninLogo from "@/assets/tanin.png";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23651827' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Decorative gold corner accent */}
      <div
        className="absolute top-24 right-0 w-[200px] h-[1px] opacity-20 hidden lg:block"
        style={{ background: "linear-gradient(to left, var(--gold), transparent)" }}
      />
      <div
        className="absolute top-24 right-0 w-[1px] h-[200px] opacity-20 hidden lg:block"
        style={{ background: "linear-gradient(to bottom, var(--gold), transparent)" }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="max-w-xl">
            {/* Logo destaque */}
            <div className="hero-animate-logo mb-8">
              <img
                src={taninLogo}
                alt="Tanin Consultoria"
                className="h-14 md:h-16"
              />
              <div className="mt-3 w-16 h-[1px]" style={{ background: "var(--gold)" }} />
            </div>

            <h1 className="hero-animate-title font-serif text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-foreground leading-[1.15] mb-6">
              Por que eu deveria escolher o seu vinho?
            </h1>

            <p className="hero-animate-subtitle text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
              Eu ajudo importadoras, vinícolas e marcas do setor a responder essa pergunta com clareza
              — e transformar isso em estratégia 360 e execução (digital + experiência), com IA como alavanca.
            </p>

            <div className="hero-animate-cta flex flex-col sm:flex-row gap-4 mb-12">
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

            <div className="hero-animate-badges flex flex-wrap gap-3">
              <Badge variant="outline" className="text-xs font-normal px-4 py-1.5 border-[var(--gold)]/50 text-muted-foreground">
                Evino + Grand Cru
              </Badge>
              <Badge variant="outline" className="text-xs font-normal px-4 py-1.5 border-[var(--gold)]/50 text-muted-foreground">
                Prêmio ABComm 2024
              </Badge>
              <Badge variant="outline" className="text-xs font-normal px-4 py-1.5 border-[var(--gold)]/50 text-muted-foreground">
                Fractional CMO
              </Badge>
            </div>
          </div>

          {/* Right: Photo placeholder */}
          <div className="hero-animate-photo flex justify-center lg:justify-end">
            <div className="relative">
              {/* Gold frame */}
              <div
                className="absolute -inset-3 rounded-2xl opacity-30"
                style={{
                  border: "1px solid var(--gold)",
                }}
              />
              {/* Offset gold frame for depth */}
              <div
                className="absolute -inset-6 rounded-2xl opacity-15 hidden md:block"
                style={{
                  border: "1px solid var(--gold)",
                }}
              />

              {/* Photo container */}
              <div className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden photo-placeholder">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-muted-foreground/60">
                  <div className="w-20 h-20 rounded-full border-2 border-muted-foreground/20 flex items-center justify-center">
                    <User size={32} className="opacity-40" />
                  </div>
                  <span className="text-sm font-medium">Foto da Ana</span>
                </div>
              </div>

              {/* Decorative gold dot */}
              <div
                className="absolute -bottom-4 -right-4 w-2 h-2 rounded-full hidden md:block"
                style={{ background: "var(--gold)" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade line with gold accent */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="gold-line opacity-30" />
      </div>
    </section>
  );
};

export default Hero;
