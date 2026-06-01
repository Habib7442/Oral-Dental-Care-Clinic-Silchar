"use client";

import React from "react";
import Link from "next/link";
import { HeartPulse, ShieldCheck, Sparkles, Star, Award, Baby, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { services, Service } from "@/lib/services";
import { cn } from "@/lib/utils";

// Map static strings to Lucide icon components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Star,
  Award,
  Baby
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
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
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
              Advanced Clinical Specialties
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
            Dr. Devarati delivers premium, highly sterile, and gentle procedures utilizing cutting-edge rotary tools and bio-compatible materials to ensure absolute comfort and long-term restorative success.
          </motion.p>
        </div>

        {/* Dynamic Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full"
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.iconName] || ShieldCheck;
            return (
              <motion.div
                key={service.slug}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group flex flex-col items-start bg-porcelain/35 border border-ink-300 rounded-3xl p-6 md:p-8 transition-colors duration-300 hover:border-gold-500 cursor-pointer relative"
              >
                {/* Header row: Icon & Category */}
                <div className="flex items-center justify-between w-full mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/15 flex items-center justify-center text-gold-700 transition-colors group-hover:bg-gold-500 group-hover:text-plum-900 duration-300">
                    <IconComponent className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <span className={cn("text-[9px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full font-sans", getCategoryStyles(service.category))}>
                    {service.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-semibold text-plum-900 leading-tight mb-3 group-hover:text-gold-700 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-ink-700 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Details Bar */}
                <div className="flex items-center justify-between w-full text-[10px] sm:text-[11px] font-bold text-ink-500 border-t border-ink-300/40 pt-4 mt-auto">
                  <span>{service.duration}</span>
                  <span className="text-gold-700">{service.basePrice.split(" ")[0]}</span>
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
            );
          })}
        </motion.div>

        {/* Sterile Protocols banner below the grid */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 md:p-8 border border-gold-500/20 bg-gold-500/5 rounded-3xl mt-12 lg:mt-16 w-full text-center sm:text-left"
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
    </section>
  );
}
