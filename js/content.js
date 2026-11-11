// content.js - Repositório de Conteúdo Curto & Animações Dinâmicas dos Slides

// 1. DADOS DOS SLIDES DE TEORIA (TÓPICOS RÁPIDOS SEM TEXTO DENSE)
const slideConceptsData = [
  {
    pillar: "PILAR 01",
    title: "1. Definição do Passivo",
    color: "blue",
    icon: "fa-file-contract",
    topics: [
      { tag: "Conceito Central", text: "Obrigação PRESENTE da entidade (legal ou não formalizada)." },
      { tag: "Fato Gerador", text: "Resultado de um EVENTO PASSADO já ocorrido." },
      { tag: "Liquidação", text: "Saída provável de recursos econômicos (caixa/bens/serviços)." }
    ]
  },
  {
    pillar: "PILAR 02",
    title: "2. Reconhecimento",
    color: "emerald",
    icon: "fa-stamp",
    topics: [
      { tag: "Critério 1", text: "PROBABILIDADE de saída de recursos da empresa." },
      { tag: "Critério 2", text: "MENSURAÇÃO CONFIÁVEL do valor devido." },
      { tag: "Ressalva", text: "Incerteza sem estimativa segura = Passivo Contingente (Notas)." }
    ]
  },
  {
    pillar: "PILAR 03",
    title: "3. Mensuração",
    color: "purple",
    icon: "fa-scale-balanced",
    topics: [
      { tag: "Custo Histórico", text: "Valor contratado originalmente no ato da transação." },
      { tag: "Valor Presente (AVP)", text: "Desconto financeiro em obrigações de longo prazo." },
      { tag: "Valor de Liquidação", text: "Estimativa necessária para quitar a dívida no presente." }
    ]
  }
];

// 2. DADOS DAS CONTAS (PASSIVO CIRCULANTE E NÃO CIRCULANTE)
const pcItemsData = [
  { title: "Fornecedores", sub: "Duplicatas a pagar por estoque/insumos", tag: "Operacional" },
  { title: "Obrigações Trabalhistas", sub: "Salários, FGTS, Férias e Provisão de 13º", tag: "Imediato" },
  { title: "Obrigações Tributárias", sub: "ICMS, PIS, COFINS, ISS e Impostos retidos", tag: "Fiscal" },
  { title: "Empréstimos de Curto Prazo", sub: "Parcelas vincendas nos próximos 12 meses", tag: "Financeiro" }
];

const pncItemsData = [
  { title: "Financiamentos de Longo Prazo", sub: "Aquisição de imobilizado com vencimento > 1 ano", tag: "Estrutural" },
  { title: "Debêntures a Pagar", sub: "Captação de recursos com investidores no mercado", tag: "Captação" },
  { title: "Provisões para Contingências", sub: "Processos judiciais com perda provável avaliada pelo jurídico", tag: "Estimado" }
];

// 3. FUNÇÃO DE POPULAÇÃO DO CONTEÚDO
function renderSlideContent() {
  const container = document.getElementById('slide-concepts-container');
  if (!container) return;

  container.innerHTML = slideConceptsData.map(c => `
    <div class="high-contrast-card p-6 flex flex-col justify-between border-2 border-${c.color}-500/50 hover:border-${c.color}-400 transition-all">
      <div>
        <div class="flex items-center justify-between border-b border-slate-700 pb-3 mb-4">
          <span class="text-xs font-black text-${c.color}-400 uppercase tracking-widest">${c.pillar}</span>
          <div class="w-10 h-10 rounded-xl bg-${c.color}-500/20 border border-${c.color}-400 text-${c.color}-400 flex items-center justify-center text-lg">
            <i class="fa-solid ${c.icon}"></i>
          </div>
        </div>
        
        <h3 class="text-xl font-black text-white mb-4">${c.title}</h3>

        <div class="space-y-3">
          ${c.topics.map(t => `
            <div class="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <div class="text-[11px] font-bold text-${c.color}-400 uppercase tracking-wider">${t.tag}</div>
              <div class="text-xs font-bold text-slate-100 mt-0.5">${t.text}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');

  // Renderizar itens do PC e PNC com animação oculta por padrão
  renderAccountItems('pc-topics-container', pcItemsData, 'blue');
  renderAccountItems('pnc-topics-container', pncItemsData, 'indigo');
}

function renderAccountItems(containerId, items, color) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items.map((item, idx) => `
    <div id="${containerId}-item-${idx}" class="topic-reveal-item p-3 bg-slate-900 rounded-lg border border-slate-700 flex justify-between items-center hidden fade-in">
      <div>
        <div class="font-bold text-white text-sm flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-${color}-400"></span>
          ${item.title}
        </div>
        <div class="text-slate-300 text-xs mt-0.5">${item.sub}</div>
      </div>
      <span class="font-mono text-${color}-400 font-bold text-xs shrink-0 ml-2 bg-slate-950 px-2 py-1 rounded border border-slate-800">${item.tag}</span>
    </div>
  `).join('') + `
    <button onclick="revealNextTopic('${containerId}', ${items.length})" class="w-full py-2 bg-slate-900 hover:bg-slate-800 text-${color}-400 font-bold text-xs rounded-lg border border-${color}-500/40 transition-colors flex items-center justify-center gap-2 mt-2">
      <i class="fa-solid fa-plus"></i> Revelar Próximo Tópico no Slide
    </button>
  `;
}

// 4. CONTROLES DE ANIMAÇÃO DE REVELAÇÃO DE SLIDES
let topicStepState = { 'pc-topics-container': 0, 'pnc-topics-container': 0 };

function revealNextTopic(containerId, maxItems) {
  const currentStep = topicStepState[containerId];
  if (currentStep < maxItems) {
    const el = document.getElementById(`${containerId}-item-${currentStep}`);
    if (el) el.classList.remove('hidden');
    topicStepState[containerId]++;
  }
}

function revealAllTopics() {
  document.querySelectorAll('.topic-reveal-item').forEach(el => el.classList.remove('hidden'));
  topicStepState['pc-topics-container'] = pcItemsData.length;
  topicStepState['pnc-topics-container'] = pncItemsData.length;
}

function hideAllTopics() {
  document.querySelectorAll('.topic-reveal-item').forEach(el => el.classList.add('hidden'));
  topicStepState['pc-topics-container'] = 0;
  topicStepState['pnc-topics-container'] = 0;
}

// Executar ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  renderSlideContent();
});