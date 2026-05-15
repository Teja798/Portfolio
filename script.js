# script.js

```javascript
const revealSections = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {

  revealSections.forEach((section) => {

    const windowHeight = window.innerHeight;
    const revealTop = section.getBoundingClientRect().top;

    if (revealTop < windowHeight - 120) {
      section.classList.add('active');
    }
  });
});

window.addEventListener('load', () => {
  document.querySelector('.hero').classList.add('active');
});

const cursorGlow = document.querySelector('.cursor-glow');

window.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';
});

const cards = document.querySelectorAll('.card, .project-card, .stat-card');

cards.forEach((card) => {

  card.addEventListener('mousemove', (e) => {

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.transform = 'translateY(-8px) scale(1.03)';

    card.style.background = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(56,189,248,0.25),
        rgba(15,23,42,0.9)
      )
    `;
  });

  card.addEventListener('mouseleave', () => {

    card.style.transform = 'translateY(0px) scale(1)';

    card.style.background = `
      linear-gradient(
        135deg,
        rgba(56,189,248,0.12),
        rgba(139,92,246,0.12)
      )
    `;
  });
});