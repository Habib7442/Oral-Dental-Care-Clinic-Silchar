# UI Context

## Theme

The design language represents an agency-grade premium marketing site. It leverages a sophisticated, medical-grade aesthetic utilizing a deep **Plum (Aubergine) + Warm Gold** palette.

* **Hard Constraint**: Absolute solid colors only—**strictly no gradients**.
* **Solid Overlays & Depth**: Visual elevation is achieved by layering solid panels, employing clean 1px solid borders, and adding low-spread, plum-tinted shadows rather than standard black shadows.
* **Contrast Compliance**: Every text element must meet WCAG 2.2 contrast standards (AAA for primary copy, AA minimum for interactive states).

## Colors

These color tokens must be registered as CSS variables within the Tailwind CSS configurations. Hardcoded hex values are prohibited within standard component code.

### 1. Brand Plum
| Token | Hex Value | Semantic Usage |
| :--- | :--- | :--- |
| `plum-900` | `#2A0E26` | Deepest background panels, footers, modal overlays. |
| `plum-800` | `#3E1635` | **Primary Brand Color** - main headers, button bases, hero ground. |
| `plum-700` | `#4E1C44` | Hover states for primary elements. |
| `plum-600` | `#5E2453` | Elevated cards, inner borders on dark grounds. |
| `plum-500` | `#742C66` | Secondary interactive links on light surfaces. |
| `plum-100` | `#F1E7EE` | Soft tint section backgrounds. |

### 2. Brand Gold (Accent)
| Token | Hex Value | Semantic Usage |
| :--- | :--- | :--- |
| `gold-700` | `#8A6A24` | **Small Text Readability** - small typography on light grounds (passes contrast). |
| `gold-600` | `#B2873B` | Intermediate headers and small decorative accents. |
| `gold-500` | `#C9A24B` | **Core Accent** - large fills, icons, active borders, focus outlines. |
| `gold-200` | `#ECDCAE` | Soft badge backgrounds, subtle text highlights on dark fields. |

### 3. Neutrals (Plum-Tinted)
| Token | Hex Value | Semantic Usage |
| :--- | :--- | :--- |
| `porcelain` | `#F6F4F7` | **Core Page Background** - cool off-white ground (never clinical white). |
| `ink-900` | `#1B1320` | Primary body text on light backgrounds (AAA contrast). |
| `ink-700` | `#3A3340` | Secondary copy, sub-labels, and metadata fields. |
| `ink-500` | `#6B6472` | Muted descriptions, helper blocks, captions. |
| `ink-300` | `#D6D2DA` | Standard border separator lines. |
| `white` | `#FFFFFF` | Core card tiles and white elevated blocks. |

---

## Typography

We leverage self-hosted Google Fonts styled via `next/font` for layout-shift-free loading.

| Font Family | CSS Variable | Primary Weight Range | Semantic Usage |
| :--- | :--- | :--- | :--- |
| **Fraunces** | `--font-serif` | `400` / `500` / `600` | Primary display, hero headers, H1, H2 page titles (editorial & premium). |
| **Inter** | `--font-sans` | `400` / `500` / `600` | UI text, body copy, form fields, callouts, and numerical tables (highly legible). |

---

## Border Radius & Spacing

* **Containers & Cards**: `rounded-2xl` (16px) or `rounded-3xl` (24px) for modern, smooth containers.
* **Interactive Elements (CTAs/Inputs)**: `rounded-full` (pill shape) for primary buttons; `rounded-xl` (12px) for form inputs.
* **Spacing Standard**: Built on a strict 4px grid system:
  * Section padding: Mobile `py-14` (56px) to `py-18` (72px) | Desktop `py-24` (96px) to `py-32` (128px).
  * Component gaps: `gap-4` (16px) or `gap-6` (24px).

---

## Layout Patterns

* **Global Navigation**: Transparent header overlaying the hero section on entry $\rightarrow$ transitioning to solid `#3E1635` with height shrinkage upon scrolling. Features sticky Call Now and Book buttons.
* **Sticky Mobile Bar**: Positioned at the bottom viewport on devices below 768px (`fixed bottom-0 left-0 right-0 z-50`), structured as a 3-part layout (Call / WhatsApp / Book Request Form).
* **Double-Column Sections**: Home segments structured with alternating display blocks—editorial text column paired with high-quality media frames displaying gold solid corner overlaps.

---

## Icons & Interactivity

* **Icon Sets**: Unified Lucide React usage. Stroke-width must remain **1.5px** to **2px** for a refined, premium appearance.
* **Micro-interactions (Framer Motion)**:
  * Button Hover: `whileHover={{ y: -3 }}` with transition duration `0.25s` and ease-out expo.
  * Tap Response: `whileTap={{ scale: 0.97 }}`.
  * Entrance reveals: All scroll-revealed elements fade up exactly $24$px once (`viewport={{ once: true }}`).
