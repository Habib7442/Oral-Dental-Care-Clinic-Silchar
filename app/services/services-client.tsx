"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Star, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { services, Service } from "@/lib/services";
import { cn } from "@/lib/utils";

// Standard clinical categories mapping for filters
const categories = ["All", "Preventive", "Restorative", "Cosmetic", "Surgical", "Orthodontics"] as const;
type Category = typeof categories[number];

// Map categories to distinct clinical colored badges
const getCategoryStyles = (category: Service["category"]) => {
  switch (category) {
    case "Restorative":
      return "bg-plum-100 text-plum-900 border border-plum-200";
    case "Surgical":
      return "bg-plum-800 text-porcelain border border-plum-700";
    case "Cosmetic":
      return "bg-gold-200 text-gold-700 border border-gold-300/30";
    case "Preventive":
      return "bg-ink-300/40 text-ink-900 border border-ink-300";
    case "Orthodontics":
      return "bg-gold-500/10 text-gold-700 border border-gold-500/20";
    default:
      return "bg-ink-100 text-ink-700";
  }
};

export default function ServicesClient() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  // Filter the services array dynamically
  const filteredServices = services.filter((service) => {
    if (activeCategory === "All") return true;
    return service.category === activeCategory;
  });

  return (
    <section className="relative overflow-hidden bg-porcelain pt-[210px] sm:pt-[160px] md:pt-[180px] lg:pt-[200px] pb-24 border-b border-ink-300 min-h-screen">
      {/* Paper Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-multiply z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="directory-paper-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#directory-paper-noise)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
        
        {/* Page Header */}
        <div className="flex flex-col items-start text-left max-w-3xl mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-xs font-bold text-plum-900 uppercase tracking-widest font-sans">
              Specialized Care Directory
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-plum-900 leading-tight mb-6">
            Clinical Specialties Index
          </h1>

          <p className="text-ink-700 text-sm sm:text-base leading-relaxed">
            Dr. Devarati Roy (BDS) offers 19 distinct advanced oral therapies. Filter by specialty area below to explore clinical roadmaps, recovery timelines, procedural highlights, and detailed FAQs.
          </p>
        </div>

        {/* Stateful Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12 pb-2 border-b border-ink-300/40 w-full">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="relative py-2.5 px-5 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-250 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 overflow-hidden"
              >
                {/* Background Slider Indicator (Framer Motion) */}
                {isSelected ? (
                  <motion.span
                    layoutId="activeFilterPill"
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
                  {cat}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic AnimatePresence Services Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                key={service.slug}
                whileHover={{ y: -5 }}
                className="group flex flex-col items-start bg-white border border-ink-300 rounded-3xl p-6 md:p-8 transition-colors duration-300 hover:border-gold-500 cursor-pointer relative"
              >
                {/* Header row: Emoji & Category */}
                <div className="flex items-center justify-between w-full mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/15 flex items-center justify-center text-2xl group-hover:bg-gold-500 transition-colors duration-300 select-none">
                    {service.emoji}
                  </div>
                  <span className={cn("text-[9px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full font-sans", getCategoryStyles(service.category))}>
                    {service.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-plum-900 leading-tight mb-3 group-hover:text-gold-700 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-ink-700 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Details Bar */}
                <div className="flex items-center justify-between w-full text-[10px] sm:text-[11px] font-bold text-ink-500 border-t border-ink-300/40 pt-4 mt-auto">
                  <span>{service.duration}</span>
                </div>

                {/* Learn More Trigger */}
                <Link
                  href={`/services/${service.slug}`}
                  className="absolute inset-0 z-10"
                  aria-label={`View clinical details for ${service.title}`}
                />
                
                <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-plum-800 group-hover:text-gold-700 transition-colors mt-4">
                  <span>Learn Procedure</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Sterile consultation alert banner */}
        <motion.div 
          layout
          className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 md:p-8 border border-gold-500/20 bg-gold-500/5 rounded-3xl mt-16 w-full text-center sm:text-left"
        >
          <div className="flex flex-col gap-1 max-w-2xl">
            <h4 className="font-serif text-base font-semibold text-plum-900">
              Need immediate help deciding which specialty fits your teeth?
            </h4>
            <p className="text-ink-700 text-xs sm:text-sm leading-relaxed">
              Dr. Devarati provides direct diagnostic evaluations and patient alignment consultations.
            </p>
          </div>
          <Link
            href="/book"
            className="shrink-0 bg-plum-800 text-porcelain hover:bg-plum-900 font-sans text-xs font-semibold uppercase tracking-wider py-3.5 px-6 rounded-full shadow-[0_2px_8px_rgba(62,22,53,0.1)] hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none focus:ring-2 focus:ring-gold-500"
          >
            Schedule Consultation
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
