import React from "react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { getMetadata } from "@/lib/seo";
import { ShieldCheck } from "lucide-react";

export const metadata = getMetadata({
  title: "Privacy Policy",
  description: "Privacy Policy and patient clinical data protection guidelines for Dr. Devarati Ray's Oral & Dental Care Clinic in Silchar.",
  path: "/privacy",
});

export default function PrivacyPolicyPage() {
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
                  <ShieldCheck className="w-5 h-5 text-gold-700" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gold-700 uppercase tracking-widest font-sans">
                    Legal & Compliance
                  </span>
                  <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-plum-900 tracking-tight leading-tight mt-1">
                    Privacy Policy
                  </h1>
                </div>
              </div>

              <p className="text-xs text-ink-500 font-semibold uppercase tracking-wider mb-8">
                Last Updated: June 10, 2026
              </p>

              <div className="prose prose-plum max-w-none">
                <p className="font-sans text-sm sm:text-base text-ink-700 leading-relaxed mb-6">
                  At <strong className="text-plum-900">Oral & Dental Care Clinic</strong>, we are committed to protecting the privacy of our patients and visitors. This Privacy Policy describes how we collect, use, store, and safeguard your personal information when you visit our website at <a href="https://www.oraldentalcareclinic.com" className="text-plum-800 hover:text-gold-700 font-medium underline">oraldentalcareclinic.com</a> or utilize our online appointment request forms.
                </p>

                <h2 className="font-serif text-lg sm:text-xl font-semibold text-plum-800 mt-8 mb-4">
                  1. Information We Collect
                </h2>
                <p className="font-sans text-sm sm:text-base text-ink-700 leading-relaxed mb-4">
                  We collect information that you voluntarily provide to us when submitting an appointment request or contacting our clinic directly. This includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-ink-700 font-sans mb-6 ml-2">
                  <li><strong className="text-plum-900">Personal Identification:</strong> Your full name, mobile phone number, and communication details.</li>
                  <li><strong className="text-plum-900">Clinical Request Details:</strong> Your preferred date of appointment and the dental treatment category selected (e.g., Root Canal, Veneers, or General Consultation).</li>
                  <li><strong className="text-plum-900">Technical Log Information:</strong> Basic analytics such as device type, browser metadata, and anonymized search performance details.</li>
                </ul>

                <h2 className="font-serif text-lg sm:text-xl font-semibold text-plum-800 mt-8 mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="font-sans text-sm sm:text-base text-ink-700 leading-relaxed mb-4">
                  We process patient information solely to deliver high-quality oral healthcare services. Your details are used to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-ink-700 font-sans mb-6 ml-2">
                  <li>Verify and schedule your clinical priority appointment slots.</li>
                  <li>Route appointment requests directly to Dr. Devarati Ray&apos;s care team via secure WhatsApp messages or clinical SMTP channels.</li>
                  <li>Send confirmation alerts, callbacks, or rescheduling reminders via phone or WhatsApp.</li>
                  <li>Improve clinical workflows and website navigation parameters.</li>
                </ul>

                <h2 className="font-serif text-lg sm:text-xl font-semibold text-plum-800 mt-8 mb-4">
                  3. Clinical Photography & Image Consent
                </h2>
                <p className="font-sans text-sm sm:text-base text-ink-700 leading-relaxed mb-6">
                  All dental before/after transformations displayed in our Before & After Smile Gallery are verified real patient cases treated at our facility. These clinical images are shared on our digital channels only with explicit, written, and signed patient consent. Patients reserve the right to request the withdrawal of their shared images from our public marketing surfaces at any time.
                </p>

                <h2 className="font-serif text-lg sm:text-xl font-semibold text-plum-800 mt-8 mb-4">
                  4. Sharing & Data Protection
                </h2>
                <p className="font-sans text-sm sm:text-base text-ink-700 leading-relaxed mb-6">
                  We maintain strict clinical confidentiality. We do not sell, rent, lease, or trade your personal information to third-party marketing companies. Data is stored securely and is only accessible by Dr. Devarati Ray Dutta Chowdhury&apos;s authorized clinical team for appointment verification and billing procedures.
                </p>

                <h2 className="font-serif text-lg sm:text-xl font-semibold text-plum-800 mt-8 mb-4">
                  5. Cookies & Tracking
                </h2>
                <p className="font-sans text-sm sm:text-base text-ink-700 leading-relaxed mb-6">
                  We utilize lightweight, privacy-focused tracking tools and privacy-enhanced YouTube embeds (youtube-nocookie.com) to analyze site performance without storing invasive personal cookies on your device. You can choose to configure your browser to reject cookies, though some features (such as saved form parameters) may function slightly differently.
                </p>

                <h2 className="font-serif text-lg sm:text-xl font-semibold text-plum-800 mt-8 mb-4">
                  6. Contact & Data Correction
                </h2>
                <p className="font-sans text-sm sm:text-base text-ink-700 leading-relaxed mb-4">
                  If you wish to view, update, correct, or request the deletion of any personal information or clinical booking files you have submitted to us, please contact our administrative desk:
                </p>
                <div className="bg-porcelain border border-ink-300 rounded-2xl p-6 flex flex-col gap-2.5 text-sm font-sans text-ink-700">
                  <p><strong className="text-plum-900">Clinic Name:</strong> Oral and Dental Care Clinic</p>
                  <p><strong className="text-plum-900">Lead Dentist:</strong> Dr. Devarati Ray Dutta Chowdhury (BDS)</p>
                  <p><strong className="text-plum-900">Registration Number:</strong> ASDC Reg No: 3376-A</p>
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
