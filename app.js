/*
  NOVA — application
  ------------------
  Paywall, parcours en cinq étapes, progression en anneaux et dossier de marque
  exportable (impression navigateur → PDF, sans dépendance externe).

  ⚠️ Le déblocage est côté client (voir README) : à remplacer par une
  vérification serveur avant toute vente réelle.
*/
(function () {
  const STORAGE_KEY = 'nova_progress';
  const UNLOCK_KEY  = 'nova_unlocked';

  const $ = id => document.getElementById(id);
  const lang = () => (localStorage.getItem('nova_lang') === 'en') ? 'en' : 'fr';
  const filled = v => !!(v && v.trim().length > 0);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

  function getProgress(){ try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { return {}; } }
  function saveProgress(d){ try { localStorage.setItem(STORAGE_KEY, JSON.stringify(d)); return true; } catch { return false; } }
  const isUnlocked = () => localStorage.getItem(UNLOCK_KEY) === '1';

  const params = new URLSearchParams(window.location.search);
  if (params.get('unlocked') === '1') {
    localStorage.setItem(UNLOCK_KEY, '1');
    const u = new URL(window.location);
    u.searchParams.delete('unlocked');
    window.history.replaceState({}, '', u);
  }

  function renderRings(done, total) {
    const el = $('app-rings');
    if (!el || !window.novaRings) return;
    el.setAttribute('data-done', String(done));
    el.setAttribute('data-label', DICT['app.rings.label'][lang()]);
    window.novaRings(el.parentNode);
  }

  function renderLegend(STEPS, progress) {
    const el = $('app-rings-legend');
    if (!el) return;
    el.innerHTML = STEPS.map((s, i) => {
      const done = filled(progress[s.id]);
      return `<li class="${done ? 'done' : ''}"><span class="i">0${i + 1}</span>${esc(s.title)}</li>`;
    }).join('');
  }

  function render() {
    const priceEl = $('nova-price'), payBtn = $('pay-btn');
    if (priceEl && typeof NOVA_CONFIG !== 'undefined') priceEl.textContent = NOVA_CONFIG.PRICE_DISPLAY;
    if (payBtn  && typeof NOVA_CONFIG !== 'undefined') payBtn.href = NOVA_CONFIG.STRIPE_PAYMENT_LINK;

    const paywall = $('paywall-screen'), app = $('app-screen'), dossier = $('dossier-screen');
    if (!paywall || !app) return;
    if (!isUnlocked()) { paywall.style.display = 'block'; app.style.display = 'none'; return; }
    paywall.style.display = 'none';
    if (dossier && dossier.style.display === 'block') return;   // on est dans le dossier
    app.style.display = 'block';

    if (typeof NOVA_APP_STEPS === 'undefined' || typeof DICT === 'undefined') return;
    const L = lang();
    const STEPS = NOVA_APP_STEPS[L];
    const progress = getProgress();
    const container = $('steps-container');
    if (!container) return;

    const openState = {};
    container.querySelectorAll('.app-step-head').forEach(h => {
      openState[h.getAttribute('data-toggle')] = h.getAttribute('aria-expanded') === 'true';
    });

    container.innerHTML = '';
    STEPS.forEach((step, i) => {
      const prevDone = i === 0 || filled(progress[STEPS[i - 1].id]);
      const done = filled(progress[step.id]);
      const locked = !prevDone && !done;
      const status = done ? DICT['app.status.done'][L]
                   : (locked ? DICT['app.status.locked'][L] : DICT['app.status.todo'][L]);
      const isOpen = openState[step.id] !== undefined ? openState[step.id] : (!locked && !done);

      const el = document.createElement('div');
      el.className = 'app-step' + (done ? ' done' : '') + (locked ? ' locked' : '');
      el.innerHTML = `
        <div class="app-step-head" data-toggle="${step.id}" role="button" tabindex="${locked ? -1 : 0}"
             aria-expanded="${locked ? 'false' : String(isOpen)}" aria-controls="body-${step.id}"
             ${locked ? 'aria-disabled="true"' : ''}>
          <div class="app-step-num" aria-hidden="true">${done ? '\u2713' : (i + 1)}</div>
          <h4 id="title-${step.id}">${esc(step.title)}</h4>
          <div class="app-step-status">${status}</div>
        </div>
        <div class="app-step-body" id="body-${step.id}" role="region" aria-labelledby="title-${step.id}"
             style="display:${(locked || !isOpen) ? 'none' : 'block'};">
          <p class="hint" id="hint-${step.id}">${esc(step.hint)}</p>
          <label class="sr-only" for="field-${step.id}">${esc(step.title)}</label>
          <textarea id="field-${step.id}" data-field="${step.id}" aria-describedby="hint-${step.id}"
                    placeholder="${esc(step.placeholder)}">${esc(progress[step.id] || '')}</textarea>
          <div class="app-step-actions">
            <button type="button" class="btn btn-primary" data-save="${step.id}">${DICT['app.save'][L]}</button>
            <span class="app-save-note" data-note="${step.id}" role="status" aria-live="polite"></span>
          </div>
        </div>`;
      container.appendChild(el);
    });

    container.querySelectorAll('[data-save]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-save');
        const ta = container.querySelector(`textarea[data-field="${id}"]`);
        if (!ta) return;
        const cur = getProgress(); cur[id] = ta.value;
        const ok = saveProgress(cur);
        const note = container.querySelector(`[data-note="${id}"]`);
        if (note) {
          note.textContent = ok ? DICT['app.saved'][lang()] : DICT['app.save.error'][lang()];
          note.classList.add('show');
          setTimeout(() => note.classList.remove('show'), 2000);
        }
        render();
      });
    });

    const toggle = head => {
      const s = head.closest('.app-step');
      if (!s || s.classList.contains('locked')) return;
      const b = s.querySelector('.app-step-body');
      if (!b) return;
      const willOpen = b.style.display === 'none';
      b.style.display = willOpen ? 'block' : 'none';
      head.setAttribute('aria-expanded', String(willOpen));
    };
    container.querySelectorAll('[data-toggle]').forEach(head => {
      head.addEventListener('click', () => toggle(head));
      head.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(head); }
      });
    });

    const doneCount = STEPS.filter(s => filled(progress[s.id])).length;
    renderRings(doneCount, STEPS.length);
    renderLegend(STEPS, progress);

    const complete = $('app-complete');
    if (complete) complete.style.display = (doneCount === STEPS.length) ? 'block' : 'none';
    const welcome = $('app-welcome');
    if (welcome) welcome.style.display = (doneCount === 0) ? 'block' : 'none';
  }

  // ---------- Dossier de marque ----------
  function buildDossier() {
    const L = lang();
    const STEPS = NOVA_APP_STEPS[L];
    const progress = getProgress();
    const today = new Date().toLocaleDateString(L === 'en' ? 'en-GB' : 'fr-FR',
      { year: 'numeric', month: 'long', day: 'numeric' });

    const sections = STEPS.map((s, i) => {
      const val = progress[s.id];
      const body = filled(val)
        ? esc(val).replace(/\n{2,}/g, '</p><p>').replace(/\n/g, '<br>')
        : `<em class="empty">${DICT['app.dossier.empty'][L]}</em>`;
      return `<section class="dossier-section">
          <div class="dossier-num">0${i + 1}</div>
          <h2>${esc(s.title.replace(/^\d+\.\s*/, ''))}</h2>
          <div class="dossier-body"><p>${body}</p></div>
        </section>`;
    }).join('');

    return `<header class="dossier-head">
        <div class="dossier-k">${DICT['app.dossier.title'][L]}</div>
        <h1>NOVA</h1>
        <div class="dossier-meta">Strawberry Production — ${today}</div>
      </header>${sections}`;
  }

  function showDossier(on) {
    const app = $('app-screen'), dos = $('dossier-screen');
    if (!app || !dos) return;
    app.style.display = on ? 'none' : 'block';
    dos.style.display = on ? 'block' : 'none';
    if (on) { $('dossier-content').innerHTML = buildDossier(); window.scrollTo(0, 0); }
    else render();
  }

  document.addEventListener('DOMContentLoaded', () => {
    render();
    const open = $('open-dossier'), back = $('dossier-back'), print = $('dossier-print');
    if (open)  open.addEventListener('click', () => showDossier(true));
    if (back)  back.addEventListener('click', () => showDossier(false));
    if (print) print.addEventListener('click', () => window.print());
  });

  document.addEventListener('nova:lang', () => {
    const dos = $('dossier-screen');
    if (dos && dos.style.display === 'block') $('dossier-content').innerHTML = buildDossier();
    else render();
  });
})();
