"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function HowWeTreat() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const treatmentImages = [
    {
      src: ASSETS.howWeTreat.one,
      alt: "Clinical treatment workflow and instrumentation standard",
      aspect: "aspect-[784/1045]",
    },
    {
      src: ASSETS.howWeTreat.two,
      alt: "Sterile diagnostics and patient oral evaluation process",
      aspect: "aspect-[784/441]",
    },
    {
      src: ASSETS.howWeTreat.three,
      alt: "Post-treatment examination and patient aesthetic care outcome",
      aspect: "aspect-[784/440]",
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
          prev !== null && prev > 0 ? prev - 1 : treatmentImages.length - 1
        );
      } else if (e.key === "ArrowRight") {
        setActiveImageIndex((prev) =>
          prev !== null && prev < treatmentImages.length - 1 ? prev + 1 : 0
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, treatmentImages.length]);

  return (
    <section id="how-we-treat" className="relative bg-plum-900 py-24 md:py-32 border-b border-plum-950 overflow-hidden">
      {/* Structural corner lines */}
      <div className="absolute top-0 left-0 w-48 h-48 border-t-8 border-l-8 border-gold-500/5 -translate-x-16 -translate-y-16 pointer-events-none hidden lg:block" />

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
            <span className="text-xs font-bold text-gold-200 uppercase tracking-widest font-sans">
              Clinical Standards
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight mb-6"
          >
            How We Treat
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-plum-100 text-sm sm:text-base leading-relaxed"
          >
            Take an inside look at our actual treatment steps and procedural excellence. We maintain absolute precision, advanced instrumentation, and patient comfort guidelines at every stage of your dental care journey.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
        >
          {/* Column 1: Tall Vertical Image (Image 1) */}
          <div className="md:col-span-4">
            <motion.div
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={() => setActiveImageIndex(0)}
              className="group relative overflow-hidden rounded-3xl border border-plum-800 bg-white cursor-pointer"
            >
              <div className={`relative w-full ${treatmentImages[0].aspect}`}>
                <Image
                  src={treatmentImages[0].src}
                  alt={treatmentImages[0].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-w-7xl) 33vw, 95vw"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Column 2: YouTube Shorts Video (Privacy-Enhanced Embed with Logo Cropping) */}
          <div className="md:col-span-4">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-3xl border border-plum-800 bg-plum-950 w-full aspect-[9/16]"
            >
              <iframe
                src="https://www.youtube-nocookie.com/embed/8Z0apdk32-4?modestbranding=1&rel=0&iv_load_policy=3&controls=0"
                title="Oral & Dental Clinic Treatment Video Case Study"
                className="absolute inset-0 w-full h-full border-0 rounded-3xl scale-[1.22] origin-center"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Column 3: Stacked Landscape Images (Image 2 and 3) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {/* Image 2 */}
            <motion.div
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={() => setActiveImageIndex(1)}
              className="group relative overflow-hidden rounded-3xl border border-plum-800 bg-white cursor-pointer"
            >
              <div className={`relative w-full ${treatmentImages[1].aspect}`}>
                <Image
                  src={treatmentImages[1].src}
                  alt={treatmentImages[1].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-w-7xl) 33vw, 95vw"
                  priority
                />
              </div>
            </motion.div>

            {/* Image 3 */}
            <motion.div
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={() => setActiveImageIndex(2)}
              className="group relative overflow-hidden rounded-3xl border border-plum-800 bg-white cursor-pointer"
            >
              <div className={`relative w-full ${treatmentImages[2].aspect}`}>
                <Image
                  src={treatmentImages[2].src}
                  alt={treatmentImages[2].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-w-7xl) 33vw, 95vw"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
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
                  prev !== null && prev > 0 ? prev - 1 : treatmentImages.length - 1
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
                  prev !== null && prev < treatmentImages.length - 1 ? prev + 1 : 0
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
              <div className="relative w-full h-[60vh] sm:h-[65vh] md:h-[75vh] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                <Image
                  src={treatmentImages[activeImageIndex].src}
                  alt={treatmentImages[activeImageIndex].alt}
                  fill
                  className="object-contain"
                  sizes="(max-w-5xl) 90vw, 85vw"
                  priority
                />
              </div>

              {/* Bottom Details (Index Indicator) */}
              <div className="w-full text-center px-4">
                <div className="font-sans text-sm text-white/60">
                  Image {activeImageIndex + 1} of {treatmentImages.length}
                </div>
              </div>

              {/* Mobile Navigation controls */}
              <div className="flex sm:hidden items-center gap-6 mt-2">
                <button
                  onClick={() =>
                    setActiveImageIndex((prev) =>
                      prev !== null && prev > 0 ? prev - 1 : treatmentImages.length - 1
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
                      prev !== null && prev < treatmentImages.length - 1 ? prev + 1 : 0
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
