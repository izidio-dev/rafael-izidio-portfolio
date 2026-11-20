import Image from "next/image";
import { ArrowUpRight, Download, MapPin } from "lucide-react";
import { perfil } from "@/content/perfil";
import { linkWhatsApp } from "@/lib/whatsapp";
import { FotoPlaceholder } from "./FotoPlaceholder";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    // O corte lateral fica na largura da tela inteira (não no bloco central),
    // assim o brilho atrás da foto não aparece cortado em linha reta.
    <div className="overflow-x-clip">
    <section id="topo" className="relative mx-auto grid min-h-[100svh] max-w-6xl items-center gap-14 px-5 pt-28 pb-16 md:grid-cols-[1.35fr_1fr] md:pt-16">
      {/* Texto à esquerda */}
      <div>
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] text-suave uppercase">
            <span className="text-destaque">{"//"}</span> {perfil.titulo}
          </p>
        </Reveal>
        <Reveal atraso={80}>
          <h1 className="mt-5 font-display text-[clamp(3rem,10vw,7.5rem)] leading-[0.9] font-extrabold tracking-[-0.04em] break-words">
            {perfil.nome}
            <span className="text-destaque">.</span>
          </h1>
        </Reveal>
        <Reveal atraso={160}>
          <p className="mt-7 max-w-lg text-lg text-suave md:text-xl">{perfil.frase}</p>
        </Reveal>
        <Reveal atraso={240}>
          <div className="mt-9 flex flex-wrap gap-3">
            {perfil.contatos.whatsapp && (
              <a
                href={linkWhatsApp(perfil.contatos.whatsapp, perfil.mensagemWhatsApp)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-destaque px-6 py-3.5 font-medium text-white shadow-[0_0_40px_-8px] shadow-destaque transition-transform hover:-translate-y-0.5"
              >
                Quero um site para meu negócio
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
              </a>
            )}
            {perfil.curriculoUrl && (
              <a
                href={perfil.curriculoUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-borda px-6 py-3.5 font-medium transition-colors hover:border-suave"
              >
                Baixar currículo
                <Download className="size-4" aria-hidden />
              </a>
            )}
            <a href="#projetos" className="inline-flex items-center rounded-full border border-borda px-6 py-3.5 font-medium transition-colors hover:border-suave">
              Ver projetos
            </a>
          </div>
        </Reveal>
        <Reveal atraso={320}>
          <p className="mt-10 inline-flex items-center gap-2 text-sm text-suave">
            <MapPin className="size-4 text-destaque" aria-hidden />
            {perfil.regiao}
          </p>
        </Reveal>
      </div>

      {/* Foto à direita, com brilho azul atrás */}
      <Reveal atraso={200} className="relative mx-auto w-full max-w-sm">
        <div aria-hidden className="absolute -inset-10 rounded-full bg-destaque/25 blur-3xl" />
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-superficie">
          {perfil.fotoUrl ? (
            <Image src={perfil.fotoUrl} alt={`Foto de ${perfil.nome}`} fill className="object-cover" priority />
          ) : (
            <FotoPlaceholder />
          )}
        </div>
        <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-superficie/90 px-4 py-2 text-xs whitespace-nowrap backdrop-blur">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          {perfil.disponibilidade}
        </div>
      </Reveal>
    </section>
    </div>
  );
}
