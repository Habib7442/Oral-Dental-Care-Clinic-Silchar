"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Award, Star, Clock, Calendar, Heart, ShieldAlert, Sparkles, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function AboutClient() {
  return (
    <section className="relative overflow-hidden bg-porcelain pt-[210px] sm:pt-[160px] md:pt-[180px] lg:pt-[200px] pb-24 border-b border-ink-300 min-h-screen">
      {/* Paper Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-multiply z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="about-paper-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#about-paper-noise)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
        
        {/* Page Title & Eyebrow */}
        <div className="flex flex-col items-start text-left max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-xs font-bold text-plum-900 uppercase tracking-widest font-sans">
              Lead Clinician Profile & Vision
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-plum-900 leading-tight mb-4">
            About Dr. Devarati Roy
          </h1>
          <p className="text-ink-700 text-sm sm:text-base leading-relaxed">
            Discover the patient-first philosophy, academic credentials, and rigorous clinical sterilization standards behind our 4.9★ rated practice in Silchar.
          </p>
        </div>

        {/* Two Column Layout: Biography vs Minimalist Typographic Monogram Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full mb-24">
          
          {/* Left Column: Biography & Credentials */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            <div className="flex flex-col gap-2.5">
              <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-gold-500/10 text-gold-700 border border-gold-500/20 rounded-full font-sans inline-block w-fit">
                ✦ Lead Practitioner & Owner
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-plum-900 leading-tight">
                Dr. Devarati Roy Dutta Choudhury
              </h2>
              <span className="text-sm font-bold text-gold-700 font-sans tracking-wide">
                BDS (Bachelor of Dental Surgery) · Reg No: 3376-A (ASDC)
              </span>
            </div>

            <div className="flex flex-col gap-5 text-ink-700 text-xs sm:text-sm leading-relaxed font-sans mt-2">
              <p>
                Dr. Devarati is one of Silchar's most trusted, highly experienced dental surgeons. She has dedicated her career to providing boutique, doctor-led clinical dental services centered completely on patient hygiene, physical comfort, and lasting therapeutic success.
              </p>
              <p>
                Unlike chain clinics with rotating shifts of junior dentists, every single evaluation, root canal therapy, and cosmetic tooth alignment is **personally diagnosed and performed by Dr. Devarati**. This doctor-led consistency guarantees that your dental care remains in the hands of an experienced clinician who understands your individual dental history.
              </p>
              <p>
                Under her guidance, the clinic has achieved local prominence, boasting a **4.9★ aggregate rating from 248+ verified Google reviews** from families in Bilpar, Kanakpur, and the greater Barak Valley area.
              </p>
            </div>

            {/* Official Registration & Affiliation Pill Tags */}
            <div className="flex flex-wrap gap-3 w-full border-t border-ink-300/60 pt-6 mt-2">
              <div className="flex items-center gap-2 bg-white border border-ink-300 rounded-2xl px-4 py-3 select-none">
                <ShieldCheck className="w-4 h-4 text-gold-500 shrink-0" />
                <span className="text-[10px] sm:text-xs font-bold text-plum-900 font-sans tracking-wide">
                  Assam State Dental Council
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-ink-300 rounded-2xl px-4 py-3 select-none">
                <Award className="w-4 h-4 text-gold-500 shrink-0" />
                <span className="text-[10px] sm:text-xs font-bold text-plum-900 font-sans tracking-wide">
                  IDA Registered Practitioner
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Custom Premium Typographic Monogram Card */}
          <div className="lg:col-span-5 w-full flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full aspect-[4/5] rounded-3xl bg-white border border-ink-300 flex flex-col items-center justify-between p-8 md:p-12 relative overflow-hidden"
            >
              {/* Paper Noise Over Card */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply z-0">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <filter id="card-paper-noise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
                  </filter>
                  <rect width="100%" height="100%" filter="url(#card-paper-noise)" />
                </svg>
              </div>

              {/* Top Row: Clinical Credentials Tag */}
              <div className="flex justify-center z-10 w-full">
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-plum-900 text-porcelain rounded-full font-sans select-none">
                  ✦ Clinical Registry Vetted ✦
                </span>
              </div>

              {/* Central Premium Serifs Monogram seal */}
              <div className="flex flex-col items-center justify-center my-6 z-10 relative">
                {/* stylized circular gold border overlay */}
                <div className="w-36 h-36 rounded-full border border-gold-500/35 flex items-center justify-center bg-porcelain relative">
                  {/* Inner golden ring */}
                  <div className="absolute inset-2 rounded-full border border-dashed border-gold-500/40" />
                  
                  {/* Monogram letters */}
                  <span className="font-serif text-5xl font-medium tracking-wider text-plum-900 select-none z-10">
                    DR
                  </span>
                </div>
              </div>

              {/* Bottom Row: Doctor Details block */}
              <div className="flex flex-col items-center text-center z-10 w-full">
                <span className="font-serif text-lg font-bold text-plum-900">
                  Dr. Devarati Roy Dutta Choudhury
                </span>
                <span className="text-[10px] font-bold text-gold-700 uppercase tracking-widest mt-1 font-sans">
                  BDS Lead Dentist & Clinic Founder
                </span>
                <div className="w-full border-t border-ink-300/40 my-4" />
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-gold-500 fill-gold-500 shrink-0" />
                  <span className="text-xs font-semibold text-ink-500 font-sans">
                    Vetted 4.9★ Lead Dental Specialist
                  </span>
                </div>
              </div>

            </motion.div>
            
            {/* Minimalist Micro text under card */}
            <span className="text-[9px] uppercase tracking-widest text-ink-500 mt-4 font-bold select-none">
              🔬 Registered Dental Surgeon (ASDC)
            </span>
          </div>

        </div>

        {/* Section 2: Clinical Philosophy & Moats Grid */}
        <div className="flex flex-col items-start w-full border-t border-ink-300/60 pt-16 text-left">
          
          <div className="flex flex-col gap-2.5 mb-12 max-w-3xl">
            <span className="text-[10px] font-bold text-ink-500 uppercase tracking-wider font-sans">
              Sterile Standards & Values
            </span>
            <h3 className="font-serif text-3xl font-semibold text-plum-900 leading-tight">
              Our 4 Pillars of Clinical Care
            </h3>
            <p className="text-ink-700 text-xs sm:text-sm leading-relaxed mt-2 font-sans">
              Dr. Devarati manages the clinic according to international clinical guidelines, establishing a standard of hygiene and patient trust unmatched in Silchar.
            </p>
          </div>

          {/* Grid Layout of 4 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
            
            {/* Pillar 1: Sterilization Moat */}
            <div className="bg-white border border-ink-300 rounded-3xl p-6 md:p-8 flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/15 flex items-center justify-center text-gold-700 shrink-0">
                <ShieldAlert className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-serif text-lg font-semibold text-plum-900 mb-2">
                  Class-B Autoclave Sterilization
                </h4>
                <p className="text-ink-700 text-xs sm:text-sm leading-relaxed font-sans">
                  We implement multi-stage sterilization. All surgical elevators, files, and scaling handpieces undergo ultrasonic scrubbing, chemical disinfection, and high-pressure vacuum Class-B autoclave steam sterilization in sealed pouches opened in your presence.
                </p>
              </div>
            </div>

            {/* Pillar 2: Pain-Free Comfort */}
            <div className="bg-white border border-ink-300 rounded-3xl p-6 md:p-8 flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/15 flex items-center justify-center text-gold-700 shrink-0">
                <Heart className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-serif text-lg font-semibold text-plum-900 mb-2">
                  Gentle, Pain-Free Dentistry
                </h4>
                <p className="text-ink-700 text-xs sm:text-sm leading-relaxed font-sans">
                  Dental anxiety is completely real. Dr. Devarati is highly recognized for her calm, polite clinical behavior and painless micro-surgical extraction techniques, making root canals and extractions comfortable even for anxious children and elderly patients.
                </p>
              </div>
            </div>

            {/* Pillar 3: Vetted Local Reputation */}
            <div className="bg-white border border-ink-300 rounded-3xl p-6 md:p-8 flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/15 flex items-center justify-center text-gold-700 shrink-0">
                <Star className="w-5 h-5 stroke-[1.5] text-gold-700 fill-gold-500" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-serif text-lg font-semibold text-plum-900 mb-2">
                  4.9★ Vetted Aggregate Trust
                </h4>
                <p className="text-ink-700 text-xs sm:text-sm leading-relaxed font-sans">
                  Over 248 families have left verified, 5-star Google reviews praising the patient support, transparent pricing, and gentle dental treatments. This aggregate proof represents our commitment to serving the Barak Valley with premium boutique care.
                </p>
              </div>
            </div>

            {/* Pillar 4: Transparent Doctor-Led Care */}
            <div className="bg-white border border-ink-300 rounded-3xl p-6 md:p-8 flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/15 flex items-center justify-center text-gold-700 shrink-0">
                <Sparkles className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-serif text-lg font-semibold text-plum-900 mb-2">
                  No Rotating Shifts or Panels
                </h4>
                <p className="text-ink-700 text-xs sm:text-sm leading-relaxed font-sans">
                  We guarantee absolute diagnostic continuity. Dr. Devarati personally oversees your dental health from the first scaling visit to final cosmetic veneer placements. You will never be assigned to a rotating panel of trainee dentists.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Dynamic Sterile appointment scheduling booking banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 md:p-8 border border-gold-500/20 bg-gold-500/5 rounded-3xl mt-20 w-full text-center sm:text-left">
          <div className="flex flex-col gap-1 max-w-2xl">
            <h4 className="font-serif text-base font-semibold text-plum-900">
              Ready to schedule a dental check-up with Dr. Devarati?
            </h4>
            <p className="text-ink-700 text-xs sm:text-sm leading-relaxed">
              We allocate dedicated reserve priority slots daily. Secure your reservation slot directly on WhatsApp.
            </p>
          </div>
          <Link
            href="/book"
            className="shrink-0 bg-plum-800 text-porcelain hover:bg-plum-900 font-sans text-xs font-semibold uppercase tracking-wider py-3.5 px-6 rounded-full shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none focus:ring-2 focus:ring-gold-500 cursor-pointer"
          >
            Request Priority Slot
          </Link>
        </div>

      </div>
    </section>
  );
}
