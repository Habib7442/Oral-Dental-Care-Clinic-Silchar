import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, Star, Heart, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: "Root Canal Treatment (RCT)", href: "/services/root-canal" },
    { label: "Crowns & Bridges", href: "/services/crowns-bridges" },
    { label: "Dental Implants", href: "/services/implants" },
    { label: "Teeth Whitening & Veneers", href: "/services/cosmetic" },
    { label: "Orthodontics & Aligners", href: "/services/braces" },
    { label: "Paediatric Dentistry", href: "/services/kids-dentistry" },
    { label: "Preventive Care & Cleaning", href: "/services/checkup-cleaning" },
  ];

  const quickLinks = [
    { label: "About the Clinic", href: "/about" },
    { label: "Smile Gallery", href: "/smile-gallery" },
    { label: "Patient Reviews", href: "/reviews" },
    { label: "Frequently Asked Questions", href: "/faq" },
    { label: "Contact & Directions", href: "/contact" },
    { label: "Book Appointment", href: "/book" },
  ];

  return (
    <footer className="bg-plum-900 border-t border-plum-800 text-porcelain font-sans py-16 md:py-24 relative overflow-hidden">
      {/* Structural visual accents - solid gold line on top of footer */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-500" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Column 1: Clinic Brand Bio */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg text-left">
            <Image
              src="/logo.png"
              alt="Oral & Dental Care Clinic Logo"
              width={44}
              height={44}
              className="h-11 w-auto object-contain bg-white rounded-xl p-1 border border-ink-300/10 shadow-sm shrink-0"
            />
            <div className="flex flex-col">
              <span className="font-serif text-base font-semibold tracking-wide text-porcelain leading-none group-hover:text-gold-200 transition-colors">
                Oral & Dental Care
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gold-500 font-semibold font-sans leading-none mt-1.5 group-hover:text-gold-200 transition-colors">
                Dr. Devarati Ray (BDS)
              </span>
            </div>
          </Link>
          <p className="text-sm text-ink-300 leading-relaxed max-w-sm">
            Silchar&apos;s leading doctor-led dental clinic. We deliver warm, gentle, and premium dental solutions using modern clinical equipment and sterilisation standards.
          </p>
          {/* Trust rating badge */}
          <div className="bg-plum-800/40 border border-plum-700/50 rounded-2xl p-4 flex items-start gap-3.5 max-w-xs shadow-md">
            <div className="w-9 h-9 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 text-gold-500 fill-gold-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-porcelain leading-tight">4.9★ Google Rating</span>
              <span className="text-xs text-gold-500 font-medium">Vetted by 248+ patient reviews</span>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-6">
          <h3 className="font-serif text-base font-semibold text-gold-200 uppercase tracking-widest">
            Clinic Info
          </h3>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-ink-300 hover:text-gold-500 transition-colors flex items-center gap-1 group py-0.5"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    {link.label}
                  </span>
                  {link.label === "Book Appointment" && (
                    <ArrowUpRight className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Primary Services */}
        <div className="flex flex-col gap-6">
          <h3 className="font-serif text-base font-semibold text-gold-200 uppercase tracking-widest">
            Dental Treatments
          </h3>
          <ul className="flex flex-col gap-3">
            {services.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-ink-300 hover:text-gold-500 transition-colors flex items-center group py-0.5"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Canonical NAP & Hours */}
        <div className="flex flex-col gap-6">
          <h3 className="font-serif text-base font-semibold text-gold-200 uppercase tracking-widest">
            Contact & Address
          </h3>
          
          <div className="flex flex-col gap-4 text-sm text-ink-300">
            {/* Clickable NAP details */}
            <a 
              href="https://www.google.com/maps/place/ORAL+AND+DENTAL+CARE+CLINIC/@24.8167597,92.7976072,17z/data=!4m6!3m5!1s0x374e4b4b5fc989f3:0x481870e5aaf612c1!8m2!3d24.8167548!4d92.8001821!16s%2Fg%2F11cs19gq1k"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 hover:text-gold-500 transition-colors group"
            >
              <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <div className="flex flex-col gap-1">
                <span className="text-porcelain font-medium group-hover:text-gold-500 transition-colors">Oral and Dental Care Clinic</span>
                <span>Lochan Bairagi Road, Bilpar, Kanakpur, Silchar, Assam 788001</span>
                <span className="text-[11px] text-gold-500 font-semibold uppercase tracking-wider">
                  Landmark: Near Rahul Medicos
                </span>
              </div>
            </a>

            <a href="tel:+919435492181" className="flex items-center gap-3 hover:text-gold-500 transition-colors group">
              <Phone className="w-5 h-5 text-gold-500 shrink-0 group-hover:scale-110 transition-transform" />
              <span>+91 94354 92181</span>
            </a>

            <div className="flex items-start gap-3 pt-2 border-t border-plum-800/80">
              <Clock className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1.5 w-full">
                <span className="text-porcelain font-medium">Opening Hours</span>
                <div className="flex items-center justify-between text-xs w-full">
                  <span>Mon – Sat:</span>
                  <span className="text-gold-500 font-semibold px-2 py-0.5 bg-plum-800/50 rounded-md">
                    10:00 AM – 8:00 PM
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs w-full">
                  <span>Sunday:</span>
                  <span className="text-ink-500 font-medium px-2 py-0.5 bg-plum-800/20 rounded-md">
                    Closed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright / legal strip */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-16 md:mt-24 pt-8 border-t border-plum-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ink-500 font-medium">
        <div className="flex flex-wrap items-center gap-1.5 justify-center md:justify-start">
          <span>&copy; {currentYear} Oral & Dental Care Clinic Silchar. All rights reserved.</span>
          <span className="hidden md:inline text-plum-700">|</span>
          <span className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-gold-500 fill-gold-500" /> in Silchar, Assam
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-gold-500 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gold-500 transition-colors">Terms of Service</Link>
          <Link href="/sitemap.xml" className="hover:text-gold-500 transition-colors">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
