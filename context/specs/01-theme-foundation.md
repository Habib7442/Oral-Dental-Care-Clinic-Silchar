# Unit 01: Global Theme & Foundation Layout

## Goal
Establish the unified brand-grade color token system, layout typography fonts, root page architecture, and responsive header/footer shells.

---

## Design

* **Color Tokens (Tailwind v4 `@theme inline`)**:
  * Plum: `plum-900` (`#2A0E26`), `plum-800` (`#3E1635`), `plum-700` (`#4E1C44`), `plum-600` (`#5E2453`), `plum-500` (`#742C66`), `plum-100` (`#F1E7EE`).
  * Gold: `gold-700` (`#8A6A24`), `gold-600` (`#B2873B`), `gold-500` (`#C9A24B`), `gold-200` (`#ECDCAE`).
  * Neutrals: `porcelain` (`#F6F4F7`), `ink-900` (`#1B1320`), `ink-700` (`#3A3340`), `ink-500` (`#6B6472`), `ink-300` (`#D6D2DA`).
* **Fonts (`next/font/google`)**:
  * Display: **Fraunces** (serif) linked to CSS variable `--font-serif`.
  * Body & UI: **Inter** (sans-serif) linked to CSS variable `--font-sans`.
* **Components Styling**:
  * Navigation: Backdrop blur glass (`backdrop-blur-md`), dark solid transitioning.
  * Footer: Deep `plum-900` background, custom gold borders.

---

## Implementation

### 1. Tailwind v4 Properties (`app/globals.css`)
* Overwrite / extend `@theme inline` to declare the full set of custom colors and typography:
  ```css
  @theme inline {
    --color-plum-100: #F1E7EE;
    --color-plum-500: #742C66;
    --color-plum-600: #5E2453;
    --color-plum-700: #4E1C44;
    --color-plum-800: #3E1635;
    --color-plum-900: #2A0E26;
    
    --color-gold-200: #ECDCAE;
    --color-gold-500: #C9A24B;
    --color-gold-600: #B2873B;
    --color-gold-700: #8A6A24;
    
    --color-porcelain: #F6F4F7;
    --color-ink-300: #D6D2DA;
    --color-ink-500: #6B6472;
    --color-ink-700: #3A3340;
    --color-ink-900: #1B1320;
    
    --font-serif: var(--font-serif);
    --font-sans: var(--font-sans);
  }
  ```
* Bind default system background/foreground styles to `:root`:
  ```css
  :root {
    --background: var(--color-porcelain);
    --foreground: var(--color-ink-900);
    --card: #ffffff;
    --card-foreground: var(--color-ink-900);
    --border: var(--color-ink-300);
    --primary: var(--color-plum-800);
    --primary-foreground: #ffffff;
    --radius: 0.75rem;
  }
  ```

### 2. Fonts Configuration (`app/layout.tsx`)
* Replace Geist fonts with self-hosted **Fraunces** and **Inter** configurations from Google Fonts.
* Map CSS class lists utilizing `cn` in `RootLayout`.

### 3. Global Responsive Navigation (`components/sections/navigation.tsx`)
* Construct a client component (`"use client"`) using simple scroll detection to swap states:
  * Top of Page: Transparent ground, ink text, gold accents.
  * Scrolled: Solid Plum (`bg-plum-800`) background, porcelain/white text, gold-200 anchors.
* Core Elements:
  * Brand link pointing to `/` ("Oral & Dental Care").
  * Desktop navigation items (About, Services, Reviews, FAQs, Contact).
  * Direct action anchors: Pill-style call CTA button (`tel:+919435492181`) and a "Book Appointment" request button.
  * Mobile layout: Responsive hamburger toggle sliding out a full-height menu overlay on mobile screens.

### 4. Clinic Brand Footer (`components/sections/footer.tsx`)
* Renders a solid multi-column footer in `bg-plum-900` featuring:
  * Canonical NAP segment: Landmark ("near Rahul Medicos"), postal details.
  * Hours segment mapping Monday to Saturday timings (IST hours) with a beautiful visual representation.
  * Category service links for local crawling.

---

## Dependencies
* None.

---

## Verify when done
- [ ] Tailwind variables compile and style elements correctly (`text-plum-800`, `bg-gold-500`).
- [ ] Fonts load correctly with zero layout shift on compilation.
- [ ] Navigation transitions smoothly on scroll and matches the mobile mockups.
- [ ] No TypeScript errors when running `npx tsc --noEmit`.
- [ ] Successful local compilation via `npm run build`.
