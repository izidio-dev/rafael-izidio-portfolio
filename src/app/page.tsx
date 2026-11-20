import { AnimacoesDeEntrada } from "@/components/AnimacoesDeEntrada";
import { Contato } from "@/components/Contato";
import { Footer } from "@/components/Footer";
import { Habilidades } from "@/components/Habilidades";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Meta } from "@/components/Meta";
import { Projetos } from "@/components/Projetos";
import { Sobre } from "@/components/Sobre";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Meta />
        <Habilidades />
        <Projetos />
        <Contato />
      </main>
      <Footer />
      <AnimacoesDeEntrada />
    </>
  );
}
