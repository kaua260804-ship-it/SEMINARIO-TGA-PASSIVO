// navigation.js

function switchMainTab(tabName) {
  ['teoria', 'pratica', 'quiz'].forEach(t => {
    document.getElementById(`sec-${t}`).classList.add('hidden');
    const btn = document.getElementById(`tab-btn-${t}`);
    btn.classList.remove('active-tab');
    btn.classList.add('inactive-tab');
  });
  document.getElementById(`sec-${tabName}`).classList.remove('hidden');
  const active = document.getElementById(`tab-btn-${tabName}`);
  active.classList.remove('inactive-tab');
  active.classList.add('active-tab');
}

function setPresenterStep(step) {
  if (step === 1) switchMainTab('teoria');
  if (step === 2) switchMainTab('pratica');
  if (step === 3) switchMainTab('quiz');
  [1, 2, 3].forEach(s => {
    const btn = document.getElementById(`step-btn-${s}`);
    btn.classList.toggle('active-step', s === step);
  });
}