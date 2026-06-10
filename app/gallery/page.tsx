import React from "react";
import { getMetadata } from "@/lib/seo";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import GalleryClient from "./gallery-client";

export const metadata = getMetadata({
  title: "Clinical Gallery | Camps & Outreaches",
  description: "View verified clinical outreach initiatives, school hygiene camps, and community checkup programs by Dr. Devarati Ray in Silchar.",
  path: "/gallery"
});

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-porcelain">
      {/* Global Navigation Header */}
      <Navigation />

      {/* Main Gallery Content */}
      <main className="flex-1 flex flex-col">
        <GalleryClient />
      </main>

      {/* Global Brand Footer */}
      <Footer />
    </div>
  );
}
