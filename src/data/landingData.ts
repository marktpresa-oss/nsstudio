export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  items: string[];
  featuredTag?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Branding' | 'Websites' | 'Audiovisual' | 'Marketing' | 'Apresentações';
  client: string;
  year: string;
  image: string;
  mockupType: 'Macbook' | 'iPhone' | 'BrandBook' | 'Poster' | 'Packaging';
  shortDescription: string;
  challenge: string;
  solution: string;
  impactMetrics: { label: string; value: string }[];
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
  featuredResult: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'branding',
    title: 'Branding',
    subtitle: 'Posicionamento & DNA de Marca',
    iconName: 'Crown',
    featuredTag: 'Mais Solicitado',
    description: 'Criamos marcas fortes e memoráveis que dominam a mente dos consumidores e geram valor intangível inestimável.',
    items: [
      'Construção de Marca',
      'Reposicionamento de Mercado',
      'Naming (Criação de Nome)',
      'Arquitetura de Marca',
      'Brandbook Completo',
      'Manual de Marca',
      'Tom de Voz & Personas',
      'Arquétipos de Marca',
      'Estratégia de Posicionamento'
    ]
  },
  {
    id: 'identidade-visual',
    title: 'Identidade Visual',
    subtitle: 'Design Estratégico',
    iconName: 'Palette',
    description: 'Estética sofisticada alinhada ao posicionamento do seu negócio para criar uma percepção premium imediata.',
    items: [
      'Logo Premium 3D e Vetorial',
      'Redesign de Marca',
      'Papelaria Corporativa',
      'Apresentações Comerciais',
      'Assinaturas Digitais de E-mail',
      'Mockups Fotorrealistas',
      'Manual de Identidade Visual',
      'Aplicações em Embalagens',
      'Uniformes & Merchandising',
      'Projetos de Fachadas & Sinalização'
    ]
  },
  {
    id: 'websites',
    title: 'Websites & Digital',
    subtitle: 'Engenharia Web de Alta Performance',
    iconName: 'Layout',
    featuredTag: 'Alta Conversão',
    description: 'Plataformas digitais ultravelozes com estética padrão Awwwards, focadas em retenção, autoridade e conversão.',
    items: [
      'Landing Pages de Alta Conversão',
      'Sites Institucionais Premium',
      'Portais & Portfólios Corporativos',
      'Sites para Imobiliárias & Construtoras',
      'Sites para Advocacia & Escritórios',
      'Sistemas Administrativos Sob Medida',
      'Painéis & Dashboards',
      'Otimização SEO Avançada',
      'Conformidade com LGPD',
      'Design 100% Responsivo & Mobile First'
    ]
  },
  {
    id: 'marketing',
    title: 'Marketing Estratégico',
    subtitle: 'Tração, Mídia & Performance',
    iconName: 'TrendingUp',
    description: 'Campanhas orientadas a dados e funis de vendas estruturados para atrair clientes de alto valor constitutivos.',
    items: [
      'Planejamento Estratégico de Marketing',
      'Posicionamento de Mídia',
      'Campanhas Omnichannel',
      'Funis de Vendas & Lead Gen',
      'Google Ads & Youtube Ads',
      'Meta Ads (Instagram & Facebook)',
      'Gestão de Performance Mídia Paga',
      'Inbound & Outbound Marketing',
      'Integração de CRM & Automações'
    ]
  },
  {
    id: 'conteudo',
    title: 'Conteúdo & Redes Sociais',
    subtitle: 'Autoridade & Engajamento',
    iconName: 'MessageSquare',
    description: 'Produção editorial estratégica que eleva o percepção da sua empresa e constrói comunidade engajada.',
    items: [
      'Gestão de Instagram & LinkedIn',
      'Estratégia para YouTube & TikTok',
      'Calendário Editorial Inteligente',
      'Copywriting & Narrative Design',
      'Storytelling Corporativo',
      'Design de Carrosséis Educativos',
      'Posts Estáticos & Infográficos',
      'Monitoramento & Métricas'
    ]
  },
  {
    id: 'audiovisual',
    title: 'Audiovisual & Motion',
    subtitle: 'Cinema & Produção de Elite',
    iconName: 'Video',
    featuredTag: 'Padrão Internacional',
    description: 'Captações em 4K/8K, imagens com drone e animações 3D que contam a história da sua empresa com alto impacto.',
    items: [
      'Vídeos Institucionais de Alto Impacto',
      'Captações Internas & Externas',
      'Imagens Aéreas com Drone 4K',
      'Reels & Videos Curtos de Vendas',
      'Comerciais para TV e Web',
      'Motion Design & Vinhetas 3D',
      'Animações de Logotipos',
      'Edição & Color Grading Profissional'
    ]
  },
  {
    id: 'design-editorial',
    title: 'Design Editorial & Eventos',
    subtitle: 'Material Gráfico & Feiras',
    iconName: 'FileText',
    description: 'Desenvolvimento de catálogos e materiais corporativos físicos/digitais que causam impacto em reuniões e feiras.',
    items: [
      'Catálogos de Produtos & Serviços',
      'Folders & Folhetos de Luxo',
      'Revistas Corporativas',
      'Apresentações para Investidores (Pitch Decks)',
      'E-books & Rich Materials',
      'Estandes para Feiras & Eventos',
      'Campanhas Físicas & Kits Premium'
    ]
  },
  {
    id: 'consultoria',
    title: 'Consultoria & Business Intelligence',
    subtitle: 'Direcionamento & Escala',
    iconName: 'Compass',
    description: 'Diagnóstico profundo e aconselhamento direto com especialistas para acelerar verticais de negócios.',
    items: [
      'Diagnóstico de Marca & Comunicação',
      'Estratégia de Expansão de Mercado',
      'Mentorias de Posicionamento Executive',
      'Análise de Inteligência Competitiva',
      'Dashboards de Business Intelligence',
      'Auditoria de Presença Digital'
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Diagnóstico',
    subtitle: 'Imersão & Auditoria',
    description: 'Analisamos profundamente o seu modelo de negócio, concorrência, públicos-alvo, gargalos e oportunidades de diferenciação.',
    deliverables: ['Relatório de Maturidade de Marca', 'Benchmark Competitivo', 'Matriz SWOT'],
    duration: 'Semana 1'
  },
  {
    number: '02',
    title: 'Estratégia',
    subtitle: 'Direcionamento & DNA',
    description: 'Definimos a promessa única de valor, a arquitetura de posicionamento, tom de voz e estratégias de aquisição.',
    deliverables: ['Plano Estratégico de Marca', 'Narrativa da Marca', 'Diretrizes de Mídia'],
    duration: 'Semana 2'
  },
  {
    number: '03',
    title: 'Branding',
    subtitle: 'Design & Conceituação',
    description: 'Criamos o ecossistema visual da marca, logotipo 3D/vetorial, paleta, tipografia e diretrizes de aplicabilidade.',
    deliverables: ['Brandbook Completo', 'Manual de Identidade Visual', 'Assets em Alta Definição'],
    duration: 'Semanas 3 a 4'
  },
  {
    number: '04',
    title: 'Execução',
    subtitle: 'Desenvolvimento & Produção',
    description: 'Construímos o website, captamos materiais audiovisuais, elaboramos apresentações e preparamos a presença digital.',
    deliverables: ['Website no Ar', 'Vídeos Editados', 'Apresentações & Papelaria'],
    duration: 'Semanas 5 a 7'
  },
  {
    number: '05',
    title: 'Performance',
    subtitle: 'Lançamento & Mídia',
    description: 'Ativamos campanhas patrocinadas, otimizamos conversão de leads e impulsionamos autoridade nos canais estratégicos.',
    deliverables: ['Campanhas Rodando', 'Relatório de Tráfego', 'Leads Qualificados'],
    duration: 'Contínuo'
  },
  {
    number: '06',
    title: 'Escala',
    subtitle: 'Consolidação & Expansão',
    description: 'Analisamos métricas de retorno (ROI), refinamos funis e estruturamos a marca para expansão nacional ou internacional.',
    deliverables: ['Dashboard BI', 'Revisão Trimestral', 'Plano de Expansão'],
    duration: 'Recorrente'
  }
];

export const DIFFERENTIALS_DATA: Differential[] = [
  {
    id: '1',
    title: 'Atendimento Estratégico',
    description: 'Acompanhamento direto por sócios e gestores sênior com visão de negócios real.',
    iconName: 'UserCheck'
  },
  {
    id: '2',
    title: 'Projetos Exclusivos',
    description: 'Desenvolvimento 100% autoral, sem uso de templates ou soluções genéricas.',
    iconName: 'Sparkles'
  },
  {
    id: '3',
    title: 'Equipe Multidisciplinar',
    description: 'Especialistas em design, tecnologia, copywriting, mídia e audiovisual integrados.',
    iconName: 'Users'
  },
  {
    id: '4',
    title: 'Tecnologia de Ponta',
    description: 'Stack tecnológica moderna garantindo velocidade ultrarrápida e segurança.',
    iconName: 'Cpu'
  },
  {
    id: '5',
    title: 'Design de Alto Padrão',
    description: 'Estética refinada inspirada nas maiores referências mundiais do mercado global.',
    iconName: 'Award'
  },
  {
    id: '6',
    title: 'Marketing Baseado em Dados',
    description: 'Decisões orientadas a KPIs claros e mensurabilidade de retorno sobre investimento.',
    iconName: 'BarChart3'
  },
  {
    id: '7',
    title: 'Foco em Performance',
    description: 'Engenharia de conversão para transformar visitantes em oportunidades reais de vendas.',
    iconName: 'Target'
  },
  {
    id: '8',
    title: 'Inteligência Comercial',
    description: 'Alinhamento completo entre a equipe de marketing e o time comercial do cliente.',
    iconName: 'Briefcase'
  },
  {
    id: '9',
    title: 'IA Aplicada aos Processos',
    description: 'Agilidade de execução combinada a insights preditivos e automação inteligente.',
    iconName: 'Zap'
  },
  {
    id: '10',
    title: 'Branding Orientado a Negócios',
    description: 'Não fazemos apenas beleza visual; criamos marcas valiosas que cobram mais caro.',
    iconName: 'ShieldCheck'
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'project-1',
    title: 'Vanguard Holdings - Reposicionamento Global',
    category: 'Branding',
    client: 'Grupo Vanguard',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'BrandBook',
    shortDescription: 'Criação de identidade visual 3D, arquitetura de marca e brandbook corporativo para um fundo de investimentos.',
    challenge: 'O cliente possuía uma marca defasada que não passava confiança para investidores institucionais de grande porte.',
    solution: 'Desenvolvemos uma nova identidade visual com símbolo tridimensional, tipografia customizada e guia de aplicação para mais de 12 subsidiárias.',
    impactMetrics: [
      { label: 'Valor da Marca', value: '+140%' },
      { label: 'Aumento em Captação', value: 'R$ 85M' },
      { label: 'Aprovações do Conselho', value: '100%' }
    ],
    deliverables: ['Brandbook 200 págs.', 'Logo 3D em Ouro Escovado', 'Manual de Aplicação', 'Redesign de Papelaria']
  },
  {
    id: 'project-2',
    title: 'Aura Luxe Real Estate - Portal Imobiliário',
    category: 'Websites',
    client: 'Aura Properties',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'Macbook',
    shortDescription: 'Website imobiliário de alto padrão com suporte a visões 360°, filtro interativo e velocidade recorde.',
    challenge: 'A plataforma anterior demorava 6 segundos para carregar imagens em alta resolução de imóveis de luxo.',
    solution: 'Construímos um portal headless com Next.js e CDN distribuída globalmente, reduzindo tempo de resposta para 0.4s.',
    impactMetrics: [
      { label: 'Tempo de Carregamento', value: '0.4s' },
      { label: 'Taxa de Conversão', value: '+210%' },
      { label: 'Leads de Alto Padrão', value: '3.4x' }
    ],
    deliverables: ['Website Awwwards-Level', 'Sistema de CRM Imobiliário', 'Painel Administrativo', 'SEO Local']
  },
  {
    id: 'project-3',
    title: 'Luminary Legal - Advocacia Corporativa',
    category: 'Apresentações',
    client: 'Luminary Partners',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'Poster',
    shortDescription: 'Identidade e pitch deck institucional para bancas de advocacia empresarial atuar com multinacionais.',
    challenge: 'Dificuldade em fechar contratos de honorários fixos altos por falta de percepção de autoridade.',
    solution: 'Reformulação total da comunicação visual, papelaria premium em relevo seco e apresentações dinâmicas.',
    impactMetrics: [
      { label: 'Contratos Fechados', value: '+18' },
      { label: 'Ticket Médio', value: '+85%' },
      { label: 'NPS dos Clientes', value: '98' }
    ],
    deliverables: ['Pitch Deck Interativo', 'Design de Papelaria Luxo', 'Website Corporativo', 'Pasta Comercial']
  },
  {
    id: 'project-4',
    title: 'Nexus BioTech - Manifesto Audiovisual',
    category: 'Audiovisual',
    client: 'Nexus Health',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'iPhone',
    shortDescription: 'Filme institucional em 8K com captações de drone e motion design para lançamento em feira internacional.',
    challenge: 'Explicar uma biotecnologia complexa de forma emocional e memorável em menos de 2 minutos.',
    solution: 'Roteiro baseado em storytelling futurista, narração marcante e computação gráfica integrada às imagens reais.',
    impactMetrics: [
      { label: 'Visualizações Feira', value: '120k+' },
      { label: 'Aporte de Investimento', value: 'US$ 12M' },
      { label: 'Elogios da Imprensa', value: 'Destaque' }
    ],
    deliverables: ['Vídeo 4K 120s', 'Edição para Redes Sociais', 'Motion Graphic 3D', 'Color Grading']
  },
  {
    id: 'project-5',
    title: 'Apex Growth Engine - Estratégia de Mídia Paga',
    category: 'Marketing',
    client: 'Apex SaaS',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'Macbook',
    shortDescription: 'Funil multicanal de tração e anúncios em escala para software corporativo B2B.',
    challenge: 'Custo de Aquisição de Cliente (CAC) muito elevado e baixo volume de demos agendadas.',
    solution: 'Reestruturação total de campanhas no LinkedIn e Google Ads com landing pages hiper-segmentadas.',
    impactMetrics: [
      { label: 'Redução de CAC', value: '-48%' },
      { label: 'ROI em Mídia', value: '6.8x' },
      { label: 'Demos Agendadas/Mês', value: '+340' }
    ],
    deliverables: ['Gestão Mídia Paga', '6 Landing Pages', 'Copywriting de Anúncios', 'Dashboard em Tempo Real']
  },
  {
    id: 'project-6',
    title: 'Krono Chronographs - Embalagens & Naming',
    category: 'Branding',
    client: 'Krono Group',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    mockupType: 'Packaging',
    shortDescription: 'Criação da marca e packaging de relógios de luxo inspirados na alta horologia suíça.',
    challenge: 'Posicionar uma nova marca no segmento de entrada de relógios automáticos de luxo.',
    solution: 'Design de caixas em madeira lacada preta, estampagem em folha de ouro e certificado de autenticidade gravado.',
    impactMetrics: [
      { label: 'Esgotamento do Lote', value: '45 Dias' },
      { label: 'Percepção de Valor', value: 'Alta' },
      { label: 'Pressione de Mídia', value: 'Internacional' }
    ],
    deliverables: ['Identidade Completa', 'Design de Embalagens', 'Manual do Produto', 'Fotos de Still']
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Roberto Caldas',
    role: 'CEO & Founder',
    company: 'Vanguard Health Group',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
    content: 'O NS Studio transformou completamente a forma como o mercado enxerga o nosso grupo. A nova identidade e o site imersivo nos colocaram em outro patamar de negociação corporativa.',
    rating: 5,
    featuredResult: 'Crescimento de 320% nas oportunidades B2B'
  },
  {
    id: '2',
    name: 'Helena Montenegro',
    role: 'Diretora de Marketing',
    company: 'Aura Real Estate',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    content: 'Poucas agências têm o requinte visual e a velocidade técnica que o NS Studio entrega. Cada detalhe, do tom de voz ao mockup 3D, exala luxo e inteligência estratégica.',
    rating: 5,
    featuredResult: 'Venda de R$ 42M em VGV no lançamento'
  },
  {
    id: '3',
    name: 'Marcelo Siqueira',
    role: 'Sócio-Fundador',
    company: 'Siqueira & Associados Advocacia',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
    content: 'Trabalhar com o Grupo NS foi o melhor investimento do nosso ano. O posicionamento de marca gerou um aumento imediato na cobrança de honorários sem qualquer resistência dos clientes.',
    rating: 5,
    featuredResult: '+85% de elevação no ticket médio de honorários'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    category: 'Geral',
    question: 'O que diferencia o NS STUDIO de uma agência de marketing tradicional?',
    answer: 'Não somos uma agência de volume ou postagens diárias sem propósito. O NS STUDIO é um estúdio estratégico especializado em branding, engenharia web e marketing de alta performance. Desenvolvemos soluções sob medida que combinam estética refinada (padrão Apple/Stripe) com estratégia de negócios focada em retorno financeiro real (ROI).'
  },
  {
    category: 'Processo',
    question: 'Quanto tempo leva para desenvolver um projeto de Branding ou Website completo?',
    answer: 'Em média, um projeto de Branding completo leva de 3 a 5 semanas. Um website institucional ou Landing Page de alto padrão é entregue entre 2 e 4 semanas. Trabalhamos com cronogramas rígidos e entregáveis transparentes em cada etapa.'
  },
  {
    category: 'Investimento',
    question: 'Qual o perfil de empresa atendida pelo NS STUDIO?',
    answer: 'Atendemos empresas, grupos empresariais, escritórios corporativos, construtoras, fundos de investimento, marcas de luxo e empresários que desejam posicionar suas marcas no topo de seus segmentos e competir em nível nacional e internacional.'
  },
  {
    category: 'Entregáveis',
    question: 'Eu terei acesso a todos os arquivos editáveis e direitos de propriedade intelectual?',
    answer: 'Sim, 100%. Ao final do projeto e com a liquidação contratual, todos os arquivos finais em vetor, códigos-fonte, modelos 3D, manuais e direitos autorais são transferidos integralmente para a sua empresa.'
  },
  {
    category: 'Atendimento',
    question: 'Como funciona o atendimento e acompanhamento dos projetos?',
    answer: 'Cada projeto conta com um Gerente de Conta dedicado e canal exclusivo no WhatsApp/Slack, reuniões presenciais ou online de alinhamento e relatórios periódicos de progresso.'
  },
  {
    category: 'Suporte',
    question: 'O NS STUDIO realiza a gestão de tráfego pago (Google Ads / Meta Ads) contínua?',
    answer: 'Sim! Além do desenvolvimento inicial da marca e site, oferecemos planos de acompanhamento estratégico contínuo em tráfego pago, SEO, produção audiovisual e otimização de conversão.'
  }
];

export const STATS_NUMBERS = [
  { value: 250, prefix: '+', label: 'Projetos desenvolvidos', description: 'Em mais de 15 setores estratégicos' },
  { value: 100, prefix: '+', label: 'Marcas posicionadas', description: 'Com retorno sobre investimento comprovado' },
  { value: 8, prefix: '+', label: 'Especialidades', description: 'Da estratégia de marca à mídia em escala' },
  { value: 100, prefix: '', suffix: '%', label: 'Projetos personalizados', description: 'Zero templates. Design 100% sob medida' }
];
