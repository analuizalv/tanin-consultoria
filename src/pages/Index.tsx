import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tese from "@/components/Tese";
import Metodo from "@/components/Metodo";
import ParaQuem from "@/components/ParaQuem";
import Boletim from "@/components/Boletim";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

const SectionGradient = ({
  from,
  to,
  height = "h-20",
}: {
  from: string;
  to: string;
  height?: string;
}) => (
  <div
    className={`${height} w-full pointer-events-none`}
    style={{
      background: `linear-gradient(to bottom, ${from}, ${to})`,
    }}
  />
);

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Hero → Tese: fade into wine */}
        <SectionGradient from="hsl(var(--background))" to="hsl(var(--primary))" />
        <Tese />
        {/* Tese → Método: wine back to background */}
        <SectionGradient from="hsl(var(--primary))" to="hsl(var(--background))" />
        <Metodo />
        {/* Método → ParaQuem: subtle shift to muted */}
        <SectionGradient from="hsl(var(--background))" to="hsl(var(--muted) / 0.5)" height="h-12" />
        <ParaQuem />
        {/* ParaQuem → Boletim: muted back to wine */}
        <SectionGradient from="hsl(var(--muted) / 0.5)" to="hsl(var(--primary))" />
        <Boletim />
        {/* Boletim → Contato: wine back to background */}
        <SectionGradient from="hsl(var(--primary))" to="hsl(var(--background))" />
        <Contato />
      </main>
      <Footer />
    </>
  );
};

export default Index;
