import { perfil } from "@/content/perfil";
import { linkWhatsApp } from "@/lib/whatsapp";

const links = [
  { href: "#sobre", rotulo: "Sobre" },
  { href: "#habilidades", rotulo: "Habilidades" },
  { href: "#projetos", rotulo: "Projetos" },
  { href: "#contato", rotulo: "Contato" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-fundo/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#topo" className="font-mono text-sm font-medium tracking-wider">
          {perfil.iniciais}
          <span className="text-destaque">.</span>
        </a>
        <nav aria-label="Seções" className="hidden gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-suave transition-colors hover:text-texto">
              {l.rotulo}
            </a>
          ))}
        </nav>
        {perfil.contatos.whatsapp && (
          <a
            href={linkWhatsApp(perfil.contatos.whatsapp, perfil.mensagemWhatsApp)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-destaque/40 px-4 py-1.5 text-sm text-texto transition-colors hover:bg-destaque hover:text-white"
          >
            Orçamento
          </a>
        )}
      </div>
    </header>
  );
}
