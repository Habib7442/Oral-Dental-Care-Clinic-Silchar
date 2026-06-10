"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, ShieldCheck, X, ChevronLeft, ChevronRight } from "lucide-react";

const campImages = [
  "/assets/camp/569040029_1358117286324568_9079163552233397310_n.webp",
  "/assets/camp/569541051_1358117519657878_8498236098753725467_n.webp",
  "/assets/camp/570073088_1358117672991196_9170330300996125186_n.webp",
  "/assets/camp/570907241_1358117392991224_4671879076961693613_n.webp",
  "/assets/camp/571192255_1358117452991218_2868029228199450809_n.webp",
  "/assets/camp/571198808_1358117349657895_116970758279084405_n.webp",
  "/assets/camp/571215413_1358117566324540_3527719922286884718_n.webp",
  "/assets/camp/572523305_1358117229657907_2450707398291535893_n.webp",
];

export default function GalleryClient() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

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
          prev !== null && prev > 0 ? prev - 1 : campImages.length - 1
        );
      } else if (e.key === "ArrowRight") {
        setActiveImageIndex((prev) =>
          prev !== null && prev < campImages.length - 1 ? prev + 1 : 0
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex]);

  return (
    <section className="relative overflow-hidden bg-porcelain pt-[210px] sm:pt-[160px] md:pt-[180px] lg:pt-[200px] pb-24 border-b border-ink-300 min-h-screen">
      {/* Structural visual accents */}
      <div className="absolute top-0 right-0 w-48 h-48 border-t-8 border-r-8 border-gold-500/5 translate-x-16 -translate-y-16 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <Camera className="w-4 h-4 text-gold-700" />
            <span className="text-xs font-bold text-plum-900 uppercase tracking-widest font-sans">
              Clinical Outreach & Camps
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-plum-900 leading-tight mb-6"
          >
            Our Gallery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-ink-700 text-sm sm:text-base leading-relaxed"
          >
            A glimpse into our community dental checkup camps, school health programs, and outreach initiatives led by Dr. Devarati Ray across Silchar and Barak Valley.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {campImages.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              onClick={() => setActiveImageIndex(i)}
              className="group flex flex-col justify-between rounded-3xl border border-ink-300 bg-white p-4 transition-all duration-300 hover:border-gold-500 hover:shadow-[0_6px_20px_rgba(27,19,32,0.03)] cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-porcelain border border-ink-300/10">
                <Image
                  src={src}
                  alt={`Clinic Camp Activity ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-w-7xl) 33vw, 50vw"
                  priority={i < 3}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom sterile verification notice */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 p-5 border border-ink-300 bg-white rounded-3xl mt-16 max-w-4xl mx-auto text-center sm:text-left select-none">
          <ShieldCheck className="w-6 h-6 text-gold-500 shrink-0" />
          <p className="text-[11px] sm:text-xs font-medium text-ink-700 leading-relaxed font-sans">
            <strong>Outreach Notice:</strong> All dental outreach programs are conducted in accordance with clinical safety guidelines, providing oral hygiene education, basic scaling, and diagnostic checks.
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
                  prev !== null && prev > 0 ? prev - 1 : campImages.length - 1
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
                  prev !== null && prev < campImages.length - 1 ? prev + 1 : 0
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
              <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[75vh] rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                <Image
                  src={campImages[activeImageIndex]}
                  alt={`Clinic Camp Activity Full ${activeImageIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-w-5xl) 90vw, 80vw"
                  priority
                />
              </div>

              {/* Index Counter */}
              <div className="w-full text-center px-4">
                <div className="font-sans text-xs text-white/40">
                  {activeImageIndex + 1} / {campImages.length}
                </div>
              </div>

              {/* Mobile Navigation controls */}
              <div className="flex sm:hidden items-center gap-6 mt-2">
                <button
                  onClick={() =>
                    setActiveImageIndex((prev) =>
                      prev !== null && prev > 0 ? prev - 1 : campImages.length - 1
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
                      prev !== null && prev < campImages.length - 1 ? prev + 1 : 0
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
