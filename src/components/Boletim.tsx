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
    <section id="boletim" className="py-24 md:py-32 relative" ref={sectionRef}>
      {/* Subtle background differentiation */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container mx-auto px-4 md:px-8 max-w-xl text-center relative z-10">
        {/* Gold frame around content */}
        <div
          className="animate-on-scroll-scale border rounded-2xl px-8 py-12 md:px-12 md:py-16"
          style={{ borderColor: "color-mix(in srgb, var(--gold) 25%, transparent)" }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Boletim Tanin
          </h2>

          <div className="w-12 h-[1px] mx-auto mb-6" style={{ background: "var(--gold)" }} />

          <p className="text-muted-foreground mb-8">
            Insights práticos sobre proposta de valor, execução e crescimento no mercado de vinhos.
          </p>

          {sent ? (
            <p className="text-primary font-medium">Pronto! Você vai receber o próximo Boletim.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background focus:ring-accent/50 focus:border-accent transition-all duration-300"
                />
                {error && <p className="text-xs text-destructive mt-1 text-left">{error}</p>}
              </div>
              <Button type="submit" className="whitespace-nowrap">
                Quero receber
              </Button>
            </form>
          )}

          <p className="text-xs text-muted-foreground mt-4">Você pode sair quando quiser.</p>
        </div>
      </div>

      <div className="container mx-auto mt-20 relative z-10">
        <div className="gold-line opacity-20" />
      </div>
    </section>
  );
};

export default Boletim;
