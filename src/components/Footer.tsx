import { perfil } from "@/content/perfil";

export function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm text-suave md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {perfil.nome} · {perfil.regiao}</p>
        {perfil.notaIA && <p className="text-xs">{perfil.notaIA}</p>}
      </div>
    </footer>
  );
}
