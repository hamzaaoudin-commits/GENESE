/*
  NOVA — système d'anneaux
  ------------------------
  Cinq anneaux concentriques = les cinq étapes du parcours.
  Reprend le motif du favicon et du hero : la marque a une mécanique,
  pas seulement un ornement.

  Usage : <div class="rings" data-rings data-done="2"></div>
  data-done = nombre d'étapes complétées (0 à 5).
*/
(function () {
  const RADII = [22, 34, 46, 58, 70];   // viewBox 160×160, centre 80,80

  function build(el) {
    const done = parseInt(el.getAttribute('data-done') || '0', 10);
    const total = RADII.length;
    const label = el.getAttribute('data-label') || 'étapes';

    const circles = RADII.map((r, i) => {
      const circ = (2 * Math.PI * r).toFixed(2);
      const isDone = i < done;
      const isCurrent = i === done && done < total;
      const cls = 'fill' + (isDone ? ' on' : '') + (isCurrent ? ' current' : '');
      return `<circle class="track" cx="80" cy="80" r="${r}"></circle>
              <circle class="${cls}" cx="80" cy="80" r="${r}" style="--circ:${circ};"></circle>`;
    }).join('');

    el.innerHTML = `
      <svg viewBox="0 0 160 160" role="img"
           aria-label="${done} sur ${total} ${label}">${circles}</svg>
      <div class="rings-core" aria-hidden="true">
        <span class="n">${done}<span style="opacity:.35">/${total}</span></span>
        <span class="l">${label}</span>
      </div>`;

    // L'anneau en cours pulse doucement pour signaler où l'on en est
    if (done < total) {
      const cur = el.querySelector('.fill.current');
      if (cur) {
        const r = RADII[done];
        const circ = 2 * Math.PI * r;
        // On le remplit à 12 % : « commencé, pas fini »
        requestAnimationFrame(() =>
          cur.style.strokeDashoffset = (circ * 0.88).toFixed(2)
        );
      }
    }
  }

  function render(root) {
    (root || document).querySelectorAll('[data-rings]').forEach(build);
  }

  window.novaRings = render;
  document.addEventListener('DOMContentLoaded', () => render());
})();
