import React from "react";
import { getMetadata } from "@/lib/seo";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import BookClient from "./book-client";

export const metadata = getMetadata({
  title: "Request a Priority Appointment | Direct WhatsApp Booking",
  description: "Secure a priority dental appointment slot with Dr. Devarati Roy Dutta Choudhury in Silchar. Fill out our instant clinical booking form and connect directly on WhatsApp.",
  path: "/book"
});

export default function BookPage() {
  return (
    <div className="flex flex-col min-h-screen bg-porcelain">
      {/* Global Navigation Header */}
      <Navigation />

      {/* Main Booking Content */}
      <main className="flex-1 flex flex-col">
        <BookClient />
      </main>

      {/* Global Brand Footer */}
      <Footer />
    </div>
  );
}
