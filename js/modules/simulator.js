// simulator.js

let balanceState = {
  caixa: 100000, estoque: 100000,
  fornecedores: 30000, trabalhistas: 20000,
  finanLp: 50000, capital: 100000
};

function renderSimActions() {
  setHTML('sim-actions', `
    <button onclick="addTransaction('estoque')" class="sim-action-card">
      <div class="text-xs font-bold text-blue-400 mb-1 flex justify-between items-center">
        <span>+ COMPRA A PRAZO</span><i class="fa-solid fa-cart-plus"></i>
      </div>
      <div class="text-base font-black text-white">+ R$ 50.000 em Estoque</div>
      <div class="text-[11px] text-slate-300 mt-1">Débito Ativo / Crédito Passivo (Fornecedores).</div>
    </button>
    <button onclick="addTransaction('emprestimo')" class="sim-action-card">
      <div class="text-xs font-bold text-indigo-400 mb-1 flex justify-between items-center">
        <span>+ FINANCIAMENTO</span><i class="fa-solid fa-building-columns"></i>
      </div>
      <div class="text-base font-black text-white">+ R$ 100.000 no Caixa</div>
      <div class="text-[11px] text-slate-300 mt-1">Débito Caixa / Crédito PC e PNC.</div>
    </button>
    <button onclick="addTransaction('salarios')" class="sim-action-card">
      <div class="text-xs font-bold text-emerald-400 mb-1 flex justify-between items-center">
        <span>+ DESPESA SALÁRIOS</span><i class="fa-solid fa-file-invoice-dollar"></i>
      </div>
      <div class="text-base font-black text-white">+ R$ 20.000 Obrigação</div>
      <div class="text-[11px] text-slate-300 mt-1">Despesa (reduz PL) / Credita Trabalhista.</div>
    </button>
  `);
}

function renderBalanceSheet() {
  setHTML('balance-sheet', `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-5 rounded-xl border-2 border-slate-700">
      <div class="space-y-4">
        <div class="flex items-center justify-between border-b-2 border-emerald-500 pb-2">
          <h4 class="font-black text-emerald-400 text-sm uppercase">ATIVO</h4>
          <span id="total-ativo" class="font-mono font-black text-emerald-300">R$ 200.000</span>
        </div>
        <div class="space-y-2 font-mono text-xs">
          <div class="flex justify-between p-3 bg-slate-900 rounded-lg border border-slate-700">
            <span class="text-slate-200">Caixa & Bancos</span><span id="val-caixa" class="text-white font-bold">R$ 100.000</span>
          </div>
          <div class="flex justify-between p-3 bg-slate-900 rounded-lg border border-slate-700">
            <span class="text-slate-200">Estoques</span><span id="val-estoque" class="text-white font-bold">R$ 100.000</span>
          </div>
        </div>
      </div>
      <div class="space-y-4">
        <div class="flex items-center justify-between border-b-2 border-blue-500 pb-2">
          <h4 class="font-black text-blue-400 text-sm uppercase">PASSIVO + PL</h4>
          <span id="total-passivo-pl" class="font-mono font-black text-blue-300">R$ 200.000</span>
        </div>
        <div class="space-y-2 font-mono text-xs">
          <div class="p-3 bg-slate-900 rounded-lg border border-blue-500/40 space-y-1">
            <div class="flex justify-between font-bold text-blue-400 border-b border-slate-800 pb-1">
              <span>Passivo Circulante</span><span id="val-pc-total">R$ 50.000</span>
            </div>
            <div class="flex justify-between text-slate-300 pl-2">
              <span>• Fornecedores</span><span id="val-fornecedores" class="text-white">R$ 30.000</span>
            </div>
            <div class="flex justify-between text-slate-300 pl-2">
              <span>• Trabalhistas</span><span id="val-trabalhistas" class="text-white">R$ 20.000</span>
            </div>
          </div>
          <div class="p-3 bg-slate-900 rounded-lg border border-indigo-500/40 space-y-1">
            <div class="flex justify-between font-bold text-indigo-400 border-b border-slate-800 pb-1">
              <span>Passivo Não Circulante</span><span id="val-pnc-total">R$ 50.000</span>
            </div>
            <div class="flex justify-between text-slate-300 pl-2">
              <span>• Financiamentos LP</span><span id="val-finan-lp" class="text-white">R$ 50.000</span>
            </div>
          </div>
          <div class="p-3 bg-slate-900 rounded-lg border border-amber-500/40 space-y-1">
            <div class="flex justify-between font-bold text-amber-400 border-b border-slate-800 pb-1">
              <span>Patrimônio Líquido</span><span id="val-pl-total">R$ 100.000</span>
            </div>
            <div class="flex justify-between text-slate-300 pl-2">
              <span>• Capital</span><span id="val-capital" class="text-white">R$ 100.000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `);

  setHTML('balance-status', `
    <div id="balance-status" class="p-4 rounded-xl bg-emerald-950 border-2 border-emerald-500 text-emerald-300 text-xs font-bold flex flex-col sm:flex-row items-center justify-between gap-2">
      <span class="flex items-center gap-2">
        <i class="fa-solid fa-scale-balanced text-lg"></i>
        ATIVO (R$ <span id="eq-ativo">200.000</span>) = PASSIVO + PL (R$ <span id="eq-passivo">200.000</span>)
      </span>
      <span class="px-3 py-1 rounded bg-emerald-500/20 uppercase font-mono font-black border border-emerald-400">Balanço OK</span>
    </div>
  `);
}

function updateBalanceUI() {
  const totalAtivo = balanceState.caixa + balanceState.estoque;
  const pcTotal = balanceState.fornecedores + balanceState.trabalhistas;
  const pncTotal = balanceState.finanLp;
  const totalPP = pcTotal + pncTotal + balanceState.capital;
  const fmt = num => 'R$ ' + num.toLocaleString('pt-BR');

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.innerText = val; };
  set('val-caixa', fmt(balanceState.caixa));
  set('val-estoque', fmt(balanceState.estoque));
  set('total-ativo', fmt(totalAtivo));
  set('val-fornecedores', fmt(balanceState.fornecedores));
  set('val-trabalhistas', fmt(balanceState.trabalhistas));
  set('val-pc-total', fmt(pcTotal));
  set('val-finan-lp', fmt(balanceState.finanLp));
  set('val-pnc-total', fmt(pncTotal));
  set('val-capital', fmt(balanceState.capital));
  set('val-pl-total', fmt(balanceState.capital));
  set('total-passivo-pl', fmt(totalPP));
  set('eq-ativo', totalAtivo.toLocaleString('pt-BR'));
  set('eq-passivo', totalPP.toLocaleString('pt-BR'));
}

function addTransaction(type) {
  if (type === 'estoque') {
    balanceState.estoque += 50000;
    balanceState.fornecedores += 50000;
  } else if (type === 'emprestimo') {
    balanceState.caixa += 100000;
    balanceState.fornecedores += 20000;
    balanceState.finanLp += 80000;
  } else if (type === 'salarios') {
    balanceState.trabalhistas += 20000;
    balanceState.capital -= 20000;
  }
  updateBalanceUI();
}

function resetBalanceSheet() {
  balanceState = { caixa: 100000, estoque: 100000, fornecedores: 30000, trabalhistas: 20000, finanLp: 50000, capital: 100000 };
  updateBalanceUI();
}

function renderCases() {
  const el = document.getElementById('cases-container');
  if (!el) return;
  el.innerHTML = CASES_DATA.map(c => `
    <div class="high-contrast-card p-5 border-l-4 border-l-${c.color}-500">
      <div class="flex items-center gap-2 text-xs font-bold text-${c.color}-400 uppercase tracking-wider mb-2">
        <i class="fa-solid ${c.icon}"></i> ${c.title}
      </div>
      <h4 class="text-lg font-extrabold text-white mb-2">${c.subtitle}</h4>
      <p class="text-xs text-slate-200 leading-relaxed mb-3">${c.description}</p>
      <div class="bg-slate-900 p-3 rounded-lg border border-${c.color}-500/50 text-xs text-slate-200">
        <strong class="text-${c.color}-400">Tratamento:</strong> ${c.treatment}
      </div>
    </div>
  `).join('');
}