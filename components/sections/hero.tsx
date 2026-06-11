"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ShieldCheck, Heart, Award, Calendar, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ASSETS } from "@/lib/assets";

const childVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
};

export default function Hero() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState("");
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Stacked Card Component Data & States
  const cardsData = [
    {
      id: 2,
      src: ASSETS.howWeTreat.three,
      alt: "Post-treatment examination and patient aesthetic care outcome",
    },
    {
      id: 1,
      src: ASSETS.howWeTreat.two,
      alt: "Sterile diagnostics and patient oral evaluation process",
    },
    {
      id: 0,
      src: ASSETS.howWeTreat.one,
      alt: "Clinical treatment workflow and instrumentation standard",
    },
  ];

  const [cards, setCards] = useState(cardsData);
  const [hovered, setHovered] = useState(false);

  const handleShuffle = () => {
    setCards((prev) => {
      const next = [...prev];
      const last = next.pop();
      if (last !== undefined) {
        next.unshift(last);
      }
      return next;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || phone.length < 10 || !treatment || !date) return;
    
    // Format Preferred Date for readability
    const formattedDate = new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });

    // Construct a beautifully formatted WhatsApp pre-filled message
    const message = `Hello Dr. Devarati,

I would like to request a clinical priority appointment. Here are my booking details:

✦ Patient Name: ${name}
✦ Phone Number: ${phone}
✦ Selected Treatment: ${treatment}
✦ Preferred Date: ${formattedDate}

Thank you!`;

    const waUrl = `https://wa.me/919435492181?text=${encodeURIComponent(message)}`;

    setSubmitted(true);
    
    // Open WhatsApp in a new tab after a brief delay for visual submit feedback
    setTimeout(() => {
      window.open(waUrl, "_blank", "noopener,noreferrer");
      setName("");
      setPhone("");
      setTreatment("");
      setDate("");
      setSubmitted(false);
    }, 1200);
  };

  const avatars = [
    { name: "SD", bg: "bg-plum-800 text-gold-200" },
    { name: "AR", bg: "bg-gold-500 text-plum-900" },
    { name: "JD", bg: "bg-ink-700 text-porcelain" },
    { name: "SC", bg: "bg-plum-600 text-porcelain" },
  ];

  return (
    <section className="relative overflow-hidden bg-porcelain pt-[210px] sm:pt-[160px] md:pt-[180px] lg:pt-[200px] pb-16 md:pb-24 border-b border-ink-300 flex flex-col justify-center min-h-[90vh]">

      {/* Decorative Solid Gold Corner Lines */}
      <div className="absolute top-0 right-0 w-48 h-48 border-t-8 border-r-8 border-gold-500/10 translate-x-16 -translate-y-16 pointer-events-none hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full flex flex-col justify-between flex-1 gap-12 lg:gap-16">
        
        {/* Main Grid: Left copy, Right asset */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start w-full">
          
          {/* Left Column: Context, Headings, Conversion CTAs */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.05
                }
              }
            }}
            className="lg:col-span-7 flex flex-col items-start gap-6 text-left relative z-10"
          >
            {/* Premium Display Headings */}
            <motion.h1 
              variants={childVariants}
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-plum-900 leading-[1.1] max-w-2xl"
            >
              Restore Your Smile. <br />
              <span className="text-gold-600">Restore Your Confidence.</span>
            </motion.h1>

            {/* Subcopy details */}
            <motion.p 
              variants={childVariants}
              className="max-w-xl text-ink-700 font-sans text-sm sm:text-base leading-relaxed"
            >
              Welcome to <span className="text-gold-700 font-bold">Oral & Dental Care Clinic</span>, recognized as <span className="text-gold-700 font-bold">Silchar&apos;s best dental care clinic</span>. Under the expert clinical leadership of <span className="text-plum-900 font-bold">Dr. Devarati Ray Dutta Chowdhury (BDS, MCh)</span>, we deliver premium, highly sterile, and pain-free treatments using state-of-the-art technology.
            </motion.p>

            {/* Appointment Request Booking Form */}
            <motion.div 
              variants={childVariants}
              className="w-full max-w-lg bg-white border border-ink-300 rounded-2xl p-5 md:p-6 shadow-[0_4px_12px_rgba(27,19,32,0.03)] mt-2"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                <span className="text-xs font-semibold text-plum-900 uppercase tracking-widest font-sans">
                  Instant Booking Form
                </span>
              </div>
              
              <h3 className="text-base font-serif font-semibold text-plum-900 mb-4 leading-snug">
                Request a Priority Clinical Appointment
              </h3>

              {submitted ? (
                <div className="bg-plum-100/60 border border-plum-500/20 rounded-xl p-5 text-center text-xs font-medium text-plum-900 flex flex-col items-center justify-center gap-3 animate-fade-in">
                  <ShieldCheck className="w-8 h-8 text-gold-500 animate-bounce" />
                  <div className="flex flex-col gap-1">
                    <span className="font-bold text-sm text-plum-955">Appointment Request Received!</span>
                    <span className="text-ink-700 leading-relaxed max-w-xs mx-auto">
                      Our front office desk will contact you at <strong>{phone}</strong> within 15 minutes to confirm your exact time slot.
                    </span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Name Input */}
                    <div className="flex flex-col gap-1">
                      <label htmlFor="booking-name" className="text-[10px] font-bold text-ink-700 uppercase tracking-wider">
                        Patient Name
                      </label>
                      <input
                        id="booking-name"
                        type="text"
                        required
                        placeholder="Enter full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border border-ink-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/10 rounded-xl px-4 py-2.5 text-xs font-sans font-medium text-ink-900 bg-porcelain outline-none transition-all"
                      />
                    </div>

                    {/* Phone Input */}
                    <div className="flex flex-col gap-1">
                      <label htmlFor="booking-phone" className="text-[10px] font-bold text-ink-700 uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        id="booking-phone"
                        type="tel"
                        required
                        placeholder="10-digit mobile number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                        className="w-full border border-ink-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/10 rounded-xl px-4 py-2.5 text-xs font-sans font-medium text-ink-900 bg-porcelain outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Treatment Selection */}
                    <div className="flex flex-col gap-1 relative">
                      <label htmlFor="booking-treatment" className="text-[10px] font-bold text-ink-700 uppercase tracking-wider">
                        Preferred Treatment
                      </label>
                      <div className="relative">
                        <select
                          id="booking-treatment"
                          required
                          value={treatment}
                          onChange={(e) => setTreatment(e.target.value)}
                          className="w-full border border-ink-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/10 rounded-xl px-4 pr-10 py-2.5 text-xs font-sans font-medium text-ink-900 bg-porcelain outline-none transition-all appearance-none cursor-pointer"
                        >
                          <option value="" disabled>Select treatment</option>
                          <option value="Consultation">General Dental Consultation</option>
                          <option value="Root Canal">Root Canal Therapy (RCT)</option>
                          <option value="Dental Implants">Premium Dental Implants</option>
                          <option value="Smile Makeover">Cosmetic Veneers & Makeover</option>
                          <option value="Teeth Whitening">Whitening & Deep Cleaning</option>
                          <option value="Orthodontics">Braces & Aligners</option>
                        </select>
                        <ChevronDown className="w-3.5 h-3.5 text-ink-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* Date Picker */}
                    <div className="flex flex-col gap-1">
                      <label htmlFor="booking-date" className="text-[10px] font-bold text-ink-700 uppercase tracking-wider">
                        Preferred Date
                      </label>
                      <input
                        id="booking-date"
                        type="date"
                        required
                        min={new Date().toISOString().split("T")[0]}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full border border-ink-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/10 rounded-xl px-4 py-2.5 text-xs font-sans font-medium text-ink-900 bg-porcelain outline-none transition-all appearance-none cursor-pointer"
                      />
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01, translateY: -1 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-plum-800 hover:bg-plum-900 text-porcelain text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-full shadow-[0_2px_8px_rgba(62,22,53,0.15)] hover:shadow-[0_4px_12px_rgba(62,22,53,0.25)] transition-all cursor-pointer w-full mt-2"
                  >
                    <Calendar className="w-4 h-4 text-gold-200" />
                    <span>Confirm Priority Booking</span>
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Overlapping ratings badges */}
            <motion.div 
              variants={childVariants}
              className="flex flex-wrap items-center gap-4 mt-4 border-t border-ink-300/50 pt-4 w-full max-w-lg"
            >
              {/* Stacked avatars */}
              <div className="flex items-center -space-x-3">
                {avatars.map((av, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.15, zIndex: 20 }}
                    className={cn(
                      "w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold tracking-wider shadow-sm shrink-0 transition-transform cursor-default",
                      av.bg
                    )}
                  >
                    {av.name}
                  </motion.div>
                ))}
              </div>
              {/* Reviews text */}
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-gold-500 fill-gold-500" />
                  ))}
                  <span className="text-xs font-bold text-plum-900 ml-1.5">4.9 ★ Rating</span>
                </div>
                <span className="text-[11px] font-semibold text-ink-500">
                  Trusted by 248+ patients in Silchar
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Premium Interactive Stacked Card Deck */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-5 relative w-full flex items-center justify-center z-10 min-h-[380px] sm:min-h-[450px] lg:min-h-0 px-6 sm:px-12 lg:px-0"
          >
            <div 
              className="relative w-full aspect-[4/5] max-w-md select-none"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {cards.map((card) => {
                const stackIndex = cards.findIndex((c) => c.id === card.id);
                const distanceFromTop = cards.length - 1 - stackIndex;
                const isTop = distanceFromTop === 0;
                
                const zIndex = stackIndex * 10;
                
                // Stack layout: Top card is scale 1. Each card below scales down slightly.
                const scaleValue = isTop ? 1 : 1 - distanceFromTop * 0.04;
                
                // Standard offset values to stack cards peeking to the left (like the second image sketch)
                let xOffset = 0;
                let yOffset = 0;
                let rotateValue = 0;

                if (isMobile) {
                  // Half the offsets on mobile to prevent clipping screen edges
                  if (distanceFromTop === 0) {
                    xOffset = hovered ? 6 : 0;
                    yOffset = hovered ? -3 : 0;
                    rotateValue = hovered ? 1 : 0;
                  } else if (distanceFromTop === 1) {
                    xOffset = hovered ? -18 : -8;
                    yOffset = hovered ? -1 : 0;
                    rotateValue = hovered ? -3 : -1;
                  } else if (distanceFromTop === 2) {
                    xOffset = hovered ? -36 : -16;
                    yOffset = hovered ? -2 : 0;
                    rotateValue = hovered ? -6 : -2;
                  } else {
                    xOffset = hovered ? -36 : -16;
                    yOffset = hovered ? -2 : 0;
                    rotateValue = hovered ? -6 : -2;
                  }
                } else {
                  if (distanceFromTop === 0) {
                    xOffset = hovered ? 12 : 0;
                    yOffset = hovered ? -6 : 0;
                    rotateValue = hovered ? 2 : 0;
                  } else if (distanceFromTop === 1) {
                    xOffset = hovered ? -36 : -16;
                    yOffset = hovered ? -2 : 0;
                    rotateValue = hovered ? -6 : -2;
                  } else if (distanceFromTop === 2) {
                    xOffset = hovered ? -72 : -32;
                    yOffset = hovered ? -4 : 0;
                    rotateValue = hovered ? -12 : -4;
                  } else {
                    xOffset = hovered ? -72 : -32;
                    yOffset = hovered ? -4 : 0;
                    rotateValue = hovered ? -12 : -4;
                  }
                }

                return (
                  <motion.div
                    key={card.id}
                    style={{ zIndex }}
                    animate={{
                      x: xOffset,
                      y: yOffset,
                      scale: scaleValue,
                      rotate: rotateValue,
                      opacity: distanceFromTop > 2 ? 0 : 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 22,
                    }}
                    onClick={handleShuffle}
                    className={cn(
                      "absolute inset-0 w-full h-full bg-white border border-ink-300 rounded-3xl p-3 shadow-[0_8px_32px_rgba(27,19,32,0.05)] cursor-pointer select-none origin-bottom flex flex-col",
                      distanceFromTop > 2 ? "pointer-events-none" : "pointer-events-auto"
                    )}
                  >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-porcelain">
                      <Image
                        src={card.src}
                        alt={card.alt}
                        fill
                        className="object-cover pointer-events-none"
                        sizes="(max-w-7xl) 100vw, 400px"
                        priority={isTop}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* Bottom Trust Pillars Stripe */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 py-6 md:py-8 border-t border-ink-300 w-full mt-8 md:mt-12 text-sm text-ink-700"
        >
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-gold-700" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-plum-900 leading-tight">100% Sterile Facility</span>
              <span className="text-xs text-ink-500 font-medium">Safe clinical environments</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/20 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-gold-700" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-plum-900 leading-tight">4+ Years of Care</span>
              <span className="text-xs text-ink-500 font-medium">Dedicated oral expertise</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/20 flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5 text-gold-700" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-plum-900 leading-tight">Gentle & Painless</span>
              <span className="text-xs text-ink-500 font-medium">Comfort-focused approach</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
