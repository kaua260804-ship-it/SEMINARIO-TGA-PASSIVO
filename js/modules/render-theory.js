// render-theory.js — Hero + pilares (Flip Cards 3D) + conceitos extras

function renderHeroTheme() {
  const { pillar, title, subtitle, chips } = THEME_DATA;
  setHTML('hero-theme', `
    <div class="hero-slide fade-in">
      <div class="text-xs font-black uppercase tracking-widest text-blue-300 mb-3 flex items-center gap-2 relative z-10">
        <i class="fa-solid fa-chalkboard-user"></i> ${pillar}
      </div>
      <h2 class="hero-title">${title}</h2>
      <p class="text-sm sm:text-base text-slate-100 font-semibold mt-3 max-w-3xl relative z-10 drop-shadow-md">${subtitle}</p>
      <div class="flex flex-wrap gap-2 mt-5 relative z-10">
        ${chips.map(c => `
          <span class="hero-pillar-chip" style="color:${c.color}">
            <i class="fa-solid ${c.icon}"></i> ${c.label}
          </span>
        `).join('')}
      </div>
    </div>
  `);
}

function renderPillars() {
  const container = document.getElementById('pillars-container');
  if (!container) return;

  container.innerHTML = PILLARS_DATA.map((p, idx) => `
    <div class="pillar-card-wrapper flip-card fade-in" onclick="this.classList.toggle('flipped')" style="animation-delay: ${idx * 0.1}s">
      <div class="flip-card-inner">
        
        <!-- FRENTE: Resumo -->
        <div class="flip-card-front">
          <div>
            <div class="flex items-center justify-between border-b border-slate-600 pb-3 mb-4">
              <span class="text-xs font-black uppercase tracking-widest" style="color: rgb(${p.rgb});">${p.pillar}</span>
              <div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                   style="background: rgba(${p.rgb}, 0.15); border: 1px solid rgba(${p.rgb}, 0.5); color: rgb(${p.rgb});">
                <i class="fa-solid ${p.icon}"></i>
              </div>
            </div>
            <h3 class="text-xl font-black text-white mb-2">${p.title}</h3>
            <p class="text-xs text-slate-200 italic mb-4 leading-relaxed">${p.definition}</p>
            <div class="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-2">
              <span><i class="fa-solid fa-list mr-1"></i> Tópicos</span>
            </div>
          </div>

          <div class="space-y-2 flex-1">
            ${p.summary.map(s => `
              <div class="subtopic-row">
                <span class="dot" style="background: rgb(${p.rgb}); box-shadow: 0 0 8px rgba(${p.rgb}, 0.7);"></span>
                <span class="text-xs font-semibold text-white">${s}</span>
              </div>
            `).join('')}
          </div>

          <div class="mt-4 pt-3 border-t border-slate-700 flex items-center justify-between text-xs font-bold" style="color: rgb(${p.rgb});">
            <span>Ver conceitos</span>
            <i class="fa-solid fa-rotate"></i>
          </div>
        </div>

        <!-- VERSO: Conceitos Detalhados (Com scroll customizado) -->
        <div class="flip-card-back" style="border-color: rgba(${p.rgb}, 0.4);">
          <div class="flex items-center justify-between mb-3 border-b border-slate-700 pb-2 shrink-0">
            <h4 class="text-sm font-black text-white">Conceitos Aplicados</h4>
            <i class="fa-solid fa-circle-check text-lg" style="color: rgb(${p.rgb});"></i>
          </div>
          
          <!-- Container com scroll para não cortar o texto -->
          <div class="concept-scroll-area">
            ${p.concepts.map(c => `
              <div class="concept-card" style="border-left-color: rgb(${p.rgb});">
                <div class="text-[10px] font-bold uppercase tracking-wider mb-0.5" style="color: rgb(${p.rgb});">${c.tag}</div>
                <div class="text-xs text-slate-100 leading-relaxed font-medium">${c.text}</div>
              </div>
            `).join('')}
          </div>

          <div class="mt-2 pt-2 border-t border-slate-700 text-center text-[10px] text-slate-400 shrink-0">
            Clique para voltar
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderExtraConcepts() {
  const el = document.getElementById('extra-concepts-container');
  if (!el) return;

  el.innerHTML = `
    <div class="high-contrast-card p-6 mt-6">
      <h3 class="text-xl font-black text-white mb-4 flex items-center gap-2">
        <i class="fa-solid fa-lightbulb text-amber-400"></i> Conceitos Complementares
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        ${EXTRA_CONCEPTS.map(c => `
          <div class="p-4 bg-slate-950 rounded-xl border-2 border-${c.color}-500/40 hover:border-${c.color}-400 transition-all">
            <div class="w-9 h-9 rounded-lg bg-${c.color}-500/20 border border-${c.color}-400 text-${c.color}-400 flex items-center justify-center mb-2">
              <i class="fa-solid ${c.icon}"></i>
            </div>
            <div class="text-sm font-black text-white mb-1">${c.title}</div>
            <div class="text-[11px] text-slate-200 leading-relaxed">${c.text}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderTheory() {
  renderHeroTheme();
  renderPillars();
  renderExtraConcepts();
}