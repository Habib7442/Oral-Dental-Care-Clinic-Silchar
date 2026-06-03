"use client";

import React from "react";
import { HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

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

export default function Faqs({ isStandalone = false }: { isStandalone?: boolean }) {
  return (
    <section
      id="faqs"
      className={cn(
        "relative bg-white border-b border-ink-300 overflow-hidden",
        isStandalone
          ? "pt-[210px] sm:pt-[160px] md:pt-[180px] lg:pt-[200px] pb-24 min-h-screen"
          : "py-24 md:py-32"
      )}
    >


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
        <Accordion type="single" collapsible className="max-w-3xl mx-auto flex flex-col gap-4 w-full">
          {faqList.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="group border border-ink-300 hover:border-ink-500 data-[state=open]:border-gold-500 transition-all duration-300 rounded-3xl bg-porcelain/35 overflow-hidden data-[state=open]:bg-white"
              >
                <AccordionTrigger className="w-full flex items-center justify-between p-6 text-left font-serif text-sm sm:text-base font-semibold text-plum-900 hover:no-underline focus:outline-none cursor-pointer group/trigger **:data-[slot=accordion-trigger-icon]:text-gold-700 **:data-[slot=accordion-trigger-icon]:size-4">
                  <span className="flex items-center gap-3 pr-4 leading-snug">
                    <HelpCircle className="w-4 h-4 shrink-0 transition-colors text-ink-500 group-hover/trigger:text-plum-900 group-data-[state=open]/trigger:text-gold-600" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0 border-t border-ink-300/30 text-ink-700 text-xs sm:text-sm leading-relaxed font-sans h-auto bg-transparent">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
