import { perfil } from "@/content/perfil";
import { Reveal } from "./Reveal";
import { TituloSecao } from "./TituloSecao";

export function Meta() {
  return (
    <section id="meta" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <TituloSecao numero="02" titulo="Minha meta" />
      <Reveal>
        <blockquote className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-superficie p-8 md:p-14">
          <div aria-hidden className="absolute -top-24 -right-24 size-72 rounded-full bg-destaque/20 blur-3xl" />
          <span aria-hidden className="font-display text-7xl leading-none text-destaque">“</span>
          <p className="relative mt-2 max-w-3xl font-display text-2xl leading-snug font-medium md:text-4xl">
            {perfil.meta}
          </p>
        </blockquote>
      </Reveal>
    </section>
  );
}
