"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Calendar, MessageSquare, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactClient() {
  return (
    <section className="relative overflow-hidden bg-porcelain pt-[210px] sm:pt-[160px] md:pt-[180px] lg:pt-[200px] pb-24 border-b border-ink-300 min-h-screen">
      {/* Paper Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-multiply z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="contact-paper-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#contact-paper-noise)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
        {/* Page Header */}
        <div className="flex flex-col items-start text-left max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-xs font-bold text-plum-900 uppercase tracking-widest font-sans">
              Directions & NAP
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-plum-900 leading-tight mb-4">
            Clinic Contact & Location
          </h1>
          <p className="text-ink-700 text-sm sm:text-base leading-relaxed">
            Get accurate directions, explore clinical hours, and contact our front office directly on WhatsApp to confirm your appointment.
          </p>
        </div>

        {/* Dual Column Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full">
          
          {/* Left Column: Contact info & Hours */}
          <div className="lg:col-span-5 flex flex-col items-start gap-8">
            
            {/* NAP details card */}
            <div className="flex flex-col gap-6 w-full">
              <h2 className="font-serif text-2xl font-semibold text-plum-900">
                Clinic Location Details
              </h2>
              
              <div className="flex flex-col gap-5 w-full">
                {/* Physical address */}
                <a 
                  href="https://www.google.com/maps/place/ORAL+AND+DENTAL+CARE+CLINIC/@24.8167597,92.7976072,17z/data=!4m6!3m5!1s0x374e4b4b5fc989f3:0x481870e5aaf612c1!8m2!3d24.8167548!4d92.8001821!16s%2Fg%2F11cs19gq1k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 bg-white border border-ink-300 rounded-2xl group transition-colors hover:border-gold-500 text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center text-gold-700 shrink-0 group-hover:scale-105 transition-transform">
                    <MapPin className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-plum-900 leading-tight">
                      Address Details
                    </h4>
                    <span className="text-ink-900 text-xs sm:text-sm font-medium leading-relaxed mt-1">
                      Oral and Dental Care Clinic
                    </span>
                    <span className="text-ink-500 text-xs mt-0.5 leading-relaxed">
                      Lochan Bairagi Road, Bilpar, Kanakpur, Silchar, Assam 788001
                    </span>
                    <span className="text-[10px] text-gold-600 font-bold uppercase tracking-wider mt-1.5">
                      Landmark: Near Rahul Medicos
                    </span>
                  </div>
                </a>

                {/* Telephone */}
                <a 
                  href="tel:+919435492181"
                  className="flex items-start gap-4 p-5 bg-white border border-ink-300 rounded-2xl group transition-colors hover:border-gold-500 text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center text-gold-700 shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-plum-900 leading-tight">
                      Phone Reservation
                    </h4>
                    <span className="text-ink-900 text-xs sm:text-sm font-semibold mt-1">
                      +91 94354 92181
                    </span>
                    <span className="text-ink-500 text-xs mt-0.5 leading-relaxed">
                      Call our desk to coordinate slots directly
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Timings card */}
            <div className="w-full border-t border-ink-300/60 pt-8 text-left">
              <h3 className="font-serif text-lg font-semibold text-plum-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-gold-600 shrink-0 stroke-[1.5]" />
                Visiting & Clinical Hours
              </h3>
              <div className="flex flex-col gap-3 w-full bg-white border border-ink-300 rounded-2xl p-5">
                <div className="flex items-center justify-between text-xs sm:text-sm w-full py-1">
                  <span className="text-ink-700 font-medium">Monday – Saturday:</span>
                  <span className="text-plum-900 font-bold px-3 py-1 bg-gold-500/10 border border-gold-500/15 rounded-lg text-xs">
                    10:00 AM – 8:00 PM
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm w-full py-1 border-t border-ink-300/40">
                  <span className="text-ink-700 font-medium">Sunday:</span>
                  <span className="text-ink-500 font-medium px-3 py-1 bg-ink-100 rounded-lg text-xs">
                    Closed (Emergency Slots only)
                  </span>
                </div>
              </div>
            </div>

            {/* Emergency guidelines warning box */}
            <div className="p-6 border border-gold-500/20 bg-gold-500/5 rounded-3xl w-full text-left">
              <h4 className="font-serif text-sm font-semibold text-plum-900 mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gold-600" />
                Sterile Care Protocols
              </h4>
              <p className="text-ink-700 text-xs leading-relaxed font-medium">
                Our facility implements international Class-B vacuum autoclaving and surface chemical sanitization, ensuring every clinical appointment is completely safe.
              </p>
            </div>

          </div>

          {/* Right Column: Embedded Google Map & Quick Action CTAs */}
          <div className="lg:col-span-7 w-full flex flex-col gap-6">
            
            {/* Embedded Iframe Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full aspect-[4/3] sm:aspect-video lg:aspect-auto lg:h-[480px] rounded-3xl overflow-hidden border border-ink-300 relative bg-white"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.3775285871907!2d92.79760717393333!3d24.816759747007552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e4b4b5fc989f3%3A0x481870e5aaf612c1!2sORAL%20AND%20DENTAL%20CARE%20CLINIC!5e0!3m2!1sen!2sin!4v1780292658949!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps embed showing Oral and Dental Care Clinic Silchar location"
              />
            </motion.div>

            {/* Quick Action buttons below map */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-2">
              <Link
                href="/book"
                className="flex items-center justify-center gap-2 bg-plum-800 hover:bg-plum-900 text-porcelain text-xs font-bold uppercase tracking-wider py-4 px-6 rounded-full shadow-[0_2px_8px_rgba(62,22,53,0.15)] transition-all cursor-pointer text-center"
              >
                <Calendar className="w-4 h-4 text-gold-200" />
                <span>Request Priority Booking</span>
              </Link>
              
              <a
                href="https://wa.me/919435492181?text=Hello%20Dr.%20Devarati%2C%20I%20would%20like%20to%20inquire%20about%20a%20clinical%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-gold-500 text-plum-900 hover:bg-gold-500 hover:text-plum-900 font-sans text-xs font-bold uppercase tracking-wider py-4 px-6 rounded-full transition-all text-center"
              >
                <MessageSquare className="w-4 h-4 text-gold-600 shrink-0" />
                <span>Consult on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
