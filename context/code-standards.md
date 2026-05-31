# Code Standards

## Framework Conventions (Next.js 16.2.6)

This project runs on a modern React 19 + Next.js 16 environment. We adhere strictly to standard App Router conventions while mitigating experimental draft behaviors.

### 1. Component Rendering Archetype
* **RSC by Default**: All files under `app/` and components under `components/` are React Server Components by default to maintain lightning-fast loading speeds and pristine TTFB.
* **Isolate Interactivity**: Component files containing client triggers, drag event handling (Framer Motion), or standard state handling (`useState`, `useEffect`) must explicitly import `"use client"` at the first line. Keep them small, passing server properties down.

### 2. Next.js Metadata API
* Use the standard `export const metadata: Metadata` static definitions in layouts or pages rather than traditional HTML head insertions.
* Dynamic metadata routes (such as localized blogs or services) must use standard `export async function generateMetadata()` handlers.

---

## Styling Configurations (Tailwind CSS v4)

Tailwind v4 isolates color maps and font assets directly in CSS custom properties. 

### 1. Variables Standard
* Configure all theme modifications within `app/globals.css` utilizing the `@theme inline` block. 
* Do not write inline CSS properties or inline hexadecimal numbers inside code files. Reference colors strictly via color classes (`text-plum-800`, `bg-gold-500`, `border-ink-300`).

### 2. Gradient Prohibitions
* Use absolutely solid background layers. Linear gradients, radial highlights, or decorative mesh overlays are barred. Use distinct 1px solid borders (`border-ink-300` or `border-plum-600`) to elevate layered containers.

---

## TypeScript & Code Validation

* **Strict Mode**: Maintain pure type-safety. Implicit `any` typing is rejected.
* **Typing Interfaces**: Specify structured interfaces for all component arguments.
  ```typescript
  interface ServiceCardProps {
    title: string;
    description: string;
    iconName: string;
    slug: string;
  }
  ```
* **Payload Validation**: Any public data submission (such as the Booking Request Form) must utilize a Zod validation scheme, evaluating incoming streams before action handling.

---

## Folder & Component Structures

1. **Folder Conventions**:
   * `app/` owns routing and page layout architecture.
   * `components/ui/` stores raw primitives (buttons, inputs, spinners).
   * `components/sections/` owns structured homepage sections and visual widgets.
   * `lib/` houses standard algorithms, animation details, and form schemas.

2. **File Naming Systems**:
   * Components: kebab-case (e.g. `booking-form.tsx`, `service-grid.tsx`).
   * Utility libraries/helpers: standard camelCase (e.g. `motion.ts`, `hours.ts`).
