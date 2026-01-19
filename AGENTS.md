# Agent Instructions - Personal Website (Vite + Tailwind)

This is a modern, professional portfolio for Ryan Ma, built using **Vite**, **Tailwind CSS**, and **Vanilla JavaScript**. It follows a standard modern web development structure.

## 1. Build / Dev Commands

This project uses `npm` for task management.

- **Development:** `npm run dev` (Starts the Vite dev server with Hot Module Replacement).
- **Build:** `npm run build` (Generates a production-ready optimized build in the `dist/` folder).
- **Preview Build:** `npm run preview` (Locally serves the production build).
- **Lint:** N/A (Manual review; follow the style guide below).

## 2. Project Structure

- `index.html`: Main entry point (Vite handles bundling).
- `src/main.js`: Primary logic entry point (Imports CSS and handles interactions).
- `src/style.css`: Global styles including Tailwind directives and custom components.
- `public/`: Static assets (Profile image, CV) that are served as-is from the root.
- `tailwind.config.js`: Custom theme configuration (Colors, fonts, animations).

## 3. Code Style Guidelines

### General Principles
- **Indentation:** 2 or 4 spaces (consistent with existing files).
- **Modern JS:** Use ES6+ features (arrow functions, template literals, optional chaining).
- **Mobile-First:** Use Tailwind responsive prefixes (`md:`, `lg:`) for all layouts.

### Dark Mode
- **Strategy:** Class-based (`dark`).
- **Implementation:** Use `dark:` utility classes in HTML. The logic is handled in `main.js`.
- **Colors:** Transition from `slate-50` (Light) to `slate-900` (Dark).

### Visual Style: "Urban Professional"
- **Typography:** Inter (sans-serif) for all text.
- **Glassmorphism:** Use the `.glass` utility class for high-end blurred backgrounds.
- **Animations:** Use the `animate-fade-in-up` utility for section reveals.
- **Components:** Maintain the vertical timeline and grid-based project cards.

## 4. Key IDs & Interactions

- `#theme-toggle`: Button for switching between light and dark modes.
- `#navbar`: Transitions from transparent to blurred background on scroll.
- `#mobile-menu`: Handled via the `.open` class in CSS.
- `#experience`, `#projects`, `#skills`: Section anchors for ScrollSpy.

## 5. Contact & Personal Info

- **Name:** Ma Tianhao (Ryan)
- **Email:** u3664746@connect.hku.hk
- **Phone:** +852 84963497
- **Base:** Hong Kong
- **Education:** The University of Hong Kong (Master's), Chang’an University (Bachelor's).

---
*Last Updated: January 19, 2026*
