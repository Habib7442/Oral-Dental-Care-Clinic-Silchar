"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  HeartPulse,
  CalendarCheck,
} from "lucide-react";
import { ASSETS } from "@/lib/assets";

interface EducationCard {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  summary: string;
  image: string;
  imageAlt: string;
  keyPoints: { text: string; isCaution?: boolean }[];
}

const educationCards: EducationCard[] = [
  {
    id: "brushing-mistakes",
    badge: "Brushing Technique",
    badgeColor: "bg-plum-100 text-plum-900 border-plum-200",
    title: "5 Common Brushing Mistakes",
    subtitle: "Are you brushing correctly?",
    summary:
      "Good intentions don't always mean good technique. Avoid these 5 common errors that wear down enamel and harm delicate gum tissues.",
    image: ASSETS.patientEducation.brushingMistakes,
    imageAlt: "5 Common Brushing Mistakes Guide - Oral & Dental Care Clinic Silchar",
    keyPoints: [
      { text: "Brushing too hard wears down protective enamel", isCaution: true },
      { text: "Skipping the gumline where plaque accumulates", isCaution: true },
      { text: "Using an old, frayed toothbrush past 3 months", isCaution: true },
      { text: "Rushing instead of brushing for a full 2 minutes", isCaution: true },
      { text: "Forgetting to gently clean your tongue daily", isCaution: true },
    ],
  },
  {
    id: "systemic-health",
    badge: "Mouth–Body Connection",
    badgeColor: "bg-gold-200/40 text-gold-700 border-gold-300",
    title: "Your Mouth & Overall Health",
    subtitle: "Oral hygiene is whole-body care",
    summary:
      "Your mouth is the gateway to your body. Chronic gum inflammation and oral bacteria can significantly influence systemic wellness.",
    keyPoints: [
      { text: "Periodontal health directly protects cardiovascular wellness" },
      { text: "Reduces systemic bacterial migration throughout your body" },
      { text: "Aids glycemic control and supports diabetic management" },
      { text: "Daily flossing & cleaning lowers chronic inflammation" },
      { text: "Healthy gums form a vital barrier against infection" },
    ],
    image: ASSETS.patientEducation.oralSystemic,
    imageAlt: "Mouth-Body Health Connection Flyer - Oral & Dental Care Clinic Silchar",
  },
  {
    id: "daily-habits",
    badge: "Daily Routine Checklist",
    badgeColor: "bg-plum-900 text-gold-200 border-plum-800",
    title: "11 Daily Oral Care Habits",
    subtitle: "Simple habits for a lifetime of healthy smiles",
    summary:
      "A quick, proven daily protocol recommended by Dr. Devarati Ray to keep teeth strong, gums pink, and breath fresh every single day.",
    image: ASSETS.patientEducation.dailyHabits,
    imageAlt: "11 Daily Oral Care Habits Poster - Oral & Dental Care Clinic Silchar",
    keyPoints: [
      { text: "Brush thoroughly twice a day & floss every single night" },
      { text: "Clean your tongue & rinse with an anti-microbial mouthwash" },
      { text: "Use a soft-bristled brush & remineralizing fluoride paste" },
      { text: "Drink plenty of water & limit sticky, acidic, sugary foods" },
      { text: "Replace your brush every 3 months & visit every 6 months" },
    ],
  },
];

export default function PatientEducation() {
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  // Disable body scroll when modal is active
  useEffect(() => {
    if (activeModalIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModalIndex]);

  // Handle keyboard navigation for modal
  useEffect(() => {
    if (activeModalIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalIndex(null);
      } else if (e.key === "ArrowLeft") {
        setActiveModalIndex((prev) =>
          prev !== null && prev > 0 ? prev - 1 : educationCards.length - 1
        );
      } else if (e.key === "ArrowRight") {
        setActiveModalIndex((prev) =>
          prev !== null && prev < educationCards.length - 1 ? prev + 1 : 0
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalIndex]);

  return (
    <section
      id="patient-education"
      className="relative overflow-hidden bg-white py-24 md:py-32 border-b border-ink-300"
    >
      {/* Structural Accent Lines */}
      <div className="absolute top-0 right-0 w-48 h-48 border-t-8 border-r-8 border-gold-500/10 translate-x-16 -translate-y-16 pointer-events-none hidden lg:block" />
      <div className="absolute bottom-0 left-0 w-48 h-48 border-b-8 border-l-8 border-gold-500/10 -translate-x-16 translate-y-16 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <Sparkles className="w-4 h-4 text-gold-700" />
            <span className="text-xs font-bold text-plum-900 uppercase tracking-widest font-sans">
              Preventive Care & Daily Guides
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-plum-900 leading-tight mb-5"
          >
            Doctor&apos;s Daily Oral Health Tips
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-ink-700 text-sm sm:text-base leading-relaxed"
          >
            Great dental health starts at home between clinic visits. Explore Dr. Devarati Ray&apos;s
            essential guides on brushing habits, whole-body oral connection, and daily care routines.
          </motion.p>
        </div>

        {/* 3-Column Educational Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {educationCards.map((card, idx) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group flex flex-col bg-porcelain border border-ink-300 rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(27,19,32,0.03)] hover:border-gold-500/50 transition-colors duration-300"
            >
              {/* Infographic Poster Preview Frame */}
              <div
                onClick={() => setActiveModalIndex(idx)}
                className="relative w-full aspect-[4/5] bg-ink-900/5 border-b border-ink-300 overflow-hidden cursor-pointer select-none"
                role="button"
                tabIndex={0}
                aria-label={`View full infographic for ${card.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveModalIndex(idx);
                  }
                }}
              >
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 380px"
                />

                {/* Subtle Hover Action Badge */}
                <div className="absolute inset-0 bg-plum-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <span className="inline-flex items-center gap-2 bg-white text-plum-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg font-sans">
                    <Maximize2 className="w-3.5 h-3.5 text-gold-700" />
                    Tap to expand poster
                  </span>
                </div>

                {/* Corner Quick Badge */}
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-plum-900 text-[11px] font-bold px-2.5 py-1 rounded-full border border-ink-300/80 shadow-xs font-sans">
                  Infographic Guide
                </span>
              </div>

              {/* Text & Key Bullets Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="mb-3">
                    <span
                      className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border font-sans ${card.badgeColor}`}
                    >
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-plum-900 mb-2 leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-ink-700 leading-relaxed mb-6">
                    {card.summary}
                  </p>

                  {/* Key Takeaways */}
                  <div className="space-y-2.5 mb-6">
                    {card.keyPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-ink-900">
                        {point.isCaution ? (
                          <AlertCircle className="w-4 h-4 text-plum-700 shrink-0 mt-0.5" />
                        ) : (
                          <CheckCircle2 className="w-4 h-4 text-gold-700 shrink-0 mt-0.5" />
                        )}
                        <span className="leading-snug">{point.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <button
                  type="button"
                  onClick={() => setActiveModalIndex(idx)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-white hover:bg-plum-900 text-plum-900 hover:text-white border border-ink-300 hover:border-plum-900 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 shadow-xs"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-gold-700" />
                  View Full Graphic Poster
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Preventive Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 sm:mt-16 bg-porcelain border border-ink-300 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-plum-100 border border-plum-200 flex items-center justify-center shrink-0 text-plum-900">
              <HeartPulse className="w-6 h-6 text-plum-900" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-medium text-plum-900 mb-1">
                Notice Any Bleeding, Toothache, or Sensitivity?
              </h4>
              <p className="text-xs sm:text-sm text-ink-700">
                Early checkups prevent extensive treatments. Dr. Devarati Ray provides gentle, sterile
                evaluations at Bilpar, Silchar.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="/book"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-plum-800 hover:bg-plum-700 text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm"
            >
              <CalendarCheck className="w-4 h-4 text-gold-500" />
              Book Checkup Slot
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {activeModalIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-plum-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveModalIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalIndex(null)}
              className="absolute top-5 right-5 sm:top-8 sm:right-8 z-60 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveModalIndex((prev) =>
                  prev !== null && prev > 0 ? prev - 1 : educationCards.length - 1
                );
              }}
              className="absolute left-3 sm:left-6 z-60 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Previous guide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveModalIndex((prev) =>
                  prev !== null && prev < educationCards.length - 1 ? prev + 1 : 0
                );
              }}
              className="absolute right-3 sm:right-6 z-60 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Next guide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full max-h-[90vh] flex flex-col bg-porcelain rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl"
            >
              <div className="relative w-full flex-1 min-h-[50vh] sm:min-h-[65vh] bg-ink-900/10">
                <Image
                  src={educationCards[activeModalIndex].image}
                  alt={educationCards[activeModalIndex].imageAlt}
                  fill
                  className="object-contain p-2 sm:p-4"
                  sizes="(max-width: 768px) 95vw, 650px"
                  priority
                />
              </div>

              {/* Bottom Info Bar in Modal */}
              <div className="p-4 sm:p-5 bg-white border-t border-ink-300 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-700 font-sans">
                    {educationCards[activeModalIndex].badge}
                  </span>
                  <h4 className="font-serif text-base sm:text-lg font-medium text-plum-900 leading-snug">
                    {educationCards[activeModalIndex].title}
                  </h4>
                </div>
                <span className="text-xs font-semibold text-ink-500 shrink-0 font-sans">
                  {activeModalIndex + 1} of {educationCards.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
