import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23651827' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
            Por que eu deveria escolher o seu vinho?
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            Eu ajudo importadoras, vinícolas e marcas do setor a responder essa pergunta com clareza
            — e transformar isso em estratégia 360 e execução (digital + experiência), com IA como alavanca.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Button asChild size="lg" className="text-base font-medium px-8">
              <a href="#contato">Agendar conversa</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base font-medium px-8 border-primary/30 hover:bg-primary/5">
              <a href="#boletim">Assinar o Boletim Tanin</a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="text-xs font-normal px-4 py-1.5 border-accent text-muted-foreground">
              Evino + Grand Cru
            </Badge>
            <Badge variant="outline" className="text-xs font-normal px-4 py-1.5 border-accent text-muted-foreground">
              Prêmio ABComm 2024
            </Badge>
            <Badge variant="outline" className="text-xs font-normal px-4 py-1.5 border-accent text-muted-foreground">
              Fractional CMO
            </Badge>
          </div>
        </div>
      </div>

      {/* Bottom fade line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default Hero;
