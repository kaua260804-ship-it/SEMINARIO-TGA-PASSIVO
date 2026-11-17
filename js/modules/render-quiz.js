// render-quiz.js

let currentScore = 0;

function renderQuiz() {
  const container = document.getElementById('quiz-container');
  if (!container) return;

  // Renderiza todas as perguntas dinamicamente com base no quiz-data.js
  container.innerHTML = QUIZ_QUESTIONS.map(q => `
    <div id="quiz-q${q.id}" class="space-y-4 ${q.id > 1 ? 'hidden' : ''}">
      <div class="flex items-center justify-between border-b border-slate-700 pb-3">
        <span class="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">Pergunta ${q.id} de ${QUIZ_QUESTIONS.length}</span>
        <span class="text-xs font-bold text-slate-400">100 Pts</span>
      </div>
      <h3 class="text-lg font-black text-white">${q.question}</h3>
      <div class="grid grid-cols-1 gap-3 pt-2">
        ${q.options.map(o => `
          <button onclick="answerQuiz(${q.id}, '${o.letter}', ${o.correct})" class="q${q.id}-opt quiz-opt-btn">
            <span class="quiz-opt-letter">${o.letter}</span>
            <span class="text-sm font-semibold text-slate-100">${o.text}</span>
          </button>
        `).join('')}
      </div>
      <div id="feedback-q${q.id}" class="hidden p-4 rounded-xl text-xs font-bold"></div>
    </div>
  `).join('') + `
    <div id="quiz-final" class="hidden text-center py-8 space-y-4">
      <div class="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center text-4xl mx-auto">
        <i class="fa-solid fa-trophy"></i>
      </div>
      <h3 class="text-2xl font-black text-white">Excelente Apresentação!</h3>
      <!-- AQUI ESTAVA O ERRO: Agora mostra a pontuação total de 1000 -->
      <p class="text-sm text-slate-200">Pontuação Total: <span id="final-score-display" class="font-bold text-emerald-400 font-mono text-xl">0</span> / 1000</p>
      <button onclick="restartQuiz()" class="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl transition-all">
        Reiniciar Quiz
      </button>
    </div>
  `;
}

function answerQuiz(qNum, option, isCorrect) {
  // Desabilita todos os botões da pergunta atual para evitar duplo clique
  document.querySelectorAll(`.q${qNum}-opt`).forEach(b => b.disabled = true);
  
  const fb = document.getElementById(`feedback-q${qNum}`);
  fb.classList.remove('hidden');

  if (isCorrect) {
    currentScore += 100; // Soma 100 pontos por pergunta
    document.getElementById('user-score').innerText = currentScore;
    fb.className = 'p-4 rounded-xl text-xs font-bold mt-4 bg-emerald-950 text-emerald-300 border border-emerald-500 flex items-center gap-2';
    fb.innerHTML = '<i class="fa-solid fa-circle-check"></i> Resposta Correta (+100 pts)!';
  } else {
    fb.className = 'p-4 rounded-xl text-xs font-bold mt-4 bg-rose-950 text-rose-300 border border-rose-500 flex items-center gap-2';
    fb.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> Incorreta. Revise o conceito.';
  }

  // Aguarda 1.6s e avança para a próxima pergunta (ou tela final)
  setTimeout(() => {
    const nextQ = qNum + 1;
    if (nextQ <= QUIZ_QUESTIONS.length) {
      document.getElementById(`quiz-q${qNum}`).classList.add('hidden');
      document.getElementById(`quiz-q${nextQ}`).classList.remove('hidden');
    } else {
      // Quando chega na pergunta 10, esconde ela e mostra a tela final
      document.getElementById(`quiz-q${qNum}`).classList.add('hidden');
      document.getElementById('quiz-final').classList.remove('hidden');
      document.getElementById('final-score-display').innerText = currentScore;
    }
  }, 1600);
}

function restartQuiz() {
  currentScore = 0;
  document.getElementById('user-score').innerText = '0';
  document.getElementById('quiz-final').classList.add('hidden');
  
  // Esconde todas as perguntas e mostra a primeira
  QUIZ_QUESTIONS.forEach(q => {
    document.getElementById(`quiz-q${q.id}`).classList.add('hidden');
  });
  document.getElementById('quiz-q1').classList.remove('hidden');

  // Reseta o estado de todos os botões e feedbacks
  QUIZ_QUESTIONS.forEach(q => {
    document.querySelectorAll(`.q${q.id}-opt`).forEach(b => b.disabled = false);
    document.getElementById(`feedback-q${q.id}`).classList.add('hidden');
  });
}