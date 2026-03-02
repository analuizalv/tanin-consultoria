import taninLogo from "@/assets/tanin.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={taninLogo} alt="Tanin" className="h-6 opacity-80" />
            <span className="text-sm text-muted-foreground">São Paulo, Brasil</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
            <a href="#" className="hover:text-foreground transition-colors">WhatsApp</a>
            <a href="mailto:contato@tanin.com.br" className="hover:text-foreground transition-colors">E-mail</a>
          </div>

          <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Política de privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
