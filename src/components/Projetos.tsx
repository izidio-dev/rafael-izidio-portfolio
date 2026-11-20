import { ArrowUpRight } from "lucide-react";
import { perfil } from "@/content/perfil";
import { MockupProjeto } from "./MockupProjeto";
import { Reveal } from "./Reveal";
import { TituloSecao } from "./TituloSecao";

export function Projetos() {
  return (
    <section id="projetos" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <TituloSecao numero="04" titulo="Projetos" apoio="Um trabalho entregue para cliente e quatro projetos pensados para negócios do dia a dia. Cada um com identidade própria." />
      <div className="grid gap-6 md:grid-cols-2">
        {perfil.projetos.map((p, i) => (
          <Reveal key={p.titulo} atraso={(i % 2) * 120} className={p.clienteReal ? "md:col-span-2" : ""}>
            <article className="group flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-superficie p-5 transition-colors hover:border-white/20 md:p-6">
              {/* Prévia com fundo na cor do projeto */}
              <div className={`relative overflow-hidden rounded-2xl p-6 md:p-8 ${p.clienteReal ? "md:px-[18%]" : ""}`} style={{ background: `radial-gradient(120% 120% at 0% 0%, ${p.cor}33, transparent 60%), #111317` }}>
                <div className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.02] motion-reduce:transition-none">
                  <MockupProjeto projeto={p} />
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] uppercase">
                <span className="rounded-full px-2.5 py-1" style={{ background: `${p.cor}22`, color: p.cor }}>{p.tipo}</span>
                {p.clienteReal && <span className="rounded-full border border-emerald-400/40 px-2.5 py-1 text-emerald-300">Cliente real</span>}
                {!p.url && <span className="text-suave">Em breve</span>}
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold">{p.titulo}</h3>
              <p className="mt-2 font-medium">{p.resultado}</p>
              <p className="mt-2 text-sm text-suave">{p.descricao}</p>

              <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6">
                <ul className="flex flex-wrap gap-2" aria-label="Tecnologias usadas">
                  {p.stack.map((s) => (
                    <li key={s} className="rounded-md border border-white/10 px-2 py-1 font-mono text-[11px] text-suave">{s}</li>
                  ))}
                </ul>
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-destaque hover:underline">
                    Ver ao vivo <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                ) : (
                  <span className="text-sm text-suave">Em construção</span>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
