import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";

const emailSchema = z.string().trim().email("E-mail inválido").max(255);

const Boletim = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

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
    <section id="boletim" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8 max-w-xl text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
          Boletim Tanin
        </h2>

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
                className="bg-background"
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

      <div className="container mx-auto mt-20">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  );
};

export default Boletim;
