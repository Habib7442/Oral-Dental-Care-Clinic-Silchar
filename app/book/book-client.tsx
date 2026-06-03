"use client";

import React, { useState } from "react";
import { Star, ShieldCheck, Clock, Calendar, ChevronDown, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/lib/services";

export default function BookClient() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState("");
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || phone.length < 10 || !treatment || !date) return;

    // Format Preferred Date for readability
    const formattedDate = new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });

    // Find the chosen service details
    const chosenService = services.find(s => s.slug === treatment || s.title === treatment);
    const serviceName = chosenService ? chosenService.title : treatment;

    // Construct a beautifully formatted WhatsApp pre-filled message
    const message = `Hello Dr. Devarati,

I would like to request a clinical priority appointment. Here are my booking details:

✦ Patient Name: ${name}
✦ Phone Number: ${phone}
✦ Selected Treatment: ${serviceName}
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

  return (
    <section className="relative overflow-hidden bg-porcelain pt-[210px] sm:pt-[160px] md:pt-[180px] lg:pt-[200px] pb-24 border-b border-ink-300 min-h-screen">


      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
        {/* Page Header */}
        <div className="flex flex-col items-start text-left max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-xs font-bold text-plum-900 uppercase tracking-widest font-sans">
              Sterile Reservation Desk
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-plum-900 leading-tight mb-4">
            Clinical Priority Booking Portal
          </h1>
          <p className="text-ink-700 text-sm sm:text-base leading-relaxed">
            Reserve your clinical slot online and connect directly with Dr. Devarati Roy Dutta Choudhury. Your inputs will generate an instant priority appointment file sent straight to our WhatsApp desk.
          </p>
        </div>

        {/* Dual Column Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full">
          {/* Left Column: Guidelines & Sterile Protocols */}
          <div className="lg:col-span-6 flex flex-col items-start gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="font-serif text-2xl font-semibold text-plum-900">
                Booking Guidelines & Patient Care
              </h2>
              <p className="text-ink-700 text-xs sm:text-sm leading-relaxed max-w-xl font-sans">
                Our clinic operates under rigorous multi-stage autoclave sterilization protocols to ensure 100% infection-free safety. Fill out the reservation details, and follow the simple guidelines below:
              </p>
            </div>

            {/* Checklist items in clean porcelain boxes */}
            <div className="flex flex-col gap-4 w-full max-w-xl">
              <div className="flex items-start gap-4 p-5 bg-white border border-ink-300 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center text-gold-700 shrink-0">
                  <ShieldCheck className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div className="flex flex-col text-left">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-plum-900">
                    100% Sterile Setup
                  </h4>
                  <p className="text-ink-500 text-xs mt-1 leading-relaxed">
                    Class-B autoclave steam sterilized dental instruments prepared exclusively for your scheduled hour.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white border border-ink-300 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center text-gold-700 shrink-0">
                  <Clock className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div className="flex flex-col text-left">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-plum-900">
                    Zero Waiting Times
                  </h4>
                  <p className="text-ink-500 text-xs mt-1 leading-relaxed">
                    By coordinating slots on WhatsApp, we limit in-clinic waiting room queuing to under 10 minutes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white border border-ink-300 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center text-gold-700 shrink-0">
                  <PhoneCall className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div className="flex flex-col text-left">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-plum-900">
                    Direct Confirmation Call
                  </h4>
                  <p className="text-ink-500 text-xs mt-1 leading-relaxed">
                    Dr. Devarati&apos;s front office will call you within 15 minutes of reservation to confirm your exact session time.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Clinic Timings Notice */}
            <div className="p-6 border border-gold-500/20 bg-gold-500/5 rounded-3xl w-full max-w-xl text-left">
              <h4 className="font-serif text-sm font-semibold text-plum-900 mb-2 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-gold-600" />
                Clinic Visiting Hours
              </h4>
              <p className="text-ink-700 text-xs leading-relaxed font-medium">
                ✦ Monday – Saturday: 10:00 AM – 8:00 PM <br />
                ✦ Sunday: Prior Clinical Appointments Only
              </p>
            </div>
          </div>

          {/* Right Column: Premium Form Element */}
          <div className="lg:col-span-6 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full bg-white border border-ink-300 rounded-3xl p-6 md:p-8 flex flex-col gap-6"
            >
              <div className="flex flex-col gap-1 border-b border-ink-300/50 pb-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-plum-900 uppercase tracking-widest font-sans">
                    Direct Verification
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-plum-900 leading-snug">
                  Fill Booking Details
                </h3>
                <p className="text-ink-500 text-[11px] leading-relaxed mt-1">
                  Secure your slot. Clicking submission automatically routes you to WhatsApp with pre-filled clinical details.
                </p>
              </div>

              {submitted ? (
                <div className="bg-plum-100/60 border border-plum-500/20 rounded-2xl p-6 text-center text-xs font-medium text-plum-900 flex flex-col items-center justify-center gap-3 animate-fade-in py-16">
                  <ShieldCheck className="w-8 h-8 text-gold-500 animate-bounce" />
                  <div className="flex flex-col gap-1.5">
                    <span className="font-bold text-sm text-plum-955">Appointment Form Submitted!</span>
                    <span className="text-ink-700 leading-relaxed max-w-xs mx-auto">
                      Directing you to WhatsApp at <strong>+91 94354 92181</strong> to automatically record your clinical file.
                    </span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name Input */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="form-name" className="text-[10px] font-bold text-ink-700 uppercase tracking-wider">
                      Patient Name
                    </label>
                    <input
                      id="form-name"
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
                    <label htmlFor="form-phone" className="text-[10px] font-bold text-ink-700 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                      className="w-full border border-ink-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/10 rounded-xl px-4 py-3 text-xs font-sans font-medium text-ink-900 bg-porcelain outline-none transition-all"
                    />
                  </div>

                  {/* Selected Treatment Dropdown */}
                  <div className="flex flex-col gap-1 relative">
                    <label htmlFor="form-treatment" className="text-[10px] font-bold text-ink-700 uppercase tracking-wider">
                      Selected Specialty Treatment
                    </label>
                    <div className="relative">
                      <select
                        id="form-treatment"
                        required
                        value={treatment}
                        onChange={(e) => setTreatment(e.target.value)}
                        className="w-full border border-ink-300 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/10 rounded-xl px-4 pr-10 py-3 text-xs font-sans font-medium text-ink-900 bg-porcelain outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select dental treatment</option>
                        {services.map((service) => (
                          <option key={service.slug} value={service.slug}>
                            {service.emoji} {service.title}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-ink-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Preferred Date Picker */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="form-date" className="text-[10px] font-bold text-ink-700 uppercase tracking-wider">
                      Preferred Date
                    </label>
                    <input
                      id="form-date"
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
                    <span>Confirm via WhatsApp Booking</span>
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
                  <span className="text-[10px] font-medium text-ink-500">248+ verified patient reviews</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
