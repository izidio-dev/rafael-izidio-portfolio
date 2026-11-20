import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, JetBrains_Mono } from "next/font/google";
import { perfil } from "@/content/perfil";
import "./globals.css";

// Fontes (licença livre OFL, servidas pelo próprio site via next/font).
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", weight: ["500", "700", "800"] });
const corpo = Geist({ subsets: ["latin"], variable: "--font-corpo" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });

export const metadata: Metadata = {
  title: `${perfil.nome} — ${perfil.titulo}`,
  description: perfil.frase,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${corpo.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* Marca que o JavaScript está ativo: só então as seções começam escondidas para animar. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
