// GENÈSE — menu mobile
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const mobile = document.querySelector('.nav-mobile');
  const close = document.querySelector('.nav-close');
  if (!toggle || !mobile) return;

  const open = () => { mobile.classList.add('open'); document.body.style.overflow = 'hidden'; };
  const shut = () => { mobile.classList.remove('open'); document.body.style.overflow = ''; };

  toggle.addEventListener('click', open);
  if (close) close.addEventListener('click', shut);
  mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', shut));
});
