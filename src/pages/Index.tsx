import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tese from "@/components/Tese";
import Metodo from "@/components/Metodo";
import ParaQuem from "@/components/ParaQuem";
import Boletim from "@/components/Boletim";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Tese />
        <Metodo />
        <ParaQuem />
        <Boletim />
        <Contato />
      </main>
      <Footer />
    </>
  );
};

export default Index;
