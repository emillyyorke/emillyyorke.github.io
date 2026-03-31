/* ══════════════════════════════════════════
   EMILLY — PORTFÓLIO · SCRIPTS
   ══════════════════════════════════════════ */

// ── Navbar: sombra ao rolar ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ── Menu mobile: abrir/fechar ──
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Fecha o menu ao clicar em um link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// ── Destaque do link ativo na navbar ──
const sections = document.querySelectorAll('section[id]');
const navItems = navLinks.querySelectorAll('a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        if (scrollY >= section.offsetTop - 120) {
            current = section.id;
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// ── Scroll Reveal: anima elementos ao entrar na tela ──
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});

// ── Animação de entrada da saudação ──
const greeting = document.querySelector('.hero-greeting');
if (greeting) {
    greeting.style.opacity = '0';
    greeting.style.transform = 'translateY(10px)';

    setTimeout(() => {
        greeting.style.transition = 'opacity 0.6s, transform 0.6s';
        greeting.style.opacity = '1';
        greeting.style.transform = 'translateY(0)';
    }, 300);
}