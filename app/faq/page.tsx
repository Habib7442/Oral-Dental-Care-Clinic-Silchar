import React from "react";
import { getMetadata } from "@/lib/seo";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Faqs from "@/components/sections/faqs";

export const metadata = getMetadata({
  title: "Frequently Asked Questions (FAQs)",
  description: "Explore detailed clinical guidance on tooth care, appointment priority slots, sterilization protocols, and payment options at Oral & Dental Care Clinic Silchar.",
  path: "/faq"
});

export default function FaqPage() {
  return (
    <div className="flex flex-col min-h-screen bg-porcelain">
      {/* Global Navigation Header */}
      <Navigation />

      {/* Main FAQ Content */}
      <main className="flex-1 flex flex-col">
        <Faqs isStandalone={true} />
      </main>

      {/* Global Brand Footer */}
      <Footer />
    </div>
  );
}
