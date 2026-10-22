'use strict';

document.body.classList.add('js-enabled');
document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.menu-toggle');
const navigation = document.getElementById('main-nav');
const mobile = window.matchMedia('(max-width: 480px)');

function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
  toggle.querySelector('span').textContent = '+';
}

function updateNavigation() {
  toggle.hidden = !mobile.matches;
  closeMenu();
}

toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
  toggle.querySelector('span').textContent = open ? '−' : '+';
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
mobile.addEventListener('change', updateNavigation);
updateNavigation();

if ('IntersectionObserver' in window) {
  const sections = [...document.querySelectorAll('main section[id]')];
  const links = [...navigation.querySelectorAll('a')];
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      links.forEach((link) => {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  sections.forEach((section) => observer.observe(section));
}
