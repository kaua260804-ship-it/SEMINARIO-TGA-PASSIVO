// quiz.js - Controle do jogo e pontuação do seminário

let currentScore = 0;

function answerQuiz(qNum, option, isCorrect) {
  const opts = document.querySelectorAll(`.q${qNum}-opt`);
  opts.forEach(btn => btn.disabled = true);

  const feedback = document.getElementById(`feedback-q${qNum}`);
  feedback.classList.remove('hidden');

  if (isCorrect) {
    currentScore += 100;
    document.getElementById('user-score').innerText = currentScore;
    feedback.className = "p-4 rounded-xl text-xs font-bold mt-4 bg-emerald-950 text-emerald-300 border border-emerald-500 flex items-center gap-2";
    feedback.innerHTML = `<i class="fa-solid fa-circle-check text-base"></i> Resposta Correta (+100 pts)! Excelente!`;
  } else {
    feedback.className = "p-4 rounded-xl text-xs font-bold mt-4 bg-rose-950 text-rose-300 border border-rose-500 flex items-center gap-2";
    feedback.innerHTML = `<i class="fa-solid fa-circle-xmark text-base"></i> Opção Incorreta. Revise o conceito com o grupo.`;
  }

  // Avançar para a próxima pergunta após breve intervalo
  setTimeout(() => {
    if (qNum === 1) {
      document.getElementById('quiz-q1').classList.add('hidden');
      document.getElementById('quiz-q2').classList.remove('hidden');
    } else if (qNum === 2) {
      document.getElementById('quiz-q2').classList.add('hidden');
      document.getElementById('quiz-q3').classList.remove('hidden');
    } else if (qNum === 3) {
      document.getElementById('quiz-q3').classList.add('hidden');
      document.getElementById('quiz-final').classList.remove('hidden');
      document.getElementById('final-score-display').innerText = currentScore;
    }
  }, 1600);
}

function restartQuiz() {
  currentScore = 0;
  document.getElementById('user-score').innerText = '0';
  document.getElementById('quiz-final').classList.add('hidden');
  document.getElementById('quiz-q1').classList.remove('hidden');

  [1, 2, 3].forEach(q => {
    const opts = document.querySelectorAll(`.q${q}-opt`);
    opts.forEach(btn => btn.disabled = false);
    const fb = document.getElementById(`feedback-q${q}`);
    fb.classList.add('hidden');
  });
}