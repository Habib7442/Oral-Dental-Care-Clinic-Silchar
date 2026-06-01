import React from "react";
import { getMetadata } from "@/lib/seo";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import ContactClient from "./contact-client";

export const metadata = getMetadata({
  title: "Contact & Directions | Premium Dental Clinic Silchar",
  description: "Find coordinates, opening hours, phone numbers, and direct Google Maps directions to Dr. Devarati Roy Dutta Choudhury's Oral and Dental Care Clinic in Silchar.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-porcelain">
      {/* Global Navigation Header */}
      <Navigation />

      {/* Main Contact Content */}
      <main className="flex-1 flex flex-col">
        <ContactClient />
      </main>

      {/* Global Brand Footer */}
      <Footer />
    </div>
  );
}
