"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Calendar, Menu, X, Star, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Reviews", href: "/reviews" },
    { label: "FAQs", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out border-b",
          scrolled
            ? "bg-plum-900/95 backdrop-blur-md border-plum-800 shadow-[0_4px_20px_rgba(27,19,32,0.15)]"
            : "bg-transparent border-transparent"
        )}
      >
        {/* Top Gold Announcement Bar */}
        <div className="bg-gold-500 text-plum-900 font-sans text-xs font-semibold py-2 px-4 border-b border-gold-600/10 shadow-sm flex items-center justify-center gap-1.5 flex-wrap">
          <span className="flex items-center gap-1">
            ✦ Silchar&apos;s Most-Loved Dental Care — Vetted 4.9
            <Star className="w-3.5 h-3.5 fill-plum-900 text-plum-900 inline" />
            on
          </span>
          {/* Real Google G Logo Badge */}
          <div className="bg-white p-0.5 rounded-full flex items-center justify-center shadow-sm shrink-0">
            <svg className="w-3 h-3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>Google Logo</title>
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
            </svg>
          </div>
          <span>(248+ Google Reviews) ✦</span>
        </div>

        <div className={cn(
          "max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between transition-all duration-300 ease-out",
          scrolled ? "py-3.5" : "py-5"
        )}>

          {/* Logo / Brand (using public/logo.png) */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg text-left">
            <Image
              src="/logo.png"
              alt="Oral & Dental Care Clinic Logo"
              width={44}
              height={44}
              priority
              className="h-11 w-auto object-contain bg-white rounded-xl p-1 border border-ink-300/20 shadow-sm shrink-0"
            />
            <div className="flex flex-col">
              <span className={cn(
                "font-serif text-base md:text-lg font-semibold tracking-wide leading-none transition-colors",
                scrolled ? "text-porcelain group-hover:text-gold-200" : "text-plum-900 group-hover:text-gold-700"
              )}>
                Oral & Dental Care
              </span>
              <span className={cn(
                "text-[10px] uppercase tracking-widest font-semibold font-sans leading-none mt-1.5 transition-colors",
                scrolled ? "text-gold-200" : "text-gold-700"
              )}>
                Dr. Devarati Ray (BDS, MCh)
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors duration-200 relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded px-2",
                  scrolled ? "text-porcelain/90 hover:text-gold-500" : "text-plum-900/90 hover:text-gold-700"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/book"
              className={cn(
                "flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-full transition-all duration-250 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2",
                scrolled
                  ? "bg-gold-500 text-plum-900 hover:bg-gold-600 shadow-[0_4px_12px_rgba(201,162,75,0.15)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-offset-plum-900"
                  : "bg-plum-800 text-porcelain hover:bg-plum-900 shadow-[0_4px_12px_rgba(62,22,53,0.12)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-offset-porcelain"
              )}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-xl border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500",
              scrolled
                ? "border-gold-500/20 text-porcelain hover:text-gold-500"
                : "border-plum-800/20 text-plum-900 hover:text-gold-700"
            )}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Secondary Contact & Address Sub-Bar */}
        <div className={cn(
          "border-t transition-all duration-300 ease-out py-2.5 sm:py-2 block",
          scrolled ? "border-plum-800/40 bg-plum-900/95" : "border-plum-800/20 bg-plum-100"
        )}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-[10px] sm:text-[11px] font-sans font-medium tracking-wide text-center sm:text-left">
            {/* Clickable Address Link */}
            <a
              href="https://www.google.com/maps/place/ORAL+AND+DENTAL+CARE+CLINIC/@24.8167597,92.7976072,17z/data=!4m6!3m5!1s0x374e4b4b5fc989f3:0x481870e5aaf612c1!8m2!3d24.8167548!4d92.8001821!16s%2Fg%2F11cs19gq1k"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-1.5 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-gold-500 rounded px-1.5 py-0.5",
                scrolled ? "text-porcelain/80 hover:text-gold-200" : "text-plum-900/80 hover:text-gold-700"
              )}
            >
              <MapPin className="w-3.5 h-3.5 text-gold-500 shrink-0" />
              <span>Lochan Bairagi Road, Bilpar, Silchar (near Rahul Medicos)</span>
            </a>

            {/* Clickable Phone Number Link */}
            <a
              href="tel:+919435492181"
              className={cn(
                "flex items-center gap-1.5 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-gold-500 rounded px-1.5 py-0.5",
                scrolled ? "text-porcelain/80 hover:text-gold-200" : "text-plum-900/80 hover:text-gold-700"
              )}
            >
              <Phone className="w-3.5 h-3.5 text-gold-500 shrink-0" />
              <span>Call: +91 94354 92181</span>
            </a>
          </div>
        </div>
      </header>


      {/* Mobile Menu Drawer (using shadcn/ui Sheet) */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent 
          side="right" 
          showCloseButton={true}
          className="bg-plum-900 border-plum-800 text-porcelain flex flex-col p-6 w-full max-w-sm z-[100]"
        >
          {/* Header section in panel */}
          <SheetHeader className="border-b border-plum-800 pb-6 text-left p-0 mb-8 mt-6 flex flex-row items-center gap-3 space-y-0">
            <Image
              src="/logo.png"
              alt="Oral & Dental Care Clinic Logo"
              width={40}
              height={40}
              className="h-10 w-auto object-contain bg-white rounded-xl p-1 border border-ink-300/10 shadow-sm shrink-0"
            />
            <div className="flex flex-col">
              <SheetTitle className="font-serif text-base font-semibold tracking-wide text-porcelain leading-none">
                Dr. Devarati Ray (BDS, MCh)
              </SheetTitle>
              <SheetDescription className="text-[10px] text-gold-500 font-sans tracking-widest uppercase font-semibold leading-none mt-1.5">
                Oral & Dental Care
              </SheetDescription>
            </div>
          </SheetHeader>

          {/* Link List */}
          <nav className="flex flex-col gap-5 mb-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium tracking-wide text-porcelain/90 hover:text-gold-500 transition-colors py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded px-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="mt-auto flex flex-col gap-4">
            <a
              href="tel:+919435492181"
              className="flex items-center justify-center gap-2 border border-gold-500/30 bg-plum-800/40 text-gold-500 font-sans text-sm font-semibold uppercase tracking-wider py-3.5 px-6 rounded-full transition-all hover:bg-plum-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              <Phone className="w-4 h-4" />
              <span>+91 94354 92181</span>
            </a>
            <Link
              href="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-gold-500 text-plum-900 font-sans text-sm font-semibold uppercase tracking-wider py-4 px-6 rounded-full shadow-lg transition-all hover:bg-gold-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>

            {/* Micro rating strip at bottom of panel */}
            <div className="mt-8 pt-6 border-t border-plum-800/50 flex items-center justify-center gap-2">
              <Star className="w-4 h-4 text-gold-500 fill-gold-500" />
              <span className="text-xs font-semibold text-gold-500 tracking-wide">4.9★ from 248+ Google reviews</span>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
