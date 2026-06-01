"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ShieldCheck, 
  Clock, 
  Activity, 
  Sparkles, 
  Star, 
  Award, 
  Baby, 
  CheckCircle2, 
  ChevronDown, 
  Calendar,
  PhoneCall
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Service } from "@/lib/services";
import { cn } from "@/lib/utils";

export default function TreatmentPageClient({ service }: { service: Service }) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  // Appointment Form States
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || phone.length < 10 || !date) return;
    
    // Format Preferred Date for readability
    const formattedDate = new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });

    // Construct a beautifully formatted WhatsApp pre-filled message
    const message = `Hello Dr. Devarati,

I would like to request a clinical priority appointment for ${service.title}. Here are my booking details:

✦ Patient Name: ${name}
✦ Phone Number: ${phone}
✦ Selected Treatment: ${service.title}
✦ Preferred Date: ${formattedDate}

Thank you!`;

    const waUrl = `https://wa.me/919435492181?text=${encodeURIComponent(message)}`;

    setSubmitted(true);
    
    // Open WhatsApp in a new tab after a brief delay for visual submit feedback
    setTimeout(() => {
      window.open(waUrl, "_blank", "noopener,noreferrer");
      setName("");
      setPhone("");
      setDate("");
      setSubmitted(false);
    }, 1200);
  };

  return (
    <section className="relative overflow-hidden bg-porcelain pt-[210px] sm:pt-[160px] md:pt-[180px] lg:pt-[200px] pb-24 border-b border-ink-300 min-h-screen">
      {/* Paper Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-multiply z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="detail-paper-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#detail-paper-noise)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-plum-800 hover:text-gold-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500 rounded px-2 py-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>
        </div>

        {/* Dynamic Two-Column Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full">
          
          {/* Left Column: Full Editorial Clinic Specs */}
          <div className="lg:col-span-7 flex flex-col items-start gap-10">
            
            {/* Title & Headline Info */}
            <div className="flex flex-col items-start gap-4">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest px-3 py-1 bg-gold-500/10 text-gold-700 border border-gold-500/20 rounded-full font-sans">
                ✦ {service.category} Procedure
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-plum-900 leading-tight">
                {service.title}
              </h1>
              <p className="text-ink-700 text-sm sm:text-base leading-relaxed mt-2 max-w-2xl font-sans">
                {service.longDescription}
              </p>
            </div>

            {/* Performance Specifications Panel (No shadows, solid gold borders) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full border-y border-ink-300/80 py-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-700 shrink-0">
                  <Clock className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-ink-500 uppercase tracking-wider">Duration</span>
                  <span className="text-xs sm:text-sm font-semibold text-plum-900 leading-tight mt-0.5">{service.duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-xl shrink-0 select-none leading-none">
                  {service.emoji}
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-ink-500 uppercase tracking-wider">Comfort level</span>
                  <span className="text-xs sm:text-sm font-semibold text-plum-900 leading-tight mt-0.5">{service.comfortLevel}</span>
                </div>
              </div>
            </div>

            {/* Stepper Roadmap - Step-by-Step Procedure */}
            <div className="flex flex-col items-start gap-6 w-full">
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-plum-900">
                Your Treatment Roadmap
              </h3>
              
              <div className="relative pl-8 sm:pl-10 flex flex-col gap-8 w-full mt-4">
                {/* Connecting Line (Absolute Solid Gold Accent) */}
                <div className="absolute top-4 bottom-4 left-3.5 sm:left-4.5 w-0.5 bg-gold-500/20" />

                {service.steps.map((step, index) => (
                  <div key={index} className="relative flex flex-col gap-1 w-full text-left">
                    {/* Circle Stepper Bullet */}
                    <div className="absolute -left-8 sm:-left-10 top-0.5 w-6 h-6 rounded-full bg-white border-2 border-gold-500 flex items-center justify-center text-[9px] font-bold text-plum-900 z-10 select-none">
                      {index + 1}
                    </div>
                    <span className="text-[10px] font-bold text-gold-700 uppercase tracking-widest font-sans">
                      Step 0{index + 1}
                    </span>
                    <h4 className="font-serif text-base font-semibold text-plum-900">
                      {step.title}
                    </h4>
                    <p className="text-ink-700 text-xs sm:text-sm leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Clinical Benefits Block */}
            <div className="flex flex-col items-start gap-6 w-full border-t border-ink-300/60 pt-10">
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-plum-900">
                Key Clinical Benefits
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-2">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2.5 p-4 bg-white border border-ink-300 rounded-2xl">
                    <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                    <span className="text-ink-900 text-xs sm:text-sm font-medium leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Clinical FAQs Accordion */}
            <div className="flex flex-col items-start gap-6 w-full border-t border-ink-300/60 pt-10">
              <div className="flex flex-col items-start gap-2">
                <span className="text-[10px] font-bold text-gold-700 uppercase tracking-widest font-sans">
                  Frequently Asked Questions
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-plum-900">
                  Common Questions
                </h3>
              </div>
              
              <div className="flex flex-col gap-3 w-full mt-2">
                {service.faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div 
                      key={index}
                      className={cn(
                        "group border transition-all duration-300 rounded-2xl bg-white overflow-hidden",
                        isOpen ? "border-gold-500 shadow-sm" : "border-ink-300 hover:border-ink-500"
                      )}
                    >
                      {/* Accordion Toggle Trigger */}
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="w-full flex items-center justify-between p-5 text-left font-serif text-sm sm:text-base font-semibold text-plum-900 focus:outline-none"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown 
                          className={cn(
                            "w-4 h-4 text-gold-700 transition-transform duration-300",
                            isOpen ? "rotate-180 text-gold-500" : ""
                          )} 
                        />
                      </button>

                      {/* Accordion Content Panel */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                          >
                            <div className="p-5 pt-0 border-t border-ink-300/30 text-ink-700 text-xs sm:text-sm leading-relaxed font-sans">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Conversion Booking Sidebar */}
          <div className="lg:col-span-5 w-full lg:sticky lg:top-[220px]">
            <div className="w-full bg-white border border-ink-300 rounded-3xl p-6 md:p-8 flex flex-col gap-6">
              
              <div className="flex flex-col gap-1 border-b border-ink-300/50 pb-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-plum-900 uppercase tracking-widest font-sans">
                    Priority Booking
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-plum-900 leading-snug">
                  Request Priority Appointment
                </h3>
                <p className="text-ink-500 text-[11px] leading-relaxed mt-1">
                  Request a clinical slot for <span className="font-bold text-gold-700">{service.title}</span>. Our desk will contact you in 15 minutes.
                </p>
              </div>

              {submitted ? (
                <div className="bg-plum-100/60 border border-plum-500/20 rounded-2xl p-6 text-center text-xs font-medium text-plum-900 flex flex-col items-center justify-center gap-3 animate-fade-in py-12">
                  <ShieldCheck className="w-8 h-8 text-gold-500 animate-bounce" />
                  <div className="flex flex-col gap-1.5">
                    <span className="font-bold text-sm text-plum-955">Appointment Request Received!</span>
                    <span className="text-ink-700 leading-relaxed max-w-xs mx-auto">
                      Our front office desk will contact you at <strong>{phone}</strong> within 15 minutes to confirm your exact time slot for <strong>{service.title}</strong>.
                    </span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name Input */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="detail-name" className="text-[10px] font-bold text-ink-700 uppercase tracking-wider">
                      Patient Name
                    </label>
                    <input
                      id="detail-name"
                      type="text"
                      required
                      placeholder="Enter full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border border-ink-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/10 rounded-xl px-4 py-3 text-xs font-sans font-medium text-ink-900 bg-porcelain outline-none transition-all"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="detail-phone" className="text-[10px] font-bold text-ink-700 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      id="detail-phone"
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                      className="w-full border border-ink-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/10 rounded-xl px-4 py-3 text-xs font-sans font-medium text-ink-900 bg-porcelain outline-none transition-all"
                    />
                  </div>

                  {/* Pre-filled Treatment Selection (Read-Only Input) */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="detail-treatment" className="text-[10px] font-bold text-ink-700 uppercase tracking-wider">
                      Selected Treatment
                    </label>
                    <input
                      id="detail-treatment"
                      type="text"
                      readOnly
                      value={service.title}
                      className="w-full border border-ink-300 rounded-xl px-4 py-3 text-xs font-sans font-semibold text-plum-900 bg-plum-100/50 outline-none select-none cursor-default"
                    />
                  </div>

                  {/* Date Picker */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="detail-date" className="text-[10px] font-bold text-ink-700 uppercase tracking-wider">
                      Preferred Date
                    </label>
                    <input
                      id="detail-date"
                      type="date"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full border border-ink-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/10 rounded-xl px-4 py-3 text-xs font-sans font-medium text-ink-900 bg-porcelain outline-none transition-all appearance-none cursor-pointer"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01, translateY: -1 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-plum-800 hover:bg-plum-900 text-porcelain text-xs font-bold uppercase tracking-wider py-4 px-6 rounded-full shadow-[0_2px_8px_rgba(62,22,53,0.15)] hover:shadow-[0_4px_12px_rgba(62,22,53,0.25)] transition-all cursor-pointer w-full mt-2"
                  >
                    <Calendar className="w-4 h-4 text-gold-200" />
                    <span>Confirm Priority Booking</span>
                  </motion.button>
                </form>
              )}

              {/* Clinic Ratings Pillar */}
              <div className="flex items-center gap-3 border-t border-ink-300/50 pt-5 mt-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-gold-500 fill-gold-500" />
                  ))}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-bold text-plum-900 leading-tight">4.9 ★ Clinic Rating</span>
                  <span className="text-[10px] font-medium text-ink-500">248+ verified Google reviews</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
