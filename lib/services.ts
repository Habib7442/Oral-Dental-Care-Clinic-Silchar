export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  category: "Restorative" | "Cosmetic" | "Surgical" | "Preventive" | "Orthodontics";
  duration: string;
  comfortLevel: string;
  basePrice: string;
  iconName: string;
  benefits: string[];
  steps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "root-canal-therapy",
    title: "Root Canal Therapy (RCT)",
    shortDescription: "Save infected teeth and eliminate severe toothache with painless, high-precision rotary endodontics.",
    longDescription: "Dr. Devarati delivers premium, single-sitting or double-sitting micro-endodontic root canal treatments. By removing infected pulp tissue, disinfecting the canal space, and sealing it with sterile biocompatible materials, we save your natural teeth and prevent future abscesses.",
    category: "Restorative",
    duration: "1 - 2 Sessions (45-60 mins)",
    comfortLevel: "Virtually Painless (Under computerized localized anesthesia)",
    basePrice: "₹2,500 onwards",
    iconName: "HeartPulse",
    benefits: [
      "Stops severe throbbing toothaches and sensitivity immediately.",
      "Preserves the natural tooth structure and chewing alignment.",
      "Prevents bone loss and spread of infection into the jaw.",
      "Restores structural integrity when topped with a prosthetic crown."
    ],
    steps: [
      {
        title: "Digital X-Ray Mapping",
        description: "High-resolution digital radiographs map the infected root canal anatomy with minimal exposure."
      },
      {
        title: "Pain-Free Numbing",
        description: "Localized micro-anesthetics ensure complete isolation and absolute physical comfort throughout the visit."
      },
      {
        title: "Rotary Cleaning & Disinfection",
        description: "Advanced flexible titanium rotary files thoroughly cleanse and sanitize the microscopically thin canal pathways."
      },
      {
        title: "Biocompatible Sealing",
        description: "Canals are tightly packed with sterile gutta-percha to form a durable barrier against future bacteria."
      }
    ],
    faqs: [
      {
        question: "Is a root canal painful?",
        answer: "No. With modern localized anesthesia techniques and highly precise rotary tools, the procedure feels similar to receiving a standard dental filling. Most patients experience immediate relief from their active toothache."
      },
      {
        question: "How long does a root canal treatment take?",
        answer: "Most cases are completed in a single session of 45 to 60 minutes. However, in cases of severe active infection, Dr. Devarati may place a sterile medicament and seal it in a second session to ensure long-term clinical success."
      },
      {
        question: "Is it necessary to get a crown after RCT?",
        answer: "Yes. Once the tooth pulp is removed, the tooth loses its nutrient supply and becomes brittle over time. A custom gold, ceramic, or zirconia crown is essential to reinforce the tooth structure and prevent fractures."
      }
    ]
  },
  {
    slug: "dental-implants",
    title: "Premium Dental Implants",
    shortDescription: "Replace missing teeth permanently with biocompatible titanium implants that look and feel like natural roots.",
    longDescription: "Restore complete oral functionality and facial aesthetics. Dr. Devarati places state-of-the-art titanium implants that seamlessly osteointegrate into the jawbone, providing an ultra-stable foundation for custom crowns and bridges.",
    category: "Surgical",
    duration: "3 - 6 Months (Multi-stage healing)",
    comfortLevel: "Highly Comfortable (Conducted under sterile local anesthesia)",
    basePrice: "₹28,000 onwards",
    iconName: "ShieldCheck",
    benefits: [
      "Provides a permanent, lifetime solution for missing teeth.",
      "Prevents facial muscle sagging and bone shrinkage.",
      "Restores natural biting force and speech patterns.",
      "Eliminates the need to grind adjacent teeth (unlike dental bridges)."
    ],
    steps: [
      {
        title: "Comprehensive CBCT Scan",
        description: "3D dental imaging assesses bone density, thickness, and precise anatomical structures for placing the implant."
      },
      {
        title: "Surgical Placement",
        description: "Under strict sterile protocols, a medical-grade titanium fixture is gently anchored into the jawbone."
      },
      {
        title: "Osseointegration Period",
        description: "A healing period of 3 to 6 months is allowed for the bone cells to naturally fuse directly to the titanium thread."
      },
      {
        title: "Crown Fixation",
        description: "A custom-shaded, premium ceramic or zirconia crown is secured to the implant to complete your seamless smile."
      }
    ],
    faqs: [
      {
        question: "Are dental implants safe?",
        answer: "Yes, dental implants are exceptionally safe and boast a success rate of over 95% when placed under strict clinical sterilization guidelines. We use internationally recognized biocompatible titanium brands."
      },
      {
        question: "What is the lifespan of a dental implant?",
        answer: "The titanium implant post itself is designed to last a lifetime with proper oral hygiene and regular clinical checkups. The prosthetic crown sitting on top may need standard maintenance or replacement after 10-15 years."
      },
      {
        question: "Am I a suitable candidate for implants?",
        answer: "If you have generally good systemic health, healthy gums, and adequate jawbone density to support the implant post, you are an ideal candidate. We verify your bone volume during the primary consult."
      }
    ]
  },
  {
    slug: "veneers-smile-makeover",
    title: "Cosmetic Veneers & Makeovers",
    shortDescription: "Redesign your smile completely, correcting discoloration, chips, gaps, and minor misalignments.",
    longDescription: "Craft a symmetrical, bright, and confident smile. Dr. Devarati designs ultra-thin custom ceramic or composite veneers that bond perfectly to the front surfaces of your teeth, correcting visual defects with minimal tooth reduction.",
    category: "Cosmetic",
    duration: "2 Sessions (7 - 10 Days apart)",
    comfortLevel: "Completely Gentle (Minimal tooth prep under light numbing)",
    basePrice: "₹8,000 onwards per tooth",
    iconName: "Sparkles",
    benefits: [
      "Instantly corrects deep tetracycline staining and internal discolorations.",
      "Closes unsightly gaps and masks chipped or worn teeth.",
      "Creates natural, symmetrical teeth shapes aligned to your face.",
      "Highly stain-resistant porcelain surfaces resist coffee or tea spots."
    ],
    steps: [
      {
        title: "Smile Design & Analysis",
        description: "We analyze your facial structure, lip lines, and tooth proportions to custom-design your prospective smile."
      },
      {
        title: "Micro-Preparation",
        description: "A paper-thin layer of enamel (typically 0.3mm to 0.5mm) is gently polished to create space for the veneer."
      },
      {
        title: "Digital Custom Impressions",
        description: "Highly precise impressions are taken and sent to elite labs to fabricate custom porcelain veneers."
      },
      {
        title: "Bespoke Adhesive Bonding",
        description: "Each veneer is customized, checked for bite fit, and securely bonded using advanced adhesive resins."
      }
    ],
    faqs: [
      {
        question: "What is the difference between porcelain and composite veneers?",
        answer: "Porcelain veneers are highly durable, completely stain-resistant, look extremely natural, and last 10-15 years. Composite veneers are hand-sculpted in a single visit, cost less, but are prone to staining over time."
      },
      {
        question: "Are veneers reversible?",
        answer: "Because porcelain veneers require a microscopic polishing of natural enamel to fit seamlessly, the procedure is generally permanent. The teeth will always require protection with a veneer or crown."
      },
      {
        question: "How do I care for my new veneers?",
        answer: "Simply brush twice daily with a non-abrasive toothpaste, floss regularly, and avoid biting directly into hard items like ice or bones with your front teeth."
      }
    ]
  },
  {
    slug: "whitening-deep-cleaning",
    title: "Whitening & Deep Cleaning",
    shortDescription: "Remove stubborn plaque, calculus, and yellow stains with state-of-the-art ultrasonic scaling.",
    longDescription: "Restore pristine gum health and get teeth up to 8 shades lighter. Our preventive hygiene bundle combines medical-grade ultrasonic scaling, polishing, and safe in-office bleaching to clear stains and eradicate bad breath.",
    category: "Preventive",
    duration: "1 Session (30-60 mins)",
    comfortLevel: "Extremely Relaxed (No anesthesia needed)",
    basePrice: "₹1,500 onwards (Cleaning)",
    iconName: "Star",
    benefits: [
      "Eliminates bleeding gums, tartar buildup, and chronic bad breath.",
      "Safely removes tea, coffee, and tobacco stains.",
      "Brightens teeth up to 8 shades in a single in-office visit.",
      "Reduces systemic inflammation by keeping your gums completely healthy."
    ],
    steps: [
      {
        title: "Ultrasonic Scaler Plaque Removal",
        description: "High-frequency ultrasonic scalers gently vibrated to shatter calcified tartar and hard deposits above and below gums."
      },
      {
        title: "Gum Line Irrigation",
        description: "Sterile antiseptic rinses flush the sub-gingival pockets, destroying bacteria causing gum recession."
      },
      {
        title: "Micro-Fine Prophy Polishing",
        description: "A special prophy paste is polished over the teeth to make surfaces silky-smooth, delaying plaque attachment."
      },
      {
        title: "In-Office Bleaching System",
        description: "A safe, protective gel layer is applied, activated by clinical cool light to lift internal organic yellow pigments."
      }
    ],
    faqs: [
      {
        question: "Does ultrasonic cleaning make teeth loose?",
        answer: "No. This is a common local myth. Tartar deposits act like a false hard cement. When scaled away, loose gums are exposed, which quickly heal and tighten back around the clean teeth structure within 48 hours."
      },
      {
        question: "How often should I get a scaling done?",
        answer: "Dentists worldwide recommend a professional scaling and polishing once every 6 months to maintain perfect gum health and catch decay early."
      },
      {
        question: "Is teeth whitening safe for enamel?",
        answer: "Yes. Our clinic uses verified, pH-balanced clinical whitening agents. The process does not erode enamel; it safely breaks down staining organic compounds inside the microscopic pores of your teeth."
      }
    ]
  },
  {
    slug: "braces-aligners",
    title: "Orthodontics: Braces & Aligners",
    shortDescription: "Align crooked teeth, close wide gaps, and correct bite problems with modern clear aligners or robust braces.",
    longDescription: "Correct dental crowding, spacing, and jaw imbalances at any age. We offer highly durable traditional metal/ceramic brackets, as well as state-of-the-art clear invisible aligners for a comfortable, virtually invisible treatment journey.",
    category: "Orthodontics",
    duration: "8 - 18 Months (Periodic adjustments)",
    comfortLevel: "Mild Pressure (No needles, simple adjustments)",
    basePrice: "₹35,000 onwards",
    iconName: "Award",
    benefits: [
      "Aligns crooked, crowded, or rotated teeth into a perfect aesthetic arc.",
      "Corrects bites (overbite/underbite), preventing chewing wear-and-tear.",
      "Makes teeth significantly easier to clean, preventing future cavities.",
      "Clear aligners are removable, allowing you to eat anything during treatment."
    ],
    steps: [
      {
        title: "Orthodontic 3D Scan & Cast",
        description: "Impressions, lateral cephalogram X-rays, and photos are taken to map bone structures and teeth tracks."
      },
      {
        title: "Tailored Bracket Placement",
        description: "Bespoke ceramic/metal brackets are bonded to teeth and connected with high-elasticity shape-memory wires."
      },
      {
        title: "Invisible Aligner Setup",
        description: "For aligners, a series of custom medical-grade thermoplastic trays are printed to guide teeth step-by-step."
      },
      {
        title: "Periodic Adjustment Visits",
        description: "Quick checkups once every 4 to 6 weeks to monitor tooth migration, swap wires, or deliver new aligner sets."
      }
    ],
    faqs: [
      {
        question: "What is the best age for braces?",
        answer: "While early orthodontic evaluation is recommended around age 7, teeth can be aligned beautifully at any age. Adult orthodontics using clear aligners has become exceptionally popular and highly successful."
      },
      {
        question: "Are clear aligners as effective as metal braces?",
        answer: "For the vast majority of cosmetic and alignment cases, yes! Clear aligners deliver highly precise, comfortable, and predictable results. Extremely complex skeletal bites may still require metal brackets."
      },
      {
        question: "How long does the treatment take?",
        answer: "Typical alignment times range from 8 to 18 months depending on severity. Mild gaps can be fully closed in as little as 6 months with clear aligners."
      }
    ]
  },
  {
    slug: "general-consultation-kids",
    title: "General Consultation & Kids Dentistry",
    shortDescription: "Comprehensive diagnostic checkups, composite fillings, and child-friendly pediatric preventive care.",
    longDescription: "Establish a healthy oral foundation from childhood. Dr. Devarati delivers compassionate, specialized pediatric care including fluoride treatments, sealants, painless cavity fillings, and comprehensive tooth health consultations.",
    category: "Preventive",
    duration: "1 Session (20-40 mins)",
    comfortLevel: "Very Gentle (Extremely child-friendly protocols)",
    basePrice: "₹300 onwards (Consultation)",
    iconName: "Baby",
    benefits: [
      "Catches cavities early before they require root canals or extractions.",
      "Painless, mercury-free tooth-colored composite restorations.",
      "Fluoride varnish and dental sealants stop children's decay by 80%.",
      "Gentle, anxiety-free exposure to dentistry to prevent lifetime dental phobias."
    ],
    steps: [
      {
        title: "Intra-Oral Camera Exam",
        description: "A small digital camera scans teeth, projecting live visual images to explain issues directly to parents."
      },
      {
        title: "Painless Composite Restoration",
        description: "Cavities are cleaned with quiet instruments and restored with premium, durable tooth-colored resins."
      },
      {
        title: "Pediatric Fluoride Shielding",
        description: "A high-concentration protective fluoride varnish is brushed on to reinforce child enamel against acid attacks."
      },
      {
        title: "Pit & Fissure Sealants",
        description: "Deep grooves on children's molars are sealed with medical resin, completely blocking food debris entry."
      }
    ],
    faqs: [
      {
        question: "When should a child first visit the dentist?",
        answer: "The Indian Dental Association recommends a child's first clinical evaluation when their first baby tooth erupts, or by their first birthday, to guide healthy jaw development."
      },
      {
        question: "Why should we treat decay in baby teeth if they fall out anyway?",
        answer: "Baby teeth guide permanent teeth into their correct slots. If baby teeth decay and are lost early, permanent teeth will grow crooked. Uninfected baby teeth are also critical for children's digestion and speech."
      },
      {
        question: "Are dental X-rays safe for children?",
        answer: "Yes. Our clinic uses digital, low-exposure dental sensors paired with lead aprons and thyroid collars. The radiation is virtually negligible, equivalent to a short afternoon in natural sunlight."
      }
    ]
  }
];
