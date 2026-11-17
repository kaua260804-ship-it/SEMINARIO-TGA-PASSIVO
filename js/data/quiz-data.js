// quiz-data.js — 10 Perguntas do Quiz

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'De acordo com a definição contábil, o que representa o Passivo de uma empresa?',
    options: [
      { letter: 'A', text: 'Os bens e direitos que a empresa possui para gerar lucro.', correct: false },
      { letter: 'B', text: 'O conjunto de obrigações que a empresa possui com terceiros.', correct: true },
      { letter: 'C', text: 'Apenas os empréstimos bancários de longo prazo.', correct: false }
    ]
  },
  {
    id: 2,
    question: 'Qual das alternativas abaixo NÃO é um exemplo de conta do Passivo?',
    options: [
      { letter: 'A', text: 'Fornecedores a pagar.', correct: false },
      { letter: 'B', text: 'Financiamentos bancários.', correct: false },
      { letter: 'C', text: 'Estoque de mercadorias.', correct: true }
    ]
  },
  {
    id: 3,
    question: 'Como o Passivo é dividido e organizado dentro do Balanço Patrimonial?',
    options: [
      { letter: 'A', text: 'Ativo Circulante, Passivo Exigível e Lucros.', correct: false },
      { letter: 'B', text: 'Passivo Circulante, Passivo Não Circulante e Patrimônio Líquido.', correct: true },
      { letter: 'C', text: 'Despesas, Custos e Receitas.', correct: false }
    ]
  },
  {
    id: 4,
    question: 'O que significa a "Exigibilidade" de um Passivo?',
    options: [
      { letter: 'A', text: 'É a exigência de que a empresa pague suas dívidas em moeda estrangeira.', correct: false },
      { letter: 'B', text: 'É o dever de cumprir determinado compromisso financeiro com terceiros.', correct: true },
      { letter: 'C', text: 'É a obrigação de pagar impostos apenas no longo prazo.', correct: false }
    ]
  },
  {
    id: 5,
    question: 'Uma dívida com fornecedores que deve ser paga em até 12 meses pertence a qual grupo?',
    options: [
      { letter: 'A', text: 'Passivo Não Circulante.', correct: false },
      { letter: 'B', text: 'Patrimônio Líquido.', correct: false },
      { letter: 'C', text: 'Passivo Circulante.', correct: true }
    ]
  },
  {
    id: 6,
    question: 'Qual a principal característica do Passivo Não Circulante?',
    options: [
      { letter: 'A', text: 'São obrigações com prazo de vencimento superior a 12 meses.', correct: true },
      { letter: 'B', text: 'São dívidas que já foram pagas pela empresa.', correct: false },
      { letter: 'C', text: 'São obrigações apenas com funcionários e impostos.', correct: false }
    ]
  },
  {
    id: 7,
    question: 'Quando o total das obrigações (passivo) de uma empresa é MAIOR do que o total de seus bens (ativo), isso é chamado de:',
    options: [
      { letter: 'A', text: 'Lucro Líquido.', correct: false },
      { letter: 'B', text: 'Passivo a Descoberto.', correct: true },
      { letter: 'C', text: 'Capital Social.', correct: false }
    ]
  },
  {
    id: 8,
    question: 'As obrigações trabalhistas (como salários e FGTS) e os impostos a recolher são geralmente classificados como:',
    options: [
      { letter: 'A', text: 'Passivo Não Circulante.', correct: false },
      { letter: 'B', text: 'Patrimônio Líquido.', correct: false },
      { letter: 'C', text: 'Passivo Circulante.', correct: true }
    ]
  },
  {
    id: 9,
    question: 'O que acontece com o Patrimônio Líquido (PL) de uma empresa quando ela apresenta um Passivo a Descoberto?',
    options: [
      { letter: 'A', text: 'O PL fica positivo e maior que o Ativo.', correct: false },
      { letter: 'B', text: 'O PL fica negativo, indicando um desequilíbrio financeiro.', correct: true },
      { letter: 'C', text: 'O PL não sofre alteração.', correct: false }
    ]
  },
  {
    id: 10,
    question: 'Uma compra de mercadoria para pagamento em 24 meses deve ser registrada em qual conta?',
    options: [
      { letter: 'A', text: 'Passivo Circulante, pois é uma dívida operacional.', correct: false },
      { letter: 'B', text: 'Passivo Não Circulante, pois o prazo ultrapassa 12 meses.', correct: true },
      { letter: 'C', text: 'Ativo Circulante, pois a mercadoria vai gerar lucro.', correct: false }
    ]
  }
];