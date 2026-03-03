import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tese from "@/components/Tese";
import Metodo from "@/components/Metodo";
import ParaQuem from "@/components/ParaQuem";
import Boletim from "@/components/Boletim";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

/** Thin gold divider between sections */
const GoldDivider = () => (
  <div className="w-full flex justify-center py-0">
    <div className="gold-line w-full opacity-20" />
  </div>
);

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GoldDivider />
        <Tese />
        <GoldDivider />
        <Metodo />
        <GoldDivider />
        <ParaQuem />
        <GoldDivider />
        <Boletim />
        <GoldDivider />
        <Contato />
      </main>
      <Footer />
    </>
  );
};

export default Index;
