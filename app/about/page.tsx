import React from "react";
import { getMetadata } from "@/lib/seo";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import AboutClient from "./about-client";

export const metadata = getMetadata({
  title: "About Dr. Devarati & Clinical Philosophy",
  description: "Explore Dr. Devarati Ray Dutta Chowdhury's BDS qualifications, lead dental clinical practice, multi-stage sterilization standards, and patient comfort vision in Silchar, Assam.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-porcelain">
      {/* Global Navigation Header */}
      <Navigation />

      {/* Main Biography & Philosophy Content */}
      <main className="flex-1 flex flex-col">
        <AboutClient />
      </main>

      {/* Global Brand Footer */}
      <Footer />
    </div>
  );
}
