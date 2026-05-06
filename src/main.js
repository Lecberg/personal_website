import './style.css'
import { projects } from './data/projects.js'

const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const htmlElement = document.documentElement;
const navbar = document.getElementById('navbar');
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const sections = document.querySelectorAll('main section, footer[id]');
const navLinks = document.querySelectorAll('.nav-link');
const projectsGrid = document.getElementById('projects-grid');
const projectOverlay = document.getElementById('project-overlay');
const overlayContent = document.getElementById('overlay-content');
const closeOverlayBtn = document.getElementById('close-overlay');

const caseStyles = [
  {
    tile: 'case-tile-featured',
    visual: 'visual-brand',
    dot: 'bg-brand-500',
    accent: 'text-brand-700 dark:text-brand-300',
  },
  {
    tile: 'case-tile-featured',
    visual: 'visual-teal',
    dot: 'bg-teal-500',
    accent: 'text-teal-700 dark:text-teal-300',
  },
  {
    tile: 'case-tile-featured',
    visual: 'visual-slate',
    dot: 'bg-slate-700 dark:bg-slate-200',
    accent: 'text-slate-700 dark:text-slate-200',
  },
  {
    tile: 'case-tile-compact',
    visual: 'visual-cyan',
    dot: 'bg-cyan-500',
    accent: 'text-cyan-700 dark:text-cyan-300',
  },
  {
    tile: 'case-tile-compact',
    visual: 'visual-amber',
    dot: 'bg-amber-500',
    accent: 'text-amber-700 dark:text-amber-300',
  },
];

const setInitialTheme = () => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
  } else {
    htmlElement.classList.remove('dark');
  }
};

const toggleDarkMode = () => {
  htmlElement.classList.toggle('dark');
  localStorage.theme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
};

const updateNavbar = () => {
  if (!navbar) return;
  if (window.scrollY > 40) {
    navbar.classList.add('border-b', 'border-slate-200', 'bg-atlas-paper/90', 'shadow-sm', 'backdrop-blur', 'py-3', 'dark:border-slate-800', 'dark:bg-slate-950/90');
    navbar.classList.remove('py-4');
  } else {
    navbar.classList.add('py-4');
    navbar.classList.remove('border-b', 'border-slate-200', 'bg-atlas-paper/90', 'shadow-sm', 'backdrop-blur', 'py-3', 'dark:border-slate-800', 'dark:bg-slate-950/90');
  }
};

const setMenuOpen = (isOpen) => {
  mobileMenu?.classList.toggle('open', isOpen);
  if (menuBtn) {
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    menuBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    menuBtn.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark text-lg" aria-hidden="true"></i>'
      : '<i class="fa-solid fa-bars text-lg" aria-hidden="true"></i>';
  }
};

const getStyle = (index) => caseStyles[index] || caseStyles[caseStyles.length - 1];

const escapeHtml = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#039;');

const getValidLinks = (links = {}) => Object.entries(links)
  .filter(([, url]) => typeof url === 'string' && url.trim() && url.trim() !== '#');

function renderVisual(project, style, index) {
  return `
    <div class="case-visual ${style.visual}" aria-hidden="true">
      <div class="route-line route-line-a"></div>
      <div class="route-line route-line-b"></div>
      <div class="route-node route-node-one"></div>
      <div class="route-node route-node-two"></div>
      <span class="case-index">${String(index + 1).padStart(2, '0')}</span>
      <i class="fa-solid fa-location-crosshairs case-compass"></i>
      <p>${escapeHtml(project.type)}</p>
    </div>
  `;
}

function renderFeaturedProject(project, index) {
  const style = getStyle(index);
  return `
    <article class="${style.tile} group">
      ${renderVisual(project, style, index)}
      <div class="flex flex-1 flex-col p-6 sm:p-7">
        <div class="mb-5 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
          <span class="inline-flex items-center gap-2"><span class="h-2 w-2 rounded-full ${style.dot}"></span>${escapeHtml(project.year)}</span>
          <span>${escapeHtml(project.type)}</span>
        </div>
        <h3 class="text-2xl font-extrabold leading-tight text-slate-950 dark:text-white">${escapeHtml(project.title)}</h3>
        <p class="mt-4 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">${escapeHtml(project.summary)}</p>
        <dl class="mt-6 grid grid-cols-1 gap-4 border-y border-slate-200 py-5 text-sm dark:border-slate-800">
          <div>
            <dt class="font-bold text-slate-400">Role</dt>
            <dd class="mt-1 font-semibold text-slate-800 dark:text-slate-100">${escapeHtml(project.role)}</dd>
          </div>
          <div>
            <dt class="font-bold text-slate-400">Outcome</dt>
            <dd class="mt-1 font-semibold text-slate-800 dark:text-slate-100">${escapeHtml(project.outcome)}</dd>
          </div>
        </dl>
        <div class="mt-6 flex flex-wrap gap-2">
          ${project.methods.map(method => `<span class="method-pill">${escapeHtml(method)}</span>`).join('')}
        </div>
        <a href="#project/${project.id}" class="mt-7 inline-flex w-fit items-center gap-2 text-sm font-extrabold ${style.accent} transition-all group-hover:gap-3">
          Open case study <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>
        </a>
      </div>
    </article>
  `;
}

function renderCompactProject(project, index) {
  const style = getStyle(index);
  return `
    <article class="${style.tile} group">
      <div>
        <div class="mb-3 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
          <span class="inline-flex items-center gap-2"><span class="h-2 w-2 rounded-full ${style.dot}"></span>${escapeHtml(project.year)}</span>
          <span>${escapeHtml(project.type)}</span>
        </div>
        <h3 class="text-xl font-extrabold text-slate-950 dark:text-white">${escapeHtml(project.title)}</h3>
        <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">${escapeHtml(project.summary)}</p>
      </div>
      <div class="flex flex-col gap-5 md:items-end">
        <p class="max-w-sm text-sm font-semibold text-slate-700 dark:text-slate-200">${escapeHtml(project.outcome)}</p>
        <a href="#project/${project.id}" class="inline-flex w-fit items-center gap-2 text-sm font-extrabold ${style.accent} transition-all group-hover:gap-3">
          Open case study <i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>
        </a>
      </div>
    </article>
  `;
}

function renderProjects() {
  if (!projectsGrid) return;

  const featured = projects.slice(0, 3).map(renderFeaturedProject).join('');
  const compact = projects.slice(3).map((project, offset) => renderCompactProject(project, offset + 3)).join('');

  projectsGrid.innerHTML = `
    <div class="grid gap-6 lg:grid-cols-3">${featured}</div>
    ${compact ? `<div class="mt-6 grid gap-4">${compact}</div>` : ''}
  `;
}

function disableBodyScroll() {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  if (scrollbarWidth > 0) {
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    if (navbar) {
      navbar.classList.add('no-transition');
      navbar.style.paddingRight = `${scrollbarWidth}px`;
    }
  }
  document.body.style.overflow = 'hidden';
}

function enableBodyScroll() {
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
  if (navbar) {
    navbar.style.paddingRight = '';
    setTimeout(() => navbar.classList.remove('no-transition'), 10);
  }
}

function renderLinks(project) {
  const links = getValidLinks(project.links);
  if (!links.length) return '';

  return `
    <section class="overlay-panel">
      <h3>Links</h3>
      <div class="mt-4 grid gap-3">
        ${links.map(([key, url]) => `
          <a href="${escapeHtml(url)}" target="_blank" rel="noreferrer" class="inline-flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-brand-500 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
            ${escapeHtml(key)} <i class="fa-solid fa-arrow-up-right-from-square text-xs" aria-hidden="true"></i>
          </a>
        `).join('')}
      </div>
    </section>
  `;
}

function showProjectDetail(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project || !overlayContent || !projectOverlay) return;

  overlayContent.innerHTML = `
    <article>
      <div class="grid gap-10 lg:grid-cols-[0.58fr_0.42fr] lg:items-start">
        <div>
          <p class="section-label">${escapeHtml(project.type)} / ${escapeHtml(project.year)}</p>
          <h2 id="overlay-title" class="mt-4 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-6xl dark:text-white">${escapeHtml(project.title)}</h2>
          <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">${escapeHtml(project.summary)}</p>
        </div>
        <aside class="overlay-panel">
          <h3>Case signal</h3>
          <dl class="mt-5 space-y-4 text-sm">
            <div>
              <dt class="font-bold uppercase tracking-[0.16em] text-slate-400">Role</dt>
              <dd class="mt-1 font-semibold text-slate-900 dark:text-slate-100">${escapeHtml(project.role)}</dd>
            </div>
            <div>
              <dt class="font-bold uppercase tracking-[0.16em] text-slate-400">Outcome</dt>
              <dd class="mt-1 font-semibold text-slate-900 dark:text-slate-100">${escapeHtml(project.outcome)}</dd>
            </div>
            <div>
              <dt class="font-bold uppercase tracking-[0.16em] text-slate-400">Period</dt>
              <dd class="mt-1 font-semibold text-slate-900 dark:text-slate-100">${escapeHtml(project.period)}</dd>
            </div>
          </dl>
        </aside>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-[0.64fr_0.36fr]">
        <div class="space-y-6">
          <section class="overlay-panel">
            <h3>Problem</h3>
            <p>${escapeHtml(project.problem)}</p>
          </section>
          <section class="overlay-panel">
            <h3>Method</h3>
            <p>${escapeHtml(project.method)}</p>
          </section>
          <section class="overlay-panel">
            <h3>Evidence</h3>
            <ul class="mt-5 space-y-3">
              ${project.evidence.map(item => `<li>${escapeHtml(item)}</li>`).join('')}
            </ul>
          </section>
        </div>
        <div class="space-y-6">
          <section class="overlay-panel">
            <h3>Tools</h3>
            <div class="mt-4 flex flex-wrap gap-2">
              ${project.technologies.map(tech => `<span class="method-pill">${escapeHtml(tech)}</span>`).join('')}
            </div>
          </section>
          <section class="overlay-panel">
            <h3>Methods</h3>
            <div class="mt-4 flex flex-wrap gap-2">
              ${project.methods.map(method => `<span class="method-pill">${escapeHtml(method)}</span>`).join('')}
            </div>
          </section>
          ${renderLinks(project)}
        </div>
      </div>
    </article>
  `;

  projectOverlay.classList.remove('hidden');
  requestAnimationFrame(() => {
    projectOverlay.classList.add('opacity-100');
    disableBodyScroll();
    closeOverlayBtn?.focus();
  });
}

function closeProjectDetail() {
  if (!projectOverlay) return;
  projectOverlay.classList.remove('opacity-100');
  setTimeout(() => {
    projectOverlay.classList.add('hidden');
    enableBodyScroll();
    if (window.location.hash.startsWith('#project/')) {
      history.pushState('', document.title, window.location.pathname + window.location.search);
    }
  }, 300);
}

function handleHash() {
  const hash = window.location.hash;
  if (hash.startsWith('#project/')) {
    showProjectDetail(hash.replace('#project/', ''));
  } else if (!projectOverlay?.classList.contains('hidden')) {
    closeProjectDetail();
  }
}

function updateScrollSpy() {
  let current = '';
  sections.forEach(section => {
    if (window.pageYOffset >= section.offsetTop - 220) {
      current = section.getAttribute('id') || '';
    }
  });

  navLinks.forEach(link => {
    const href = link.getAttribute('href') || '';
    link.classList.toggle('active', Boolean(current && href === `#${current}`));
  });
}

setInitialTheme();
updateNavbar();
renderProjects();
handleHash();

themeToggle?.addEventListener('click', toggleDarkMode);
themeToggleMobile?.addEventListener('click', toggleDarkMode);
window.addEventListener('scroll', () => {
  updateNavbar();
  updateScrollSpy();
});
menuBtn?.addEventListener('click', () => setMenuOpen(!mobileMenu?.classList.contains('open')));
mobileLinks.forEach(link => link.addEventListener('click', () => setMenuOpen(false)));
window.addEventListener('hashchange', handleHash);
closeOverlayBtn?.addEventListener('click', closeProjectDetail);
projectOverlay?.addEventListener('click', (event) => {
  if (event.target === projectOverlay) closeProjectDetail();
});
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !projectOverlay?.classList.contains('hidden')) {
    closeProjectDetail();
  }
});
