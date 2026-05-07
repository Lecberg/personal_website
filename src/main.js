import './style.css'
import { projects } from './data/projects.js'

const htmlElement = document.documentElement;
const navbar = document.getElementById('navbar');
const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const sections = document.querySelectorAll('main section, footer[id]');
const navLinks = document.querySelectorAll('.nav-link');
const projectsList = document.getElementById('projects-list');

const escapeHtml = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#039;');

const setInitialTheme = () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedTheme = localStorage.theme;

  htmlElement.classList.toggle('dark', storedTheme === 'dark' || (!storedTheme && prefersDark));
};

const toggleDarkMode = () => {
  htmlElement.classList.toggle('dark');
  localStorage.theme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
};

const updateNavbar = () => {
  if (!navbar) return;
  navbar.classList.toggle('border-slate-200', window.scrollY > 20);
  navbar.classList.toggle('shadow-sm', window.scrollY > 20);
  navbar.classList.toggle('backdrop-blur', window.scrollY > 20);
  navbar.classList.toggle('dark:border-slate-800', window.scrollY > 20);
};

const setMenuOpen = (isOpen) => {
  mobileMenu?.classList.toggle('open', isOpen);

  if (!menuBtn) return;
  menuBtn.setAttribute('aria-expanded', String(isOpen));
  menuBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  menuBtn.innerHTML = isOpen
    ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
    : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
};

const renderProjects = () => {
  if (!projectsList) return;

  projectsList.innerHTML = projects.map((project) => `
    <article class="project-row">
      <div class="content-meta">
        <span>${escapeHtml(project.period)}</span>
        <span>${escapeHtml(project.location)}</span>
      </div>
      <div>
        <h3>${escapeHtml(project.title)}</h3>
        <p class="mt-1 font-semibold text-slate-700 dark:text-slate-300">${escapeHtml(project.role)}</p>
        <ul class="plain-list mt-4">
          ${project.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join('')}
        </ul>
        <p class="mt-4 text-sm font-semibold leading-6 text-slate-500 dark:text-slate-400">
          ${project.tools.map(escapeHtml).join(' / ')}
        </p>
      </div>
    </article>
  `).join('');
};

const updateScrollSpy = () => {
  let current = '';

  sections.forEach((section) => {
    if (window.pageYOffset >= section.offsetTop - 180) {
      current = section.getAttribute('id') || '';
    }
  });

  navLinks.forEach((link) => {
    const href = link.getAttribute('href') || '';
    link.classList.toggle('active', Boolean(current && href === `#${current}`));
  });
};

setInitialTheme();
updateNavbar();
renderProjects();
updateScrollSpy();

themeToggle?.addEventListener('click', toggleDarkMode);
themeToggleMobile?.addEventListener('click', toggleDarkMode);
menuBtn?.addEventListener('click', () => setMenuOpen(!mobileMenu?.classList.contains('open')));
mobileLinks.forEach((link) => link.addEventListener('click', () => setMenuOpen(false)));

window.addEventListener('scroll', () => {
  updateNavbar();
  updateScrollSpy();
});
