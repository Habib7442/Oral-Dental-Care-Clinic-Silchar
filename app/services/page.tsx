import React from "react";
import { getMetadata } from "@/lib/seo";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import ServicesClient from "./services-client";

export const metadata = getMetadata({
  title: "Clinical Specialties & Dental Treatments Directory",
  description: "Explore Dr. Devarati Ray's full index of 19 advanced oral specialties including RCT, implants, braces, pediatric care, teeth whitening, and scaling in Silchar, Assam.",
  path: "/services"
});

export default function ServicesDirectoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-porcelain">
      {/* Global Navigation Header */}
      <Navigation />

      {/* Main Directory Body */}
      <main className="flex-1 flex flex-col">
        <ServicesClient />
      </main>

      {/* Global Brand Footer */}
      <Footer />
    </div>
  );
}
