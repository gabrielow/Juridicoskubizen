const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}

// WhatsApp float: contraer al hacer scroll (scroll down), expandir al hacer scroll up
(function() {
  const wa = document.querySelector('.whatsapp-float');
  if (!wa) return;

  let lastScroll = window.scrollY || 0;
  let ticking = false;

  function onScroll() {
    const current = window.scrollY || 0;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (current > lastScroll && current > 80) {
          wa.classList.add('whatsapp-collapsed');
        } else {
          wa.classList.remove('whatsapp-collapsed');
        }
        lastScroll = current <= 0 ? 0 : current;
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  // also collapse on touch move for mobile
  window.addEventListener('touchmove', onScroll, { passive: true });
})();

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  document.querySelectorAll('.nav a').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}
