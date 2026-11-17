// theory-data.js — Conteúdo do slide teórico 

const THEME_DATA = {
  pillar: 'PILAR TEÓRICO — EQUIPE 02',
  title: 'O PASSIVO: DEFINIÇÕES, RECONHECIMENTO E MENSURAÇÃO',
  subtitle: 'Base Fundamental da Teoria Geral da Contabilidade — CPC 00 (R2) & Martins (2007)',
  chips: [
    { icon: 'fa-file-contract',  label: 'Definição',      color: '#60a5fa' },
    { icon: 'fa-clock',          label: 'Prazos',         color: '#34d399' },
    { icon: 'fa-stamp',          label: 'Reconhecimento', color: '#fbbf24' },
    { icon: 'fa-scale-balanced', label: 'Mensuração',     color: '#c4b5fd' }
  ]
};

const PILLARS_DATA = [
  {
    pillar: 'PILAR 01',
    title: 'Definição do Passivo',
    color: 'blue',
    rgb: '59, 130, 246',
    icon: 'fa-file-contract',
    definition: 'Obrigação presente da entidade, derivada de eventos já ocorridos, cuja liquidação se espera que resulte em saída de recursos.',
    summary: [
      'Conceito Central',
      'Fato Gerador',
      'Liquidação',
      'Natureza da Obrigação',
      'Exemplos Práticos'
    ],
    concepts: [
      { tag: 'Conceito Central',      text: 'Obrigação PRESENTE da entidade — legal ou não formalizada.' },
      { tag: 'Fato Gerador',          text: 'Resultado de um EVENTO PASSADO já ocorrido e que gera a obrigação.' },
      { tag: 'Liquidação',            text: 'Saída provável de recursos econômicos (caixa / bens / serviços).' },
      { tag: 'Natureza da Obrigação', text: 'Pode ser exigível legalmente ou por prática passada (obrigação construtiva).' },
      { tag: 'Exemplos Práticos',     text: 'Compra a prazo gera Fornecedores; salário incorrido gera Obrigação Trabalhista.' }
    ]
  },
  {
    pillar: 'PILAR 02',
    title: 'Passivo Circulante',
    color: 'cyan',
    rgb: '6, 182, 212',
    icon: 'fa-clock',
    definition: 'Obrigações e dívidas que a empresa precisa pagar no curto prazo (até 12 meses ou ciclo operacional).',
    summary: [
      'Prazo: Até 12 meses',
      'Fornecedores',
      'Salários a Pagar',
      'Impostos',
      'Empréstimos de Curto Prazo'
    ],
    concepts: [
      { tag: 'Prazo', text: 'Vencimento em até 12 meses após a data do balanço.' },
      { tag: 'Fornecedores', text: 'Dívidas por compras de mercadorias ou serviços a prazo.' },
      { tag: 'Salários e Impostos', text: 'Obrigações trabalhistas e tributárias geradas na operação.' },
      { tag: 'Empréstimos CP', text: 'Parcelas de financiamentos que vencem no próximo ano.' },
      { tag: 'Importância', text: 'Avalia a capacidade de pagamento imediata e a liquidez da empresa.' }
    ]
  },
  {
    pillar: 'PILAR 03',
    title: 'Passivo Não Circulante',
    color: 'indigo',
    rgb: '99, 102, 241',
    icon: 'fa-calendar-days',
    definition: 'Obrigações que devem ser pagas no longo prazo, ou seja, com vencimento superior a 12 meses.',
    summary: [
      'Prazo: > 12 meses',
      'Financiamentos de LP',
      'Debêntures',
      'Provisões Judiciais',
      'Empréstimos de Longo Prazo'
    ],
    concepts: [
      { tag: 'Prazo', text: 'Vencimento após 12 meses da data do balanço.' },
      { tag: 'Financiamentos', text: 'Dívidas para aquisição de imobilizado ou expansão.' },
      { tag: 'Debêntures', text: 'Captação de recursos com investidores no mercado.' },
      { tag: 'Provisões', text: 'Processos judiciais com perda provável estimada.' },
      { tag: 'Importância', text: 'Mostra os compromissos futuros e a estrutura de capital da empresa.' }
    ]
  },
  {
    pillar: 'PILAR 04',
    title: 'Reconhecimento',
    color: 'emerald',
    rgb: '16, 185, 129',
    icon: 'fa-stamp',
    definition: 'Processo de identificar e registrar uma obrigação no Balanço Patrimonial.',
    summary: [
      'Critério Único',
      'Quando registrar',
      'Provisões'
    ],
    concepts: [
      { tag: 'Critério Único', text: 'Deve representar uma obrigação presente de transferir um recurso econômico, decorrente de acontecimentos passados.' },
      { tag: 'Quando registrar', text: 'Exemplo: Ao contratar um empréstimo de R$ 20.000 e o dinheiro cair na conta, a obrigação de pagar nasce e deve ser registrada.' },
      { tag: 'Provisões', text: 'Perda PROVÁVEL + valor estimável = reconhece no Balanço como Provisão.' }
    ]
  },
  {
    pillar: 'PILAR 05',
    title: 'Mensuração',
    color: 'purple',
    rgb: '139, 92, 246',
    icon: 'fa-scale-balanced',
    definition: 'Determinar o valor monetário pelo qual o passivo será registrado nas demonstrações contábeis.',
    summary: [
      'Custo Histórico',
      'Valor Justo',
      'Valor Presente (AVP)'
    ],
    concepts: [
      { tag: 'Custo Histórico',      text: 'Valor original contratado no ato da transação (o mais comum).' },
      { tag: 'Valor Justo',          text: 'Valor de transferência da obrigação em uma negociação de mercado.' },
      { tag: 'Valor Presente (AVP)', text: 'Valor atual dos pagamentos futuros, considerando uma taxa de desconto (juros).' }
    ]
  }
];

const EXTRA_CONCEPTS = [
  {
    icon: 'fa-arrow-trend-down', title: 'Passivo a Descoberto', color: 'rose',
    text: 'Ocorre quando o total das obrigações supera os bens e direitos, resultando em um Patrimônio Líquido negativo (desequilíbrio financeiro).'
  },
  {
    icon: 'fa-shield-halved', title: 'Passivo Contingente', color: 'amber',
    text: 'Obrigação POSSÍVEL, surgida de eventos passados, cuja existência será confirmada por eventos futuros incertos. Não é reconhecido — apenas divulgado em Notas Explicativas.'
  },
  {
    icon: 'fa-handshake', title: 'Obrigação Construtiva', color: 'indigo',
    text: 'Não formalizada em lei, mas criada por prática passada da empresa que gera expectativa legítima em terceiros (ex.: política de devolução).'
  },
  {
    icon: 'fa-ban', title: 'O que NÃO é Passivo', color: 'slate',
    text: 'Metas futuras de gastos não constituem passivo (falta evento passado). Já receitas antecipadas por serviços a prestar SÃO passivo.'
  }
];

const CLASSIFICATION_HEADER = {
  title: 'Classificação por Exigibilidade',
  subtitle: 'Arraste o controle deslizante para ver as contas migrarem entre Passivo Circulante e Não Circulante conforme o prazo de vencimento.'
};