import { Reveal } from "./Reveal";

/** Cabeçalho numerado das seções: "01 — Sobre mim". */
export function TituloSecao({ numero, titulo, apoio }: { numero: string; titulo: string; apoio?: string }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-center gap-4 font-mono text-xs tracking-[0.2em] text-destaque uppercase">
        <span>{numero}</span>
        <span className="h-px w-12 bg-destaque/50" aria-hidden />
      </div>
      <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">{titulo}</h2>
      {apoio && <p className="mt-4 max-w-xl text-suave">{apoio}</p>}
    </Reveal>
  );
}
