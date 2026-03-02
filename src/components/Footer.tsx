import taninLogo from "@/assets/tanin.png";

const Footer = () => {
  return (
    <footer className="relative border-t border-border py-14">
      {/* Gold top accent line */}
      <div className="absolute top-0 left-0 right-0 gold-line opacity-20" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Logo prominent */}
          <a href="#inicio" className="group">
            <img
              src={taninLogo}
              alt="Tanin"
              className="h-10 opacity-90 transition-all duration-300 group-hover:opacity-100"
            />
          </a>

          {/* Location */}
          <span className="text-sm text-muted-foreground">São Paulo, Brasil</span>

          {/* Social links */}
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            {[
              { label: "LinkedIn", href: "#" },
              { label: "Instagram", href: "#" },
              { label: "WhatsApp", href: "#" },
              { label: "E-mail", href: "mailto:contato@tanin.com.br" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative hover:text-foreground transition-colors duration-300
                  after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px]
                  after:transition-all after:duration-300 hover:after:w-full"
                style={{ "--tw-after-bg": "var(--gold)" } as React.CSSProperties}
              >
                <span className="after:bg-[var(--gold)]">{link.label}</span>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-24 gold-line opacity-30" />

          {/* Privacy */}
          <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300">
            Política de privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
