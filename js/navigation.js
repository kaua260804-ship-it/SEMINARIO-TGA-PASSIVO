// navigation.js - Gerenciamento de abas e botões do apresentador

function switchMainTab(tabName) {
  // Esconder todas as seções
  document.getElementById('sec-teoria').classList.add('hidden');
  document.getElementById('sec-pratica').classList.add('hidden');
  document.getElementById('sec-quiz').classList.add('hidden');

  // Resetar estilos das abas
  ['teoria', 'pratica', 'quiz'].forEach(t => {
    const btn = document.getElementById(`tab-btn-${t}`);
    btn.classList.remove('active-tab');
    btn.classList.add('inactive-tab');
  });

  // Mostrar a seção desejada e aplicar estilo ativo
  document.getElementById(`sec-${tabName}`).classList.remove('hidden');
  const activeBtn = document.getElementById(`tab-btn-${tabName}`);
  activeBtn.classList.remove('inactive-tab');
  activeBtn.classList.add('active-tab');
}

function setPresenterStep(step) {
  if (step === 1) switchMainTab('teoria');
  if (step === 2) switchMainTab('pratica');
  if (step === 3) switchMainTab('quiz');

  // Atualizar visual dos botões no topo
  [1, 2, 3].forEach(s => {
    const btn = document.getElementById(`step-btn-${s}`);
    if (s === step) {
      btn.classList.add('active-step');
    } else {
      btn.classList.remove('active-step');
    }
  });
}