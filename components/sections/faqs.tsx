"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqList: FaqItem[] = [
  {
    question: "What should I expect during my first dental consultation?",
    answer: "During your first visit, Dr. Devarati will conduct a comprehensive, thorough examination of your teeth, gums, tongue, and cheeks. Using advanced, low-radiation digital intra-oral cameras, we map your dental anatomy on high-resolution screens so you can see your teeth and understand any treatment requirements clearly."
  },
  {
    question: "Do you accept digital payments like UPI, Google Pay, or cards?",
    answer: "Yes, absolutely! We support completely paperless and modern payment options. You can pay seamlessly via all standard UPI applications (GPay, PhonePe, Paytm, BHIM) by scanning our clinic's QR code, or use major credit and debit cards, as well as cash."
  },
  {
    question: "How does the WhatsApp priority scheduling system work?",
    answer: "Our booking desk uses a priority WhatsApp reservation link. When you input your booking details on this website, it formats your patient request file into a pre-filled message. Clicking submit automatically redirects you to WhatsApp, allowing our front office desk to confirm your exact time slot in under 15 minutes."
  },
  {
    question: "How does the clinic maintain hygiene and instrument sterilization?",
    answer: "Patient clinical safety is our absolute highest priority. We strictly implement rigid multi-stage sterilization guidelines. All dental instruments undergo manual scrubbing, chemical disinfection, and high-temperature Class-B autoclave vacuum steam sterilization in sterile sealed pouches opened only in your presence."
  },
  {
    question: "Do you accommodate sudden tooth pain or dental emergencies?",
    answer: "Yes, we prioritize acute dental emergencies such as severe root pain, oral swelling, bleeding, or fractured teeth. We allocate dedicated reserve slots daily. If you require emergency care, please fill out our online form to instantly notify our WhatsApp desk, or call us directly at +91 94354 92181."
  }
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="relative bg-white py-24 md:py-32 border-b border-ink-300 overflow-hidden">
      {/* Paper Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-multiply z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="faqs-paper-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#faqs-paper-noise)" />
        </svg>
      </div>

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
            <div className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-xs font-bold text-plum-900 uppercase tracking-widest font-sans">
              Frequently Asked Questions
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-plum-900 leading-tight mb-6"
          >
            Common Clinical Inquiries
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-ink-700 text-sm sm:text-base leading-relaxed"
          >
            Explore direct clinical details regarding clinic scheduling, payments, sterilization standards, and emergency walk-in coordinates.
          </motion.p>
        </div>

        {/* Accordion List Container */}
        <div className="max-w-3xl mx-auto flex flex-col gap-4 w-full">
          {faqList.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={cn(
                  "group border transition-all duration-300 rounded-3xl bg-porcelain/35 overflow-hidden",
                  isOpen ? "border-gold-500 bg-white" : "border-ink-300 hover:border-ink-500"
                )}
              >
                {/* Accordion Header Toggle button */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left font-serif text-sm sm:text-base font-semibold text-plum-900 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3 pr-4 leading-snug">
                    <HelpCircle className={cn(
                      "w-4 h-4 shrink-0 transition-colors",
                      isOpen ? "text-gold-600" : "text-ink-500 group-hover:text-plum-900"
                    )} />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-gold-700 transition-transform duration-300 shrink-0",
                      isOpen ? "rotate-180 text-gold-500" : ""
                    )}
                  />
                </button>

                {/* Accordion Content Panel (with Framer Motion heights) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 border-t border-ink-300/30 text-ink-700 text-xs sm:text-sm leading-relaxed font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
