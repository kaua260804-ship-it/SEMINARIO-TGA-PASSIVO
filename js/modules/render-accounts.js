// render-accounts.js — Classificação PC/PNC + animação de revelação

let topicStepState = { pc: 0, pnc: 0 };

function renderClassification() {
  const el = document.getElementById('classification-container');
  if (!el) return;

  el.innerHTML = `
    <div class="high-contrast-card p-6 fade-in">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b border-slate-700 pb-4">
        <div>
          <h3 class="text-xl font-black text-white flex items-center gap-2">
            <i class="fa-solid fa-sitemap text-blue-400"></i>
            ${CLASSIFICATION_HEADER.title}
          </h3>
          <p class="text-xs text-slate-300 font-semibold mt-0.5">${CLASSIFICATION_HEADER.subtitle}</p>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="revealAllAccounts()" class="action-btn-reset">
            <i class="fa-solid fa-eye text-emerald-400"></i> Revelar Tudo
          </button>
          <button onclick="hideAllAccounts()" class="action-btn-reset">
            <i class="fa-solid fa-eye-slash text-slate-400"></i> Ocultar
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="bg-slate-950 p-5 rounded-xl border-2 border-blue-500/60 space-y-3">
          <div class="flex items-center justify-between border-b border-slate-800 pb-3">
            <div class="flex items-center gap-2">
              <span class="w-3.5 h-3.5 rounded-full bg-blue-500 animate-pulse"></span>
              <h4 class="font-black text-blue-400 text-lg">Passivo Circulante (CP)</h4>
            </div>
            <span class="text-xs font-mono font-bold bg-blue-950 text-blue-300 px-3 py-1 rounded border border-blue-500">≤ 12 meses</span>
          </div>
          <div id="pc-topics-container" class="space-y-2"></div>
        </div>

        <div class="bg-slate-950 p-5 rounded-xl border-2 border-indigo-500/60 space-y-3">
          <div class="flex items-center justify-between border-b border-slate-800 pb-3">
            <div class="flex items-center gap-2">
              <span class="w-3.5 h-3.5 rounded-full bg-indigo-500"></span>
              <h4 class="font-black text-indigo-400 text-lg">Passivo Não Circulante (LP)</h4>
            </div>
            <span class="text-xs font-mono font-bold bg-indigo-950 text-indigo-300 px-3 py-1 rounded border border-indigo-500">> 12 meses</span>
          </div>
          <div id="pnc-topics-container" class="space-y-2"></div>
        </div>
      </div>
    </div>
  `;

  renderAccountItems('pc-topics-container', PC_ITEMS_DATA, 'blue', 'pc');
  renderAccountItems('pnc-topics-container', PNC_ITEMS_DATA, 'indigo', 'pnc');
}

function renderAccountItems(containerId, items, color, key) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items.map((item, idx) => `
    <div id="${containerId}-item-${idx}" class="topic-reveal-item p-3 bg-slate-900 rounded-lg border border-slate-700 flex justify-between items-center hidden">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg bg-${color}-500/20 border border-${color}-400 text-${color}-400 flex items-center justify-center text-xs shrink-0">
          <i class="fa-solid ${item.icon || 'fa-circle'}"></i>
        </div>
        <div>
          <div class="font-bold text-white text-sm">${item.title}</div>
          <div class="text-slate-300 text-[11px]">${item.sub}</div>
        </div>
      </div>
      <span class="font-mono text-${color}-400 font-bold text-[10px] shrink-0 ml-2 bg-slate-950 px-2 py-1 rounded border border-slate-800">${item.tag}</span>
    </div>
  `).join('') + `
    <button onclick="revealNextAccount('${containerId}', ${items.length}, '${key}')"
            class="w-full py-2 bg-slate-900 hover:bg-slate-800 text-${color}-400 font-bold text-xs rounded-lg border border-${color}-500/40 transition-colors flex items-center justify-center gap-2 mt-2">
      <i class="fa-solid fa-plus"></i> Revelar Próximo
    </button>
  `;
}

function revealNextAccount(containerId, maxItems, key) {
  const current = topicStepState[key];
  if (current >= maxItems) return;
  const el = document.getElementById(`${containerId}-item-${current}`);
  if (el) el.classList.remove('hidden');
  topicStepState[key]++;
}

function revealAllAccounts() {
  ['pc-topics-container', 'pnc-topics-container'].forEach(id => {
    document.querySelectorAll(`#${id} .topic-reveal-item`).forEach(el => el.classList.remove('hidden'));
  });
  topicStepState.pc = PC_ITEMS_DATA.length;
  topicStepState.pnc = PNC_ITEMS_DATA.length;
}

function hideAllAccounts() {
  ['pc-topics-container', 'pnc-topics-container'].forEach(id => {
    document.querySelectorAll(`#${id} .topic-reveal-item`).forEach(el => el.classList.add('hidden'));
  });
  topicStepState.pc = 0;
  topicStepState.pnc = 0;
}