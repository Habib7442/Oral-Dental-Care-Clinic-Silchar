"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Calendar } from "lucide-react";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Dr. Devarati, I would like to book a dental appointment at Oral & Dental Care Clinic."
);

export default function StickyActionBar() {
  return (
    <nav
      aria-label="Quick contact actions"
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-plum-800 bg-plum-900"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-3 divide-x divide-plum-800">
        <motion.a
          href="tel:+919435492181"
          whileTap={{ scale: 0.97 }}
          className="flex flex-col items-center justify-center gap-1 py-3 min-h-[56px] text-porcelain focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
        >
          <Phone className="w-5 h-5 text-gold-500 stroke-[1.5]" />
          <span className="text-[11px] font-sans font-semibold uppercase tracking-wide">
            Call
          </span>
        </motion.a>

        <motion.a
          href={`https://wa.me/919435492181?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.97 }}
          className="flex flex-col items-center justify-center gap-1 py-3 min-h-[56px] text-porcelain focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
        >
          <MessageCircle className="w-5 h-5 text-gold-500 stroke-[1.5]" />
          <span className="text-[11px] font-sans font-semibold uppercase tracking-wide">
            WhatsApp
          </span>
        </motion.a>

        <motion.div whileTap={{ scale: 0.97 }} className="bg-gold-500">
          <Link
            href="/book"
            className="flex flex-col items-center justify-center gap-1 py-3 min-h-[56px] text-plum-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-plum-900"
          >
            <Calendar className="w-5 h-5 stroke-[1.5]" />
            <span className="text-[11px] font-sans font-semibold uppercase tracking-wide">
              Book
            </span>
          </Link>
        </motion.div>
      </div>
    </nav>
  );
}
