/**
 * TODO o conteúdo do portfólio mora aqui.
 * Para trocar nome, textos, contatos ou projetos, edite SÓ este arquivo.
 * Campos com "?" são opcionais: se ficarem vazios, o site esconde o item.
 */

export type Nivel = "Básico" | "Intermediário" | "Avançado";

export type Projeto = {
  titulo: string;
  tipo: "Site" | "Sistema";
  /** O que o projeto entrega para o dono do negócio (fala com clientes). */
  resultado: string;
  /** Como funciona, em uma frase. */
  descricao: string;
  /** Tecnologias usadas (fala com recrutadores). */
  stack: string[];
  /** Cor de destaque do mockup do cartão (cada demo tem identidade própria). */
  cor: string;
  /** Link do projeto no ar. Enquanto não existir, o cartão mostra "Em breve". */
  url?: string;
  /** true = trabalho entregue para um cliente de verdade (ganha destaque). */
  clienteReal?: boolean;
};

export type Perfil = {
  nome: string;
  iniciais: string;
  titulo: string;
  frase: string;
  regiao: string;
  /** Caminho da foto dentro de /public (ex.: "/foto.jpg"). Sem foto, aparece uma silhueta. */
  fotoUrl?: string;
  sobre: string[];
  meta: string;
  /** Caminho do currículo em PDF dentro de /public (ex.: "/curriculo.pdf"). */
  curriculoUrl?: string;
  contatos: {
    whatsapp?: string;
    email?: string;
    instagram?: string;
    github?: string;
    linkedin?: string;
  };
  mensagemWhatsApp: string;
  servicos: { titulo: string; descricao: string }[];
  tecnologias: { nome: string; nivel: Nivel }[];
  estudando: string[];
  disponibilidade: string;
  destaqueSobre: string;
  qualidades: string[];
  projetos: Projeto[];
  /** Linha de transparência sobre uso de IA. Deixe vazio ("") para esconder. */
  notaIA: string;
};

export const perfil: Perfil = {
  nome: "Rafael Moniz Izidio",
  iniciais: "RMI",
  titulo: "Desenvolvedor Web · Estudante de ADS",
  frase: "Crio sites e sistemas sob medida para negócios que querem vender mais e se organizar melhor.",
  regiao: "São Paulo – SP",
  disponibilidade: "Disponível para projetos e estágio",
  destaqueSobre: "Código com propósito: tecnologia que resolve o problema de quem usa.",
  qualidades: ["Proativo", "Aprendo rápido", "Trabalho em equipe", "Ambicioso", "Comunicativo"],
  fotoUrl: "/foto.webp",
  sobre: [
    "Tenho 19 anos e estudo Análise e Desenvolvimento de Sistemas (ADS) na UNINOVE, campus Memorial – Barra Funda. Desenvolvo sites e sistemas sob medida para negócios de São Paulo e de qualquer lugar do Brasil, com todo o atendimento online.",
    "Cada projeto tem identidade própria, sem modelo pronto. Cuido do visual, do funcionamento no celular e das regras de privacidade (LGPD), para o cliente se preocupar só com o próprio negócio.",
    "Estou em busca de um estágio na área de desenvolvimento, onde eu possa somar com dedicação e crescer junto com a equipe.",
  ],
  meta: "Conquistar meu estágio em desenvolvimento e, a cada projeto entregue, me tornar um profissional cada vez mais completo.",
  curriculoUrl: "/Curriculo-Rafael-Moniz-Izidio.pdf",
  contatos: {
    // Contatos vazios (undefined) somem do site automaticamente.
    whatsapp: "+55 (11) 91000-6468",
    email: "brmizidio@gmail.com",
    instagram: undefined,
    github: "izidio-dev",
    linkedin: "rafael-izidio-093151400",
  },
  mensagemWhatsApp: "Olá! Vi seu portfólio e quero um site para o meu negócio.",
  servicos: [
    {
      titulo: "Sites para negócios",
      descricao: "Página profissional com seus serviços, fotos, horário, localização e botão direto para o WhatsApp.",
    },
    {
      titulo: "Cardápio e catálogo digital",
      descricao: "Cliente monta o pedido no celular e ele chega pronto no seu WhatsApp, sem taxa de aplicativo.",
    },
    {
      titulo: "Agendamento online",
      descricao: "Seus clientes marcam horário sozinhos, 24 horas por dia, e você acompanha tudo numa agenda.",
    },
    {
      titulo: "Sistemas de cadastro",
      descricao: "Cadastro de clientes, histórico de atendimentos e relatórios, com acesso por senha e respeito à LGPD.",
    },
  ],
  tecnologias: [
    { nome: "HTML", nivel: "Intermediário" },
    { nome: "CSS", nivel: "Intermediário" },
    { nome: "JavaScript", nivel: "Básico" },
    { nome: "Java", nivel: "Básico" },
  ],
  estudando: ["Node.js", "React", "Next.js", "TypeScript", "Supabase", "Docker", "Spring Boot", "PostgreSQL"],
  projetos: [
    {
      titulo: "D&H Limp Service — Limpeza profissional",
      tipo: "Site",
      resultado: "Empresa de limpeza com presença profissional na internet e orçamentos chegando direto no WhatsApp.",
      descricao: "Site de página única com serviços, área de atendimento, menu para celular, animações de entrada e SEO (sitemap, robots, metadados).",
      stack: ["HTML", "CSS", "JavaScript"],
      cor: "#2EC4B6",
      url: "https://dhlimpservice.pages.dev/",
      clienteReal: true,
    },
    {
      titulo: "Brasa & Pão — Hamburgueria",
      tipo: "Sistema",
      resultado: "Pedidos direto no WhatsApp, sem taxa de aplicativo, e o gerente atualiza o cardápio sozinho.",
      descricao: "Cardápio digital com carrinho e pedido formatado, mais painel do gerente (preços, esgotados, fotos). Teste em /admin no modo demonstração.",
      stack: ["Next.js", "TypeScript", "Firebase"],
      cor: "#E8452C",
      url: "https://brasaepao-portfolio.brmizidio.workers.dev/",
    },
    {
      titulo: "Ateliê Norte — Loja de roupas",
      tipo: "Sistema",
      resultado: "Vitrine aberta 24h, área do cliente com pedidos e favoritos, e a dona atualiza tudo sozinha.",
      descricao: "Catálogo com filtros, peças com várias cores, banners, sacola pelo WhatsApp, área do cliente (LGPD) e painel com pedidos. Teste a conta e o /admin no modo demonstração.",
      stack: ["Next.js", "TypeScript", "Firebase"],
      cor: "#C9A27E",
      url: "https://atelienorte-portfolio.brmizidio.workers.dev/",
    },
    {
      titulo: "Navalha 33 — Barbearia",
      tipo: "Sistema",
      resultado: "Cliente agenda com o barbeiro que prefere e paga por Pix; cada barbeiro cuida da própria agenda e dos próprios preços.",
      descricao: "Calendário com horários livres, QR Code do Pix gerado no site, comprovante pelo WhatsApp, painel do barbeiro (horários, promoções) e do dono. Teste o /painel no modo demonstração.",
      stack: ["Next.js", "TypeScript", "Firebase"],
      cor: "#F2C14E",
      url: "https://navalha33-portfolio.brmizidio.workers.dev/",
    },
    {
      titulo: "Patas do Pico — Pet shop",
      tipo: "Sistema",
      resultado: "Cliente agenda sozinho, a equipe cuida da agenda e o dono acompanha entradas e saídas, sem caderno nem planilha.",
      descricao: "API REST em Java com Spring Boot (JWT com papéis, JPA, Flyway, Swagger, testes JUnit) e telas em React: painéis do dono, do funcionário e do cliente, financeiro e LGPD. O servidor gratuito pode levar até 1 minuto para acordar.",
      stack: ["Java", "Spring Boot", "PostgreSQL", "React"],
      cor: "#3FB68B",
      url: "https://patasdopico-portfolio.brmizidio.workers.dev/",
    },
  ],
  notaIA: "",
};
