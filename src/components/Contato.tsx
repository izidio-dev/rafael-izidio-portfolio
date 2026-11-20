import { ArrowUpRight, AtSign, Briefcase, Code2, Mail, MessageCircle } from "lucide-react";
import { perfil } from "@/content/perfil";
import { linkWhatsApp } from "@/lib/whatsapp";
import { Reveal } from "./Reveal";
import { TituloSecao } from "./TituloSecao";

export function Contato() {
  const c = perfil.contatos;
  // Só entram na lista os contatos preenchidos em perfil.ts.
  const itens = [
    c.whatsapp && { icone: MessageCircle, rotulo: "WhatsApp", valor: c.whatsapp, href: linkWhatsApp(c.whatsapp, perfil.mensagemWhatsApp) },
    c.email && { icone: Mail, rotulo: "E-mail", valor: c.email, href: `mailto:${c.email}` },
    c.instagram && { icone: AtSign, rotulo: "Instagram", valor: `@${c.instagram}`, href: `https://instagram.com/${c.instagram}` },
    c.linkedin && { icone: Briefcase, rotulo: "LinkedIn", valor: c.linkedin, href: `https://www.linkedin.com/in/${c.linkedin}` },
    c.github && { icone: Code2, rotulo: "GitHub", valor: c.github, href: `https://github.com/${c.github}` },
  ].filter(Boolean) as { icone: typeof Mail; rotulo: string; valor: string; href: string }[];

  return (
    <section id="contato" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <TituloSecao numero="05" titulo="Contato" />
      <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end">
        <Reveal>
          <p className="font-display text-4xl leading-[1.05] font-bold tracking-tight md:text-6xl">
            Vamos colocar o seu negócio <span className="text-destaque">na internet</span>?
          </p>
          <p className="mt-6 max-w-md text-suave">
            Conte o que você precisa. Respondo rápido, explico tudo sem complicação e o orçamento é sem compromisso.
          </p>
        </Reveal>
        <ul className="space-y-3">
          {itens.map((item, i) => (
            <li key={item.rotulo}>
              <Reveal atraso={i * 80}>
                <a
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-superficie px-5 py-4 transition-colors hover:border-destaque/60"
                >
                  <item.icone className="size-5 text-destaque" aria-hidden />
                  <span className="flex-1">
                    <span className="block font-mono text-[11px] tracking-[0.18em] text-suave uppercase">{item.rotulo}</span>
                    <span className="block break-all">{item.valor}</span>
                  </span>
                  <ArrowUpRight className="size-4 text-suave transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-texto" aria-hidden />
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
