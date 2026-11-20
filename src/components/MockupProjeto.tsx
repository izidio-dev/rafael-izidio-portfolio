import type { Projeto } from "@/content/perfil";

/**
 * Prévia ilustrativa do projeto (desenho em CSS), usada até termos o print real.
 * Sites mostram uma vitrine; sistemas mostram um painel com menu lateral.
 */
export function MockupProjeto({ projeto }: { projeto: Projeto }) {
  const cor = projeto.cor;
  return (
    <div aria-hidden className="overflow-hidden rounded-xl border border-white/10 bg-[#0b0c0e] shadow-2xl">
      {/* barra do navegador */}
      <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2">
        <span className="size-2 rounded-full bg-white/15" />
        <span className="size-2 rounded-full bg-white/15" />
        <span className="size-2 rounded-full bg-white/15" />
        <span className="ml-3 h-2 w-24 rounded-full bg-white/10" />
      </div>
      {projeto.tipo === "Site" ? (
        <div className="p-4">
          <div className="rounded-lg p-4" style={{ background: `linear-gradient(135deg, ${cor}, ${cor}99)` }}>
            <div className="h-2.5 w-20 rounded-full bg-white/80" />
            <div className="mt-2 h-2 w-32 rounded-full bg-white/50" />
            <div className="mt-4 h-5 w-16 rounded-full bg-black/40" />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-md bg-white/5 p-2">
                <div className="aspect-square rounded bg-white/10" />
                <div className="mt-2 h-1.5 w-3/4 rounded-full bg-white/20" />
                <div className="mt-1 h-1.5 w-1/2 rounded-full" style={{ background: cor }} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex">
          <div className="w-1/4 space-y-2 border-r border-white/5 p-3">
            <div className="h-2 w-3/4 rounded-full" style={{ background: cor }} />
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-1.5 w-full rounded-full bg-white/10" />
            ))}
          </div>
          <div className="flex-1 p-3">
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-md bg-white/5 p-2">
                  <div className="h-1.5 w-1/2 rounded-full bg-white/20" />
                  <div className="mt-2 h-3 w-2/3 rounded" style={{ background: i === 0 ? cor : "rgb(255 255 255 / .15)" }} />
                </div>
              ))}
            </div>
            <div className="mt-3 space-y-1.5">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-2 rounded bg-white/[.03] px-2 py-1.5">
                  <span className="size-2 rounded-full" style={{ background: i % 2 ? "rgb(255 255 255 / .2)" : cor }} />
                  <span className="h-1.5 flex-1 rounded-full bg-white/10" />
                  <span className="h-1.5 w-8 rounded-full bg-white/20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
