import './style.css'
import { projects } from './data/projects.js'

// 1. Dark Mode Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const htmlElement = document.documentElement;

const toggleDarkMode = () => {
    htmlElement.classList.toggle('dark');
    if (htmlElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
};

// Check for saved theme preference or system preference
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
} else {
    htmlElement.classList.remove('dark');
}

themeToggle?.addEventListener('click', toggleDarkMode);
themeToggleMobile?.addEventListener('click', toggleDarkMode);

// 2. Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar?.classList.add('bg-white/90', 'dark:bg-slate-900/90', 'backdrop-blur-md', 'shadow-sm', 'py-2');
        navbar?.classList.remove('py-4', 'bg-transparent');
    } else {
        navbar?.classList.add('py-4', 'bg-transparent');
        navbar?.classList.remove('bg-white/90', 'dark:bg-slate-900/90', 'backdrop-blur-md', 'shadow-sm', 'py-2');
    }
});

// 3. Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
let isMenuOpen = false;

menuBtn?.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        mobileMenu?.classList.add('open');
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark text-2xl"></i>';
    } else {
        mobileMenu?.classList.remove('open');
        menuBtn.innerHTML = '<i class="fa-solid fa-bars text-2xl"></i>';
    }
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        isMenuOpen = false;
        mobileMenu?.classList.remove('open');
        menuBtn && (menuBtn.innerHTML = '<i class="fa-solid fa-bars text-2xl"></i>');
    });
});

// 4. ScrollSpy
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id') || '';
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active', 'text-brand-600');
        if (link.getAttribute('href')?.includes(current)) {
            link.classList.add('active', 'text-brand-600');
        }
    });
});

// 5. Dynamic Project Rendering & Overlay Logic
const projectsGrid = document.getElementById('projects-grid');
const projectOverlay = document.getElementById('project-overlay');
const overlayContent = document.getElementById('overlay-content');
const closeOverlayBtn = document.getElementById('close-overlay');

function renderProjects() {
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = projects.map(project => `
        <article class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full">
            <div class="h-48 bg-gradient-to-br from-${project.color}-600 to-${project.color}-800 p-6 flex items-end relative overflow-hidden">
                <i class="fa-solid ${project.icon} absolute -right-4 -bottom-4 text-9xl text-white opacity-10 transform rotate-12 group-hover:scale-110 transition-transform duration-500"></i>
                <h3 class="text-white font-bold text-xl relative z-10">${project.title}</h3>
            </div>
            <div class="p-6 flex-1 flex flex-col">
                <div class="flex gap-2 mb-4 flex-wrap">
                    ${project.tags.map(tag => `
                        <span class="px-2 py-1 bg-${project.color}-50 dark:bg-${project.color}-900/30 text-${project.color}-700 dark:text-${project.color}-300 text-xs font-semibold rounded border border-${project.color}-100 dark:border-${project.color}-800/50">${tag}</span>
                    `).join('')}
                </div>
                <p class="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 leading-relaxed">
                    ${project.summary}
                </p>
                <div class="pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
                    <span class="text-xs text-slate-400 dark:text-slate-500 font-medium">${project.period}</span>
                    <a href="#project/${project.id}" class="text-brand-600 dark:text-brand-400 text-sm font-semibold hover:text-brand-800 dark:hover:text-brand-300 flex items-center gap-1 group-hover:gap-2 transition-all">
                        Details <i class="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                </div>
            </div>
        </article>
    `).join('');
}

function showProjectDetail(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project || !overlayContent || !projectOverlay) return;

    overlayContent.innerHTML = `
        <div class="max-w-4xl mx-auto">
            <div class="mb-12">
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.tags.map(tag => `<span class="px-3 py-1 bg-${project.color}-50 dark:bg-${project.color}-900/30 text-${project.color}-600 dark:text-${project.color}-400 text-xs font-bold rounded-full">${tag}</span>`).join('')}
                </div>
                <h2 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">${project.title}</h2>
                <p class="text-lg text-slate-500 dark:text-slate-400">${project.period} • ${project.role}</p>
            </div>

            <div class="grid lg:grid-cols-3 gap-12">
                <div class="lg:col-span-2 space-y-8">
                    <section class="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
                        ${project.fullDescription}
                    </section>
                    
                    ${project.challenges ? `
                        <section class="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
                            <h4 class="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                <i class="fa-solid fa-triangle-exclamation text-orange-500"></i> Key Challenges
                            </h4>
                            <p class="text-slate-600 dark:text-slate-400">${project.challenges}</p>
                        </section>
                    ` : ''}
                </div>

                <div class="space-y-8">
                    <div class="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                        <h4 class="font-bold text-slate-900 dark:text-white mb-4">Tech Stack</h4>
                        <div class="flex flex-wrap gap-2">
                            ${project.technologies.map(tech => `<span class="px-2 py-1 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium rounded border border-slate-200 dark:border-slate-600">${tech}</span>`).join('')}
                        </div>
                    </div>

                    ${Object.keys(project.links).length > 0 ? `
                        <div class="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
                            <h4 class="font-bold text-slate-900 dark:text-white mb-4">Project Links</h4>
                            <div class="space-y-3">
                                ${Object.entries(project.links).map(([key, url]) => `
                                    <a href="${url}" class="flex items-center justify-between group p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                                        <span class="text-sm font-medium text-slate-600 dark:text-slate-400 capitalize">${key}</span>
                                        <i class="fa-solid fa-external-link text-xs text-slate-400 group-hover:text-brand-500"></i>
                                    </a>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;

    projectOverlay.classList.remove('hidden');
    setTimeout(() => {
        projectOverlay.classList.add('opacity-100');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }, 10);
}

function closeProjectDetail() {
    if (!projectOverlay) return;
    projectOverlay.classList.remove('opacity-100');
    setTimeout(() => {
        projectOverlay.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
        // Remove hash without scrolling to anchor
        if (window.location.hash.startsWith('#project/')) {
            history.pushState("", document.title, window.location.pathname + window.location.search);
        }
    }, 500);
}

// Handle routing
window.addEventListener('hashchange', () => {
    const hash = window.location.hash;
    if (hash.startsWith('#project/')) {
        const projectId = hash.replace('#project/', '');
        showProjectDetail(projectId);
    } else if (hash === '#projects' || hash === '') {
        closeProjectDetail();
    }
});

// Initial load check
if (window.location.hash.startsWith('#project/')) {
    const projectId = window.location.hash.replace('#project/', '');
    showProjectDetail(projectId);
}

closeOverlayBtn?.addEventListener('click', closeProjectDetail);

// Close on Escape key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !projectOverlay?.classList.contains('hidden')) {
        closeProjectDetail();
    }
});

renderProjects();
