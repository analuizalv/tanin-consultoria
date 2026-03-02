import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import taninLogo from "@/assets/tanin.png";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Tese", href: "#tese" },
  { label: "Como eu trabalho", href: "#metodo" },
  { label: "Para quem", href: "#para-quem" },
  { label: "Boletim", href: "#boletim" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Gold accent line at top when scrolled */}
      <div
        className={`absolute top-0 left-0 right-0 h-[1px] transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{ background: "linear-gradient(to right, transparent, var(--gold) 30%, var(--gold) 70%, transparent)" }}
      />

      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <a href="#inicio" className="flex items-center gap-2 group">
          <img
            src={taninLogo}
            alt="Tanin"
            className={`transition-all duration-500 ${
              scrolled ? "h-9" : "h-12"
            }`}
          />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300
                  after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px]
                  after:bg-[var(--gold)] after:transition-all after:duration-300
                  hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-1"
          aria-label="Abrir menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border mobile-menu-enter">
          <ul className="flex flex-col items-center gap-5 py-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Bottom gold line when scrolled */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[1px] transition-opacity duration-500 ${
          scrolled ? "opacity-40" : "opacity-0"
        }`}
        style={{ background: "linear-gradient(to right, transparent, var(--gold) 30%, var(--gold) 70%, transparent)" }}
      />
    </nav>
  );
};

export default Navbar;
