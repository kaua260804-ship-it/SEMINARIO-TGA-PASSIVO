// accounts-data.js — Itens PC / PNC (com prazo em meses para o slider)

const ACCOUNTS_DATA = [
  // Passivo Circulante (≤ 12 meses)
  { id: 'fornecedores',      title: 'Fornecedores',                    sub: 'Duplicatas a pagar por compra de estoque',              months: 3,   icon: 'fa-truck',                category: 'Operacional' },
  { id: 'trabalhistas',      title: 'Obrigações Trabalhistas',         sub: 'Salários, FGTS, férias e 13º',                          months: 1,   icon: 'fa-users',                category: 'Imediato'    },
  { id: 'tributarias',       title: 'Obrigações Tributárias',          sub: 'ICMS, PIS, COFINS, ISS retidos',                        months: 1,   icon: 'fa-landmark',             category: 'Fiscal'      },
  { id: 'emprestimo-cp',     title: 'Empréstimos de Curto Prazo',      sub: 'Parcelas vincendas em até 12 meses',                    months: 8,   icon: 'fa-building-columns',     category: 'Financeiro'  },
  { id: 'adiantamentos',     title: 'Adiantamentos de Clientes',       sub: 'Recebimentos por bens/serviços a entregar',             months: 6,   icon: 'fa-hand-holding-dollar',  category: 'Contrato'    },
  { id: 'dividendos',        title: 'Dividendos a Pagar',              sub: 'Lucros distribuídos e não pagos aos sócios',            months: 10,  icon: 'fa-money-bill-wave',      category: 'PL'          },

  // Passivo Não Circulante (> 12 meses)
  { id: 'financiamento-lp',  title: 'Financiamentos de Longo Prazo',   sub: 'Imobilizado com vencimento após 12 meses',              months: 36,  icon: 'fa-industry',             category: 'Estrutural'  },
  { id: 'debentures',        title: 'Debêntures a Pagar',              sub: 'Captação com investidores no mercado',                  months: 60,  icon: 'fa-chart-line',           category: 'Captação'    },
  { id: 'provisoes',         title: 'Provisões para Contingências',    sub: 'Processos judiciais com perda provável',                months: 24,  icon: 'fa-gavel',                category: 'Estimado'    },
  { id: 'emprestimo-lp',     title: 'Empréstimos de Longo Prazo',      sub: 'Parcelas com vencimento após 12 meses',                 months: 48,  icon: 'fa-building-columns',     category: 'Financeiro'  },
  { id: 'leasing',           title: 'Arrendamento Mercantil (LP)',     sub: 'Leasing financeiro com prazo superior a 12 meses',      months: 30,  icon: 'fa-key',                  category: 'Contrato'    },
  { id: 'impostos-diferidos',title: 'Impostos Diferidos',              sub: 'Tributos com exigibilidade futura > 1 ano',             months: 42,  icon: 'fa-percent',              category: 'Fiscal'      }
];