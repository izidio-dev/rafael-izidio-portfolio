# Rafael Moniz Izidio — Portfólio

Site pessoal com apresentação, habilidades, serviços, projetos e contatos.

**Ver ao vivo:** https://rafael-izidio.brmizidio.workers.dev

## Tecnologias

Next.js (exportação estática) · React · TypeScript · Tailwind CSS · Playwright · Cloudflare Workers.

## Como rodar

```bash
npm install
npm run dev        # http://localhost:3000
```

## Testes

```bash
npm run build && npx playwright test
```

## Como editar

Todo o conteúdo (textos, contatos, habilidades e projetos) fica em `src/content/perfil.ts`.
Campos vazios somem do site sozinhos. Para colocar foto ou currículo, ponha o arquivo em
`public/` (ex.: `public/foto.jpg`) e preencha `fotoUrl: "/foto.jpg"` ou `curriculoUrl`.

## Publicação

Cloudflare Workers conectado a este repositório: build `npm run build`,
deploy `npx wrangler deploy` (configuração em `wrangler.jsonc`).
