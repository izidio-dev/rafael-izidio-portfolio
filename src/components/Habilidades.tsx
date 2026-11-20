import { CalendarClock, Database, Store, UtensilsCrossed } from "lucide-react";
import { perfil, type Nivel } from "@/content/perfil";
import { Reveal } from "./Reveal";
import { TituloSecao } from "./TituloSecao";

const icones = [Store, UtensilsCrossed, CalendarClock, Database];
const segmentos: Record<Nivel, number> = { "Básico": 1, "Intermediário": 2, "Avançado": 3 };

/** Medidor de 3 barrinhas: quantas acesas = nível. */
function MedidorNivel({ nivel }: { nivel: Nivel }) {
  return (
    <div className="flex gap-1" aria-hidden>
      {[1, 2, 3].map((n) => (
        <span key={n} className={`h-1.5 w-7 rounded-full ${n <= segmentos[nivel] ? "bg-destaque" : "bg-borda"}`} />
      ))}
    </div>
  );
}

export function Habilidades() {
  return (
    <section id="habilidades" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <TituloSecao numero="03" titulo="Habilidades" apoio="O que eu entrego para o seu negócio — e as ferramentas que uso para isso." />

      {/* Parte 1: para clientes */}
      <Reveal>
        <h3 className="mb-6 font-mono text-xs tracking-[0.2em] text-suave uppercase">O que eu faço pelo seu negócio</h3>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {perfil.servicos.map((s, i) => {
          const Icone = icones[i % icones.length];
          return (
            <Reveal key={s.titulo} atraso={i * 90}>
              <article className="group h-full rounded-2xl border border-white/10 bg-superficie p-6 transition-colors hover:border-destaque/50">
                <Icone className="size-6 text-destaque" aria-hidden />
                <h4 className="mt-5 font-display text-lg font-bold">{s.titulo}</h4>
                <p className="mt-2 text-sm text-suave">{s.descricao}</p>
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* Parte 2: para recrutadores */}
      <div className="mt-16 grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Reveal>
            <h3 className="mb-6 font-mono text-xs tracking-[0.2em] text-suave uppercase">Tecnologias</h3>
          </Reveal>
          <ul className="divide-y divide-white/5 rounded-2xl border border-white/10 bg-superficie">
            {perfil.tecnologias.map((t, i) => (
              <li key={t.nome} data-testid={`tec-${t.nome}`}>
                <Reveal atraso={i * 70} className="flex items-center justify-between gap-4 px-6 py-4">
                  <span className="font-medium">{t.nome}</span>
                  <span className="flex items-center gap-4">
                    <span className="text-sm text-suave">{t.nivel}</span>
                    <MedidorNivel nivel={t.nivel} />
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Reveal>
            <h3 className="mb-6 font-mono text-xs tracking-[0.2em] text-suave uppercase">Estudando agora</h3>
          </Reveal>
          <Reveal atraso={100}>
            <div className="flex flex-wrap gap-3">
              {perfil.estudando.map((e) => (
                <span key={e} className="inline-flex items-center gap-2 rounded-full border border-dashed border-destaque/40 px-4 py-2 text-sm">
                  <span className="size-1.5 rounded-full bg-destaque" aria-hidden />
                  {e}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm text-suave">
              Aprendo na prática: cada projeto deste portfólio usa essas ferramentas, e eu reviso o código para dominar cada uma.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
