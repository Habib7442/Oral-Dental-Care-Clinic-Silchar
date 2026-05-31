# Dr. Devarati Roy's Oral & Dental Care Clinic

A brand-grade, high-performance marketing and appointment priority booking application designed for **Dr. Devarati Roy Dutta Choudhury (BDS)'s Oral & Dental Care Clinic** in Silchar, Assam. 

This website translates the clinic's stellar local reputation (**4.9★ rating from 248+ Google reviews**) into a custom, high-end digital presence—built with solid, elite clinical aesthetics (Auburn Plum & Warm Gold theme), modern typography, tactile paper-noise layering, and type-safe Framer Motion physics.

---

## ✦ Key Features

- **Priority Booking Engine**: Interactive, responsive form allowing patients to request clinical priority slots by capturing Patient Name, 10-digit Phone, Preferred Treatment, and Date with full state transitions and reception screens.
- **Scroll-Aware Persistent Navigation**: Custom global header that dynamically adjusts text and element colors based on scroll states (porcelain theme vs. deep plum solid backdrop) to guarantee readability at all times.
- **Always-Visible Contact Sub-bar**: Persistent, interactive contact sub-bar displaying address coordinates and clickable hotline links, designed specifically to stack beautifully on mobile viewports rather than hiding.
- **Sterile & Trust Moats Stripe**: bottom-anchored, viewport-scroll triggered social-proof grid highlighting the clinic's 100% sterile facility protocols, 25+ years of care, and gentle dental approach.
- **Accessible Shadcn Sheet Menu**: Mobile layout uses an isolated, accessible `<Sheet>` menu drawer at `z-[100]`, pre-configured with ARIA descriptions to satisfy strict Radix UI specifications and avoid console warnings.
- **Premium Tactile Backdrops**: Enhanced Porcelain page canvas utilizing performant vector fractal-noise filters to create a delicate paper fiber texture.

---

## 🎨 Premium Brand Aesthetics

The application adheres to a strict, non-gradient, AAA-contrast color system registered within Tailwind CSS:

* **Brand Plum (`#3E1635`)**: Auburn plum used for primary buttons, deep headings, footer blocks, and mobile drawer viewport.
* **Brand Gold (`#C9A24B`)**: Warm gold highlight accents for active focus states, icons, and display subtitles.
* **Porcelain (`#F6F4F7`)**: Pristine, clinical off-white canvas base layer providing eye comfort.
* **Typography**:
  * **Fraunces**: Elegant display Serif font used for primary page titles and display headings.
  * **Inter**: High-legibility Sans font used for standard descriptions, inputs, and tabular tags.

---

## 📂 Core Directory Structure

```text
├── app/
│   ├── globals.css          # Tailwind CSS v4 variables & custom paper noise styles
│   ├── layout.tsx           # Base HTML layout wrapping dynamic SEO configurations
│   └── page.tsx             # Entry page displaying navigation, hero, and footer structures
├── components/
│   ├── sections/
│   │   ├── navigation.tsx   # Scroll-aware global header and Sheet mobile menu
│   │   ├── hero.tsx         # Flagship two-column responsive Hero section & booking form
│   │   └── footer.tsx       # Typography-aligned footer with clickable Google Maps anchors
│   └── ui/                  # Shadcn UI primitives (Button, Card, Sheet, etc.)
├── context/
│   ├── project-overview.md  # Detailed business goals and scope definitions
│   └── progress-tracker.md  # Incremental completion statuses and architectural logs
├── lib/
│   ├── utils.ts             # Tailwind class merging utility
│   └── seo.ts               # Centralized Metadata and JSON-LD Structured Data generator
└── public/
    └── assets/              # Premium image assets and cutout silhouettes
```

---

## 🚀 Getting Started

### 1. Installation

Install all project dependencies:
```bash
npm install
```

### 2. Run Locally

Fire up the Turbopack-powered Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application in action.

### 3. Verification & Type Safety

Confirm standard compilation and complete TypeScript safety:
```bash
npx tsc --noEmit
```
This routine checks all properties, elements, Framer Motion easings, and imports, ensuring zero compile-time error states.
