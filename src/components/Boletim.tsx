import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const emailSchema = z.string().trim().email("E-mail inválido").max(255);

const Boletim = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const sectionRef = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }
    setError("");
    // TODO: integrar com Substack
    setSent(true);
  };

  return (
    <section
      id="boletim"
      className="py-28 md:py-36 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, hsl(43,34%,92%) 0%, hsl(30,24%,90%) 100%)" }}
      ref={sectionRef}
    >
      {/* Decorative gold circles */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: "var(--gold)" }} />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "var(--gold)" }} />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="animate-on-scroll font-serif text-4xl md:text-6xl font-bold text-primary leading-[1.1] mb-6">
            Boletim{" "}
            <span className="italic" style={{ color: "var(--gold)" }}>Tanin</span>
          </h2>

          <p className="animate-on-scroll stagger-1 text-lg md:text-xl text-muted-foreground mb-12">
            Insights práticos sobre proposta de valor, execução e crescimento no mercado de vinhos.
          </p>

          {sent ? (
            <div className="animate-on-scroll py-8">
              <p className="text-xl font-serif font-semibold text-primary">
                Pronto! Você vai receber o próximo Boletim.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="animate-on-scroll stagger-2 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground/50
                    focus:border-primary h-12 text-base transition-all duration-300"
                />
                {error && <p className="text-xs text-destructive mt-1 text-left">{error}</p>}
              </div>
              <Button
                type="submit"
                size="lg"
                className="whitespace-nowrap h-12 text-base font-semibold px-8"
              >
                Quero receber
              </Button>
            </form>
          )}

          <p className="animate-on-scroll stagger-3 text-sm text-muted-foreground/60 mt-6">
            Você pode sair quando quiser.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Boletim;
