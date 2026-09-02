// ============================================================
// Mobile nav toggle
// ============================================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ============================================================
// Footer year
// ============================================================
document.getElementById('year').textContent = new Date().getFullYear();

// ============================================================
// Hero typing effect — cycles through a few role/skill phrases.
// EDIT THIS LIST to describe what you build.
// ============================================================
const phrases = [
  'reliable software.',
  'clean, tested code.',
  'useful tools for real people.',
  'my way into tech.'
];

const typeTarget = document.getElementById('typeTarget');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (typeTarget && !prefersReducedMotion) {
  let phraseIndex = 0;
  let charIndex = phrases[0].length;
  let deleting = false;

  function tick() {
    const current = phrases[phraseIndex];

    if (!deleting) {
      charIndex++;
      if (charIndex > current.length) {
        deleting = true;
        setTimeout(tick, 1600);
        return;
      }
    } else {
      charIndex--;
      if (charIndex < 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        charIndex = 0;
      }
    }

    typeTarget.textContent = phrases[phraseIndex].slice(0, charIndex);
    setTimeout(tick, deleting ? 35 : 55);
  }

  // Start from the fully-typed first phrase (already in HTML for no-JS/SEO),
  // then begin cycling after a pause.
  setTimeout(tick, 1800);
}
