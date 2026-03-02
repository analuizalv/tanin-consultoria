import taninLogo from "@/assets/tanin.png";

const Footer = () => {
  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <a href="#inicio" className="group">
            <img
              src={taninLogo}
              alt="Tanin"
              className="h-10 brightness-0 invert opacity-80 transition-all duration-300 group-hover:opacity-100"
            />
          </a>

          {/* Location */}
          <span className="text-sm text-background/50">São Paulo, Brasil</span>

          {/* Social links */}
          <div className="flex items-center gap-8 text-sm text-background/60">
            {[
              { label: "LinkedIn", href: "#" },
              { label: "Instagram", href: "#" },
              { label: "WhatsApp", href: "#" },
              { label: "E-mail", href: "mailto:contato@tanin.com.br" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-background transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 h-[1px] opacity-30" style={{ background: "var(--gold)" }} />

          {/* Privacy */}
          <a href="#" className="text-xs text-background/40 hover:text-background/70 transition-colors duration-300">
            Política de privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
