// render-classification.js

function renderClassification() {
  const el = document.getElementById('classification-container');
  if (!el) return;

  el.innerHTML = `
    <div class="classification-block fade-in mt-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
        <div>
          <h3 class="text-xl font-black text-white flex items-center gap-2">
            <i class="fa-solid fa-sitemap text-blue-400"></i>
            ${CLASSIFICATION_HEADER.title}
          </h3>
          <p class="text-xs text-slate-200 font-semibold mt-1">${CLASSIFICATION_HEADER.subtitle}</p>
        </div>
        <div class="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-700 font-mono text-sm">
          <span class="text-slate-300">Exigibilidade:</span>
          <span id="slider-label" class="text-blue-400 font-black">36 meses</span>
        </div>
      </div>

      <!-- Slider restrito de 0 a 36 meses -->
      <div class="relative pt-6 pb-2">
        <div class="time-slider" id="time-slider">
          <div class="time-slider-fill" id="slider-fill" style="width: 100%;"></div>
          <div class="time-slider-handle" id="slider-handle" style="left: 100%;">
            <i class="fa-solid fa-arrows-left-right text-sm"></i>
          </div>
          <div class="time-slider-labels">
            <span class="time-slider-label" style="padding-left: 1rem;">0 m</span>
            <span class="time-slider-label" style="padding-right: 1rem;">36 m</span>
          </div>
        </div>
      </div>

      <div class="accounts-panel mt-4" id="accounts-panel">
        <!-- Lado Esquerdo: Passivo Circulante (Até 12m) -->
        <div class="account-column cp" id="col-cp">
          <div class="flex items-center justify-between mb-3 pb-2 border-b border-blue-500/30">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></span>
              <h4 class="font-black text-blue-400 text-base">Passivo Circulante</h4>
            </div>
            <span class="text-[10px] font-mono font-bold bg-blue-950 text-blue-200 px-2 py-0.5 rounded border border-blue-500">≤ 12 meses</span>
          </div>
          <div class="space-y-2" id="cp-list"></div>
        </div>

        <!-- Lado Direito: Passivo Não Circulante (> 12m) -->
        <div class="account-column pnc" id="col-pnc">
          <div class="flex items-center justify-between mb-3 pb-2 border-b border-indigo-500/30">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-indigo-500"></span>
              <h4 class="font-black text-indigo-400 text-base">Passivo Não Circulante</h4>
            </div>
            <span class="text-[10px] font-mono font-bold bg-indigo-950 text-indigo-200 px-2 py-0.5 rounded border border-indigo-500">> 12 meses</span>
          </div>
          <div class="space-y-2" id="pnc-list"></div>
        </div>
      </div>
    </div>
  `;

  setupSlider36M();
}

function renderAccountItem(account, color) {
  return `
    <div class="account-item fade-in">
      <div class="account-icon" style="background: rgba(${color === 'blue' ? '59,130,246' : '99,102,241'}, 0.15); border: 1px solid rgba(${color === 'blue' ? '59,130,246' : '99,102,241'}, 0.5); color: ${color === 'blue' ? '#60a5fa' : '#a5b4fc'};">
        <i class="fa-solid ${account.icon}"></i>
      </div>
      <div class="flex-1 min-w-0">
        <div class="text-sm font-bold text-white truncate">${account.title}</div>
        <div class="text-[11px] text-slate-200 truncate">${account.sub}</div>
      </div>
      <div class="shrink-0 ml-2">
        <div class="account-months-badge">${account.months}m</div>
      </div>
    </div>
  `;
}

function setupSlider36M() {
  const slider = document.getElementById('time-slider');
  const handle = document.getElementById('slider-handle');
  const fill = document.getElementById('slider-fill');
  const label = document.getElementById('slider-label');
  
  const colCp = document.getElementById('col-cp');
  const colPnc = document.getElementById('col-pnc');
  const cpList = document.getElementById('cp-list');
  const pncList = document.getElementById('pnc-list');

  const MAX_MONTHS = 36;

  if (!slider || !handle) return;

  function updateSlider(months) {
    // Trava o valor entre 0 e 36
    months = Math.max(0, Math.min(MAX_MONTHS, months));
    
    // Atualiza o visual do slider (porcentagem)
    const percent = (months / MAX_MONTHS) * 100;
    handle.style.left = percent + '%';
    fill.style.width = percent + '%';
    
    // Atualiza o texto "X meses"
    label.innerText = months + ' meses';

    // Separa as contas de acordo com o mês e a classificação original
    const cpAccounts = ACCOUNTS_DATA.filter(a => a.months <= 12 && a.months <= months);
    const pncAccounts = ACCOUNTS_DATA.filter(a => a.months > 12 && a.months <= months);
    
    // Atualiza a lista
    cpList.innerHTML = cpAccounts.map(a => renderAccountItem(a, 'blue')).join('');
    pncList.innerHTML = pncAccounts.map(a => renderAccountItem(a, 'indigo')).join('');

    // Destaques visuais dos blocos
    if (months > 0) {
      colCp.classList.add('highlighted');
      colCp.classList.remove('dimmed');
    } else {
      colCp.classList.remove('highlighted');
      colCp.classList.add('dimmed');
    }

    if (months > 12) {
      colPnc.classList.add('highlighted');
      colPnc.classList.remove('dimmed');
    } else {
      colPnc.classList.remove('highlighted');
      colPnc.classList.add('dimmed');
    }
  }

  function handlePointer(e) {
    const rect = slider.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    
    // Calcula a porcentagem da tela
    let percent = ((clientX - rect.left) / rect.width) * 100;
    percent = Math.max(0, Math.min(100, percent)); 
    
    // Transforma em meses e arredonda para pular de 1 em 1
    let months = Math.round((percent / 100) * MAX_MONTHS);
    
    updateSlider(months);
  }

  // Eventos de clique e arraste
  slider.addEventListener('click', handlePointer);
  slider.addEventListener('mousedown', (e) => {
    handlePointer(e);
    const onMouseMove = (ev) => handlePointer(ev);
    const onMouseUp = () => {
      slider.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    slider.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  // Inicia mostrando os 36 meses
  updateSlider(36);
}