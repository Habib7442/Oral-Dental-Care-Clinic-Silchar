import React from "react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { getMetadata } from "@/lib/seo";
import { FileText } from "lucide-react";

export const metadata = getMetadata({
  title: "Terms of Service",
  description: "Terms of Service and clinical appointment conditions for Dr. Devarati Ray's Oral & Dental Care Clinic in Silchar.",
  path: "/terms",
});

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-porcelain">
      <Navigation />

      <main className="flex-1 flex flex-col justify-center">
        <section className="relative pt-[210px] sm:pt-[160px] md:pt-[180px] lg:pt-[200px] pb-24 px-6 md:px-8 w-full">
          {/* Decorative Corner Line */}
          <div className="absolute top-0 right-0 w-48 h-48 border-t-8 border-r-8 border-gold-500/5 translate-x-16 -translate-y-16 pointer-events-none hidden lg:block" />

          <div className="max-w-4xl mx-auto w-full">
            {/* Main Content Card */}
            <div className="bg-white border border-ink-300 rounded-3xl p-8 md:p-12 shadow-[0_4px_12px_rgba(27,19,32,0.02)]">
              
              {/* Header block */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-gold-700" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gold-700 uppercase tracking-widest font-sans">
                    Legal & Compliance
                  </span>
                  <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-plum-900 tracking-tight leading-tight mt-1">
                    Terms of Service
                  </h1>
                </div>
              </div>

              <p className="text-xs text-ink-500 font-semibold uppercase tracking-wider mb-8">
                Last Updated: June 10, 2026
              </p>

              <div className="prose prose-plum max-w-none">
                <p className="font-sans text-sm sm:text-base text-ink-700 leading-relaxed mb-6">
                  Welcome to the official website of <strong className="text-plum-900">Oral & Dental Care Clinic</strong>. By accessing this website or using our online booking request tools, you agree to comply with and be bound by the following Terms of Service. Please read these terms carefully.
                </p>

                <h2 className="font-serif text-lg sm:text-xl font-semibold text-plum-800 mt-8 mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="font-sans text-sm sm:text-base text-ink-700 leading-relaxed mb-6">
                  By using this website, you acknowledge that you have read, understood, and agree to these Terms of Service, as well as our Privacy Policy. If you do not agree, you are advised to discontinue using this site immediately.
                </p>

                <h2 className="font-serif text-lg sm:text-xl font-semibold text-plum-800 mt-8 mb-4">
                  2. No Medical Advice / Doctor-Patient Relationship
                </h2>
                <p className="font-sans text-sm sm:text-base text-ink-700 leading-relaxed mb-6">
                  The information provided on this website—including treatments, duration guidelines, and FAQ explanations—is for general educational and informational purposes only. It is not a substitute for professional clinical diagnosis or face-to-face consultation. Submission of booking forms or contacting the clinic does not establish a formal doctor-patient relationship until you have visited the facility and been evaluated by <strong className="text-plum-900">Dr. Devarati Ray Dutta Chowdhury (BDS, MCh)</strong>.
                </p>

                <h2 className="font-serif text-lg sm:text-xl font-semibold text-plum-800 mt-8 mb-4">
                  3. Online Appointment Requests & Confirmations
                </h2>
                <p className="font-sans text-sm sm:text-base text-ink-700 leading-relaxed mb-4">
                  Our website provides digital priority appointment request forms. By submitting a request, you understand that:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-ink-700 font-sans mb-6 ml-2">
                  <li>Your requested time and date are tentative and subject to clinical availability.</li>
                  <li>An appointment is only confirmed when our administrative desk contacts you via call or WhatsApp.</li>
                  <li>You must provide accurate patient information (full name, phone number) to prevent automatic cancellation of requests.</li>
                </ul>

                <h2 className="font-serif text-lg sm:text-xl font-semibold text-plum-800 mt-8 mb-4">
                  4. Rescheduling & Cancellation Guidelines
                </h2>
                <p className="font-sans text-sm sm:text-base text-ink-700 leading-relaxed mb-6">
                  To help us offer priority slots to patients experiencing dental pain, we kindly request that you contact us at least <strong className="text-plum-900">24 hours prior</strong> to your scheduled slot if you need to reschedule or cancel your visit. You can do so by calling or texting our hotline at <strong className="text-gold-700">+91 94354 92181</strong>.
                </p>

                <h2 className="font-serif text-lg sm:text-xl font-semibold text-plum-800 mt-8 mb-4">
                  5. Intellectual Property
                </h2>
                <p className="font-sans text-sm sm:text-base text-ink-700 leading-relaxed mb-6">
                  All materials on this website, including but not limited to the brand name &quot;Oral and Dental Care Clinic,&quot; textual copies, dental service specs, photos of the clinic infrastructure, patient cutout portraits, and Before & After slider content, are owned by or licensed to Dr. Devarati Ray Dutta Chowdhury. Unauthorized reproduction, modification, or distribution of this content is strictly prohibited.
                </p>

                <h2 className="font-serif text-lg sm:text-xl font-semibold text-plum-800 mt-8 mb-4">
                  6. Limitation of Liability
                </h2>
                <p className="font-sans text-sm sm:text-base text-ink-700 leading-relaxed mb-6">
                  Oral & Dental Care Clinic shall not be held liable for any direct, indirect, or incidental damages resulting from the use or inability to use this website, including errors in contact form submission, network transmission failures, or typographical mistakes in our static informational fields.
                </p>

                <h2 className="font-serif text-lg sm:text-xl font-semibold text-plum-800 mt-8 mb-4">
                  7. Governing Law
                </h2>
                <p className="font-sans text-sm sm:text-base text-ink-700 leading-relaxed mb-6">
                  These Terms of Service shall be governed by and construed in accordance with the laws of India, and any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts of Silchar, Assam.
                </p>

                <h2 className="font-serif text-lg sm:text-xl font-semibold text-plum-800 mt-8 mb-4">
                  8. Contact Information
                </h2>
                <p className="font-sans text-sm sm:text-base text-ink-700 leading-relaxed mb-4">
                  For any legal questions regarding these terms, please contact us directly:
                </p>
                <div className="bg-porcelain border border-ink-300 rounded-2xl p-6 flex flex-col gap-2.5 text-sm font-sans text-ink-700">
                  <p><strong className="text-plum-900">Clinic Name:</strong> Oral and Dental Care Clinic</p>
                  <p><strong className="text-plum-900">Lead Dentist:</strong> Dr. Devarati Ray Dutta Chowdhury (BDS, MCh)</p>
                  <p><strong className="text-plum-900">Address:</strong> Lochan Bairagi Road, Bilpar, Silchar, Assam 788001 (near Rahul Medicos)</p>
                  <p><strong className="text-plum-900">Phone Hotline:</strong> +91 94354 92181</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
