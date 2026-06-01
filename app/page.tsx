import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import ServicesGrid from "@/components/sections/services-grid";
import ReviewsWall from "@/components/sections/reviews-wall";
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

        {/* Curated Patient Reviews Wall Section */}
        <ReviewsWall />

        {/* Common Clinical FAQs Section */}
        <Faqs />
      </main>

      {/* Global Brand Footer */}
      <Footer />
    </div>
  );
}


