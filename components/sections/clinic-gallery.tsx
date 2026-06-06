"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ASSETS } from "@/lib/assets";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, ShieldCheck, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function ClinicGallery() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const galleryItems = [
    {
      title: "Clinic Entrance",
      description: "Welcoming, clean, and accessible entrance at Bilpar, Silchar.",
      image: ASSETS.clinic.entrance,
      className: "md:col-span-2",
    },
    {
      title: "Patient Lounge",
      description: "Comfortable air-conditioned seating designed for patient relaxation.",
      image: ASSETS.clinic.waitingArea,
      className: "md:col-span-1",
    },
    {
      title: "Consultation Cabin",
      description: "Private diagnostics, counseling, and digital treatment planning.",
      image: ASSETS.clinic.consultationCabin,
      className: "md:col-span-1",
    },
    {
      title: "Multi-Chair Facility",
      description: "Highly sterile multi-chair setup for parallel consultation capability.",
      image: ASSETS.clinic.multiChairFacility,
      className: "md:col-span-2",
    },
    {
      title: "Treatment Room",
      description: "Advanced dental chairs, autoclaved surgery kits, and micro-tools.",
      image: ASSETS.clinic.treatmentRoom,
      className: "md:col-span-2",
    },
    {
      title: "Vetted Certifications",
      description: "ASDC registrations, IDA affiliations, and quality credentials.",
      image: ASSETS.clinic.awards,
      className: "md:col-span-1",
    },
  ];

  // Disable body scroll when modal is active
  useEffect(() => {
    if (activeImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeImageIndex]);

  // Handle keyboard navigation
  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveImageIndex(null);
      } else if (e.key === "ArrowLeft") {
        setActiveImageIndex((prev) =>
          prev !== null && prev > 0 ? prev - 1 : galleryItems.length - 1
        );
      } else if (e.key === "ArrowRight") {
        setActiveImageIndex((prev) =>
          prev !== null && prev < galleryItems.length - 1 ? prev + 1 : 0
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, galleryItems.length]);

  return (
    <section id="clinic-gallery" className="relative bg-porcelain border-b border-ink-300 py-24 md:py-32 overflow-hidden">
      {/* Structural visual accents */}
      <div className="absolute top-0 right-0 w-48 h-48 border-t-8 border-r-8 border-gold-500/5 translate-x-16 -translate-y-16 pointer-events-none hidden lg:block" />

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
            <Camera className="w-4 h-4 text-gold-700" />
            <span className="text-xs font-bold text-plum-900 uppercase tracking-widest font-sans">
              Step Inside the Clinic
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-plum-900 leading-tight mb-6"
          >
            Our Clinical Infrastructure
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-ink-700 text-sm sm:text-base leading-relaxed"
          >
            Take a virtual tour of Dr. Devarati Ray&apos;s Oral & Dental Care Clinic in Silchar. We maintain a warm, modern, and highly sterile environment for all treatments.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[22rem]">
            {galleryItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                onClick={() => setActiveImageIndex(i)}
                header={
                  <div className="relative w-full h-full min-h-[180px] rounded-2xl overflow-hidden bg-porcelain border border-ink-300/10">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover/bento:scale-[1.03]"
                      sizes="(max-w-7xl) 33vw, 50vw"
                    />
                  </div>
                }
                className={item.className}
              />
            ))}
          </BentoGrid>
        </motion.div>

        {/* Bottom sterile verification notice */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 p-5 border border-ink-300 bg-white rounded-3xl mt-16 max-w-4xl mx-auto text-center sm:text-left select-none">
          <ShieldCheck className="w-6 h-6 text-gold-500 shrink-0" />
          <p className="text-[11px] sm:text-xs font-medium text-ink-700 leading-relaxed font-sans">
            <strong>Facility Notice:</strong> All areas displayed are subjected to daily clinical-grade sanitization protocols, utilizing vacuum Class-B autoclave processing for active instruments.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-plum-900/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8"
            onClick={() => setActiveImageIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex(null);
              }}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-[210] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 border border-white/10 hover:border-gold-500/50 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold-500 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Navigation Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex((prev) =>
                  prev !== null && prev > 0 ? prev - 1 : galleryItems.length - 1
                );
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[210] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 border border-white/10 hover:border-gold-500/50 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold-500 cursor-pointer hidden sm:flex"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Navigation Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex((prev) =>
                  prev !== null && prev < galleryItems.length - 1 ? prev + 1 : 0
                );
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[210] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 border border-white/10 hover:border-gold-500/50 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold-500 cursor-pointer hidden sm:flex"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Central Modal Content Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative flex flex-col items-center justify-center max-w-5xl w-full max-h-[85vh] gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Frame */}
              <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                <Image
                  src={galleryItems[activeImageIndex].image}
                  alt={galleryItems[activeImageIndex].title}
                  fill
                  className="object-contain"
                  sizes="(max-w-5xl) 90vw, 80vw"
                  priority
                />
              </div>

              {/* Caption Overlay details */}
              <div className="w-full text-center px-4 mt-2">
                <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-gold-200 mb-1">
                  {galleryItems[activeImageIndex].title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-white/80 max-w-2xl mx-auto leading-relaxed">
                  {galleryItems[activeImageIndex].description}
                </p>
                {/* Index Counter */}
                <div className="font-sans text-xs text-white/40 mt-3">
                  {activeImageIndex + 1} / {galleryItems.length}
                </div>
              </div>

              {/* Mobile Navigation controls */}
              <div className="flex sm:hidden items-center gap-6 mt-2">
                <button
                  onClick={() =>
                    setActiveImageIndex((prev) =>
                      prev !== null && prev > 0 ? prev - 1 : galleryItems.length - 1
                    )
                  }
                  className="p-3 rounded-full bg-white/10 active:scale-95 text-white border border-white/10 focus:outline-none cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() =>
                    setActiveImageIndex((prev) =>
                      prev !== null && prev < galleryItems.length - 1 ? prev + 1 : 0
                    )
                  }
                  className="p-3 rounded-full bg-white/10 active:scale-95 text-white border border-white/10 focus:outline-none cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
