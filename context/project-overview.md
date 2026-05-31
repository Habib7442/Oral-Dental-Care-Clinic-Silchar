# Project Overview: Oral and Dental Care Clinic Silchar

## Overview

A premium, brand-grade marketing and appointment request website for **Dr. Devarati's Oral and Dental Care Clinic** in Silchar, Assam. The clinic holds an exceptional real-world reputation with a **4.9★ rating from 248+ Google reviews**, but currently relies on directory listings and a minimal microsite. This project translates that high reputation into a high-performance, fast, modern, and beautifully animated mobile-first website that secures local SEO dominance ("dentist in Silchar" search clusters) and drives qualified patient appointments.

## Goals

1. **Maximize Booking Conversions**: Deliver a highly intuitive mobile action interface (click-to-call, WhatsApp chat, and request forms) that captures patient intent instantly.
2. **Command Local SEO Dominance**: Achieve top-3 Local Pack positions and page-1 organic results in Silchar/Barak Valley for core dental terms.
3. **Establish Premium Brand Presence**: Differentiate the clinic visually with a distinctive, high-end design (Plum + Gold theme) that reflects boutique care and supports cosmetic/private consultations.
4. **Moat Amplification**: Position the clinic's 4.9★ rating as the central conversion lever across every view of the site.

## Core Patient Flow

1. **Discovery**: Patient arrives on the homepage via search results, local map clicks, or review aggregators.
2. **Trust & Service Matching**: Patient consumes trust stats (4.9★ rating, 248+ reviews, Dr. Devarati's credentials) and scans services in a clean, categorized grid.
3. **Engagement**: Patient reviews detailed service specifics (such as RCT or crowns) or explores local FAQs (costs, comfort).
4. **Action**: Patient triggers direct interaction via:
   - Floating quick-action bar (Call / WhatsApp / Book Request).
   - Embedded Google Maps direction CTA.
   - Core Appointment Request Form.
5. **Confirmation**: Patient submits a booking request, receives a custom Plum + Gold themed success notification, and clinic personnel confirm via phone/WhatsApp.

## Features

### 1. High-Conversion Interface & Tools
* **Floating Sticky Action Bar**: Bottom-anchored bar on mobile devices containing quick one-tap actions for Call, WhatsApp, and Request Form.
* **Appointment Request Engine**: Interactive form backed by Server Actions and Zod schema validation, routing details safely and triggering notifications.
* **Computed "Open Now" Hours**: Live-state tracker computing whether the clinic is open or closed based on Indian Standard Time (IST) business hours.
* **Interactive Before/After Slider**: High-performance drag-interaction component showcasing verified cosmetic results.

### 2. Social Proof & Engagement
* **Static/Live Review Carousel**: Dedicated component highlighting vetted Google reviews alongside the aggregate rating.
* **Responsive Service Hub & Detail Pages**: Specific informational landing pages that describe procedures, comfort indicators, and price ranges.
* **Dr. Devarati Bio & Clinic Story**: Editorial-style profile detailing dentist registrations, academic BDS qualifications, and sterilization protocols.

### 3. SEO & Discovery Engine
* **Local SEO Injections**: In-depth placement of geographic identifiers (Silchar, Bilpar, Cachar, Barak Valley) naturally within metadata and content copy.
* **Structured Data**: Canonical schema injection (JSON-LD `Dentist`, `MedicalProcedure`, `FAQPage`, `Review`, `BreadcrumbList`) validated for rich google snippets.
* **Local Blog/CMS Engine**: Lightweight, MDX-based blogging framework to host local content clusters (e.g. "Cost of root canal in Silchar").

## Scope

### In Scope
* Setup and deployment of Next.js marketing pages, services directory, and localized blog.
* Development of fully responsive desktop/mobile navigation frameworks.
* Complete CSS variable design system binding Plum, Gold, Porcelain, Ink, and Error/Success states.
* Direct integration of Server Actions for contact/booking forms (notifying via SMTP/Resend).
* Full JSON-LD structured data implementation.
* Performance optimizations targeting Lighthouse Mobile $\ge 90$ and green Core Web Vitals (LCP < 2.5s, CLS < 0.1).

### Out of Scope
* Integration of online payment gateways (Razorpay, deferred to Phase 2).
* Full patient portal or electronic medical records (EMR) systems.
* Multi-branch management setups.
* Multi-lingual locales (Bengali `/bn` locale deferred to Phase 2).

## Success Criteria

1. **Lighthouse Validation**: The mobile Lighthouse performance audit scores $\ge 90$ with zero layout shift (CLS < 0.1).
2. **Type Safety**: The codebase successfully typechecks with zero errors (`npx tsc --noEmit` passes).
3. **Structured Data Compliance**: Search console/Schema validation returns completely valid rich snippets with zero warning flags for `Dentist` JSON-LD data.
4. **Form Integration**: Form submissions run successfully through validated Server Actions, displaying state transitions, loaders, and success screens.
