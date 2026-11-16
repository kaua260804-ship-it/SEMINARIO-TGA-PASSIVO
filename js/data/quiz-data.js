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
    question: 'O que é o "Reconhecimento" do Passivo na contabilidade?',
    options: [
      { letter: 'A', text: 'É a identificação e o registro de uma obrigação presente no Balanço.', correct: true },
      { letter: 'B', text: 'É a contratação de um novo empréstimo bancário.', correct: false },
      { letter: 'C', text: 'É a venda de mercadorias para gerar caixa.', correct: false }
    ]
  },
  {
    id: 8,
    question: 'Uma empresa contraiu um empréstimo de R$ 20.000. Se ela registrar a dívida pelo valor original, qual base de mensuração foi utilizada?',
    options: [
      { letter: 'A', text: 'Valor Justo.', correct: false },
      { letter: 'B', text: 'Custo Histórico.', correct: true },
      { letter: 'C', text: 'Valor Presente.', correct: false }
    ]
  },
  {
    id: 9,
    question: 'A base de Mensuração que calcula o valor atual dos pagamentos futuros, considerando uma taxa de desconto, é chamada de:',
    options: [
      { letter: 'A', text: 'Custo Corrente.', correct: false },
      { letter: 'B', text: 'Custo Histórico.', correct: false },
      { letter: 'C', text: 'Valor Presente.', correct: true }
    ]
  },
  {
    id: 10,
    question: 'Quando o total das obrigações (passivo) de uma empresa é MAIOR do que o total de seus bens (ativo), isso é chamado de:',
    options: [
      { letter: 'A', text: 'Lucro Líquido.', correct: false },
      { letter: 'B', text: 'Passivo a Descoberto.', correct: true },
      { letter: 'C', text: 'Capital Social.', correct: false }
    ]
  }
];