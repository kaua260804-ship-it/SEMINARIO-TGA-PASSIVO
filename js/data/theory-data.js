// theory-data.js — Conteúdo do slide teórico atualizado com as falas

const THEME_DATA = {
  pillar: 'PILAR TEÓRICO — EQUIPE 02',
  title: 'O PASSIVO: DEFINIÇÕES, RECONHECIMENTO E MENSURAÇÃO',
  subtitle: 'Base Fundamental da Teoria Geral da Contabilidade — CPC 00 (R2) & Martins (2007)',
  chips: [
    { icon: 'fa-file-contract',  label: 'Definição',      color: '#60a5fa' },
    { icon: 'fa-stamp',          label: 'Reconhecimento', color: '#34d399' },
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
    title: 'Reconhecimento',
    color: 'emerald',
    rgb: '16, 185, 129',
    icon: 'fa-stamp',
    definition: 'O passivo é reconhecido quando atende aos critérios de probabilidade de saída de recursos e mensuração confiável.',
    summary: [
      'Critério da Probabilidade',
      'Critério da Mensuração',
      'Ressalva',
      'Provisões',
      'Quando NÃO Reconhecer'
    ],
    concepts: [
      { tag: 'Critério da Probabilidade', text: 'É PROVÁVEL (mais provável que sim do que não) a saída de recursos.' },
      { tag: 'Critério da Mensuração',    text: 'O valor do passivo pode ser MENSURADO com confiabilidade.' },
      { tag: 'Ressalva',                  text: 'Se faltar um dos critérios = Passivo Contingente (só divulgado em Notas).' },
      { tag: 'Provisões',                 text: 'Perda PROVÁVEL + estimável = reconhece no Balanço como Provisão.' },
      { tag: 'Quando NÃO Reconhecer',     text: 'Se a probabilidade for possível ou remota, apenas divulgar em Notas Explicativas.' }
    ]
  },
  {
    pillar: 'PILAR 03',
    title: 'Mensuração',
    color: 'purple',
    rgb: '139, 92, 246',
    icon: 'fa-scale-balanced',
    definition: 'Determinar o valor monetário pelo qual o passivo será registrado nas demonstrações contábeis.',
    summary: [
      'Custo Histórico',
      'Valor Justo',
      'Valor Presente (AVP)',
      'Custo Corrente',
      'Atualização'
    ],
    concepts: [
      { tag: 'Custo Histórico',      text: 'Valor contratado originalmente no ato da transação (base mais comum).' },
      { tag: 'Valor Justo',          text: 'Valor de transferência da obrigação em uma negociação entre participantes do mercado.' },
      { tag: 'Valor Presente (AVP)', text: 'Desconto financeiro em obrigações de longo prazo — Ajuste a Valor Presente.' },
      { tag: 'Custo Corrente',       text: 'Valor que seria necessário pagar atualmente para assumir uma obrigação equivalente.' },
      { tag: 'Atualização',          text: 'Encargos financeiros apropriados ao resultado pelo regime de competência.' }
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