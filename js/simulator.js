// simulator.js - Controle dos lançamentos contábeis e atualização da Equação Patrimonial

let balanceState = {
  caixa: 100000,
  estoque: 100000,
  fornecedores: 30000,
  trabalhistas: 20000,
  finanLp: 50000,
  capital: 100000
};

function updateBalanceUI() {
  const totalAtivo = balanceState.caixa + balanceState.estoque;
  const pcTotal = balanceState.fornecedores + balanceState.trabalhistas;
  const pncTotal = balanceState.finanLp;
  const totalPassivoPL = pcTotal + pncTotal + balanceState.capital;

  const fmt = num => 'R$ ' + num.toLocaleString('pt-BR');

  document.getElementById('val-caixa').innerText = fmt(balanceState.caixa);
  document.getElementById('val-estoque').innerText = fmt(balanceState.estoque);
  document.getElementById('total-ativo').innerText = fmt(totalAtivo);

  document.getElementById('val-fornecedores').innerText = fmt(balanceState.fornecedores);
  document.getElementById('val-trabalhistas').innerText = fmt(balanceState.trabalhistas);
  document.getElementById('val-pc-total').innerText = fmt(pcTotal);

  document.getElementById('val-finan-lp').innerText = fmt(balanceState.finanLp);
  document.getElementById('val-pnc-total').innerText = fmt(pncTotal);

  document.getElementById('val-capital').innerText = fmt(balanceState.capital);
  document.getElementById('val-pl-total').innerText = fmt(balanceState.capital);

  document.getElementById('total-passivo-pl').innerText = fmt(totalPassivoPL);

  document.getElementById('eq-ativo').innerText = totalAtivo.toLocaleString('pt-BR');
  document.getElementById('eq-passivo').innerText = totalPassivoPL.toLocaleString('pt-BR');
}

function addTransaction(type) {
  if (type === 'estoque') {
    balanceState.estoque += 50000;
    balanceState.fornecedores += 50000;
  } else if (type === 'emprestimo') {
    balanceState.caixa += 100000;
    balanceState.fornecedores += 20000; // Curto Prazo (1º Ano)
    balanceState.finanLp += 80000;       // Longo Prazo
  } else if (type === 'salarios') {
    balanceState.trabalhistas += 20000;
    balanceState.capital -= 20000;      // Despesa reduzindo o PL
  }
  updateBalanceUI();
}

function resetBalanceSheet() {
  balanceState = {
    caixa: 100000,
    estoque: 100000,
    fornecedores: 30000,
    trabalhistas: 20000,
    finanLp: 50000,
    capital: 100000
  };
  updateBalanceUI();
}

// Inicialização automática ao carregar
window.addEventListener('DOMContentLoaded', () => {
  updateBalanceUI();
});