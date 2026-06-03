"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ASSETS } from "@/lib/assets";

export interface GalleryCase {
  id: string;
  title: string;
  category: string;
  description: string;
  challenge: string;
  therapy: string;
  duration: string;
  outcome: string;
  beforeImage: string;
  afterImage: string;
}

export const galleryCases: GalleryCase[] = [
  {
    id: "veneers",
    title: "Full-Mouth Veneers & Crowns Redesign",
    category: "Cosmetic Dentistry",
    description: "Correcting severe discoloration, chipped enamel, and slight spacing issues in the upper aesthetic arch.",
    challenge: "Patient presented with multi-molar staining, uneven jagged borders, and 3mm gaps between front incisors, creating low social confidence.",
    therapy: "Dr. Devarati prepared 10 ultra-thin (0.3mm) custom porcelain veneers and placed high-strength zirconia crowns, matching adjacent translucency.",
    duration: "2 Visits (7 - 10 Days apart)",
    outcome: "Flawless dental alignment, closed spaces, and natural-looking bright shade symmetry.",
    beforeImage: ASSETS.gallery.veneers.before,
    afterImage: ASSETS.gallery.veneers.after
  },
  {
    id: "aligners",
    title: "Cosmetic Invisible Aligners",
    category: "Orthodontics",
    description: "Discrete smile correction for moderate dental crowding and minor bite discrepancies in adult teeth.",
    challenge: "Patient suffered from crowded lower anterior teeth causing heavy food lodgement, early gum recession, and a narrow aesthetic smile arc.",
    therapy: "Specialist clear aligner sequence designed via 3D intra-oral mapping. Sequence of 14 comfortable, removable clear alignment trays.",
    duration: "6 - 8 Months",
    outcome: "Perfect orthodontic alignment, eliminated food lodgement risks, and a wide, symmetrical smile.",
    beforeImage: ASSETS.gallery.aligners.before,
    afterImage: ASSETS.gallery.aligners.after
  },
  {
    id: "whitening",
    title: "In-Office Teeth Whitening",
    category: "Preventive & Cosmetic",
    description: "Safely lifting deep tea, coffee, and organic stains in a single clinical visit.",
    challenge: "Severe organic tobacco and coffee staining on enamel with shade value recorded at dark yellow baseline (shade A3.5).",
    therapy: "Three 15-minute cycles of professional, pH-balanced whitening gel activated by cool laser light, followed by desensitizing fluoride varnish.",
    duration: "1 Visit (45 mins)",
    outcome: "Immediate brightness shift of +8 natural shades (shade B1) with zero post-op enamel sensitivity.",
    beforeImage: ASSETS.gallery.whitening.before,
    afterImage: ASSETS.gallery.whitening.after
  }
];

export default function SmileGallery({ isStandalone = false }: { isStandalone?: boolean }) {
  const [activeTab, setActiveTab] = useState<string>("veneers");
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const activeCase = galleryCases.find((c) => c.id === activeTab) || galleryCases[0];

  return (
    <section
      id="smile-gallery"
      className={cn(
        "relative bg-porcelain border-b border-ink-300 overflow-hidden",
        isStandalone
          ? "pt-[210px] sm:pt-[160px] md:pt-[180px] lg:pt-[200px] pb-24 min-h-screen"
          : "py-24 md:py-32"
      )}
    >
      {/* Paper Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-multiply z-0 bg-paper-noise" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-xs font-bold text-plum-900 uppercase tracking-widest font-sans">
              Clinical transformations
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-plum-900 leading-tight mb-6"
          >
            Before & After Smile Gallery
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-ink-700 text-sm sm:text-base leading-relaxed"
          >
            Explore actual visual transformations achieved by Dr. Devarati. Drag the golden divider handle left or right across the clinical cases to reveal the results.
          </motion.p>
        </div>

        {/* Stateful Case Tabs Selector */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 mb-12 border-b border-ink-300/40 pb-2 w-full max-w-2xl mx-auto">
          {galleryCases.map((c) => {
            const isSelected = activeTab === c.id;
            return (
              <button
                key={c.id}
                onClick={() => {
                  setActiveTab(c.id);
                  setSliderPosition(50); // Reset slider to center
                }}
                className="relative py-2.5 px-5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-250 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 overflow-hidden"
              >
                {/* Background Slider Indicator */}
                {isSelected ? (
                  <motion.span
                    layoutId="activeGalleryTab"
                    className="absolute inset-0 bg-plum-800 border border-plum-900 rounded-full z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : (
                  <span className="absolute inset-0 bg-white border border-ink-300 hover:border-plum-800 rounded-full z-0" />
                )}

                {/* Text Layer */}
                <span className={cn(
                  "relative z-10 transition-colors font-sans",
                  isSelected ? "text-porcelain" : "text-ink-700 hover:text-plum-900"
                )}>
                  {c.id === "veneers" ? "👑 Veneers & Crowns" : c.id === "aligners" ? "😬 Aligners" : "✨ Whitening"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Dual-Column Slider Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          
          {/* Left Column: Draggable Slider Interface */}
          <div className="lg:col-span-7 w-full flex flex-col items-center">
            
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-ink-300 select-none bg-white">
              {/* BEFORE IMAGE (Static in the background) */}
              <img
                src={activeCase.beforeImage}
                alt={`${activeCase.title} before treatment`}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              {/* Dynamic Before Badge Overlay */}
              <div className="absolute top-4 right-4 bg-plum-900/90 text-porcelain text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full select-none z-[5]">
                Before Therapy
              </div>

              {/* AFTER IMAGE (Dynamically clipped absolutely on top) */}
              <div
                className="absolute inset-0 w-full h-full z-10"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={activeCase.afterImage}
                  alt={`${activeCase.title} after treatment`}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />

                {/* Dynamic After Badge Overlay */}
                <div className="absolute top-4 left-4 bg-gold-500 text-plum-900 text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full select-none z-20">
                  After Treatment
                </div>
              </div>

              {/* Absolutely Positioned Gold Divider Line & Grip */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-gold-500 z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Grip Circular Handle Button */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-plum-900 border-2 border-gold-500 flex items-center justify-center text-porcelain shadow-lg select-none leading-none text-sm">
                  ↔
                </div>
              </div>

              {/* Native Input Range Overlay for flawless, high-performance dragging */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Drag slider to compare dental before and after treatment"
              />
            </div>
            
            {/* Guide micro text */}
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-ink-500 mt-4 animate-pulse">
              ◀ Drag Handle to Compare smile ▶
            </span>
          </div>

          {/* Right Column: Case Details & Specifications */}
          <div className="lg:col-span-5 w-full flex flex-col items-start gap-6 text-left">
            
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-gold-500/10 text-gold-700 border border-gold-500/20 rounded-full font-sans inline-block w-fit">
                ✦ {activeCase.category} Case Study
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-plum-900 leading-tight">
                {activeCase.title}
              </h3>
              <p className="text-ink-700 text-xs sm:text-sm leading-relaxed mt-2 font-sans">
                {activeCase.description}
              </p>
            </div>

            {/* Case Details Block */}
            <div className="flex flex-col gap-4 w-full border-t border-ink-300/60 pt-6 mt-2">
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold text-ink-500 uppercase tracking-wider">Clinical Challenge</span>
                <p className="text-xs sm:text-sm text-ink-900 font-medium leading-relaxed">
                  {activeCase.challenge}
                </p>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold text-ink-500 uppercase tracking-wider">Applied Therapy</span>
                <p className="text-xs sm:text-sm text-ink-900 font-medium leading-relaxed">
                  {activeCase.therapy}
                </p>
              </div>
            </div>

            {/* Metrics Stripe */}
            <div className="grid grid-cols-2 gap-4 w-full border-y border-ink-300/40 py-5 my-2">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-ink-500 uppercase tracking-wider">Treatment Duration</span>
                <span className="text-sm font-bold text-plum-900 mt-1">{activeCase.duration}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-ink-500 uppercase tracking-wider">Patient Outcome</span>
                <span className="text-sm font-bold text-gold-700 mt-1">{activeCase.outcome}</span>
              </div>
            </div>

            {/* Quick Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <Link
                href="/book"
                className="flex-1 flex items-center justify-center gap-2 bg-plum-800 hover:bg-plum-900 text-porcelain text-xs font-bold uppercase tracking-wider py-4 px-6 rounded-full shadow-[0_2px_8px_rgba(62,22,53,0.15)] transition-all cursor-pointer text-center"
              >
                <Calendar className="w-4 h-4 text-gold-200" />
                <span>Request Smile Consultation</span>
              </Link>
            </div>

          </div>
        </div>

        {/* Sterile Clinical Consent Warning Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 p-5 border border-ink-300 bg-white rounded-3xl mt-16 max-w-4xl mx-auto text-center sm:text-left select-none">
          <ShieldCheck className="w-6 h-6 text-gold-500 shrink-0" />
          <p className="text-[11px] sm:text-xs font-medium text-ink-700 leading-relaxed font-sans">
            <strong>Clinical Photography Notice:</strong> All dental transformations displayed are verified patient cases treated exclusively at Oral and Dental Care Clinic. Photos are shared with explicit, signed patient clinical consent.
          </p>
        </div>

      </div>
    </section>
  );
}
