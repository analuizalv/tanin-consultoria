import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";

const contatoSchema = z.object({
  nome: z.string().trim().min(1, "Obrigatório").max(100),
  empresa: z.string().trim().min(1, "Obrigatório").max(100),
  cargo: z.string().trim().min(1, "Obrigatório").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  whatsapp: z.string().trim().max(20).optional(),
  assunto: z.string().min(1, "Selecione um assunto"),
  mensagem: z.string().trim().min(1, "Obrigatório").max(2000),
});

type FormData = z.infer<typeof contatoSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

const assuntos = ["Diagnóstico", "Fractional CMO", "Projeto", "Parcerias"];

const Contato = () => {
  const [form, setForm] = useState<FormData>({
    nome: "",
    empresa: "",
    cargo: "",
    email: "",
    whatsapp: "",
    assunto: "",
    mensagem: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  const update = (field: keyof FormData, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contatoSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        const key = err.path[0] as keyof FormData;
        if (!fieldErrors[key]) fieldErrors[key] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    // TODO: enviar para backend
    setSent(true);
  };

  if (sent) {
    return (
      <section id="contato" className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 max-w-lg text-center">
          <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">Obrigado!</h2>
          <p className="text-muted-foreground">
            Recebi sua mensagem. Entro em contato em breve.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8 max-w-lg">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
          Vamos conversar
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {([
            { key: "nome", label: "Nome", type: "text" },
            { key: "empresa", label: "Empresa", type: "text" },
            { key: "cargo", label: "Cargo", type: "text" },
            { key: "email", label: "E-mail", type: "email" },
            { key: "whatsapp", label: "WhatsApp (opcional)", type: "tel" },
          ] as const).map(({ key, label, type }) => (
            <div key={key}>
              <Label htmlFor={key} className="text-sm mb-1.5 block">
                {label}
              </Label>
              <Input
                id={key}
                type={type}
                value={form[key] || ""}
                onChange={(e) => update(key, e.target.value)}
                className="bg-background"
              />
              {errors[key] && <p className="text-xs text-destructive mt-1">{errors[key]}</p>}
            </div>
          ))}

          <div>
            <Label className="text-sm mb-1.5 block">Assunto</Label>
            <Select value={form.assunto} onValueChange={(v) => update("assunto", v)}>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                {assuntos.map((a) => (
                  <SelectItem key={a} value={a}>
                    {a}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.assunto && <p className="text-xs text-destructive mt-1">{errors.assunto}</p>}
          </div>

          <div>
            <Label htmlFor="mensagem" className="text-sm mb-1.5 block">
              Mensagem
            </Label>
            <Textarea
              id="mensagem"
              rows={4}
              value={form.mensagem}
              onChange={(e) => update("mensagem", e.target.value)}
              className="bg-background"
            />
            {errors.mensagem && <p className="text-xs text-destructive mt-1">{errors.mensagem}</p>}
          </div>

          <Button type="submit" size="lg" className="w-full text-base">
            Enviar
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contato;
