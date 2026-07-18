/* NOVA — accordéon FAQ, accessible (aria-expanded, une seule ouverte à la fois non imposée). */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      if (!item) return;
      const open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      const mark = btn.querySelector('.mark');
      if (mark) mark.textContent = open ? '\u2212' : '+';
    });
  });
});
