import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import HowWeTreat from "@/components/sections/how-we-treat";
import ServicesGrid from "@/components/sections/services-grid";
import AboutSection from "@/components/sections/about-section";
import ClinicGallery from "@/components/sections/clinic-gallery";
import ReviewsWall from "@/components/sections/reviews-wall";
import SmileGallery from "@/components/sections/smile-gallery";
import Faqs from "@/components/sections/faqs";
import { getDentistSchema } from "@/lib/seo";

export default function Home() {
  const dentistSchema = getDentistSchema();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Dynamic SEO Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
      />
      {/* Global Navigation Header */}
      <Navigation />

      {/* Main Page Body Container */}
      <main className="flex-1 flex flex-col">
        {/* Flagship Brand Hero Section */}
        <Hero />

        {/* How We Treat Clinical Section */}
        <HowWeTreat />

        {/* Dynamic Services Grid Section */}
        <ServicesGrid />

        {/* Short About Clinician Profile Section */}
        <AboutSection />

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


