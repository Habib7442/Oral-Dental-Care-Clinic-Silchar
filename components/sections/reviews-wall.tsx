"use client";

import React from "react";
import { Star, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface Review {
  name: string;
  text: string;
}

export const patientReviews: Review[] = [
  {
    name: "Navneet Kumar",
    text: "This is one of the best dental clinic in the silchar. Madam is too good and polite and experienced. She provide the best treatment for the oral disease. Thank you madam for your support amd treatment I am greatfull to you. Once again thank you."
  },
  {
    name: "Manoj Kumar Chaubey",
    text: "Appropriate place for dental treatment... professional and supportive doctor & staff...my visit to this place is fulfilled my requirements .....thanks to ma'am for giving me beautiful smile and full cooperation. She understands the patient."
  },
  {
    name: "Mamta Yadav",
    text: "Appropriate place for dental treatment... professional and supportive doctor & staff...my visit to this place is fulfilled my requirements .....thanks to ma'am for giving me beautiful smile and full cooperation."
  },
  {
    name: "Subhankar Das",
    text: "I would like to thank Dr Debarati Ray Madam for giving me a confident lovely smile 😀. I would highly recommend Oral and Dental care for Dental check up. Mam and the support staffs are not just professional at their services but also takes care of their patients. Thank you 😊"
  },
  {
    name: "Asmita Ray",
    text: "Excellent dental care service for the people of Barak valley. All precautionary and safety measures for covid-19 are being followed diligently. Apart from that the expertise of Dr Debarati is praiseworthy. Had a very painless and happy dental experience. Keep up the good work and highly recommend it to others."
  },
  {
    name: "Amrita Singha",
    text: "Had wisdom tooth extraction over here. Doctors are polite and helpful. I have been recommended to use teeth aligners."
  },
  {
    name: "Himadri Paul",
    text: "Kind well read dental assistants and hygenists. Always willing to work with my overdone schedule. DR Devarati is very patient and understanding of my intense fear of dental appointments. She makes it pain free and easy."
  },
  {
    name: "Hmk Mk",
    text: "Most diligent doctor in town who understands patient problem so well. I had some financial problem, doctor charged for my extraction quite less. I am very happy with my treatment. Thank you mam."
  },
  {
    name: "Beli Shuklabaidya",
    text: "Best dental clinic in town, behaviour of doctor is good and treat everyone with so much care."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }
};

export default function ReviewsWall({ isStandalone = false }: { isStandalone?: boolean }) {
  return (
    <section
      id="reviews"
      className={cn(
        "relative bg-porcelain border-b border-ink-300 overflow-hidden",
        isStandalone
          ? "pt-[210px] sm:pt-[160px] md:pt-[180px] lg:pt-[200px] pb-24 min-h-screen"
          : "py-24 md:py-32"
      )}
    >


      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-xs font-bold text-plum-900 uppercase tracking-widest font-sans">
              Verified Patient Proof
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-plum-900 leading-tight mb-6"
          >
            Real Patient Experiences
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-ink-700 text-sm sm:text-base leading-relaxed"
          >
            Dr. Devarati&apos;s exceptional clinical care, polite guidance, and pain-free treatment have earned the deep trust of hundreds of families across Barak Valley. Here is what they have to say:
          </motion.p>
        </div>

        {/* Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full"
        >
          {patientReviews.map((review, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group flex flex-col justify-between bg-white border border-ink-300 rounded-3xl p-6 md:p-8 transition-colors duration-300 hover:border-gold-500 cursor-default"
            >
              <div>
                {/* 5 Star Graphic Row */}
                <div className="flex items-center gap-0.5 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-ink-700 text-xs sm:text-sm leading-relaxed italic mb-6 font-sans">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Patient Profile info */}
              <div className="flex items-center gap-3 border-t border-ink-300/40 pt-4 mt-auto w-full">
                <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-700 flex items-center justify-center font-bold text-xs uppercase select-none">
                  {review.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-plum-900 font-sans tracking-wide">
                    {review.name}
                  </span>
                  <span className="text-[10px] font-medium text-ink-500 uppercase tracking-widest leading-none mt-0.5">
                    Verified Patient Review
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action card prompting patients to leave a review */}
        <div className="flex flex-col items-center gap-12 mt-16 md:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="https://share.google/qF5iNJRYvpaxUGrIN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-gold-500 text-plum-900 hover:bg-gold-500 hover:text-plum-900 font-sans text-xs sm:text-sm font-bold uppercase tracking-wider py-4 px-10 rounded-full transition-all duration-250 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-gold-500"
            >
              <MessageSquare className="w-4 h-4 text-gold-700 group-hover:text-plum-900 shrink-0" />
              <span>Write a Google Review ✦</span>
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
