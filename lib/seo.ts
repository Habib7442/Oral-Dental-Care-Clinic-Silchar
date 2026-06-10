import type { Metadata } from "next";

export const CANONICAL_SITE_URL = "https://www.oraldentalcareclinic.com";

interface MetadataProps {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}

/**
 * Reusable metadata generator for Next.js App Router metadata API.
 */
export function getMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: MetadataProps = {}): Metadata {
  const baseTitle = "Oral & Dental Care Clinic | Silchar's Best Dental Care | Dr. Devarati Ray Dutta Chowdhury";
  const finalTitle = title ? `${title} | Oral & Dental Care Clinic` : baseTitle;
  
  const defaultDesc =
    "Oral & Dental Care Clinic is Silchar's best dental care clinic, led by Dr. Devarati Ray Dutta Chowdhury (BDS). 4.9★ rated with 248+ reviews. Expert root canals, dental implants, crowns, veneers, and braces.";
  const finalDesc = description || defaultDesc;

  const canonicalUrl = `${CANONICAL_SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

  return {
    title: finalTitle,
    description: finalDesc,
    metadataBase: new URL(CANONICAL_SITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    icons: {
      icon: [
        { url: "/favicons/favicon.ico" },
        { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [
        { url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      other: [
        { rel: "manifest", url: "/favicons/site.webmanifest" },
      ],
    },
    openGraph: {
      title: finalTitle,
      description: finalDesc,
      url: canonicalUrl,
      siteName: "Oral and Dental Care Clinic Silchar",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/og_image.jpg", // [NEW placeholder for dynamic or static social sharing]
          width: 1200,
          height: 630,
          alt: "Oral and Dental Care Clinic Silchar",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDesc,
      images: ["/og_image.jpg"],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

/**
 * Returns structured JSON-LD markup for local dentist medical business context.
 * Compliant with Google Business guidelines and search crawls.
 */
export function getDentistSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Oral and Dental Care Clinic",
    "image": `${CANONICAL_SITE_URL}/og_image.jpg`,
    "@id": `${CANONICAL_SITE_URL}/#clinic`,
    "url": CANONICAL_SITE_URL,
    "telephone": "+91-94354-92181",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Lochan Bairagi Road, Bilpar, Kanakpur",
      "addressLocality": "Silchar",
      "addressRegion": "Assam",
      "postalCode": "788001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.8167549,
      "longitude": 92.8001821
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Silchar" },
      { "@type": "AdministrativeArea", "name": "Cachar" },
      { "@type": "AdministrativeArea", "name": "Barak Valley" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "20:00"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "Dr. Devarati Ray Dutta Chowdhury",
      "jobTitle": "Lead Dentist (BDS)"
    },
    "sameAs": [
      "https://maps.google.com/?cid=14605927532328108426" // [GBP maps target]
    ]
  };
}

/**
 * Returns structured JSON-LD markup for a dynamic FAQ segment.
 */
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

/**
 * Returns structured JSON-LD markup for custom medical procedures / treatment detail views.
 */
export function getMedicalProcedureSchema(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": name,
    "description": description,
    "procedureType": {
      "@type": "MedicalSpecialty",
      "name": "Dentistry"
    }
  };
}
