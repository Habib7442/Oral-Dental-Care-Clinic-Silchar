export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  category: "Restorative" | "Cosmetic" | "Surgical" | "Preventive" | "Orthodontics";
  duration: string;
  comfortLevel: string;
  basePrice: string;
  emoji: string;
  benefits: string[];
  steps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    shortDescription: "Safely remove deep coffee, tea, and tobacco stains to brighten your smile up to 8 shades in one visit.",
    longDescription: "Get a radiant, confident smile with our medical-grade in-office teeth whitening. Dr. Devarati uses clinical-strength, pH-balanced whitening gels activated by specialized light to lift deep, stubborn organic stains safely without eroding your tooth enamel.",
    category: "Cosmetic",
    duration: "1 Session (45 - 60 mins)",
    comfortLevel: "Painless & Relaxed (Zero sensitivity protocols)",
    basePrice: "₹5,000 onwards",
    emoji: "✨",
    benefits: [
      "Instantly lifts stubborn yellow tea, coffee, and tobacco stains.",
      "Delivers up to 8 shades of bright, natural-looking tooth color.",
      "Conducted under professional monitoring to avoid gum irritation.",
      "Gives an instant boost of confidence for weddings and interviews."
    ],
    steps: [
      {
        title: "Baseline Shade Check",
        description: "We record your starting teeth shade to map your whitening progress accurately."
      },
      {
        title: "Gum Barrier Application",
        description: "A specialized protective barrier gel is applied over gums to shield them from whitening agents."
      },
      {
        title: "Whitening Gel Activation",
        description: "Professional whitening gel is applied to teeth and activated with a cool blue laser light."
      },
      {
        title: "Fluoride Shielding",
        description: "A soothing desensitizing fluoride varnish is polished on to reinforce enamel immediately."
      }
    ],
    faqs: [
      {
        question: "Does teeth whitening damage natural enamel?",
        answer: "No. Professional bleaching uses pH-balanced carbamide or hydrogen peroxides that safely dissolve organic stains inside enamel micro-pores. It does not strip or wear away the mineral enamel structure."
      },
      {
        question: "How long do teeth whitening results last?",
        answer: "Results typically last between 1 to 2 years depending on your diet and oral hygiene. Limiting dark beverages like coffee, tea, and red wine will significantly prolong your bright smile."
      },
      {
        question: "Will whitening work on existing crowns or fillings?",
        answer: "No. Bleaching agents only lift organic stains from natural tooth structures. They will not change the shade of synthetic materials like composite fillings, ceramic veneers, or prosthetic crowns."
      }
    ]
  },
  {
    slug: "bonding",
    title: "Dental Bonding",
    shortDescription: "Repair minor chips, cracks, gaps, and tooth discoloration in a single, painless clinical visit.",
    longDescription: "Dr. Devarati uses advanced, mercury-free composite dental bonding to seamlessly sculpt and repair minor tooth imperfections. The composite resin is color-matched precisely to your surrounding teeth, offering an immediate, high-durability cosmetic restoration.",
    category: "Restorative",
    duration: "1 Session (30 - 45 mins per tooth)",
    comfortLevel: "Very Gentle (Usually requires zero anesthesia)",
    basePrice: "₹1,500 onwards",
    emoji: "🩹",
    benefits: [
      "Completely restores chipped, cracked, or decayed teeth.",
      "Closes small visual gaps between front teeth instantly.",
      "Requires minimal or no removal of your natural tooth enamel.",
      "Quick and affordable single-sitting cosmetic solution."
    ],
    steps: [
      {
        title: "Precise Color Matching",
        description: "We match the composite resin shade precisely to your natural enamel using a daylight spectrum guide."
      },
      {
        title: "Enamel Preparation",
        description: "The tooth surface is lightly textured and conditioned with a gentle gel to ensure maximum bonding grip."
      },
      {
        title: "Resin Sculpting",
        description: "Dr. Devarati carefully applies, shapes, and smooths the putty-like composite resin by hand."
      },
      {
        title: "Laser Curing & Polish",
        description: "A high-intensity UV curing light hardens the resin instantly, followed by a fine high-gloss polishing."
      }
    ],
    faqs: [
      {
        question: "Is dental bonding painful?",
        answer: "Not at all. Since the process involves bonding directly to the outer enamel surface with minimal prep, it is completely painless and rarely requires local anesthesia."
      },
      {
        question: "How long does composite bonding last?",
        answer: "Typically between 5 to 8 years. Composite resins are strong but can wear down or stain over time. Regular scaling and avoiding biting directly into hard objects will maximize its lifespan."
      },
      {
        question: "Can bonding fix gaps between front teeth?",
        answer: "Yes! Bonding is one of the fastest and most cost-effective ways to close minor spaces (diastemas) between front teeth in just a single sitting."
      }
    ]
  },
  {
    slug: "check-ups",
    title: "Comprehensive Check-ups",
    shortDescription: "Thorough clinical checkups utilizing digital X-rays to catch dental decay early and maintain oral health.",
    longDescription: "Maintain absolute dental health and prevent emergencies. Dr. Devarati conducts comprehensive oral examinations, screening your gums, tongue, cheeks, and teeth. Backed by low-radiation digital radiography, we detect microscopic decay before it becomes a painful emergency.",
    category: "Preventive",
    duration: "1 Session (20 - 30 mins)",
    comfortLevel: "Extremely Relaxed & Comfortable",
    basePrice: "₹300 onwards",
    emoji: "🩺",
    benefits: [
      "Identifies hidden cavities early, avoiding root canals or extractions.",
      "Screens for early-stage gum diseases and dangerous oral lesions.",
      "Keeps a thorough digital record of your clinical oral health track.",
      "Saves thousands of rupees by preventing complex dental surgeries."
    ],
    steps: [
      {
        title: "Visual Soft Tissue Scan",
        description: "We thoroughly examine your cheeks, tongue, palate, and gums for inflammation or lesions."
      },
      {
        title: "Digital Radiography Examination",
        description: "Targeted low-dose digital X-rays map out hidden decay between teeth and below the bone line."
      },
      {
        title: "Periodontal Pocket Charting",
        description: "We measure gum attachment levels to check for early indicators of pyorrhea or bone recession."
      },
      {
        title: "Personalized Dental Roadmap",
        description: "Dr. Devarati explains her findings and outlines a sterile, customized treatment path if needed."
      }
    ],
    faqs: [
      {
        question: "How often should I get a dental checkup?",
        answer: "We recommend getting a professional checkup and clean once every 6 months to maintain optimum health and catch issues while they are cheap and easy to treat."
      },
      {
        question: "Are dental X-rays safe?",
        answer: "Yes. Our clinic uses modern high-speed digital sensors that reduce radiation exposure by up to 90% compared to traditional films, and we always provide protective lead aprons."
      },
      {
        question: "What should I bring to my checkup?",
        answer: "Please bring any prior dental records, X-rays, and a list of any systematic medications you are currently taking."
      }
    ]
  },
  {
    slug: "cosmetic-procedures",
    title: "Cosmetic Procedures",
    shortDescription: "Enhance your overall facial aesthetics with custom smile redesigns, gum contouring, and composite facings.",
    longDescription: "Reclaim the joy of smiling with our comprehensive cosmetic dental suite. From closing gaps and straightening crooked teeth to re-contouring uneven gum lines, Dr. Devarati combines dental science and artistic facial harmony to design your dream smile.",
    category: "Cosmetic",
    duration: "1 - 2 Sessions",
    comfortLevel: "Very Comfortable (Painless clinical protocols)",
    basePrice: "₹4,000 onwards",
    emoji: "🌟",
    benefits: [
      "Creates perfect dental symmetry tailored directly to your facial lines.",
      "Corrects dark gum lines and handles uneven gum margins beautifully.",
      "Fixes teeth discoloration, minor overlaps, and spacing errors.",
      "Delivers a scientifically proven boost to professional and social confidence."
    ],
    steps: [
      {
        title: "Digital Smile Framing",
        description: "We photograph and map your lip lines, tooth proportions, and facial profiles to design your smile."
      },
      {
        title: "Clinical Mock-up",
        description: "We build a temporary model directly in your mouth so you can preview the visual results beforehand."
      },
      {
        title: "Treatment Execution",
        description: "Advanced cosmetic materials and lasers refine tooth shapes, shades, or gum lines according to plan."
      },
      {
        title: "Final Aesthetic Polish",
        description: "The teeth are polished to a natural, translucent brilliance that blends seamlessly with your face."
      }
    ],
    faqs: [
      {
        question: "What is a smile makeover?",
        answer: "A smile makeover is a customized combination of cosmetic treatments (like veneers, crowns, bleaching, and contouring) designed to completely rejuvenate your smile's color, shape, and alignment."
      },
      {
        question: "Is cosmetic dentistry expensive?",
        answer: "We offer highly customized cosmetic packages. Simple bonding or contouring is very affordable, and we outline clear budgets and material tiers during your initial smile consultation."
      },
      {
        question: "Can cosmetic procedures fix crooked teeth without braces?",
        answer: "Yes. For mild to moderate crowding or gaps, we can use veneers, cosmetic crowns, or tooth-colored bonding to make teeth look perfectly straight in just a few days."
      }
    ]
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    shortDescription: "Replace missing teeth permanently with biocompatible titanium implants that look and feel like natural roots.",
    longDescription: "Restore complete oral functionality and facial aesthetics. Dr. Devarati places state-of-the-art titanium implants that seamlessly osteointegrate into the jawbone, providing an ultra-stable foundation for custom crowns and bridges.",
    category: "Surgical",
    duration: "3 - 6 Months (Multi-stage healing)",
    comfortLevel: "Highly Comfortable (Conducted under sterile local anesthesia)",
    basePrice: "₹28,000 onwards",
    emoji: "🔩",
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
    slug: "dentures-bridges",
    title: "Dentures & Bridges",
    shortDescription: "Replace multiple missing teeth and restore your chewing power with custom bridges or comfortable dentures.",
    longDescription: "Regain the comfort of eating your favorite foods. We construct high-precision fixed porcelain bridges that anchor securely to adjacent teeth, as well as lightweight, durable, and highly retentive partial or complete dentures.",
    category: "Restorative",
    duration: "2 - 4 Sessions (7 - 14 Days)",
    comfortLevel: "Very Comfortable (Non-invasive tooth preparation)",
    basePrice: "₹8,000 onwards",
    emoji: "👄",
    benefits: [
      "Instantly restores complete chewing ability and digestive health.",
      "Fixed dental bridges eliminate the daily hassle of removable plates.",
      "Prevents remaining natural teeth from tilting and drifting out of place.",
      "Fills out sunken cheeks and restores natural youthful lip profiles."
    ],
    steps: [
      {
        title: "Anatomical Impressions",
        description: "We take highly accurate physical impressions to capture your exact bite alignment and ridge shape."
      },
      {
        title: "Bespoke Lab Fabrication",
        description: "Our elite dental labs construct bridges/dentures using premium, long-lasting zirconia or acrylic resin."
      },
      {
        title: "Bite Fit Try-In",
        description: "We check the custom prosthetic in your mouth, adjusting color, teeth placement, and chewing comfort."
      },
      {
        title: "Final Fixation & Care Advice",
        description: "Fixed bridges are permanently cemented, while dentures are polished and fitted with comprehensive care instructions."
      }
    ],
    faqs: [
      {
        question: "What is the difference between a bridge and a denture?",
        answer: "A bridge is a fixed prosthetic permanently cemented onto adjacent natural teeth, replacing 1-3 teeth. A denture is a removable plate replacing multiple teeth or a full arch, resting directly on gums."
      },
      {
        question: "Will dentures feel natural to eat with?",
        answer: "Modern lightweight resins make dentures highly comfortable. It typically takes 1 to 2 weeks for cheeks and tongue to adapt completely, after which chewing will feel completely natural."
      },
      {
        question: "How long do dental bridges last?",
        answer: "With good oral hygiene and regular scaling, dental bridges are exceptionally durable and last between 10 to 15 years."
      }
    ]
  },
  {
    slug: "extractions",
    title: "Gentle Extractions",
    shortDescription: "Painless extraction of severely damaged teeth or impacted wisdom teeth under highly sterile protocols.",
    longDescription: "Dr. Devarati conducts completely atraumatic, pain-free dental extractions. By leveraging advanced elevators and micro-surgical instruments, we gently release the tooth root while preserving the surrounding bone structure for quick, comfortable healing.",
    category: "Surgical",
    duration: "1 Session (20 - 45 mins)",
    comfortLevel: "Zero Pain (Conducted under deep local anesthesia)",
    basePrice: "₹800 onwards",
    emoji: "💉",
    benefits: [
      "Stops dangerous active systemic tooth infections immediately.",
      "Relieves severe jaw pressure and alignment pain from impacted wisdom teeth.",
      "Conducted under strict autoclave sterilization to prevent post-op swelling.",
      "Preserves adjacent bone structures, facilitating future implant placement."
    ],
    steps: [
      {
        title: "Localized Deep Anesthetic",
        description: "We apply a strong topical numbing gel followed by localized micro-anesthesia for absolute comfort."
      },
      {
        title: "Atraumatic Tooth Release",
        description: "Using specialized fine micro-instruments, the tooth is gently loosened without damaging surrounding bone."
      },
      {
        title: "Sterile Suture & Gel",
        description: "We cleanse the empty socket, place a sterile collagen plug, and place fine sutures if needed to speed healing."
      },
      {
        title: "Comprehensive Post-Op Plan",
        description: "We supply customized cooling instructions and cold compression packs for a fast recovery."
      }
    ],
    faqs: [
      {
        question: "Will the extraction hurt?",
        answer: "No. With our localized deep anesthetics, the target tooth and bone are completely numbed. You will only feel a dull, painless pressure as the tooth is gently loosened."
      },
      {
        question: "How long does it take to heal after an extraction?",
        answer: "Initial soft tissue healing takes about 3 to 5 days, during which you should eat soft foods. Complete bone healing inside the socket naturally takes 2 to 3 months."
      },
      {
        question: "What is a 'dry socket' and how do I prevent it?",
        answer: "A dry socket occurs if the healing blood clot is dislodged prematurely. To prevent it, strictly avoid smoking, spitting, rinsing forcefully, or drinking through a straw for 24 hours."
      }
    ]
  },
  {
    slug: "fillings-and-sealants",
    title: "Fillings and Sealants",
    shortDescription: "Mercury-free tooth-colored fillings and protective liquid sealants to block decay in deep molar grooves.",
    longDescription: "Stop tooth decay instantly. We utilize premium, biocompatible tooth-colored composite resins that bond directly to your natural enamel, restoring structural strength. Additionally, dental sealants form an invisible, hard plastic shield over children's deep molar pits to prevent cavities before they start.",
    category: "Restorative",
    duration: "1 Session (20 - 30 mins per tooth)",
    comfortLevel: "Extremely Relaxed (Virtually painless)",
    basePrice: "₹1,000 onwards",
    emoji: "🧱",
    benefits: [
      "Durable, mercury-free composite materials blend seamlessly with enamel.",
      "Liquid molar sealants stop cavity formation in children by up to 80%.",
      "Reinforces weakened teeth, preventing future fractures.",
      "Maintains natural chewing alignments and restores bite force."
    ],
    steps: [
      {
        title: "Cavity Cleansing",
        description: "Decayed, soft enamel is gently cleared away using precise, quiet dental instruments."
      },
      {
        title: "Conditioning & Priming",
        description: "A mild conditioning wash prepares the clean enamel structure for a durable adhesive bond."
      },
      {
        title: "Composite Sculpting",
        description: "The putty-like resin is placed in layers, hand-sculpted, and hardened instantly with a blue curing light."
      },
      {
        title: "Bite Shaping & High Polish",
        description: "We adjust the restoration to match your bite pattern, followed by a fine polish for a smooth glass feel."
      }
    ],
    faqs: [
      {
        question: "What are the benefits of tooth-colored composite fillings?",
        answer: "Unlike silver amalgam, tooth-colored composites require less tooth preparation, bond chemically directly to enamel, and are completely free of mercury, looking entirely natural."
      },
      {
        question: "What are dental sealants?",
        answer: "Dental sealants are thin, protective plastic coatings painted onto the chewing surfaces of back teeth (molars) to seal deep grooves from food debris and decay-causing bacteria."
      },
      {
        question: "Do fillings require injections?",
        answer: "Only for deep cavities close to the nerve. For superficial or moderate decay, fillings are completely painless and can be finished without any local anesthetic."
      }
    ]
  },
  {
    slug: "laser-dentistry",
    title: "Laser Dentistry",
    shortDescription: "Painless gum contouring, dark spot removal, and sterile root treatments using advanced dental lasers.",
    longDescription: "Experience the absolute future of clinical oral care. Dr. Devarati utilizes advanced diode dental lasers to perform completely bloodless gum surgeries, treat sensitive teeth, accelerate mouth ulcer healing, and sanitize deep root canals with minimal discomfort.",
    category: "Surgical",
    duration: "1 Session (15 - 30 mins)",
    comfortLevel: "Exceptionally Comfortable (Virtually zero bleeding)",
    basePrice: "₹3,000 onwards",
    emoji: "⚡",
    benefits: [
      "Performs precise soft tissue cuts with almost zero bleeding or swelling.",
      "Reduces post-operative pain and minimizes need for surgical stitches.",
      "Highly sterile laser energy sterilizes tissues on contact.",
      "Provides instant relief for painful aphthous ulcers."
    ],
    steps: [
      {
        title: "Laser Protective Shielding",
        description: "Specialized safety glasses are provided to protect your eyes from the laser wavelength."
      },
      {
        title: "Laser Wavelength Calibration",
        description: "The laser is calibrated precisely according to tissue density (de-sensitizing vs. cutting)."
      },
      {
        title: "Micro-Precision Treatment",
        description: "Focused energy sweeps the area, reshaping gums or sterilizing canals cleanly and instantly."
      },
      {
        title: "At-Home Care Review",
        description: "Since healing is exceptionally fast, only basic gentle rinses are needed post-visit."
      }
    ],
    faqs: [
      {
        question: "Is laser dentistry safe?",
        answer: "Yes, dental lasers are exceptionally safe and highly precise. They are widely preferred because they only affect targeted tissues, leaving surrounding healthy cells completely untouched."
      },
      {
        question: "Does laser treatment require local anesthesia?",
        answer: "In many cases, no. Lasers operate without the noise, vibrations, and pressure of standard drills, which dramatically reduces nerve stimulation, making anesthesia unnecessary for minor gum treatments."
      },
      {
        question: "Can lasers be used to treat mouth ulcers?",
        answer: "Yes! A brief, painless laser exposure over a painful mouth ulcer will seal the exposed nerve endings instantly, providing immediate pain relief and cutting healing time in half."
      }
    ]
  },
  {
    slug: "mouth-guards",
    title: "Mouth Guards",
    shortDescription: "Custom-fit nightguards to prevent teeth grinding (bruxism) and high-durability athletic sports guards.",
    longDescription: "Protect your teeth from excessive wear and sudden trauma. We fabricate custom-designed, medical-grade nightguards to cushion your teeth from nocturnal clenching (bruxism), as well as heavy-duty, protective athletic mouthguards for local athletes.",
    category: "Preventive",
    duration: "2 Sessions (3 - 5 Days)",
    comfortLevel: "Extremely Relaxed & Non-invasive",
    basePrice: "₹2,500 onwards",
    emoji: "🛡️",
    benefits: [
      "Prevents severe tooth wear, flattening, and micro-fractures from grinding.",
      "Relieves morning jaw aches, muscle stiffness, and chronic TMJ headaches.",
      "Custom-fit athletic guards distribute impact, preventing knocked-out teeth.",
      "Thin, lightweight medical-grade polymers do not restrict nightly breathing."
    ],
    steps: [
      {
        title: "Bespoke Impression Casting",
        description: "Highly accurate impressions map out your upper and lower teeth curves and bite relationships."
      },
      {
        title: "Polymer Lab Processing",
        description: "A specialized laboratory pressure-molds a custom-thickness, biocompatible medical polymer plate."
      },
      {
        title: "Fit Check & Delivery",
        description: "We fit the guard in your mouth, checking for easy insertion, stable retention, and absolute comfort."
      },
      {
        title: "Protective Storage System",
        description: "We provide an airtight antibacterial storage case and demonstrate daily cleaning protocols."
      }
    ],
    faqs: [
      {
        question: "Why should I choose a custom mouthguard over store-bought ones?",
        answer: "Store-bought 'boil-and-bite' guards are bulky, loose, and can alter your bite alignment over time. Custom-fit guards are molded to your teeth, ensuring they stay securely in place and allow comfortable breathing."
      },
      {
        question: "How do I know if I grind my teeth at night?",
        answer: "Common signs include waking up with dull jaw headaches, sore facial muscles, unexplained tooth sensitivity, or a partner noticing grinding noises while you sleep."
      },
      {
        question: "How do I clean my mouthguard?",
        answer: "Rinse it with cool water before and after every use. Clean it gently with a soft toothbrush and mild soap, and always store it in its protective ventilated case."
      }
    ]
  },
  {
    slug: "online-booking",
    title: "Online Dentist Booking",
    shortDescription: "Secure priority clinical time slots instantly through our digital reservation form with zero wait times.",
    longDescription: "Skip the waiting room hassle. Dr. Devarati's clinic utilizes a high-priority, paperless online reservation system. By inputting your details through our secure digital desk, we block your priority clinical time slot instantly, ensuring minimal in-clinic wait times.",
    category: "Preventive",
    duration: "Instant Booking (Takes 1 min)",
    comfortLevel: "Extremely Easy & Stress-Free",
    basePrice: "Free Reservation",
    emoji: "📅",
    benefits: [
      "Allows you to schedule clinical priority consultations in under 1 minute.",
      "Reduces in-clinic waiting room times to less than 10 minutes.",
      "Sends automatic confirmation calls directly from our front office.",
      "Completely secure, paperless, and available 24/7 on any mobile device."
    ],
    steps: [
      {
        title: "Input Details",
        description: "Provide your name, phone number, preferred treatment area, and booking date in our safe form."
      },
      {
        title: "Desk Verification",
        description: "Our front desk retrieves your request and reviews doctor availability for your selected date."
      },
      {
        title: "Confirmation Callback",
        description: "We contact you via call or WhatsApp within 15 minutes to lock in your exact hourly appointment."
      },
      {
        title: "Painless Walk-In",
        description: "Simply walk in at your confirmed slot time and go straight to the consultation chair."
      }
    ],
    faqs: [
      {
        question: "Are online bookings legally binding?",
        answer: "The online form is a priority request. Your slot is officially locked once our front desk makes a quick callback to confirm exact hourly availability on that day."
      },
      {
        question: "What if I need to reschedule my booking?",
        answer: "Simply reply to our confirmation WhatsApp message or call us at +91 94354 92181 at least 2 hours before your slot, and we will move it free of charge."
      },
      {
        question: "Do I have to pay any booking fees online?",
        answer: "No. Our online booking service is completely free of charge. All consultation and treatment fees are processed directly at the clinic."
      }
    ]
  },
  {
    slug: "oral-surgery",
    title: "Oral Surgery",
    shortDescription: "Surgical wisdom tooth removals, cyst enucleations, and pre-prosthetic bone contouring under sterile protocols.",
    longDescription: "Undergo complex dental surgeries with absolute peace of mind. Dr. Devarati performs highly precise minor oral surgeries, including impacted wisdom tooth removals, root-end resections (apicoectomy), and pre-prosthetic jaw reshaping, under rigorous clinical sterilization standards.",
    category: "Surgical",
    duration: "1 Session (30 - 60 mins)",
    comfortLevel: "Painless (Performed under localized block anesthesia)",
    basePrice: "₹5,000 onwards",
    emoji: "😷",
    benefits: [
      "Resolves chronic, severe pain caused by deeply impacted teeth roots.",
      "All instruments undergo class-B autoclaving, eliminating infection risks.",
      "Uses high-grade atraumatic bone-cutting equipment to ensure quick healing.",
      "Includes comprehensive post-operative monitoring and healing support."
    ],
    steps: [
      {
        title: "Micro-Radiograph Mapping",
        description: "High-resolution digital mapping defines nerve pathways and bone contours before surgical entry."
      },
      {
        title: "Localized Anesthesia Block",
        description: "A specialized local anesthetic blocks target nerve pathways, guaranteeing a completely painless procedure."
      },
      {
        title: "Atraumatic Surgical Entry",
        description: "Using fine, micro-surgical instruments, bone or tooth structure is gently released with minimal trauma."
      },
      {
        title: "Sterile Suture Sealing",
        description: "We clean the bone socket, place healing materials, and close the tissue with fine, biocompatible sutures."
      }
    ],
    faqs: [
      {
        question: "Will I be awake during the oral surgery?",
        answer: "Yes. Minor oral surgeries are safely conducted under conscious local anesthesia. The target area is completely numbed so that you feel no pain, only a light, comfortable pressure."
      },
      {
        question: "When are surgical sutures removed?",
        answer: "If we use standard sutures, they are gently removed in a brief, painless visit 7 days after the procedure. If we use dissolvable sutures, they naturally disappear within 10 to 14 days."
      },
      {
        question: "How long should I take off from work after surgery?",
        answer: "Most patients can comfortably return to light office work or studies the next day. We recommend avoiding heavy physical exercise for 2 to 3 days to allow smooth healing."
      }
    ]
  },
  {
    slug: "paediatrics",
    title: "Paediatric Dentistry",
    shortDescription: "Anxiety-free pediatric checkups, cavity preventions, and dental sealants for young children.",
    longDescription: "Establish a happy, lifetime relationship with oral health. We provide specialized, child-focused dental care in a warm and gentle environment. From painless composite restorations to protective fluoride varnishes, we ensure your child experiences stress-free treatments.",
    category: "Preventive",
    duration: "1 Session (20 - 45 mins)",
    comfortLevel: "Exceptionally Gentle (Anxiety-free child protocols)",
    basePrice: "₹500 onwards",
    emoji: "👶",
    benefits: [
      "Stops tooth decay early, ensuring healthy permanent teeth development.",
      "Fluoride coatings and sealants protect child molars from cavities by 80%.",
      "Child-friendly verbal techniques completely eliminate dental fear.",
      "Monitors early jaw growth to intercept future orthodontic alignment issues."
    ],
    steps: [
      {
        title: "Friendly Chair Familiarization",
        description: "We introduce children to our quiet dental tools as fun 'tooth ticklers' to build high trust."
      },
      {
        title: "Intra-Oral Camera Scan",
        description: "A tiny camera projects live images, showing parents decay or spacing issues clearly."
      },
      {
        title: "Painless Restoration",
        description: "Dr. Devarati cleans cavities gently and restores them with mercury-free, tooth-colored materials."
      },
      {
        title: "Protective Fluoride Shielding",
        description: "A pleasant-tasting protective fluoride varnish is applied to strengthen primary enamel."
      }
    ],
    faqs: [
      {
        question: "Why should we treat decay in baby teeth if they fall out anyway?",
        answer: "Primary (baby) teeth hold the correct spacing slots for permanent teeth. If lost too early to decay, permanent teeth will grow crooked. Healthy baby teeth are also vital for proper speech development and chewing."
      },
      {
        question: "Are dental X-rays safe for growing children?",
        answer: "Absolutely. We use high-speed digital sensors that emit negligible, low-dose radiation, and we always drape children in protective lead collars and aprons for maximum safety."
      },
      {
        question: "What is the best way to prepare my child for their first visit?",
        answer: "Keep it simple and positive. Describe the dentist as a friendly tooth helper who polishes teeth. Avoid using scary words like 'needle', 'pain', or 'pull'."
      }
    ]
  },
  {
    slug: "root-canals",
    title: "Root Canals",
    shortDescription: "Save deeply decayed or infected teeth with virtually painless, high-precision rotary endodontics.",
    longDescription: "Dr. Devarati delivers premium, single-sitting or double-sitting micro-endodontic root canal treatments. By removing infected pulp tissue, disinfecting the canal space, and sealing it with sterile biocompatible materials, we save your natural teeth and prevent future abscesses.",
    category: "Restorative",
    duration: "1 - 2 Sessions (45 - 60 mins)",
    comfortLevel: "Virtually Painless (Under localized anesthesia)",
    basePrice: "₹2,500 onwards",
    emoji: "🔬",
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
    slug: "teeth-cleaning",
    title: "Teeth Cleaning & Scaling",
    shortDescription: "Eliminate bleeding gums, tartar, and bad breath using advanced, gentle ultrasonic scaling systems.",
    longDescription: "Restore pristine gum health and oral freshness. Our professional scaling and polishing bundle utilizes gentle ultrasonic vibrations to break down hard, calcified tartar (calculus) and surface stains that standard brushing cannot remove.",
    category: "Preventive",
    duration: "1 Session (30 - 45 mins)",
    comfortLevel: "Extremely Relaxed & Gentle",
    basePrice: "₹1,500 onwards",
    emoji: "🪥",
    benefits: [
      "Reverses bleeding gums and helps prevent dangerous periodontal disease.",
      "Safely removes stubborn tea, coffee, and tobacco stains.",
      "Eradicates persistent bad breath by clearing bacterial reservoirs.",
      "Polishes teeth smooth, making it harder for new plaque to accumulate."
    ],
    steps: [
      {
        title: "Ultrasonic Calculus Shattering",
        description: "Gentle ultrasonic vibrations comfortably shatter hard, calcified tartar deposits from teeth and gumlines."
      },
      {
        title: "Sub-Gingival Flush",
        description: "Sterile antimicrobial irrigations flush out the gum pockets, destroying deep pocket bacteria."
      },
      {
        title: "High-Gloss Prophy Polish",
        description: "We use a micro-fine polishing paste to restore a glossy, smooth glass-like finish to your teeth surfaces."
      },
      {
        title: "Enamel Protection Review",
        description: "We assess your gum attachment depths and outline customized home brushing techniques."
      }
    ],
    faqs: [
      {
        question: "Does teeth cleaning make teeth loose or create gaps?",
        answer: "No. This is a common local myth. Heavy tartar buildup acts like a false hard wall. When scaled away, it exposes the pre-existing gaps and temporary gum recession caused by the infection. Gums heal and tighten back within 48 hours."
      },
      {
        question: "How often should I get my teeth cleaned?",
        answer: "We recommend a professional ultrasonic scaling and polishing once every 6 months to maintain absolute gum health and prevent decay."
      },
      {
        question: "Is scaling painful?",
        answer: "Scaling is highly comfortable. You will only feel a mild tickling vibration and cool water spray. For patients with highly sensitive teeth, we apply a desensitizing gel beforehand."
      }
    ]
  },
  {
    slug: "teeth-reshaping",
    title: "Teeth Reshaping",
    shortDescription: "Smooth out uneven, jagged edges and correct minor tooth overlaps in just a few minutes.",
    longDescription: "Achieve instant smile symmetry. Dr. Devarati performs ultra-conservative tooth re-contouring (cosmetic contouring). By gently polishing away microscopic amounts of enamel from uneven, chipped, or overlapping edges, we create a balanced, harmonious smile in one visit.",
    category: "Cosmetic",
    duration: "1 Session (15 - 30 mins)",
    comfortLevel: "Completely Painless (Requires zero injections)",
    basePrice: "₹2,000 onwards",
    emoji: "📐",
    benefits: [
      "Smooths out rough, jagged, or chipped front teeth edges instantly.",
      "Corrects minor tooth overlaps and height discrepancies cleanly.",
      "Requires absolutely no injections, pain-free from start to finish.",
      "Fast, affordable cosmetic enhancement that delivers immediate symmetry."
    ],
    steps: [
      {
        title: "Aesthetic Blueprinting",
        description: "We mark the uneven target edges that disrupt your natural lip line and tooth proportions."
      },
      {
        title: "Micro-Contouring",
        description: "Using fine diamond-polishing discs, we gently shave down fractions of a millimeter of enamel."
      },
      {
        title: "Bite Harmony Check",
        description: "We verify your chewing alignment to ensure the changes do not interfere with your bite path."
      },
      {
        title: "High-Gloss Finishing",
        description: "We polish the reshaped surfaces to a glossy finish, leaving enamel perfectly smooth and sealed."
      }
    ],
    faqs: [
      {
        question: "Does tooth reshaping damage enamel?",
        answer: "No. Cosmetic contouring only removes microscopic fractions of enamel (under 0.5mm) from the outer non-sensitive layer. This is completely safe and does not weaken the tooth."
      },
      {
        question: "Do I need injections for teeth reshaping?",
        answer: "Never. The reshaping is limited to the enamel layer which has no nerve endings. The procedure is entirely painless and comfortable."
      },
      {
        question: "How much tooth structure is removed?",
        answer: "Only a microscopic amount is polished off—just enough to smooth out chips or balance heights. We strictly preserve your tooth's internal integrity."
      }
    ]
  },
  {
    slug: "veneers-crowns",
    title: "Veneers & Crowns",
    shortDescription: "Bespoke porcelain zirconia crowns and paper-thin veneers to restore strength and aesthetics.",
    longDescription: "Achieve premium aesthetic and structural restorations. From paper-thin cosmetic ceramic veneers to high-durability zirconia and CAD-CAM porcelain crowns, we design custom-shaded dental prosthetics that fit perfectly and last a lifetime.",
    category: "Cosmetic",
    duration: "2 Sessions (7 - 10 Days apart)",
    comfortLevel: "Highly Comfortable (Minimal prep under light numbing)",
    basePrice: "₹6,000 onwards",
    emoji: "👑",
    benefits: [
      "Porcelain veneers mask gaps, deep stains, and crooked teeth beautifully.",
      "Zirconia crowns provide heavy-duty reinforcement for weak or root-canaled teeth.",
      "Bespoke laboratory shading matches your adjacent teeth translucency perfectly.",
      "Extremely durable, stain-resistant dental restorations designed to last 15+ years."
    ],
    steps: [
      {
        title: "Visual Design & Prep",
        description: "We gently prepare the tooth structure (minimal 0.3mm prep for veneers) under localized comfort."
      },
      {
        title: "Ultra-Precise Casts",
        description: "We take highly accurate physical impressions to capture your exact bite contours."
      },
      {
        title: "Bespoke Lab Milling",
        description: "Premium laboratories mill your custom zirconia crown or hand-craft porcelain veneers."
      },
      {
        title: "Adhesive Cementation",
        description: "We test the prosthetic fit, adjust alignment, and bond it permanently using medical-grade adhesive resin."
      }
    ],
    faqs: [
      {
        question: "What is the difference between a crown and a veneer?",
        answer: "A crown covers the entire visible tooth structure, reinforcing weak or root-canaled teeth. A veneer is a paper-thin porcelain facing bonded only to the front surface to correct cosmetic stains, shapes, or gaps."
      },
      {
        question: "What materials do you use for dental crowns?",
        answer: "We offer premium dental materials including metal-free Zirconia, E-Max lithium disilicate, and traditional Porcelain-Fused-to-Metal (PFM) crowns, depending on your budget and clinical needs."
      },
      {
        question: "How long do custom crowns and veneers last?",
        answer: "On average, high-quality porcelain veneers and zirconia crowns last between 10 to 20 years with consistent oral hygiene and standard clinical checkups."
      }
    ]
  },
  {
    slug: "cosmetic-orthodontist",
    title: "Cosmetic Orthodontics",
    shortDescription: "Invisible clear aligners and ceramic cosmetic braces designed for comfortable adult smile correction.",
    longDescription: "Straighten your teeth discretely. Dr. Devarati offers advanced cosmetic orthodontic services, specializing in premium clear invisible aligners and highly aesthetic tooth-colored ceramic brackets. These systems guide crowded or spaced teeth into perfect visual alignment.",
    category: "Orthodontics",
    duration: "8 - 18 Months (Comfortable adjustments)",
    comfortLevel: "Gentle Pressure (No needles involved)",
    basePrice: "₹35,000 onwards",
    emoji: "😬",
    benefits: [
      "Clear invisible aligners are virtually unnoticeable during daily work.",
      "Aligner trays are completely removable, letting you eat any food comfortably.",
      "Aligns crowded teeth, dramatically reducing food lodging and decay risk.",
      "Corrects bite discrepancies, preventing premature enamel wear."
    ],
    steps: [
      {
        title: "Orthodontic 3D Scan",
        description: "Highly detailed dental impressions and facial radiographs construct a digital map of your teeth."
      },
      {
        title: "Bespoke Track Design",
        description: "We map out your individual tooth movement phases, custom-printing your sequence of aligners."
      },
      {
        title: "Aligner Delivery & Attachments",
        description: "We place tiny tooth-colored grip points on teeth and deliver your initial customized aligner tray sets."
      },
      {
        title: "Periodic Progression Checks",
        description: "Quick clinical checks once every 4 to 6 weeks monitor tooth migration and update aligner trays."
      }
    ],
    faqs: [
      {
        question: "Am I too old to get my teeth straightened?",
        answer: "Never! Adult cosmetic orthodontics using comfortable clear aligners has become exceptionally popular. Teeth can be aligned successfully at any age as long as your gums and support bone are healthy."
      },
      {
        question: "Can I take clear aligners out for social events?",
        answer: "Yes. Clear aligners are fully removable, allowing you to take them out for eating, brushing, or special photos. However, to stay on track, they must be worn for at least 22 hours daily."
      },
      {
        question: "How do ceramic braces differ from metal braces?",
        answer: "Ceramic braces use clear or tooth-colored polycrystalline brackets instead of silver stainless steel. They blend in beautifully with your enamel, making them much more discreet."
      }
    ]
  },
  {
    slug: "implantologist",
    title: "Implantology Specialist Care",
    shortDescription: "Advanced implant surgeries, including full-mouth rehabilitations, sinus lifts, and bone grafting.",
    longDescription: "Get elite implant surgeries. Dr. Devarati delivers specialist-level implantology care, managing advanced single-tooth placements, implant-supported fixed overdentures, bone augmentations, and full-mouth 'All-on-4' or 'All-on-6' clinical rehabilitations.",
    category: "Surgical",
    duration: "3 - 6 Months (Complete bone fusion)",
    comfortLevel: "Deeply Comfortable (Sterile localized block anesthesia)",
    basePrice: "₹30,000 onwards",
    emoji: "👨‍⚕️",
    benefits: [
      "Specialist-level placement ensures a success rate exceeding 98%.",
      "Performs full-mouth fixed dental restorations for completely toothless arches.",
      "Advanced bone grafting expands thin bone, allowing implant eligibility.",
      "Restores natural, heavy chewing force and completely rejuvenates your smile."
    ],
    steps: [
      {
        title: "Specialist 3D Mapping",
        description: "3D CBCT scans map bone density, thickness, and adjacent nerves with microscopic precision."
      },
      {
        title: "Implant Fixture Surgical Anchor",
        description: "Under deep local anesthesia, a sterile titanium post is precisely anchored into your support bone."
      },
      {
        title: "Implanted Osteointegration",
        description: "We allow a highly monitored healing period of 3 to 6 months for bone cells to securely fuse to the titanium post."
      },
      {
        title: "Zirconia Prosthesis Securement",
        description: "A heavy-duty ceramic or CAD-CAM milled zirconia crown is secured, restoring full structural integrity."
      }
    ],
    faqs: [
      {
        question: "What is an Implantologist?",
        answer: "An Implantologist is a dental surgeon specialized in surgical planning, placement, bone grafting, and prosthetic restoration of biocompatible dental implants."
      },
      {
        question: "Can implants be placed if I have thin jawbone?",
        answer: "Yes. In cases of bone shrinkage, we perform specialized bone grafting or sinus lifts during implant placement to naturally rebuild bone volume and ensure stable implant anchoring."
      },
      {
        question: "How long is the recovery period after implant surgery?",
        answer: "Initial healing takes about 3 to 5 days, during which you should eat soft foods. Complete bone fusion (osseointegration) happens securely in the background over 3 to 6 months."
      }
    ]
  }
];
