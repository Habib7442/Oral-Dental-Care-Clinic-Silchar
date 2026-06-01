"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, Star, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { services, Service } from "@/lib/services";
import { cn } from "@/lib/utils";

// Define the exact top 10 most common services in structural order for the Bento Grid
const top10Slugs = [
  "root-canals",
  "teeth-cleaning",
  "dental-implants",
  "check-ups",
  "teeth-whitening",
  "fillings-and-sealants",
  "dentures-bridges",
  "veneers-crowns",
  "extractions",
  "paediatrics"
];

// Map slug to specific column span configs for the responsive Bento Grid
const bentoSpanStyles: Record<string, string> = {
  "root-canals": "lg:col-span-6 md:col-span-2",
  "teeth-cleaning": "lg:col-span-3 md:col-span-1",
  "dental-implants": "lg:col-span-3 md:col-span-1",
  "check-ups": "lg:col-span-3 md:col-span-1",
  "teeth-whitening": "lg:col-span-3 md:col-span-1",
  "fillings-and-sealants": "lg:col-span-3 md:col-span-1",
  "dentures-bridges": "lg:col-span-3 md:col-span-1",
  "veneers-crowns": "lg:col-span-6 md:col-span-2",
  "extractions": "lg:col-span-3 md:col-span-1",
  "paediatrics": "lg:col-span-3 md:col-span-1"
};

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
};

export default function ServicesGrid() {
  // Extract and order the top 10 services
  const topServices = top10Slugs
    .map(slug => services.find(s => s.slug === slug))
    .filter((s): s is Service => !!s);

  return (
    <section id="services" className="relative bg-white py-24 md:py-32 border-b border-ink-300 overflow-hidden">
      {/* Paper Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-multiply z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="grid-paper-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grid-paper-noise)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-xs font-bold text-plum-900 uppercase tracking-widest font-sans">
              Clinical Specialties Directory
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-plum-900 leading-tight mb-6"
          >
            Our Core Dental Services
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-ink-700 text-sm sm:text-base leading-relaxed"
          >
            Dr. Devarati delivers premium, highly sterile, and gentle procedures utilizing cutting-edge dental technology and bio-compatible materials to ensure absolute comfort and long-term restorative success.
          </motion.p>
        </div>

        {/* Dynamic Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 w-full"
        >
          {topServices.map((service) => {
            const spanStyle = bentoSpanStyles[service.slug] || "lg:col-span-3 md:col-span-1";
            const isLargeCard = service.slug === "root-canals" || service.slug === "veneers-crowns";
            
            return (
              <motion.div
                key={service.slug}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className={cn(
                  "group flex flex-col justify-between bg-porcelain/35 border border-ink-300 rounded-3xl p-6 md:p-8 transition-colors duration-300 hover:border-gold-500 cursor-pointer relative",
                  spanStyle
                )}
              >
                <div>
                  {/* Header Row: Emoji & Badge */}
                  <div className="flex items-center justify-between w-full mb-6">
                    <div className={cn(
                      "rounded-2xl bg-gold-500/10 border border-gold-500/15 flex items-center justify-center transition-all duration-300 group-hover:bg-gold-500 select-none",
                      isLargeCard ? "w-16 h-16 text-4xl" : "w-12 h-12 text-2xl"
                    )}>
                      {service.emoji}
                    </div>
                    <span className={cn("text-[9px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full font-sans", getCategoryStyles(service.category))}>
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={cn(
                    "font-serif font-semibold text-plum-900 leading-tight mb-3 group-hover:text-gold-700 transition-colors",
                    isLargeCard ? "text-2xl" : "text-lg sm:text-xl"
                  )}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className={cn(
                    "text-ink-700 leading-relaxed mb-6",
                    isLargeCard ? "text-sm max-w-xl" : "text-xs sm:text-sm"
                  )}>
                    {service.shortDescription}
                  </p>

                  {/* Large Card Specifications Strip */}
                  {isLargeCard && (
                    <div className="flex flex-wrap items-center gap-3 mb-6 pt-2">
                      <div className="flex items-center gap-1 text-[10px] font-bold text-ink-500 uppercase tracking-wider bg-white border border-ink-300/40 rounded-lg px-2.5 py-1">
                        <Clock className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                        <span>{service.duration.split(" ")[0]} {service.duration.split(" ")[1]}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Details Bar & Link */}
                <div className="w-full">
                  {!isLargeCard && (
                    <div className="flex items-center justify-between w-full text-[10px] sm:text-[11px] font-bold text-ink-500 border-t border-ink-300/40 pt-4 mt-auto">
                      <span>{service.duration}</span>
                    </div>
                  )}

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
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Services Primary Button & Sterile Protocols alert */}
        <div className="flex flex-col items-center gap-12 mt-16 md:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-gold-500 text-plum-900 hover:bg-gold-500 hover:text-plum-900 font-sans text-xs sm:text-sm font-bold uppercase tracking-wider py-4 px-10 rounded-full transition-all duration-250 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-gold-500"
            >
              <span>View All 19 Clinical Specialties ✦</span>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 md:p-8 border border-gold-500/20 bg-gold-500/5 rounded-3xl w-full text-center sm:text-left"
          >
            <div className="flex flex-col gap-1 max-w-2xl">
              <h4 className="font-serif text-base font-semibold text-plum-900">
                Need a comprehensive clinical consultation first?
              </h4>
              <p className="text-ink-700 text-xs sm:text-sm leading-relaxed">
                Dr. Devarati provides complete physical exams using high-resolution intra-oral cameras to map your smile anatomy.
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

      </div>
    </section>
  );
}
