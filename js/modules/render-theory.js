// render-theory.js — Hero + pilares (Flip Cards 3D) + conceitos extras

function renderHeroTheme() {
  const { pillar, title, subtitle, chips } = THEME_DATA;
  setHTML('hero-theme', `
    <div class="hero-slide fade-in">
      <div class="text-sm font-black uppercase tracking-widest text-blue-300 mb-3 flex items-center gap-2 relative z-10">
        <i class="fa-solid fa-chalkboard-user"></i> ${pillar}
      </div>
      <h2 class="hero-title">${title}</h2>
      <p class="text-base sm:text-lg text-slate-100 font-semibold mt-4 max-w-4xl relative z-10 drop-shadow-md leading-relaxed">${subtitle}</p>
      <div class="flex flex-wrap gap-3 mt-6 relative z-10">
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
        
        <!-- FRENTE -->
        <div class="flip-card-front">
          <div class="shrink-0">
            <div class="flex items-center justify-between border-b border-slate-600 pb-4 mb-4">
              <span class="text-sm font-black uppercase tracking-widest" style="color: rgb(${p.rgb});">${p.pillar}</span>
              <div class="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                   style="background: rgba(${p.rgb}, 0.15); border: 1px solid rgba(${p.rgb}, 0.5); color: rgb(${p.rgb});">
                <i class="fa-solid ${p.icon}"></i>
              </div>
            </div>
            <h3 class="text-2xl font-black text-white mb-2 leading-tight">${p.title}</h3>
            <p class="text-sm text-slate-200 italic mb-5 leading-relaxed">${p.definition}</p>
            
            <div class="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
              <span><i class="fa-solid fa-list mr-1"></i> Tópicos</span>
            </div>
          </div>

          <!-- Tópicos não têm limitação de altura. Empurram o card se precisarem. -->
          <div class="space-y-3 mb-4">
            ${p.summary.map(s => `
              <div class="subtopic-row">
                <span class="dot" style="background: rgb(${p.rgb}); box-shadow: 0 0 10px rgba(${p.rgb}, 0.9);"></span>
                <span class="text-sm font-bold text-white">${s}</span>
              </div>
            `).join('')}
          </div>

          <div class="shrink-0 mt-auto pt-4 border-t border-slate-700 flex items-center justify-between text-sm font-bold" style="color: rgb(${p.rgb});">
            <span>Ver conceitos</span>
            <i class="fa-solid fa-rotate"></i>
          </div>
        </div>

        <!-- VERSO -->
        <div class="flip-card-back" style="border-color: rgba(${p.rgb}, 0.4);">
          <div class="shrink-0 flex items-center justify-between mb-4 border-b border-slate-700 pb-3">
            <h4 class="text-lg font-black text-white">Conceitos Aplicados</h4>
            <i class="fa-solid fa-circle-check text-xl" style="color: rgb(${p.rgb});"></i>
          </div>
          
          <div class="concept-scroll-area">
            ${p.concepts.map(c => `
              <div class="concept-card" style="border-left-color: rgb(${p.rgb});">
                <div class="text-xs font-bold uppercase tracking-wider mb-1" style="color: rgb(${p.rgb});">${c.tag}</div>
                <div class="text-sm text-slate-100 leading-relaxed font-medium">${c.text}</div>
              </div>
            `).join('')}
          </div>

          <div class="shrink-0 mt-auto pt-4 border-t border-slate-700 text-center text-xs font-bold text-slate-400">
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
    <div class="high-contrast-card p-8 mt-8">
      <h3 class="text-2xl font-black text-white mb-6 flex items-center gap-3">
        <i class="fa-solid fa-lightbulb text-amber-400 text-3xl"></i> Conceitos Complementares
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        ${EXTRA_CONCEPTS.map(c => `
          <div class="p-5 bg-slate-950 rounded-xl border-2 border-${c.color}-500/40 hover:border-${c.color}-400 transition-all flex flex-col">
            <div class="w-12 h-12 rounded-lg bg-${c.color}-500/20 border border-${c.color}-400 text-${c.color}-400 flex items-center justify-center mb-3 text-xl">
              <i class="fa-solid ${c.icon}"></i>
            </div>
            <div class="text-lg font-black text-white mb-2 leading-tight">${c.title}</div>
            <div class="text-sm text-slate-200 leading-relaxed flex-1">${c.text}</div>
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