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
    <section id="boletim" className="py-24 md:py-32 bg-primary text-primary-foreground" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8 max-w-xl text-center">
        <h2 className="animate-on-scroll font-serif text-3xl md:text-4xl font-semibold mb-4">
          Boletim Tanin
        </h2>

        <div className="animate-on-scroll stagger-1 w-12 h-[1px] mx-auto mb-6" style={{ background: "var(--gold)" }} />

        <p className="animate-on-scroll stagger-1 text-primary-foreground/70 mb-10 text-lg">
          Insights práticos sobre proposta de valor, execução e crescimento no mercado de vinhos.
        </p>

        {sent ? (
          <p className="font-medium" style={{ color: "var(--gold)" }}>
            Pronto! Você vai receber o próximo Boletim.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="animate-on-scroll stagger-2 flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40
                  focus:border-accent transition-all duration-300"
              />
              {error && <p className="text-xs text-red-300 mt-1 text-left">{error}</p>}
            </div>
            <Button
              type="submit"
              className="whitespace-nowrap bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300"
            >
              Quero receber
            </Button>
          </form>
        )}

        <p className="animate-on-scroll stagger-3 text-xs text-primary-foreground/50 mt-5">
          Você pode sair quando quiser.
        </p>
      </div>
    </section>
  );
};

export default Boletim;
