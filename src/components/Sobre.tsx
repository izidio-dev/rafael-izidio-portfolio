import { perfil } from "@/content/perfil";
import { Reveal } from "./Reveal";
import { TituloSecao } from "./TituloSecao";

export function Sobre() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <TituloSecao numero="01" titulo="Sobre mim" />
      <div className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <p className="font-display text-2xl leading-snug font-medium md:text-3xl">{perfil.destaqueSobre}</p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Qualidades">
            {perfil.qualidades.map((q) => (
              <li key={q} className="rounded-full border border-white/10 bg-superficie px-3.5 py-1.5 text-sm">{q}</li>
            ))}
          </ul>
        </Reveal>
        <div className="space-y-5 text-suave md:text-lg">
          {perfil.sobre.map((p, i) => (
            <Reveal key={i} atraso={i * 90}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
