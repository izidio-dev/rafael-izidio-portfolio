import type { CSSProperties, ReactNode } from "react";

/**
 * Envolve um bloco que deve "subir e aparecer" ao rolar a página.
 * "atraso" (em ms) cria o efeito cascata entre itens vizinhos.
 */
export function Reveal({
  children,
  atraso = 0,
  className = "",
}: {
  children: ReactNode;
  atraso?: number;
  className?: string;
}) {
  return (
    <div className={`reveal ${className}`} style={{ "--atraso": `${atraso}ms` } as CSSProperties}>
      {children}
    </div>
  );
}
