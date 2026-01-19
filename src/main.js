import './style.css'

// 1. Dark Mode Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or system preference
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
} else {
    htmlElement.classList.remove('dark');
}

themeToggle?.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    if (htmlElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
});

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
