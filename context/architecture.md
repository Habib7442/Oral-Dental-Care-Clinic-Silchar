# Architecture Context

## Stack

| Layer | Technology | Role |
| :--- | :--- | :--- |
| **Framework** | Next.js 16.2.6 (App Router) + TypeScript | React Server Components by default; static rendering (SSG/ISR), metadata APIs, and type-safe Routing. |
| **Styling** | Tailwind CSS v4 + PostCSS | Custom CSS variable mapping, utility utility styles, custom fonts (Fraunces & Inter), and high-fidelity Plum + Gold tokens. |
| **Animation** | Framer Motion | Fluid micro-animations, scroll-reveals, custom before/after drag-control logic. |
| **UI Kit** | Shadcn/ui & Radix UI | Standardized components (modals, inputs, triggers, accordions). |
| **Form Routing** | Next.js Server Actions + Zod | Secure, type-safe payload validation and server processing. |
| **Email Delivery** | Resend or SMTP | Direct mailing of patient appointment requests to the clinic's care mailbox. |

## System Boundaries

- `app/` — **Routing & Page Shells**. Layout structures, page templates, dynamic slugs, and API routes.
- `components/` — **Reusable Presentation Units**. Structured into `/ui` (primitive design-system pieces) and `/sections` (composed homepage and inner-page components).
- `lib/` — **Pure Computed Logic & Helpers**. Specific modules for Framer Motion configs (`motion.ts`), business hours evaluations (`hours.ts`), dynamic structured metadata schemas (`seo.ts`), and form schemas.
- `public/` — **Static Content**. Image assets, icons, customized before/after consented files, search graphics, and favicon matrices.

## Storage & Configuration Models

- **Google Business Profile (GBP)**: Canonical source for patient review texts, ratings, opening times, coordinates, and canonical address.
- **Local JSON Data (Services & FAQ configs)**: Procedure hierarchies, FAQs, pricing tiers, and metadata are maintained locally within structured static JSON or TypeScript definitions under `lib/` (allowing fast server compilation and zero latency).
- **Environment Context (`.env`)**: Mail server keys, Resend credentials, and secure endpoints. Excluded from client builds.

## Auth & Access Control

* **Patient-Facing Surfaces**: 100% public read-only access.
* **Appointment Requests**: Publicly submittable via Server Actions, protected by a honeypot mechanism and aggressive rate-limiting/spam validation.
* **Administration**: The clinic manages resources directly using standard dashboard/email interfaces or third-party CRM platforms (no custom admin interface is built in this initial phase).

## Code Invariants

1. **RSC First**: Keep all components React Server Components by default. Interactivity (such as Framer motion containers or custom forms) must be isolated into specialized Client Components prefixed with `"use client"`.
2. **Gradient-Free Boundaries**: Absolutely no linear or radial gradients are permitted anywhere in the layout. Use solid layered backgrounds and clear solid colored borders for premium elevation.
3. **No Outline-Only Icons**: Icons must be Lucide React with a solid 1.5–2px stroke-width, colored utilizing the system's exact `gold-700` (`#8A6A24`) or `ink-900`/`ink-700` HSL shades. Never mix style families.
4. **Strict Mobile Standard**: Viewports must remain 100% functional, showing zero horizontal scrollbars, at all sizes down to **320px** wide. Responsive design relies entirely on Tailwind `sm:`, `md:`, and `lg:` query states.
5. **SEO & Accessibility**: Every page must output valid, unique meta titles/descriptions, correct breadcrumb lists, and semantic HTML structure with tap targets $\ge 44$px.
