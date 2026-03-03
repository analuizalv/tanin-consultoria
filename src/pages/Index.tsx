import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tese from "@/components/Tese";
import PhotoDivider from "@/components/PhotoDivider";
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
        <PhotoDivider
          src="/images/wine-divider.jpg"
          fallbackSrc="/images/wine-divider.svg"
          alt="Cena de vinho — vinhedos e degustação"
          overlay="wine"
        />
        <Metodo />
        <ParaQuem />
        <PhotoDivider
          src="/images/wine-ambient.jpg"
          fallbackSrc="/images/wine-ambient.svg"
          alt="Ambiente de vinho — garrafas e taças"
          height="h-[30vh] md:h-[40vh]"
          overlay="dark"
        />
        <Boletim />
        <Contato />
      </main>
      <Footer />
    </>
  );
};

export default Index;
