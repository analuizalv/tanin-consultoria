import { Button } from "@/components/ui/button";
import taninLogo from "@/assets/tanin.png";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-primary text-primary-foreground overflow-hidden"
    >
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ccbe8b' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10 py-20 md:py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left — content */}
          <div className="flex-1 max-w-2xl">
            {/* Logo */}
            <div className="hero-animate-logo mb-10 md:mb-12">
              <img
                src={taninLogo}
                alt="Tanin Consultoria"
                className="h-16 md:h-20 lg:h-24 brightness-0 invert opacity-90"
              />
            </div>

            {/* Giant headline */}
            <h1 className="hero-animate-title font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 md:mb-8">
              Por que eu deveria{" "}
              <span style={{ color: "var(--gold)" }}>escolher</span>{" "}
              o seu vinho?
            </h1>

            {/* Subtitle */}
            <p className="hero-animate-subtitle text-lg md:text-xl text-primary-foreground/70 leading-relaxed mb-10 md:mb-12 max-w-xl">
              Eu ajudo importadoras, vinícolas e marcas do setor a responder essa pergunta com clareza
              — e transformar isso em estratégia 360 e execução, com IA como alavanca.
            </p>

            {/* CTAs */}
            <div className="hero-animate-cta flex flex-col sm:flex-row gap-4 mb-12 md:mb-16">
              <Button
                asChild
                size="lg"
                className="text-base font-semibold px-10 py-6 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300"
              >
                <a href="#contato">Agendar conversa</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base font-medium px-10 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 transition-all duration-300"
              >
                <a href="#boletim">Assinar o Boletim Tanin</a>
              </Button>
            </div>

            {/* Credibility strip */}
            <div className="hero-animate-badges flex flex-wrap items-center gap-6 text-sm text-primary-foreground/50">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--gold)" }} />
                Evino + Grand Cru
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--gold)" }} />
                Prêmio ABComm 2024
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--gold)" }} />
                Fractional CMO
              </span>
            </div>
          </div>

          {/* Right — Ana's photo (PNG com fundo transparente — flutua no bg escuro) */}
          <div className="hero-animate-photo flex-shrink-0 relative w-56 md:w-72 lg:w-[400px]">
            {/* Subtle gold glow behind Ana */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full opacity-[0.07] blur-3xl pointer-events-none"
              style={{ background: "var(--gold)" }}
            />
            <img
              src="/images/ana-hero.png"
              alt="Ana Luiza — Fundadora da Tanin Consultoria"
              className="relative w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Bottom gold accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{ background: "linear-gradient(to right, var(--gold), transparent 80%)" }} />
    </section>
  );
};

export default Hero;
