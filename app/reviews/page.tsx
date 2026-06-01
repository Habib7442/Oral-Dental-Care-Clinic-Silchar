import React from "react";
import { getMetadata } from "@/lib/seo";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import ReviewsWall from "@/components/sections/reviews-wall";

export const metadata = getMetadata({
  title: "Patient Reviews & Testimonials | Vetted 4.9★ Dental Care",
  description: "Read actual verified patient reviews and testimonials for Dr. Devarati Roy BDS in Silchar, Barak Valley. Experience comfortable, gentle, and highly professional dentistry.",
  path: "/reviews"
});

export default function ReviewsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-porcelain">
      {/* Global Navigation Header */}
      <Navigation />

      {/* Main Reviews Content */}
      <main className="flex-1 flex flex-col">
        <ReviewsWall />
      </main>

      {/* Global Brand Footer */}
      <Footer />
    </div>
  );
}
