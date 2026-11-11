// quiz-data.js

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'Qual dos requisitos abaixo é estritamente OBRIGATÓRIO para que um compromisso seja reconhecido como PASSIVO?',
    options: [
      { letter: 'A', text: 'Ser proveniente de uma meta orçamentária futura da diretoria.',   correct: false },
      { letter: 'B', text: 'Ser uma obrigação presente decorrente de um evento passado.',     correct: true  },
      { letter: 'C', text: 'Possuir obrigatoriamente um contrato bancário com garantia real.', correct: false }
    ]
  },
  {
    id: 2,
    question: 'Um financiamento assumido para pagamento em 36 parcelas mensais deve ser classificado de qual forma?',
    options: [
      { letter: 'A', text: '100% no Passivo Circulante pela data da assinatura.',       correct: false },
      { letter: 'B', text: '100% no Passivo Não Circulante por exceder 1 ano.',          correct: false },
      { letter: 'C', text: '12 parcelas no Circulante e 24 parcelas no Não Circulante.', correct: true  }
    ]
  },
  {
    id: 3,
    question: 'Qual a principal diferença entre uma PROVISÃO e um PASSIVO CONTINGENTE?',
    options: [
      { letter: 'A', text: 'Provisão é reconhecida no Balanço (provável); o Contingente vai só em Nota (possível).', correct: true  },
      { letter: 'B', text: 'Provisão é apenas para tributos e Contingente é para bancos.',                          correct: false },
      { letter: 'C', text: 'Nenhuma — ambos são sinônimos perfeitos na contabilidade.',                              correct: false }
    ]
  }
];