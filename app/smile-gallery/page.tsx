import React from "react";
import { getMetadata } from "@/lib/seo";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import SmileGallery from "@/components/sections/smile-gallery";

export const metadata = getMetadata({
  title: "Smile Gallery | Before & After Transformations",
  description: "View verified cosmetic and restorative before-and-after smile transformations. Interactive veneers, crowns, clear aligners, and whitening results by Dr. Devarati in Silchar.",
  path: "/smile-gallery"
});

export default function SmileGalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-porcelain">
      {/* Global Navigation Header */}
      <Navigation />

      {/* Main Smile Gallery Content */}
      <main className="flex-1 flex flex-col">
        <SmileGallery isStandalone={true} />
      </main>

      {/* Global Brand Footer */}
      <Footer />
    </div>
  );
}
