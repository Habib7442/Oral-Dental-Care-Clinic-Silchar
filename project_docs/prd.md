# Product Requirements Document (PRD)
## Oral and Dental Care Clinic — Premium Website

**Prepared for:** Dr. Devarati (Oral and Dental Care Clinic), Silchar, Assam
**Project type:** Brand-grade marketing website with online appointment requests and local SEO foundation
**Quality bar:** Flagship / "fifty-thousand-dollar" agency-grade build
**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion · Vercel
**Document version:** 1.0
**Date:** 31 May 2026
**Status:** Draft for client approval

---

## Table of Contents

1. Document Control
2. Executive Summary
3. Project Goals & Success Metrics
4. Business Background
5. Market & Competitive Analysis (Silchar / Barak Valley)
6. Target Audience & Personas
7. Brand Strategy & Positioning
8. Design System
9. Information Architecture & Sitemap
10. Page-by-Page Specifications
11. Animation & Interaction Design (Framer Motion)
12. Functional Requirements & Features
13. Technical Architecture
14. Local SEO Strategy
15. Performance & Core Web Vitals
16. Accessibility (WCAG 2.2)
17. Analytics, Tracking & Conversion
18. Content Strategy & Copy Guidelines
19. Compliance, Privacy & Medical/Legal
20. Project Phases, Milestones & Timeline
21. Risks & Assumptions
22. Future Enhancements / Roadmap
23. Appendix (NAP, keywords, schema, sources)

---

## 1. Document Control

| Field | Detail |
|---|---|
| Product | Oral and Dental Care Clinic website |
| Owner | Dr. Devarati (Clinic Owner / Lead Dentist) |
| Primary market | Silchar, Cachar district, Barak Valley, Assam |
| Primary languages | English (default), Bengali (priority), Hindi, Assamese (phase 2) |
| Approval required from | Clinic owner before development begins |
| Out of scope (this PRD) | Website build/code, brand logo design files, photography shoot, paid ad campaigns (covered as separate work orders) |

> **Open items to confirm with the client** are flagged inline as **[CONFIRM]** throughout. None of them block design; they refine accuracy of copy and listings.

---

## 2. Executive Summary

Oral and Dental Care Clinic, led by **Dr. Devarati**, is one of the highest-rated dental practices in Silchar — **4.9★ from 248+ Google reviews**. Despite this exceptional real-world reputation, the clinic's digital presence is currently limited to a thin, auto-generated UENI microsite and third-party directory listings (QuickoBook, Lybrate). Meanwhile, direct competitors (Apollo Dental Silchar, Dento Derma, Dental World, The Dental Tree) operate dedicated websites and actively publish local-SEO content.

**The opportunity:** the clinic already has the social proof that most practices spend years earning. A premium, fast, animated, SEO-engineered website will convert that offline trust into online visibility and booked appointments — and let the practice own search results for "dentist in Silchar" rather than ceding them to chains and aggregators.

**This site will:**
- Present the practice with a distinctive, premium identity (deep **plum + warm gold** — deliberately unlike the clinical blue/green every competitor uses).
- Make booking and calling effortless on mobile (the dominant device in this market).
- Rank in Google's Local Pack and organic results for Silchar/Cachar dental searches.
- Showcase the 4.9★ reputation as a central conversion driver.
- Feel alive and considered through tasteful **Framer Motion** animation — without sacrificing speed or accessibility.

---

## 3. Project Goals & Success Metrics

### 3.1 Business goals
1. **Generate qualified appointment requests** (calls, WhatsApp, online form) from Silchar and Barak Valley.
2. **Win local search visibility** for core dental intents in Silchar/Cachar.
3. **Establish premium brand perception** that justifies the practice's quality and supports private/cosmetic treatments.
4. **Reduce reliance on third-party aggregators** (Practo/Lybrate/QuickoBook) by owning the patient relationship.

### 3.2 Measurable success metrics (first 6 months post-launch)

| KPI | Baseline | Target |
|---|---|---|
| Google Business Profile → website clicks | low (no dedicated site) | +300% |
| Organic clicks for "dentist in Silchar" cluster | ~0 | Top-3 local pack + page-1 organic |
| Appointment requests / month (form + WhatsApp + tracked calls) | unknown | 60+ tracked conversions/month |
| Mobile Lighthouse Performance | n/a | ≥ 90 |
| Core Web Vitals (field) | n/a | All "Good" (LCP < 2.5s, INP < 200ms, CLS < 0.1) |
| Avg. engagement time | n/a | > 60s |
| Review volume growth (Google) | 248 | 350+ (via on-site review prompts) |

### 3.3 Non-goals (this release)
- E-commerce / online payments for treatment (only the small booking-confirmation fee, if integrated, is optional — **[CONFIRM]**).
- Patient portal / EMR integration.
- Multi-branch management.

---

## 4. Business Background

### 4.1 The practice
| Attribute | Detail |
|---|---|
| Clinic name | **Oral and Dental Care Clinic** |
| Lead dentist | **Dr. Devarati** (Dr. Devarati Ray Dutta Chowdhury, BDS) — **[CONFIRM full name + qualifications/registration no.]** |
| Address | Lochan Bairagi Rd, Bilpar, Kanakpur, Silchar, Cachar, Assam **788001** (landmark: near Rahul Medicos) — **[CONFIRM exact street: some listings say Radhamadhab Road]** |
| Phone | **+91 94354 92181** |
| WhatsApp | **[CONFIRM]** (recommended: same number, WhatsApp Business) |
| Email | **[CONFIRM]** (recommended: a branded address, e.g. care@oraldentalsilchar.in) |
| Hours | Mon–Sat **10:00 AM – 8:00 PM**; Sunday closed. Dr. Devarati's consult slots commonly 10:00 AM–1:00 PM & 5:00 PM–7:00 PM |
| Google rating | **4.9★ / 248+ reviews** |
| Coordinates | 24.8167549, 92.8001821 |
| Current site | oral-and-dental-care.ueniweb.com (to be replaced) |

### 4.2 Services (initial menu — **[CONFIRM/expand with client]**)
Based on the practice profile and standard scope for a leading Silchar general + cosmetic practice:

- **Preventive & General:** check-ups, scaling & polishing, fillings (tooth-coloured composite), fluoride/sealants
- **Restorative:** root canal treatment (RCT), crowns & bridges (zirconia/ceramic/PFM)
- **Surgical:** extractions, wisdom-tooth/impaction surgery, minor oral surgery
- **Prosthetic:** complete & partial dentures
- **Cosmetic:** teeth whitening, smile design, veneers/laminates
- **Orthodontics:** braces (metal/ceramic), clear aligners — **[CONFIRM if offered in-house or via visiting specialist]**
- **Implants:** single/multiple dental implants — **[CONFIRM]**
- **Paediatric dentistry:** child-friendly check-ups, fillings, habit guidance
- **Emergency dental care:** toothache, trauma, swelling

### 4.3 Unique selling points (to lead with)
1. **4.9★ from 248+ patients** — among the most-reviewed practices in Silchar.
2. **Personal, doctor-led care** — patients see Dr. Devarati, not a rotating panel.
3. **Comfortable, modern, gentle/"painless" approach** — strong recurring theme in local reviews.
4. **Central, accessible location** in Bilpar/Kanakpur.

---

## 5. Market & Competitive Analysis (Silchar / Barak Valley)

### 5.1 Landscape
Silchar has an active, competitive dental market. Several practices already invest in web + SEO; the aggregators (Practo, Lybrate, Justdial, QuickoBook, shuru.co.in, dentistinsider.in) dominate many search results.

| Competitor | Web presence | Approx. rating | SEO posture | Takeaway for us |
|---|---|---|---|---|
| **Apollo Dental Silchar** (Meherpur) | Strong site + blog | 4.9 / 339 | Aggressive local content targeting Barak Valley + NE India | Hardest organic competitor; brand-backed. We win on *independent, doctor-led, top-rated local* positioning |
| **Dento Derma** (Dr. Ashim Roy) | Modern Next.js site | 4.9 | Service-rich, cosmetic + skin angle | Match their polish; exceed on speed, reviews & clarity |
| **Dental World** (Dr. Tonmoy Roy) | Own site, weak/placeholder copy | — | Thin content | Easy to outrank with real content |
| **The Dental Tree** (Dr. P. Dey) | Listed; specialist credentials | 4.9 / 144 | Moderate | Compete on UX + reviews |
| **Shine & Smile Dento Care** (Dr. H. Rahman) | Directory-led | 5.0 / 411 | Review-heavy | Their strength is reviews; ours is brand + site quality |

### 5.2 Strategic insight
- **Whitespace in visual identity:** every competitor uses clinical **blue/green/teal**. A confident **plum + gold** identity instantly differentiates and signals premium, boutique care.
- **Whitespace in web quality:** most local sites are template-grade. A genuinely premium, animated, fast site is a defensible differentiator.
- **Our biggest weapon is the review wall** (4.9/248). Few independents match it. We will make reviews a first-class, recurring element.

---

## 6. Target Audience & Personas

Primary device is **mobile** (Android-heavy, mid-range, variable network). Design and performance budgets assume mobile-first, data-conscious users. Bengali is the dominant spoken language; English is the default reading/search language for many, but Bengali content materially expands reach.

| Persona | Who | Goals | What converts them |
|---|---|---|---|
| **"Toothache today" Tapan** | Working adult with acute pain | Fast relief, nearby, open now | One-tap call/WhatsApp, hours, "emergency" CTA, map |
| **"Family planner" Rina** | Mother booking for kids/parents | Trust, gentleness, cleanliness | Reviews, doctor bio, paediatric info, photos |
| **"Smile upgrade" Sneha** | 20–35, cosmetic interest | Whitening/aligners/veneers, discreet, results | Before/after, cosmetic pages, premium feel |
| **"Diligent senior" Mr. Dutta** | 55+, dentures/RCT/crowns | Clarity, reassurance, accessibility | Large type, simple nav, phone-first, directions |
| **Out-of-town (Barak Valley)** | Hailakandi/Karimganj patients | Worth the travel | Specialist services, reviews, parking/landmarks |

**Accessibility note:** large, tappable controls; high-contrast text; phone number persistent; works on slow 4G.

---

## 7. Brand Strategy & Positioning

### 7.1 Positioning statement
> For people in Silchar and the Barak Valley who want dental care they can genuinely trust, **Oral and Dental Care Clinic** is the top-rated, doctor-led practice that pairs gentle, modern dentistry with a calm, premium experience — proven by 4.9 stars from hundreds of neighbours.

### 7.2 Brand personality
- **Trustworthy** without being sterile
- **Premium** without being intimidating or expensive-feeling
- **Warm & human** (doctor-led, personal)
- **Modern & precise** (clean, confident, well-engineered)

### 7.3 Brand voice
- Clear, warm, plain-spoken. Short sentences. Reassuring, never fear-based.
- Patient-first ("you/your smile"), not jargon-first.
- Bilingual-ready phrasing (simple English that translates cleanly to Bengali).

### 7.4 Tagline options (for client selection)
1. "Care that makes you smile."
2. "Gentle dentistry. Lasting smiles."
3. "Silchar's most-loved dental care."
4. "Your smile, in expert hands."

---

## 8. Design System

> **Hard constraints (client-mandated):** solid colors only — **no gradients**; and **avoid the common cream / green / blue** dental palette. The system below uses **deep plum (aubergine) + warm gold**, grounded by plum-tinted neutrals.

### 8.1 Color palette

**Brand — Plum / Aubergine (primary)**
| Token | Hex | Use |
|---|---|---|
| `plum-900` | `#2A0E26` | Deepest sections, footer, overlays |
| `plum-800` | `#3E1635` | **Primary brand** — headers, hero ground, primary buttons |
| `plum-700` | `#4E1C44` | Hover state of primary surfaces |
| `plum-600` | `#5E2453` | Cards on dark, secondary fills |
| `plum-500` | `#742C66` | Interactive/links on light when needed |
| `plum-100` | `#F1E7EE` | Soft tint section background (solid, not gradient) |

**Accent — Warm Gold**
| Token | Hex | Use |
|---|---|---|
| `gold-500` | `#C9A24B` | **Primary accent** — large fills, icons, dividers, focus rings, CTA accents |
| `gold-600` | `#B2873B` | Gold used at smaller sizes on light |
| `gold-700` | `#8A6A24` | **Gold as small text** (passes contrast on white) |
| `gold-200` | `#ECDCAE` | Subtle accent tint, badges |

**Neutrals — plum-tinted ink (NOT cream)**
| Token | Hex | Use |
|---|---|---|
| `ink-900` | `#1B1320` | Body text on light |
| `ink-700` | `#3A3340` | Secondary text |
| `ink-500` | `#6B6472` | Muted text, captions |
| `ink-300` | `#D6D2DA` | Borders, dividers |
| `porcelain` | `#F6F4F7` | **Page surface** (cool neutral, not cream) |
| `white` | `#FFFFFF` | Cards, elevated surfaces |

**Functional**
| Token | Hex | Use |
|---|---|---|
| `error` | `#B3261E` | Form errors |
| `success` | `#3E1635` + gold check | Success shown via plum/gold (avoids green per brand rule) |

**Usage ratio (60-30-10):** ~60% porcelain/white surface · ~30% plum · ~10% gold accent. Gold is a jewel, not a background. **No gradients anywhere** — use solid blocks, solid borders, and layered solid panels for depth.

**Accessibility / contrast rules**
- Body text: `ink-900` on `porcelain`/`white` (passes AAA).
- On `plum-800` ground, text is `white`/`porcelain`; muted text uses `gold-200`.
- `gold-500` is **decorative/large-only** on white (fails small-text contrast). For gold-colored small text use `gold-700 #8A6A24`.
- All interactive elements have a visible focus ring (`gold-500`, 2px offset).

### 8.2 Typography
- **Display / headings:** **Fraunces** (variable serif) — premium, characterful, editorial. Weights 400–600; optical sizing for large headers.
- **Body / UI:** **Inter** (variable sans) — crisp, legible on mobile, excellent at small sizes.
- **Numerals:** Inter tabular for phone numbers, hours, stats.
- **Bengali (phase 2):** **Noto Sans Bengali** / **Noto Serif Bengali** for localized pages.
- Load via `next/font` (self-hosted, zero layout shift). Subset Latin; preload display weight used in hero.

**Type scale (fluid, `clamp()`)**
| Role | Size (mobile → desktop) | Font / weight |
|---|---|---|
| Display (hero) | 2.5rem → 4.5rem | Fraunces 500 |
| H1 | 2rem → 3rem | Fraunces 500 |
| H2 | 1.5rem → 2.25rem | Fraunces 500 |
| H3 | 1.25rem → 1.5rem | Inter 600 |
| Body | 1rem → 1.125rem | Inter 400 |
| Small/caption | 0.875rem | Inter 500 |
| Eyebrow/label | 0.75rem, tracked +0.12em, uppercase | Inter 600, `gold-700` |

### 8.3 Spacing, grid & radius
- **Spacing scale (4px base):** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- **Grid:** 12-col desktop (max content width 1200–1280px, gutters 24px), 4-col mobile. Generous section padding (96–128px desktop / 56–72px mobile) for a premium, uncramped feel.
- **Radius:** cards 16px; buttons 999px (pill) or 12px (choose one system-wide — recommend pill for CTAs, 12px for cards); images 16–24px.
- **Elevation:** soft, low-spread shadows tinted with plum (`rgba(27,19,32,0.08)`), never harsh black.

### 8.4 Iconography & imagery
- **Icons:** Lucide (consistent 1.5–2px stroke). Gold or ink, never multicolor.
- **Photography direction:** real clinic + real patients/team (authentic > stock). Warm, clean, well-lit; people smiling; instruments shown sparingly and non-clinically. Treat plum/gold as the *frame* (borders, captions, overlays at solid opacity), not a filter. **Recommend a half-day local photo shoot** (reception, chair, Dr. Devarati portrait, team, exterior/landmark). Until then, use carefully chosen licensed images that match the warm-premium tone (avoid generic "stock dentist" clichés).
- **Before/after:** consented cosmetic cases (whitening/smile design) — major conversion asset **[CONFIRM availability + consent]**.

### 8.5 Core components (inventory)
- Top nav (transparent-on-hero → solid `plum-800` on scroll), with persistent **Call** + **Book** buttons
- Sticky mobile action bar (Call · WhatsApp · Book) — always reachable
- Buttons: Primary (plum fill / gold text or white), Secondary (gold fill / plum text), Ghost (outline)
- Service card (icon, title, one-line, link)
- Doctor profile card
- Review/testimonial card + aggregate rating badge ("4.9 ★ · 248 reviews")
- Stat counter (animated)
- Accordion (FAQ)
- Before/after slider
- Appointment form
- Map embed + directions block
- Trust strip (rating, years, patients, hygiene)
- Footer (NAP, hours, services, map, social)

---

## 9. Information Architecture & Sitemap

```
/                     Home
/about                About the Clinic & Dr. Devarati
/services             Services overview (hub)
  /services/[slug]    Individual service pages (RCT, implants, braces,
                      teeth-whitening, crowns-bridges, dentures,
                      kids-dentistry, extractions, emergency, checkup-cleaning)
/smile-gallery        Before/After + clinic gallery
/reviews              Patient reviews (Google-sourced + on-site)
/contact              Contact, map, directions, hours
/book                 Appointment request (also a modal site-wide)
/blog                 Dental health blog (local SEO engine)
  /blog/[slug]        Articles
/faq                  Frequently asked questions
                      Utility: /privacy, /terms, /sitemap.xml, /robots.txt
                      Phase 2: /bn (Bengali locale root)
```

**Global nav (desktop):** Home · About · Services ▾ · Smile Gallery · Reviews · Blog · Contact + **[Call]** **[Book Appointment]**
**Footer nav:** Services list · Quick links · NAP block · Hours · Map · Socials · Legal.

---

## 10. Page-by-Page Specifications

> Every page: unique `<title>` + meta description, H1, breadcrumb (where nested), relevant schema, and at least one primary CTA. Section order below is top → bottom.

### 10.1 Home
1. **Hero** — plum-800 ground; eyebrow ("Silchar · Bilpar"), display headline ("Gentle dentistry, lasting smiles"), subcopy, **[Book Appointment]** + **[Call now]**; floating rating badge "4.9★ · 248 reviews"; hero image (Dr. Devarati / clinic) with gold corner accent. Subtle entrance animation.
2. **Trust strip** — 4 animated stats: 4.9★ rating · 248+ reviews · X years · 10,000+ smiles **[CONFIRM numbers]**.
3. **Services preview** — 6–8 service cards in a staggered grid → link to /services.
4. **Why choose us** — 3–4 pillars (doctor-led, gentle/painless, modern, top-rated) with icons.
5. **Meet Dr. Devarati** — portrait + short bio + credentials → /about.
6. **Reviews** — carousel of real Google reviews + aggregate badge → /reviews.
7. **Before/After teaser** → /smile-gallery.
8. **Location & hours** — map, address, hours, directions, parking/landmark.
9. **Final CTA band** — plum-900, gold accent, booking + call.
10. **Footer.**

### 10.2 About
- Clinic story & philosophy; Dr. Devarati bio, qualifications, registration; values; clinic tour photos; hygiene & sterilization standards; team (if any). Schema: `Dentist`/`Person`.

### 10.3 Services (hub) + service detail
- **Hub:** grouped (Preventive, Restorative, Cosmetic, Surgical, Ortho, Kids, Emergency) with cards.
- **Detail template (per service):** hero (service name + benefit), "what it is", "who it's for", "what to expect" (steps), pain/comfort note, FAQs (accordion), related services, CTA. Schema: `MedicalProcedure` + `FAQPage`. These pages are core **SEO landing pages** for "[service] in Silchar".

### 10.4 Smile Gallery
- Before/after slider grid (consented), filterable by treatment; lightbox; consent disclaimer.

### 10.5 Reviews
- Aggregate badge; curated featured reviews; embedded Google reviews; "Leave a review" CTA (links to GBP). Schema: `Review`/`AggregateRating` (only for genuine, on-site-displayed reviews per Google policy).

### 10.6 Contact
- NAP, click-to-call, WhatsApp, embedded Google Map, directions CTA, hours table (with "Open now" state), appointment form, landmark guidance ("near Rahul Medicos, Bilpar").

### 10.7 Book (page + modal)
- Fields: name, phone (required), preferred service, preferred date/time, message, consent checkbox. Submit → email/WhatsApp/CRM (see §12). Success state (plum/gold), with "we'll confirm by phone" + instant call/WhatsApp fallback.

### 10.8 Blog
- Card index + article template (author Dr. Devarati, reading time, share, related). Local + evergreen dental topics (see §14.6).

### 10.9 FAQ
- Global FAQs (cost, insurance, emergencies, first visit, kids, payment modes incl. UPI/cash) with `FAQPage` schema.

---

## 11. Animation & Interaction Design (Framer Motion)

Animation is a core requirement and a key driver of the premium feel. It must be **tasteful, fast, purposeful, and accessible** — motion supports comprehension and delight, never blocks content or hurts performance.

### 11.1 Principles
- **Purposeful:** entrance reveals guide the eye; micro-interactions confirm actions.
- **Fast & subtle:** durations 0.2–0.6s; gentle easing; small travel distances (16–32px).
- **Performant:** animate only `transform` and `opacity` (GPU-friendly). Never animate layout-affecting properties on scroll.
- **Accessible:** fully honor `prefers-reduced-motion` — replace movement with simple fades or no motion.
- **Once, not noisy:** scroll reveals fire once (`viewport={{ once: true }}`).

### 11.2 Global easing & tokens
```ts
// lib/motion.ts
export const ease = [0.22, 1, 0.36, 1] as const; // "easeOutExpo"-style
export const dur = { fast: 0.2, base: 0.4, slow: 0.6 };

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: dur.base, ease } },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: dur.base, ease } },
};
```

### 11.3 Specific animations by area
| Area | Animation | Spec |
|---|---|---|
| **Page transitions** | Fade + 12px rise on route change | `AnimatePresence` in app shell; 0.3s |
| **Hero** | Headline words/lines stagger up; image scale-in; badge gentle float | stagger 0.08; image `scaleIn`; badge `y` loop ±6px, 3s |
| **Section reveals** | `fadeUp` on enter viewport | `whileInView`, `once: true`, margin -80px |
| **Service grid** | Staggered card reveal | parent `stagger` + child `fadeUp` |
| **Stat counters** | Count-up when in view | animate number 0→value, 1.2s, `once` |
| **Buttons/cards** | Hover lift + gold underline/border | `whileHover={{ y: -3 }}`, `whileTap={{ scale: 0.98 }}` |
| **Nav on scroll** | Transparent→solid plum, shrink height | scroll-position state, 0.25s |
| **Sticky mobile bar** | Slide-up after 1 scroll viewport | `whileInView`/scroll threshold |
| **Accordion (FAQ)** | Height + opacity expand | Framer `motion` height auto / layout |
| **Before/After** | Draggable divider | `drag="x"` constrained, spring |
| **Testimonials** | Auto/again carousel slide+fade | `AnimatePresence` mode="popLayout" |
| **Marquee trust logos** (optional) | Infinite x-scroll | transform loop, pauses on hover |
| **Scroll progress / parallax** | Subtle hero image parallax | `useScroll` + `useTransform`, ≤ 8% travel |

### 11.4 Reduced motion
```tsx
const reduce = useReducedMotion();
const variants = reduce ? fadeOnly : fadeUp; // no translate when reduced
```
All looping/parallax/auto-carousel motion is **disabled** under reduced motion; content remains fully visible and functional.

### 11.5 Performance guardrails for motion
- Lazy-mount heavy animated sections; use `LazyMotion` + `domAnimation` to ship a smaller Framer bundle.
- No animation blocks LCP; hero text is server-rendered and visible immediately (animation enhances, not gates).
- Respect INP: keep main-thread work minimal; avoid animating during input.

---

## 12. Functional Requirements & Features

| # | Feature | Priority | Notes |
|---|---|---|---|
| F1 | Click-to-call (persistent) | Must | `tel:+919435492181`; tracked event |
| F2 | WhatsApp chat | Must | `wa.me/919435492181` with prefilled text **[CONFIRM number]** |
| F3 | Appointment request form | Must | Server action → email + WhatsApp/owner notify; spam protection (honeypot + rate limit / hCaptcha) |
| F4 | Google Maps embed + Directions | Must | Embed + "Get directions" deep link |
| F5 | Google reviews display | Must | Curated static + aggregate badge; optional live pull (Places API, cached) |
| F6 | Sticky mobile action bar | Must | Call · WhatsApp · Book |
| F7 | Hours with "Open now" logic | Should | Computed from hours config + IST |
| F8 | Before/after gallery | Should | Consent-gated |
| F9 | Blog/CMS | Should | MDX or headless CMS (see §13) |
| F10 | Multilingual (Bengali) | Should (phase 2) | `next-intl` / App Router i18n |
| F11 | Online booking-fee payment | Could | Razorpay if practice wants paid confirmation **[CONFIRM]** |
| F12 | Cookie/consent notice | Must (if analytics) | Minimal, compliant |
| F13 | Newsletter/recall reminders | Could | Phase 2 |

**Form delivery options (pick one):** (a) Resend/SMTP email to clinic + auto WhatsApp via API; (b) Google Sheet + email; (c) lightweight CRM. Recommend **email + WhatsApp notify** for fastest response in this market.

---

## 13. Technical Architecture

### 13.1 Stack
- **Framework:** Next.js (App Router) + **TypeScript**, React Server Components by default; client components only where interactive (forms, animation wrappers).
- **Styling:** **Tailwind CSS** with the design tokens below; `@tailwindcss/typography` for blog.
- **Animation:** **Framer Motion** (`LazyMotion` for bundle trimming).
- **Fonts:** `next/font` self-hosted (Fraunces, Inter; Noto Bengali phase 2).
- **Content:** **MDX** (Contentlayer/`next-mdx-remote`) for blog/services, or headless CMS (**Sanity**/**Contentful**) if the client wants self-service editing **[CONFIRM]**. Recommend Sanity if non-technical staff will edit.
- **Forms:** Next.js Server Actions / Route Handlers; validation with **Zod**.
- **Hosting:** **Vercel** (Edge CDN, image optimization, analytics). Domain + DNS **[CONFIRM domain — suggest oraldentalsilchar.in / .com]**.
- **Images:** `next/image` (AVIF/WebP, responsive, lazy, blur placeholders).
- **Email:** Resend or clinic SMTP.

### 13.2 Tailwind token config (excerpt)
```js
// tailwind.config.ts (theme.extend.colors)
colors: {
  plum: { 100:'#F1E7EE',500:'#742C66',600:'#5E2453',700:'#4E1C44',800:'#3E1635',900:'#2A0E26' },
  gold: { 200:'#ECDCAE',500:'#C9A24B',600:'#B2873B',700:'#8A6A24' },
  ink:  { 300:'#D6D2DA',500:'#6B6472',700:'#3A3340',900:'#1B1320' },
  porcelain:'#F6F4F7',
  error:'#B3261E',
}
```

### 13.3 Rendering & SEO architecture
- **Static generation (SSG/ISR)** for all marketing/service/blog pages → fast TTFB, crawlable HTML.
- Server-rendered metadata via the Next.js Metadata API (per-route `title`, `description`, canonical, Open Graph, Twitter).
- Dynamic `sitemap.xml` + `robots.txt`; JSON-LD injected server-side.
- Image optimization + font preloading for Core Web Vitals.

### 13.4 Project structure (high level)
```
app/
  (marketing)/ layout.tsx page.tsx about/ services/ [slug]/ ...
  api/ contact/route.ts
components/ (ui, sections, motion)
content/ services/*.mdx blog/*.mdx
lib/ motion.ts seo.ts schema.ts hours.ts
public/ images, og, favicons
```

### 13.5 Security & ops
- HTTPS only; security headers (CSP, HSTS, X-Content-Type-Options) via `next.config`/middleware.
- Form spam protection + server-side validation + rate limiting.
- Environment secrets in Vercel; no keys in client.
- Uptime monitoring + error logging (Sentry optional).

---

## 14. Local SEO Strategy

> The single most important growth lever. Goal: own Google's **Local Pack (map) + organic** results for dental intent in Silchar/Cachar. The 4.9/248 reputation is our unfair advantage — we amplify it.

### 14.1 Google Business Profile (GBP) — foundation
- **Claim/verify & fully optimize** the existing GBP (do **not** create a duplicate).
- Primary category **Dental clinic**; secondary: Dentist, Cosmetic dentist, Emergency dental service, Orthodontist (only if accurate).
- Complete: services (with descriptions + prices where comfortable), hours (+ special/holiday hours), attributes (wheelchair access, parking, washroom, languages: Bengali/Hindi/English), appointment URL → `/book`, phone, website.
- **Photos weekly** (exterior with signage, interior, chair, team, before/after), geo-described.
- **Google Posts** (offers, tips, updates) regularly.
- **Q&A:** seed and answer common questions.
- Keep **NAP identical** to the website and all citations.

### 14.2 NAP consistency (canonical)
```
Oral and Dental Care Clinic
Lochan Bairagi Road, Bilpar, Kanakpur, Silchar, Cachar, Assam 788001
Phone: +91 94354 92181
```
Use this exact format everywhere (footer, contact page, schema, GBP, directories). **[CONFIRM exact street name first.]**

### 14.3 On-page local SEO
- **Title/H1 patterns:** "Dentist in Silchar | Oral and Dental Care Clinic — Dr. Devarati"; service pages "Root Canal Treatment in Silchar | …".
- **Meta descriptions:** benefit + locality + CTA + rating.
- **Locality signals in content:** Silchar, Bilpar, Kanakpur, Cachar, Barak Valley, nearby areas (Ambicapatty, Tarapur, Meherpur, Rangirkhari) — naturally, not stuffed.
- **Dedicated location/contact content** with embedded map, directions, landmark ("near Rahul Medicos").
- **Internal linking:** home → services → related services → book; blog → services.
- **Clean URLs, breadcrumbs, descriptive alt text** with locality where natural.
- **Mobile-first, fast** (ranking factor + UX) — see §15.

### 14.4 Structured data (JSON-LD)
Implement and validate (Rich Results Test):
- **`Dentist`** (a `MedicalBusiness`/`LocalBusiness` subtype) on home/contact — name, address (`PostalAddress`), `geo`, `telephone`, `openingHoursSpecification`, `priceRange`, `areaServed` (Silchar, Cachar, Barak Valley), `sameAs` (GBP, social, listings), `aggregateRating` (only mirroring genuinely displayed reviews).
- **`MedicalProcedure`** on service pages.
- **`FAQPage`** on FAQ + service FAQs.
- **`BreadcrumbList`** on nested pages.
- **`Review`** for on-site displayed testimonials.

```json
{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Oral and Dental Care Clinic",
  "image": "https://<domain>/og/clinic.jpg",
  "@id": "https://<domain>/#clinic",
  "url": "https://<domain>",
  "telephone": "+91-94354-92181",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Lochan Bairagi Road, Bilpar, Kanakpur",
    "addressLocality": "Silchar",
    "addressRegion": "Assam",
    "postalCode": "788001",
    "addressCountry": "IN"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 24.8167549, "longitude": 92.8001821 },
  "areaServed": ["Silchar","Cachar","Barak Valley","Hailakandi","Karimganj"],
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "10:00", "closes": "20:00"
  }],
  "founder": { "@type": "Person", "name": "Dr. Devarati Ray Dutta Chowdhury", "jobTitle": "Dentist (BDS)" },
  "sameAs": ["<GBP url>","<Facebook>","<Instagram>","<Practo/Lybrate>"]
}
```

### 14.5 Citations & directories (NAP everywhere)
Build/clean consistent listings on: **Google Business Profile, Bing Places, Justdial, Practo, Lybrate, Sulekha, Apple Maps, Facebook, Instagram, 99dentists/dentistinsider, IndiaMART (if relevant)**. Audit and fix any inconsistent existing listings (e.g., the differing street names).

### 14.6 Local content engine (blog)
Target informational + local-intent queries to capture demand and build topical authority:
- "Cost of root canal in Silchar — what to expect"
- "Best foods & habits for healthy teeth (Barak Valley)"
- "When does a toothache need an emergency dentist?"
- "Braces vs clear aligners: which is right for you?"
- "Teeth whitening in Silchar: safe options explained"
- "Taking your child to the dentist for the first time"
- Seasonal/festival angles (e.g., pre-wedding smile prep).
Each post → internal links to the relevant service + a booking CTA. Publish **2–4/month** for momentum.

### 14.7 Reviews strategy (compounding moat)
- On-site **"Leave a review"** CTA linking directly to the GBP review form (QR + link for in-clinic use).
- Display the 4.9/248 badge prominently and refresh featured reviews.
- Respond to all Google reviews (template + personalization) — a ranking & trust signal.

### 14.8 Technical SEO checklist
- `sitemap.xml`, `robots.txt`, canonical tags, no duplicate content.
- Fast Core Web Vitals (field "Good").
- Mobile-friendly, tap targets ≥ 44px.
- HTTPS, clean redirects (301 the old UENI URL if possible **[CONFIRM]**).
- Submit to **Google Search Console** + **Bing Webmaster**; monitor coverage, queries, CWV.
- Open Graph/Twitter cards for shareability.

### 14.9 Multilingual (phase 2)
- Bengali locale (`/bn`) with `hreflang` (`bn-IN`, `en-IN`) — meaningful in Silchar where Bengali is dominant. Translate key pages + service pages first.

---

## 15. Performance & Core Web Vitals

| Metric | Target |
|---|---|
| Lighthouse Performance (mobile) | ≥ 90 |
| LCP | < 2.5s (field) |
| INP | < 200ms |
| CLS | < 0.1 |
| Total JS (initial, gzip) | < ~120KB route budget |
| Fonts | self-hosted, `font-display: swap`, preloaded hero weight |

**Tactics:** SSG/ISR; `next/image`; code-split + `LazyMotion`; defer non-critical JS; cache headers; minimal third-party scripts; reserve image/embacelement dimensions to avoid CLS; lazy-load map + below-fold media.

---

## 16. Accessibility (WCAG 2.2 AA)

- Color contrast AA+ (palette pre-checked; gold restricted from small text on white).
- Full keyboard navigation; visible focus rings (gold).
- Semantic HTML, landmarks, alt text, form labels + error messaging.
- `prefers-reduced-motion` fully honored (see §11.4).
- Tap targets ≥ 44px; readable base font ≥ 16px.
- Accessible name for icon-only buttons (Call/WhatsApp).
- Tested with keyboard, screen reader (VoiceOver/TalkBack), and axe.

---

## 17. Analytics, Tracking & Conversion

- **GA4** + **Google Search Console** (+ Bing Webmaster).
- **Conversion events:** `call_click`, `whatsapp_click`, `book_submit`, `directions_click`, `review_click`.
- **Call tracking** (optional) for offline ROI **[CONFIRM]**.
- Optional **Microsoft Clarity** (free heatmaps/session replay) for UX insight.
- Consent-aware loading; document events in a tracking plan.
- Monthly performance report (rankings, traffic, conversions).

---

## 18. Content Strategy & Copy Guidelines

- **Tone:** warm, reassuring, plain English (Bengali-translatable). No fear-mongering.
- **Every page** leads with patient benefit, backed by proof (reviews, doctor expertise).
- **CTAs** are specific: "Book your appointment", "Call the clinic", "Chat on WhatsApp".
- **Required copy inputs from client [CONFIRM]:** Dr. Devarati bio + qualifications + registration; final service list + any prices; real patient consent for photos/reviews; team names; years in practice; any awards/affiliations (IDA membership, etc.).
- Avoid unverifiable superlatives and absolute guarantees (medical advertising norms, §19).

---

## 19. Compliance, Privacy & Medical/Legal

- **Medical advertising care:** factual, non-misleading claims; no guaranteed-outcome language; before/after only with **written patient consent**; add a general "results vary / consult a dentist" disclaimer.
- **Professional norms:** follow Dental Council of India / NMC advertising etiquette (avoid soliciting comparisons/superlative claims that breach norms) — keep messaging factual.
- **Privacy:** privacy policy covering form data (name/phone), analytics, WhatsApp; lawful basis + retention; align with India's **DPDP Act 2023** (consent, purpose limitation).
- **Cookie/consent** banner if analytics/marketing cookies are used.
- **Reviews/schema:** only mark up reviews genuinely shown on-site (Google policy).
- Accessibility statement page (optional, good practice).

---

## 20. Project Phases, Milestones & Timeline

> Indicative; assumes timely content/photo inputs from client. ~6–8 weeks to launch.

| Phase | Deliverables | Est. |
|---|---|---|
| **0. Discovery & content** | Confirm facts, gather bio/services/photos, keyword research, sitemap sign-off | Week 1 |
| **1. Brand & design** | Logo refinement (if needed), design system, hi-fi mockups (Home + key templates), motion spec | Weeks 2–3 |
| **2. Build** | Next.js setup, components, pages, CMS, animations, forms | Weeks 3–6 |
| **3. SEO & content load** | Metadata, schema, sitemap, GBP optimization, service/blog content, citations | Weeks 5–6 |
| **4. QA & launch** | Cross-device/browser QA, a11y, performance, analytics, SC/Bing submit, go-live + redirects | Week 7 |
| **5. Post-launch** | Monitoring, content cadence, reviews program, monthly reporting | Ongoing |

**Definition of Done (launch):** all pages live with schema + metadata; Lighthouse ≥ 90 mobile; CWV green in lab; forms tested end-to-end; GA4/GSC live; GBP optimized; NAP consistent; reduced-motion verified; 404/redirects handled.

---

## 21. Risks & Assumptions

| Risk / assumption | Mitigation |
|---|---|
| Incomplete clinic info (exact address, services, credentials) | **[CONFIRM]** items resolved in Discovery before build |
| Lack of real photos / before-afters | Schedule local shoot; use curated licensed images interim |
| Address inconsistency across listings (Lochan Bairagi vs Radhamadhab Rd) | Verify with client; fix all citations to one canonical NAP |
| Review schema misuse penalty | Mark up only on-site genuine reviews per Google policy |
| Strong competitor SEO (Apollo) | Win via brand differentiation, reviews, page quality, niche service pages |
| Medical advertising rules | Factual copy, consent, disclaimers, no guarantees |
| Slow networks in region | Strict performance budget, image optimization, minimal JS |
| Content upkeep | Use Sanity/MDX + simple editor docs; agreed content cadence |

---

## 22. Future Enhancements / Roadmap
- Bengali (and Hindi/Assamese) localization with `hreflang`.
- Online payments for booking/treatment deposits (Razorpay).
- Patient recall/reminder system (WhatsApp/email).
- Live Google reviews feed + review-request automation.
- Treatment cost estimator / "smile quiz" lead magnet.
- Blog → newsletter funnel.
- WhatsApp chatbot for FAQs/booking.

---

## 23. Appendix

### 23.1 Canonical NAP
```
Oral and Dental Care Clinic
Lochan Bairagi Road, Bilpar, Kanakpur, Silchar, Cachar, Assam 788001 (near Rahul Medicos)
+91 94354 92181
Mon–Sat 10:00 AM – 8:00 PM · Sun Closed
```

### 23.2 Priority keyword clusters (Silchar local intent)
| Cluster | Example queries |
|---|---|
| Core | dentist in Silchar, dental clinic in Silchar, best dentist Silchar, dentist near me |
| Locality | dentist Bilpar / Kanakpur / Ambicapatty, dental clinic Cachar |
| Service | root canal in Silchar, dental implant Silchar, braces Silchar, teeth whitening Silchar, tooth extraction Silchar, kids dentist Silchar, crowns and bridges Silchar |
| Urgent | emergency dentist Silchar, toothache treatment Silchar, dentist open now Silchar |
| Brand/doctor | Dr. Devarati dentist Silchar, Oral and Dental Care Clinic |
| Bengali (phase 2) | সিলচরে ডেন্টিস্ট, দাঁতের ডাক্তার সিলচর |

### 23.3 Schema set to implement
`Dentist` (LocalBusiness), `MedicalProcedure`, `FAQPage`, `BreadcrumbList`, `Review`/`AggregateRating`, `WebSite` + `SearchAction`.

### 23.4 Research sources (May 2026)
- Google Maps / Places — clinic listing, 4.9★ / 248 reviews, address, coordinates, hours.
- oral-and-dental-care.ueniweb.com — current microsite (phone, hours, address, services).
- QuickoBook & Lybrate — Dr. Devarati listing, consultation slots/fee.
- Apollo Dental Silchar, Dento Derma, Dental World Silchar, shuru.co.in, dentistinsider.in — competitor analysis.

### 23.5 Decisions locked in this PRD
- **Palette:** Deep plum/aubergine (`#3E1635`) + warm gold (`#C9A24B`), plum-tinted neutrals, porcelain surface. **Solid only, no gradients; no cream/green/blue.**
- **Type:** Fraunces (display) + Inter (body); Noto Bengali for localization.
- **Stack:** Next.js App Router + TypeScript + Tailwind + Framer Motion on Vercel.
- **Hero conversion asset:** 4.9★ / 248-review badge.

---

*End of PRD v1.0 — pending client confirmation of **[CONFIRM]** items in Discovery.*
