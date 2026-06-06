import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import ServicesGrid from "@/components/sections/services-grid";
import ClinicGallery from "@/components/sections/clinic-gallery";
import ReviewsWall from "@/components/sections/reviews-wall";
import SmileGallery from "@/components/sections/smile-gallery";
import Faqs from "@/components/sections/faqs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Global Navigation Header */}
      <Navigation />

      {/* Main Page Body Container */}
      <main className="flex-1 flex flex-col">
        {/* Flagship Brand Hero Section */}
        <Hero />

        {/* Dynamic Services Grid Section */}
        <ServicesGrid />

        {/* Reusable Clinic Gallery Bento Grid Section */}
        <ClinicGallery />

        {/* Curated Patient Reviews Wall Section */}
        <ReviewsWall />

        {/* Interactive Before & After Smile Gallery */}
        <SmileGallery />

        {/* Common Clinical FAQs Section */}
        <Faqs />
      </main>

      {/* Global Brand Footer */}
      <Footer />
    </div>
  );
}


