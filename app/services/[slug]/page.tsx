import { services } from "@/lib/services";
import { getMetadata, getMedicalProcedureSchema, getFAQSchema } from "@/lib/seo";
import { notFound } from "next/navigation";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import TreatmentPageClient from "./treatment-client";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return getMetadata({
    title: `${service.title} Procedure & Details`,
    description: service.shortDescription,
    path: `/services/${slug}`
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  // Generate structured schemas
  const faqSchema = getFAQSchema(service.faqs);
  const procedureSchema = getMedicalProcedureSchema(service.title, service.longDescription);

  return (
    <div className="flex flex-col min-h-screen bg-porcelain">
      {/* Dynamic SEO Schema Injections */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navigation />

      {/* Main Body Container */}
      <main className="flex-1 flex flex-col">
        <TreatmentPageClient service={service} />
      </main>

      <Footer />
    </div>
  );
}
