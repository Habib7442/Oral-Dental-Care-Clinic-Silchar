"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, ShieldCheck, Star } from "lucide-react";
import { motion } from "framer-motion";
import { ASSETS } from "@/lib/assets";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32 border-b border-ink-300">
      {/* Decorative Corner Lines */}
      <div className="absolute top-0 right-0 w-48 h-48 border-t-8 border-r-8 border-gold-500/10 translate-x-16 -translate-y-16 pointer-events-none hidden lg:block" />
      <div className="absolute bottom-0 left-0 w-48 h-48 border-b-8 border-l-8 border-gold-500/10 -translate-x-16 translate-y-16 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Doctor portrait & Doctors' Day Mementos */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, x: -20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full flex flex-col items-center gap-6"
          >
            {/* Main Portrait Card */}
            <div className="relative w-full max-w-sm aspect-[4/5] bg-white border border-ink-300 rounded-3xl p-3 shadow-[0_8px_32px_rgba(27,19,32,0.04)] select-none">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-porcelain">
                <Image
                  src={ASSETS.doctor}
                  alt="Dr. Devarati Ray Dutta Chowdhury - Lead Dentist at Oral & Dental Care Clinic Silchar"
                  fill
                  className="object-cover"
                  sizes="(max-w-7xl) 100vw, 400px"
                  priority
                  quality={95}
                />
              </div>
              
              {/* Floating credentials pill */}
              <div className="absolute top-6 right-6 bg-plum-900/90 backdrop-blur-sm border border-plum-800 text-porcelain text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md font-sans">
                BDS, MCh Surgery
              </div>
            </div>

            {/* Doctors' Day Memento Cards (Side-by-Side Row) */}
            <div className="w-full max-w-sm flex items-center gap-4">
              {/* Memento 1 */}
              <div className="flex-1 aspect-[4/5] bg-white border border-ink-300 rounded-2xl p-2 shadow-[0_4px_16px_rgba(27,19,32,0.02)] relative group overflow-hidden">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-porcelain">
                  <Image
                    src={ASSETS.doctorsDay.memento1}
                    alt="Doctors' Day felicitation memento Dr. Devarati Ray"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-w-7xl) 20vw, 200px"
                  />
                </div>
              </div>

              {/* Memento 2 */}
              <div className="flex-1 aspect-[4/5] bg-white border border-ink-300 rounded-2xl p-2 shadow-[0_4px_16px_rgba(27,19,32,0.02)] relative group overflow-hidden">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-porcelain">
                  <Image
                    src={ASSETS.doctorsDay.memento2}
                    alt="Doctors' Day recognition award Dr. Devarati Ray"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-w-7xl) 20vw, 200px"
                  />
                </div>
              </div>
            </div>

            {/* Subtext under cards */}
            <span className="text-[10px] uppercase tracking-wider text-ink-500 font-bold select-none text-center font-sans">
              🏆 National Doctors&apos; Day Felicitation & Recognition
            </span>
          </motion.div>

          {/* Right Column: Key details, short bio & redirect CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left gap-6"
          >
            <div className="flex flex-col gap-2.5 w-full">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
                <span className="text-xs font-bold text-plum-900 uppercase tracking-widest font-sans">
                  Lead Clinician Profile
                </span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-plum-900 leading-tight">
                Meet Dr. Devarati Ray <br className="hidden sm:inline" />
                <span className="text-gold-700 font-serif font-bold">Dutta Chowdhury</span>
              </h2>
              
              <p className="text-gold-700 font-sans font-semibold text-sm sm:text-base tracking-wide mt-1">
                BDS, MCh (Dental Surgery, Master of Surgery)
              </p>
            </div>

            <div className="flex flex-col gap-4 text-ink-700 text-sm leading-relaxed font-sans">
              <p>
                As the founder and chief dentist of <span className="text-gold-700 font-bold">Oral & Dental Care Clinic</span>, recognized as <span className="text-gold-700 font-bold">Silchar&apos;s best dental care clinic</span>, Dr. Devarati specializes in boutique, patient-focused dental procedures.
              </p>
              <p>
                Unlike larger clinics with rotating panels of junior staff, Dr. Devarati personally conducts all consultations, diagnostic checks, complex root canals, and cosmetic smile alignments. This ensures consistent clinical quality and custom treatment plans for every patient.
              </p>
            </div>

            {/* Quick Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full border-t border-b border-ink-300/60 py-6 my-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4.5 h-4.5 text-gold-700" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-plum-900 leading-tight">100% Personal Care</span>
                  <span className="text-[10px] text-ink-500 font-medium">No junior shift handoffs</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0">
                  <Award className="w-4.5 h-4.5 text-gold-700" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-plum-900 leading-tight">Master of Surgery</span>
                  <span className="text-[10px] text-ink-500 font-medium">BDS, MCh credentials</span>
                </div>
              </div>
            </div>

            {/* Redirect CTA button to full biography */}
            <Link
              href="/about"
              className="group flex items-center gap-2 bg-plum-800 hover:bg-plum-900 text-porcelain text-xs font-bold uppercase tracking-wider py-4 px-7 rounded-full shadow-[0_2px_8px_rgba(62,22,53,0.15)] hover:shadow-[0_4px_12px_rgba(62,22,53,0.25)] transition-all cursor-pointer font-sans"
            >
              <span>Read Full Biography & Philosophy</span>
              <ArrowRight className="w-4 h-4 text-gold-200 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
