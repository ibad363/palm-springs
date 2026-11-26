export interface UnitSpec {
  id: string;
  collection: "Aliso" | "Rancho";
  category: "Townhouse" | "Villa";
  name: string;
  bedrooms: number;
  floors: string;
  approxSizeSqFt: string;
  approxPlotSqFt?: string;
  startingPriceAed: string;
  startingPriceNumeric: number;
  highlights: string[];
  phase1Status: string;
  image: string;
  imageAlt: string;
}

export interface AmenityItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  metrics: string;
  image?: string;
  imageAlt?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const SITE_URL = "https://palm-springs-dubai.vercel.app";

export const WHATSAPP_NUMBER = "923158925202";

export function buildWhatsAppUrl(customText?: string): string {
  const defaultText =
    "Hello! I am interested in Palm Springs by Nakheel (Dubai). Please share the floorplans, price list, and Phase 2 availability.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    customText ?? defaultText
  )}`;
}

export const PROJECT_QUICK_FACTS = [
  { label: "Developer", value: "Nakheel (Dubai Holding Real Estate)" },
  { label: "Location", value: "Hessyan First / Jebel Ali South, opposite Palm Jebel Ali" },
  { label: "Masterplan Scale", value: "3.8 million sq m (382 hectares) · 15 neighborhoods" },
  { label: "Planned Population", value: "Nearly 50,000 residents" },
  { label: "Phase 1 Launch", value: "November 2026 — 977 homes sold out (AED 5.5B)" },
  { label: "Ownership", value: "100% Freehold for all nationalities" },
  { label: "Starting Price (Phase 1)", value: "From AED 3.8M (Aliso) · AED 7.0M (Rancho)" },
  { label: "Payment Plan & Handover", value: "60/40 · Target completion October 2030" },
  { label: "Sustainability", value: "LEED for Communities Platinum Precertification" },
] as const;

export const UNIT_SPECS: UnitSpec[] = [
  {
    id: "aliso-3br",
    collection: "Aliso",
    category: "Townhouse",
    name: "Aliso 3-Bedroom Townhouse",
    bedrooms: 3,
    floors: "G+1 (2 Floors)",
    approxSizeSqFt: "2,328.6 sq ft",
    startingPriceAed: "AED 3.8M",
    startingPriceNumeric: 3800000,
    highlights: [
      "Private landscaped garden patio",
      "Direct pedestrian sikka access to green trails",
      "Indoor-outdoor open-plan living & dining",
    ],
    phase1Status: "Phase 1 Sold Out · Phase 2 Planned",
    image: "/images/aliso-townhouse.jpg",
    imageAlt:
      "Aliso 3-bedroom desert-modern townhouse with limestone facade, timber pergola, and palm-lined walkway in Palm Springs Dubai",
  },
  {
    id: "aliso-4br-g1",
    collection: "Aliso",
    category: "Townhouse",
    name: "Aliso 4-Bedroom Corner Townhouse (2 Floors)",
    bedrooms: 4,
    floors: "G+1 (2 Floors)",
    approxSizeSqFt: "2,672.0 sq ft",
    startingPriceAed: "AED 4.6M",
    startingPriceNumeric: 4600000,
    highlights: [
      "Expansive corner plot with wrap-around garden",
      "Dual-aspect natural light & shaded terrace",
      "En-suite guest bedroom on ground level",
    ],
    phase1Status: "Phase 1 Sold Out · Phase 2 Planned",
    image: "/images/aliso-townhouse.jpg",
    imageAlt:
      "Aliso 4-bedroom corner townhouse exterior featuring warm sand plaster and private garden hedges",
  },
  {
    id: "aliso-4br-g2",
    collection: "Aliso",
    category: "Townhouse",
    name: "Aliso 4-Bedroom Corner Townhouse (3 Floors)",
    bedrooms: 4,
    floors: "G+2 (3 Floors)",
    approxSizeSqFt: "3,115.4 sq ft",
    startingPriceAed: "AED 5.2M",
    startingPriceNumeric: 5200000,
    highlights: [
      "Three-story corner residence with upper lounge",
      "Larger private garden & covered parking",
      "Walkable distance to Canyon Park spine",
    ],
    phase1Status: "Phase 1 Sold Out · Phase 2 Planned",
    image: "/images/aliso-townhouse.jpg",
    imageAlt:
      "Three-floor Aliso 4-bedroom corner townhouse in Palm Springs by Nakheel",
  },
  {
    id: "rancho-4br",
    collection: "Rancho",
    category: "Villa",
    name: "Rancho 4-Bedroom Villa",
    bedrooms: 4,
    floors: "G+2 (3 Floors)",
    approxSizeSqFt: "4,041.4 sq ft",
    startingPriceAed: "AED 7.0M",
    startingPriceNumeric: 7000000,
    highlights: [
      "Private landscaped courtyard with pool provision",
      "Cantilevered terraces & travertine cladding",
      "Three levels designed for multi-generational privacy",
    ],
    phase1Status: "Phase 1 Sold Out · Phase 2 Planned",
    image: "/images/rancho-villa.jpg",
    imageAlt:
      "Rancho 4-bedroom 3-level luxury desert-modern villa with courtyard pool and floor-to-ceiling glass at twilight",
  },
  {
    id: "rancho-5br",
    collection: "Rancho",
    category: "Villa",
    name: "Rancho 5-Bedroom Villa",
    bedrooms: 5,
    floors: "G+2 (3 Floors)",
    approxSizeSqFt: "4,921.4 sq ft",
    approxPlotSqFt: "~6,064.5 sq ft plot",
    startingPriceAed: "AED 8.9M",
    startingPriceNumeric: 8900000,
    highlights: [
      "Flagship 5-bedroom villa on generous ~6,064.5 sq ft plot",
      "Private courtyard swimming pool & sunken fire-pit lounge",
      "Seamless indoor-outdoor California-modern architecture",
    ],
    phase1Status: "Phase 1 Sold Out · Phase 2 Planned",
    image: "/images/rancho-villa.jpg",
    imageAlt:
      "Flagship Rancho 5-bedroom villa with private turquoise swimming pool and outdoor lounge in Palm Springs Dubai",
  },
];

export const MASTERPLAN_AMENITIES: AmenityItem[] = [
  {
    id: "canyon-park",
    name: "Canyon Park",
    subtitle: "The Central Green Spine",
    description:
      "A continuous ecological park weaving through all 15 neighborhoods with sensory desert gardens, winding freshwater streams, stone waterfalls, shallow wading pools, sandy pockets, an adventure oasis, and a nature center.",
    metrics: "30%–35% open green & water area · 35 km cycling & jogging tracks",
    image: "/images/canyon-park.jpg",
    imageAlt:
      "Canyon Park central green spine in Palm Springs Dubai showing winding freshwater stream, rock cascades, boardwalk, and cycling track",
  },
  {
    id: "thousand-palms",
    name: "Thousand Palms Country Club",
    subtitle: "The Social & Resort Anchor",
    description:
      "The primary leisure hub of Palm Springs featuring a beach-inspired zero-entry pool framed by pale sand and cabanas, children's splash pads, wellness center, resident lounge, restaurants, and an expansive event lawn.",
    metrics: "Beach-entry pool · Cabanas · Dining & event lawn",
    image: "/images/country-club.jpg",
    imageAlt:
      "Thousand Palms Country Club at sunset with beach-entry swimming pool, cream linen cabanas, and desert-modern clubhouse",
  },
  {
    id: "silver-spur",
    name: "Silver Spur Racquet Club",
    subtitle: "Dedicated Athletics & Wellness",
    description:
      "Purpose-built sports district combining championship racquet and tennis courts, modern fitness studios, a high-performance gym, and a lap pool connected directly to the 35 km trail network.",
    metrics: "Tennis & racquet courts · Lap pool · Fitness studios",
  },
  {
    id: "civic-hub",
    name: "Self-Sufficient Civic Infrastructure",
    subtitle: "Everyday Family Essentials",
    description:
      "Planned as a complete southern Dubai residential city for nearly 50,000 residents, integrating two schools, a community hospital, six mosques, and neighborhood retail and shopping centers.",
    metrics: "2 schools · 1 hospital · 6 mosques · Community retail",
  },
];

export const CONNECTIVITY_DESTINATIONS = [
  { place: "Palm Jebel Ali", time: "~14 min", context: "Directly opposite on the coastal corridor" },
  { place: "Bluewaters Island", time: "~20 min", context: "Via Sheikh Zayed Road (E11)" },
  { place: "Al Maktoum Int'l Airport (DWC)", time: "~23 min", context: "Southern Dubai aviation hub" },
  { place: "Palm Jumeirah", time: "~25 min", context: "Direct northbound E11 access" },
] as const;

export const PAYMENT_MILESTONES = [
  {
    percentage: "10%",
    stage: "On Booking",
    timing: "At Reservation",
    detail: "Initial down payment to secure allocation (Phase 1 terms).",
  },
  {
    percentage: "50%",
    stage: "During Construction",
    timing: "Scheduled through May 2029",
    detail: "Staggered construction-linked installments across the build period.",
  },
  {
    percentage: "40%",
    stage: "On Completion",
    timing: "Target October 2030 (Q4 2030)",
    detail: "Final balance payable upon property handover and inspection.",
  },
] as const;

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is Palm Springs by Nakheel in Dubai?",
    answer:
      "Palm Springs is a 3.8 million sq m (382-hectare) master-planned residential community developed by Nakheel (part of Dubai Holding Real Estate) in southern Dubai. Launched in November 2026, it comprises 15 low-density neighborhoods planned for nearly 50,000 residents, featuring Aliso townhouses and Rancho villas rather than apartment towers.",
  },
  {
    question: "Where is Palm Springs Dubai located and what is nearby?",
    answer:
      "Palm Springs sits on the Jebel Ali mainland in Hessyan First, directly opposite Palm Jebel Ali along Sheikh Zayed Road (E11) and Al Maktoum Airport Street. Reported drive times are approximately 14 minutes to Palm Jebel Ali, 20 minutes to Bluewaters Island, 23 minutes to Al Maktoum International Airport (DWC), and 25 minutes to Palm Jumeirah, with a planned Dubai Metro Red Line extension nearby.",
  },
  {
    question: "What happened in the Phase 1 launch of Palm Springs?",
    answer:
      "Phase 1 launched in November 2026 with 977 villas and townhouses and sold out completely during the initial release, generating AED 5.5 billion (approx. USD 1.5 billion) in total sales at an average price of roughly AED 5.63 million per home. Nakheel has confirmed that further phases are planned.",
  },
  {
    question: "What are the property types, sizes, and starting prices?",
    answer:
      "Phase 1 offered two collections: Aliso Townhouses in 3-bedroom G+1 (~2,328.6 sq ft from AED 3.8M), 4-bedroom corner 2-floor (~2,672.0 sq ft from AED 4.6M), and 4-bedroom corner 3-floor (~3,115.4 sq ft from AED 5.2M) layouts; and Rancho Villas in 4-bedroom G+2 (~4,041.4 sq ft from AED 7.0M) and 5-bedroom G+2 (~4,921.4 sq ft on ~6,064.5 sq ft plots from AED 8.9M).",
  },
  {
    question: "What is the payment plan and expected handover date?",
    answer:
      "Phase 1 launched with a 60/40 payment plan: 10% down payment on booking, 50% spread across construction installments up to May 2029, and 40% upon handover. Target completion is October 2030 (Q4 2030).",
  },
  {
    question: "Is Palm Springs by Nakheel freehold for international buyers?",
    answer:
      "Yes. Homes in Palm Springs by Nakheel are offered on a 100% freehold basis, making both Aliso townhouses and Rancho villas eligible for purchase by UAE nationals and international buyers of all nationalities.",
  },
  {
    question: "What amenities and schools are planned inside Palm Springs?",
    answer:
      "The masterplan dedicates 30%–35% of land to green spaces and waterways anchored by Canyon Park (with streams, waterfalls, and sensory gardens), ~35 km of cycling and jogging tracks, Thousand Palms Country Club (beach-entry pool, cabanas, dining), Silver Spur Racquet Club (tennis, lap pool, gym), two schools, a hospital, six mosques, and neighborhood retail.",
  },
  {
    question: "What sustainability certification has Palm Springs achieved?",
    answer:
      "Palm Springs is the first Nakheel community to receive LEED for Communities Platinum Precertification, reflecting climate-responsive planning, water and energy efficiency, and walkable, low-density neighborhood design.",
  },
];

export function buildPalmSpringsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Palm Springs by Nakheel — Dubai",
        description:
          "AEO & GEO optimized project guide for Palm Springs by Nakheel in Hessyan First, Jebel Ali South, Dubai.",
        inLanguage: "en",
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: "Palm Springs by Nakheel Dubai | Villas, Townhouses, Prices & Masterplan",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#development` },
        primaryImageOfPage: `${SITE_URL}/images/hero-palm-springs.jpg`,
        datePublished: "2026-11-26",
        dateModified: "2026-11-26",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#aeo-summary", "#faq-section"],
        },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#nakheel`,
        name: "Nakheel (Dubai Holding Real Estate)",
        description:
          "Master developer behind Palm Springs, Palm Jumeirah, and Palm Jebel Ali in Dubai.",
      },
      {
        "@type": "Place",
        "@id": `${SITE_URL}/#development`,
        name: "Palm Springs by Nakheel",
        description:
          "A 3.8 million sq m (382-hectare) LEED Platinum Precertified residential master community by Nakheel in Hessyan First, southern Dubai, near Palm Jebel Ali, featuring 15 neighborhoods of Aliso townhouses and Rancho villas.",
        image: [
          `${SITE_URL}/images/hero-palm-springs.jpg`,
          `${SITE_URL}/images/canyon-park.jpg`,
          `${SITE_URL}/images/country-club.jpg`,
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Hessyan First, Sheikh Zayed Road (E11) Corridor",
          addressLocality: "Jebel Ali",
          addressRegion: "Dubai",
          addressCountry: "AE",
        },
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Canyon Park", value: true },
          {
            "@type": "LocationFeatureSpecification",
            name: "Thousand Palms Country Club",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Silver Spur Racquet Club",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "35 km Cycling and Jogging Tracks",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "LEED for Communities Platinum Precertification",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Two Schools, Hospital & Six Mosques",
            value: true,
          },
        ],
      },
      {
        "@type": "Product",
        "@id": `${SITE_URL}/#aliso-townhouses`,
        name: "Aliso Townhouses at Palm Springs by Nakheel",
        description:
          "3- and 4-bedroom freehold desert-modern townhouses (~2,328.6 to 3,115.4 sq ft) with private gardens in Palm Springs, Dubai.",
        image: `${SITE_URL}/images/aliso-townhouse.jpg`,
        brand: { "@id": `${SITE_URL}/#nakheel` },
        category: "Residential Townhouse",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "AED",
          lowPrice: 3800000,
          highPrice: 5200000,
          offerCount: 3,
          availability: "https://schema.org/SoldOut",
          description:
            "Phase 1 sold out in November 2026; upcoming Phase 2 releases planned. 60/40 payment plan with October 2030 target handover.",
        },
      },
      {
        "@type": "Product",
        "@id": `${SITE_URL}/#rancho-villas`,
        name: "Rancho Villas at Palm Springs by Nakheel",
        description:
          "4- and 5-bedroom three-floor (G+2) freehold desert-modern villas (~4,041.4 to 4,921.4 sq ft) with private courtyards and pool provisions in Palm Springs, Dubai.",
        image: `${SITE_URL}/images/rancho-villa.jpg`,
        brand: { "@id": `${SITE_URL}/#nakheel` },
        category: "Residential Villa",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "AED",
          lowPrice: 7000000,
          highPrice: 8900000,
          offerCount: 2,
          availability: "https://schema.org/SoldOut",
          description:
            "Phase 1 sold out in November 2026; upcoming Phase 2 releases planned. 60/40 payment plan with October 2030 target handover.",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Dubai Real Estate",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Palm Springs by Nakheel",
            item: SITE_URL,
          },
        ],
      },
    ],
  };
}
