import Image from "next/image";
import {
  ArrowRight,
  Award,
  Building2,
  Calendar,
  Car,
  ChevronDown,
  Compass,
  FileText,
  Leaf,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Trees,
} from "lucide-react";
import { MobileNav } from "@/components/MobileNav";
import { PaymentCalculator } from "@/components/PaymentCalculator";
import { PhaseTwoInquiryForm } from "@/components/PhaseTwoInquiryForm";
import { ResidenceExplorer } from "@/components/ResidenceExplorer";
import {
  buildPalmSpringsJsonLd,
  buildWhatsAppUrl,
  CONNECTIVITY_DESTINATIONS,
  FAQ_ITEMS,
  MASTERPLAN_AMENITIES,
  PAYMENT_MILESTONES,
  PROJECT_QUICK_FACTS,
} from "@/lib/palm-springs-data";

export default function PalmSpringsPage() {
  const jsonLd = buildPalmSpringsJsonLd();
  const safeJsonLd = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

  const canyonPark = MASTERPLAN_AMENITIES.find((a) => a.id === "canyon-park");
  const countryClub = MASTERPLAN_AMENITIES.find((a) => a.id === "thousand-palms");
  const secondaryAmenities = MASTERPLAN_AMENITIES.filter(
    (a) => a.id !== "canyon-park" && a.id !== "thousand-palms"
  );

  return (
    <div className="min-h-screen bg-[#faf7f2] pb-[4.5rem] text-[#1b1917] md:pb-0">
      {/* JSON-LD Structured Data for AEO & GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd }}
      />

      {/* Sticky Real-Estate Header (Zero squish at 320px) */}
      <header className="sticky top-0 z-40 border-b border-[#e4dccf]/90 bg-[#faf7f2]/95 backdrop-blur-md">
        <div className="fluid-container flex items-center justify-between gap-[0.75rem] py-[0.75rem]">
          <a href="#top" className="flex min-w-0 items-center gap-[0.625rem]">
            <span className="flex h-[2.25rem] w-[2.25rem] shrink-0 items-center justify-center rounded-full bg-[#1b1917] font-serif text-[1.0625rem] font-semibold text-[#faf7f2]">
              PS
            </span>
            <div className="min-w-0">
              <span className="block truncate whitespace-nowrap font-serif text-[1.125rem] font-semibold leading-none tracking-tight text-[#1b1917]">
                Palm Springs
              </span>
              <span className="mt-[0.1875rem] block truncate whitespace-nowrap text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[#5c554e]">
                By Nakheel · Dubai
              </span>
            </div>
          </a>

          <nav
            aria-label="Primary page sections"
            className="hidden items-center gap-[1.5rem] text-[0.8125rem] font-medium text-[#5c554e] lg:flex"
          >
            <a href="#aeo-summary" className="whitespace-nowrap transition hover:text-[#1b1917]">
              Overview
            </a>
            <a href="#residences" className="whitespace-nowrap transition hover:text-[#1b1917]">
              Residences
            </a>
            <a href="#masterplan" className="whitespace-nowrap transition hover:text-[#1b1917]">
              Masterplan
            </a>
            <a href="#location" className="whitespace-nowrap transition hover:text-[#1b1917]">
              Location
            </a>
            <a href="#payment-plan" className="whitespace-nowrap transition hover:text-[#1b1917]">
              Payment Plan
            </a>
            <a href="#faq-section" className="whitespace-nowrap transition hover:text-[#1b1917]">
              FAQ
            </a>
          </nav>

          <div className="flex shrink-0 items-center gap-[0.5rem]">
            <a
              href="#lead-capture"
              className="hidden shrink-0 items-center gap-[0.375rem] whitespace-nowrap rounded-full bg-[#1b1917] px-[0.875rem] py-[0.5rem] text-[0.75rem] font-semibold text-[#faf7f2] transition hover:bg-[#a65d3b] min-[380px]:inline-flex sm:px-[1.125rem] sm:text-[0.8125rem]"
            >
              <span>Get Floorplans</span>
            </a>
            <MobileNav />
          </div>
        </div>
      </header>

      <main id="top">
        {/* 1. Lead-Engine 2-Column Hero */}
        <section className="relative overflow-hidden border-b border-[#e4dccf]">
          <div className="relative w-full">
            <Image
              src="/images/hero-palm-springs.jpg"
              alt="Palm Springs by Nakheel golden-hour desert-modern courtyard villa with travertine stone, palm trees, and swimming pool in Dubai"
              fill
              preload={true}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b1917]/92 via-[#1b1917]/58 to-[#1b1917]/38" />

            <div className="fluid-container relative z-10 py-[2.5rem] sm:py-[3.75rem] lg:py-[4.75rem]">
              <div className="grid items-end gap-[2rem] lg:grid-cols-12 lg:gap-[2.5rem]">
                <div className="min-w-0 lg:col-span-7">
                  <div className="inline-flex max-w-full items-center gap-[0.5rem] rounded-full border border-white/25 bg-black/40 px-[0.875rem] py-[0.375rem] text-[0.75rem] font-medium text-[#faf7f2] backdrop-blur-sm">
                    <Award className="h-[0.875rem] w-[0.875rem] shrink-0 text-[#e6b18a]" />
                    <span className="leading-snug">
                      LEED Platinum Precertified · Nov 2026 Launch
                    </span>
                  </div>

                  <h1 className="fluid-hero-title mt-[1.125rem] font-serif font-semibold tracking-tight text-white">
                    Palm Springs by Nakheel — Desert-Modern Villas &amp; Townhouses in Dubai
                  </h1>

                  <p className="mt-[0.875rem] max-w-[38rem] text-[0.9375rem] leading-relaxed text-[#faf7f2]/90 sm:text-[1.0625rem]">
                    A 3.8 million sq m nature-led residential master community in{" "}
                    <strong>Hessyan First, Jebel Ali South</strong>, directly opposite{" "}
                    <strong>Palm Jebel Ali</strong>. 15 walkable neighborhoods anchored by
                    Canyon Park.
                  </p>

                  <div className="mt-[1.5rem] flex flex-wrap items-center gap-[0.75rem]">
                    <a
                      href="#residences"
                      className="inline-flex items-center gap-[0.5rem] rounded-full bg-[#a65d3b] px-[1.375rem] py-[0.75rem] text-[0.875rem] font-semibold text-white transition hover:bg-[#8e4c2e]"
                    >
                      <span>Explore Aliso &amp; Rancho</span>
                      <ArrowRight className="h-[1rem] w-[1rem]" />
                    </a>
                    <a
                      href="#payment-plan"
                      className="inline-flex items-center gap-[0.5rem] rounded-full border border-white/35 bg-white/10 px-[1.375rem] py-[0.75rem] text-[0.875rem] font-semibold text-white backdrop-blur-xs transition hover:bg-white/20"
                    >
                      <span>60/40 Payment Calculator</span>
                    </a>
                  </div>

                  {/* Hero KPI Strip */}
                  <div className="mt-[2rem] grid grid-cols-2 gap-[0.875rem] rounded-2xl border border-white/15 bg-black/50 p-[1rem] text-white backdrop-blur-md sm:grid-cols-4 sm:gap-[1.25rem] sm:p-[1.25rem]">
                    <div className="min-w-0">
                      <div className="font-mono text-[0.6875rem] uppercase tracking-wider text-white/70">
                        Phase 1 Launch
                      </div>
                      <div className="mt-[0.1875rem] font-serif text-[1.375rem] font-semibold sm:text-[1.625rem]">
                        977 Homes
                      </div>
                      <div className="text-[0.75rem] text-[#e6b18a]">
                        Sold out · AED 5.5B
                      </div>
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-[0.6875rem] uppercase tracking-wider text-white/70">
                        Masterplan
                      </div>
                      <div className="mt-[0.1875rem] font-serif text-[1.375rem] font-semibold sm:text-[1.625rem]">
                        3.8M sq m
                      </div>
                      <div className="text-[0.75rem] text-white/80">
                        382 ha · 15 districts
                      </div>
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-[0.6875rem] uppercase tracking-wider text-white/70">
                        Entry Price
                      </div>
                      <div className="mt-[0.1875rem] font-serif text-[1.375rem] font-semibold sm:text-[1.625rem]">
                        AED 3.8M+
                      </div>
                      <div className="text-[0.75rem] text-white/80">
                        100% Freehold
                      </div>
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-[0.6875rem] uppercase tracking-wider text-white/70">
                        Handover
                      </div>
                      <div className="mt-[0.1875rem] font-serif text-[1.375rem] font-semibold sm:text-[1.625rem]">
                        60 / 40
                      </div>
                      <div className="text-[0.75rem] text-white/80">
                        Target Oct 2030
                      </div>
                    </div>
                  </div>
                </div>

                {/* Above-the-fold Lead Engine Form (Desktop lg+) */}
                <div className="hidden lg:col-span-5 lg:block">
                  <PhaseTwoInquiryForm compact idPrefix="hero-lead" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. AEO Direct Answer & Executive Facts Brief */}
        <section
          id="aeo-summary"
          aria-labelledby="aeo-heading"
          className="fluid-section border-b border-[#e4dccf] bg-[#f2ece1]/65"
        >
          <div className="fluid-container">
            <div className="grid gap-[2rem] lg:grid-cols-12 lg:items-start lg:gap-[2.5rem]">
              <article className="min-w-0 lg:col-span-5">
                <span className="inline-flex items-center gap-[0.375rem] rounded-full bg-[#2d4a3e]/10 px-[0.75rem] py-[0.25rem] text-[0.75rem] font-semibold uppercase tracking-wider text-[#2d4a3e]">
                  <Compass className="h-[0.875rem] w-[0.875rem]" />
                  Executive Project Brief
                </span>
                <h2
                  id="aeo-heading"
                  className="fluid-h2 mt-[1rem] font-serif font-semibold tracking-tight text-[#1b1917]"
                >
                  What is Palm Springs by Nakheel in Dubai?
                </h2>
                <p className="mt-[1rem] text-[0.9375rem] leading-relaxed text-[#5c554e] sm:text-[1rem]">
                  <strong>Palm Springs</strong> is a flagship freehold residential
                  masterplan unveiled in <strong>November 2026</strong> by{" "}
                  <strong>Nakheel</strong> (a member of{" "}
                  <strong>Dubai Holding Real Estate</strong>). Situated on the
                  Jebel Ali mainland opposite <strong>Palm Jebel Ali</strong>, the
                  382-hectare community prioritizes low-density family living—featuring
                  only villas and townhouses across 15 neighborhoods—with 30%–35% of
                  its land dedicated to parks, streams, and outdoor trails.
                </p>
                <p className="mt-[0.75rem] text-[0.9375rem] leading-relaxed text-[#5c554e] sm:text-[1rem]">
                  Its initial release of <strong>977 homes</strong> sold out
                  completely for <strong>AED 5.5 billion</strong> (~USD 1.5 billion,
                  averaging ~AED 5.63 million per residence), with Nakheel confirming
                  upcoming phases for future buyers.
                </p>
              </article>

              <div className="min-w-0 lg:col-span-7">
                <div className="rounded-2xl border border-[#e4dccf] bg-white p-[1.25rem] shadow-xs sm:p-[2rem]">
                  <h3 className="font-serif text-[1.25rem] font-semibold text-[#1b1917]">
                    Verified Project Facts at a Glance
                  </h3>
                  <dl className="mt-[1.25rem] grid gap-x-[1.5rem] gap-y-[1rem] sm:grid-cols-2">
                    {PROJECT_QUICK_FACTS.map((fact) => (
                      <div
                        key={fact.label}
                        className="border-b border-[#e4dccf]/70 pb-[0.75rem] last:border-b-0 sm:last:border-b"
                      >
                        <dt className="text-[0.6875rem] font-semibold uppercase tracking-wider text-[#5c554e]">
                          {fact.label}
                        </dt>
                        <dd className="mt-[0.25rem] text-[0.875rem] font-semibold text-[#1b1917]">
                          {fact.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Residences & Comparison Matrix */}
        <section
          id="residences"
          aria-labelledby="residences-heading"
          className="fluid-section border-b border-[#e4dccf]"
        >
          <div className="fluid-container">
            <div className="max-w-[44rem]">
              <span className="inline-flex items-center gap-[0.375rem] text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[#a65d3b]">
                <Building2 className="h-[0.875rem] w-[0.875rem]" />
                Architectural Collections
              </span>
              <h2
                id="residences-heading"
                className="fluid-h2 mt-[0.5rem] font-serif font-semibold tracking-tight text-[#1b1917]"
              >
                Aliso Townhouses &amp; Rancho Villas
              </h2>
              <p className="mt-[0.75rem] text-[0.9375rem] leading-relaxed text-[#5c554e] sm:text-[1rem]">
                Designed around indoor-outdoor desert-modern living, Phase 1
                introduced two distinct home families: garden-linked{" "}
                <strong>Aliso</strong> townhouses (3–4 bedrooms) and three-level{" "}
                <strong>Rancho</strong> villas (4–5 bedrooms) with private courtyards
                and swimming pool provisions.
              </p>
            </div>

            <div className="mt-[2.25rem]">
              <ResidenceExplorer />
            </div>
          </div>
        </section>

        {/* 4. Masterplan, Canyon Park & Amenities */}
        <section
          id="masterplan"
          aria-labelledby="masterplan-heading"
          className="fluid-section border-b border-[#e4dccf] bg-[#f2ece1]/55"
        >
          <div className="fluid-container">
            <div className="flex flex-col justify-between gap-[1.5rem] lg:flex-row lg:items-end">
              <div className="max-w-[40rem]">
                <span className="inline-flex items-center gap-[0.375rem] text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[#2d4a3e]">
                  <Trees className="h-[0.875rem] w-[0.875rem]" />
                  Masterplan &amp; Sustainability
                </span>
                <h2
                  id="masterplan-heading"
                  className="fluid-h2 mt-[0.5rem] font-serif font-semibold tracking-tight text-[#1b1917]"
                >
                  Canyon Park, Country Clubs &amp; LEED Platinum Design
                </h2>
                <p className="mt-[0.75rem] text-[0.9375rem] leading-relaxed text-[#5c554e] sm:text-[1rem]">
                  Over a third of the 3.8 million sq m site is reserved for living
                  landscapes, waterways, and 35 km of continuous cycling and jogging
                  tracks linking all 15 neighborhoods to schools, healthcare, and clubs.
                </p>
              </div>

              <div className="inline-flex w-fit items-center gap-[0.75rem] rounded-2xl border border-[#2d4a3e]/25 bg-white px-[1rem] py-[0.75rem] text-[0.75rem]">
                <Leaf className="h-[1.25rem] w-[1.25rem] shrink-0 text-[#2d4a3e]" />
                <div>
                  <div className="font-semibold text-[#1b1917]">
                    LEED Platinum Precertified
                  </div>
                  <div className="text-[#5c554e]">
                    First Nakheel master community with this rating
                  </div>
                </div>
              </div>
            </div>

            {/* Primary Visual Amenity Showcase */}
            <div className="mt-[2.25rem] grid gap-[1.5rem] lg:grid-cols-2">
              {canyonPark && canyonPark.image && (
                <article className="overflow-hidden rounded-2xl border border-[#e4dccf] bg-white shadow-xs">
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#f2ece1]">
                    <Image
                      src={canyonPark.image}
                      alt={canyonPark.imageAlt ?? canyonPark.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-[1.25rem] sm:p-[1.75rem]">
                    <div className="font-mono text-[0.75rem] uppercase tracking-wider text-[#2d4a3e]">
                      {canyonPark.subtitle}
                    </div>
                    <h3 className="fluid-h3 mt-[0.25rem] font-serif font-semibold text-[#1b1917]">
                      {canyonPark.name}
                    </h3>
                    <p className="mt-[0.625rem] text-[0.875rem] leading-relaxed text-[#5c554e]">
                      {canyonPark.description}
                    </p>
                    <div className="mt-[1rem] inline-flex rounded-full bg-[#faf7f2] px-[0.75rem] py-[0.25rem] text-[0.75rem] font-medium text-[#1b1917]">
                      {canyonPark.metrics}
                    </div>
                  </div>
                </article>
              )}

              {countryClub && countryClub.image && (
                <article className="overflow-hidden rounded-2xl border border-[#e4dccf] bg-white shadow-xs">
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#f2ece1]">
                    <Image
                      src={countryClub.image}
                      alt={countryClub.imageAlt ?? countryClub.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-[1.25rem] sm:p-[1.75rem]">
                    <div className="font-mono text-[0.75rem] uppercase tracking-wider text-[#a65d3b]">
                      {countryClub.subtitle}
                    </div>
                    <h3 className="fluid-h3 mt-[0.25rem] font-serif font-semibold text-[#1b1917]">
                      {countryClub.name}
                    </h3>
                    <p className="mt-[0.625rem] text-[0.875rem] leading-relaxed text-[#5c554e]">
                      {countryClub.description}
                    </p>
                    <div className="mt-[1rem] inline-flex rounded-full bg-[#faf7f2] px-[0.75rem] py-[0.25rem] text-[0.75rem] font-medium text-[#1b1917]">
                      {countryClub.metrics}
                    </div>
                  </div>
                </article>
              )}
            </div>

            {/* Secondary Sports & Civic Cards */}
            <div className="mt-[1.5rem] grid gap-[1.5rem] md:grid-cols-2">
              {secondaryAmenities.map((item) => (
                <article
                  key={item.id}
                  className="rounded-2xl border border-[#e4dccf] bg-white p-[1.25rem] shadow-xs sm:p-[1.5rem]"
                >
                  <div className="font-mono text-[0.75rem] uppercase tracking-wider text-[#5c554e]">
                    {item.subtitle}
                  </div>
                  <h3 className="fluid-h3 mt-[0.25rem] font-serif font-semibold text-[#1b1917]">
                    {item.name}
                  </h3>
                  <p className="mt-[0.5rem] text-[0.875rem] leading-relaxed text-[#5c554e]">
                    {item.description}
                  </p>
                  <div className="mt-[1rem] inline-flex rounded-full bg-[#f2ece1] px-[0.75rem] py-[0.25rem] text-[0.75rem] font-medium text-[#1b1917]">
                    {item.metrics}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Location & Corridor Connectivity */}
        <section
          id="location"
          aria-labelledby="location-heading"
          className="fluid-section border-b border-[#e4dccf] bg-[#1b1917] text-[#faf7f2]"
        >
          <div className="fluid-container">
            <div className="grid gap-[2rem] lg:grid-cols-12 lg:items-center lg:gap-[2.5rem]">
              <div className="lg:col-span-5">
                <span className="inline-flex items-center gap-[0.375rem] text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[#e6b18a]">
                  <MapPin className="h-[0.875rem] w-[0.875rem]" />
                  Southern Dubai Growth Corridor
                </span>
                <h2
                  id="location-heading"
                  className="fluid-h2 mt-[0.75rem] font-serif font-semibold tracking-tight text-white"
                >
                  Mainland Gateway Opposite Palm Jebel Ali
                </h2>
                <p className="mt-[1rem] text-[0.9375rem] leading-relaxed text-[#faf7f2]/80 sm:text-[1rem]">
                  Positioned in <strong>Hessyan First (Jebel Ali South)</strong>{" "}
                  along <strong>Sheikh Zayed Road (E11)</strong> and{" "}
                  <strong>Al Maktoum Airport Street</strong>, Palm Springs connects
                  waterfront coastal developments with Dubai’s future aviation hub at
                  DWC—plus a planned Dubai Metro Red Line extension near the site.
                </p>
              </div>

              <div className="grid gap-[1rem] sm:grid-cols-2 lg:col-span-7">
                {CONNECTIVITY_DESTINATIONS.map((dest) => (
                  <div
                    key={dest.place}
                    className="rounded-2xl border border-white/10 bg-white/5 p-[1.25rem] transition hover:border-[#e6b18a]/40"
                  >
                    <div className="flex items-center justify-between gap-[0.5rem]">
                      <Car className="h-[1rem] w-[1rem] text-[#e6b18a]" />
                      <span className="font-mono text-[0.875rem] font-semibold text-[#e6b18a]">
                        {dest.time}
                      </span>
                    </div>
                    <h3 className="mt-[0.75rem] font-serif text-[1.25rem] font-semibold text-white">
                      {dest.place}
                    </h3>
                    <p className="mt-[0.25rem] text-[0.75rem] text-[#faf7f2]/70">
                      {dest.context}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Payment Plan, Interactive Estimator & Lead Capture */}
        <section
          id="payment-plan"
          aria-labelledby="payment-heading"
          className="fluid-section border-b border-[#e4dccf]"
        >
          <div className="fluid-container">
            <div className="grid gap-[2.5rem] lg:grid-cols-12 lg:items-start">
              <div className="min-w-0 space-y-[1.5rem] lg:col-span-7">
                <div>
                  <span className="inline-flex items-center gap-[0.375rem] text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[#a65d3b]">
                    <Calendar className="h-[0.875rem] w-[0.875rem]" />
                    60 / 40 Payment Structure
                  </span>
                  <h2
                    id="payment-heading"
                    className="fluid-h2 mt-[0.5rem] font-serif font-semibold tracking-tight text-[#1b1917]"
                  >
                    Construction-Linked Milestones &amp; October 2030 Handover
                  </h2>
                  <p className="mt-[0.75rem] text-[0.9375rem] leading-relaxed text-[#5c554e] sm:text-[1rem]">
                    Phase 1 offered a buyer-friendly 60/40 schedule spread across the
                    4-year build horizon, aligning 40% of capital with physical
                    handover in Q4 2030.
                  </p>
                </div>

                {/* Interactive Payment Estimator */}
                <PaymentCalculator />

                <div className="space-y-[0.75rem]">
                  {PAYMENT_MILESTONES.map((step, index) => (
                    <div
                      key={step.stage}
                      className="flex items-start gap-[1rem] rounded-2xl border border-[#e4dccf] bg-white p-[1.125rem] shadow-xs"
                    >
                      <div className="flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center rounded-xl bg-[#f2ece1] font-serif text-[1.375rem] font-bold text-[#a65d3b]">
                        {step.percentage}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-[0.5rem]">
                          <h3 className="font-serif text-[1.125rem] font-semibold text-[#1b1917]">
                            {index + 1}. {step.stage}
                          </h3>
                          <span className="font-mono text-[0.75rem] text-[#2d4a3e]">
                            {step.timing}
                          </span>
                        </div>
                        <p className="mt-[0.25rem] text-[0.8125rem] text-[#5c554e]">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-start gap-[0.75rem] rounded-2xl border border-[#e4dccf] bg-[#f2ece1]/60 p-[1rem] text-[0.75rem] leading-relaxed text-[#5c554e]">
                  <ShieldCheck className="mt-[0.125rem] h-[1rem] w-[1rem] shrink-0 text-[#2d4a3e]" />
                  <span>
                    <strong>Market Context:</strong> Following the AED 5.5 billion
                    sell-out of all 977 Phase 1 homes in November 2026, prospective
                    buyers are targeting upcoming Phase 2 releases or verified
                    secondary allocations.
                  </span>
                </div>
              </div>

              <div id="lead-capture" className="scroll-mt-[5.5rem] lg:col-span-5">
                <PhaseTwoInquiryForm idPrefix="main-lead" />
              </div>
            </div>
          </div>
        </section>

        {/* 7. AEO Frequently Asked Questions */}
        <section
          id="faq-section"
          aria-labelledby="faq-heading"
          className="fluid-section bg-[#f2ece1]/45"
        >
          <div className="mx-auto max-w-[56rem] px-[1rem] sm:px-[1.5rem] lg:px-[2rem]">
            <div className="text-center">
              <span className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[#2d4a3e]">
                Buyer Information &amp; Q&amp;A
              </span>
              <h2
                id="faq-heading"
                className="fluid-h2 mt-[0.5rem] font-serif font-semibold tracking-tight text-[#1b1917]"
              >
                Frequently Asked Questions
              </h2>
              <p className="mt-[0.75rem] text-[0.875rem] text-[#5c554e] sm:text-[1rem]">
                Key facts about Palm Springs by Nakheel—from location and unit
                sizes to payment plans and handover.
              </p>
            </div>

            <div className="mt-[2.25rem] space-y-[0.75rem]">
              {FAQ_ITEMS.map((item, idx) => (
                <details
                  key={item.question}
                  open={idx < 2}
                  className="group rounded-2xl border border-[#e4dccf] bg-white px-[1.25rem] py-[1rem] shadow-xs sm:px-[1.5rem]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-[1rem] font-serif text-[1.0625rem] font-semibold text-[#1b1917] sm:text-[1.25rem]">
                    <span>{item.question}</span>
                    <ChevronDown className="h-[1.25rem] w-[1.25rem] shrink-0 text-[#a65d3b] transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <p className="mt-[0.75rem] border-t border-[#e4dccf]/60 pt-[0.75rem] text-[0.875rem] leading-relaxed text-[#5c554e] sm:text-[0.9375rem]">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#e4dccf] bg-[#faf7f2] py-[2.5rem]">
        <div className="fluid-container flex flex-col items-start justify-between gap-[1.5rem] sm:flex-row sm:items-center">
          <div className="max-w-[36rem]">
            <div className="font-serif text-[1.125rem] font-semibold text-[#1b1917]">
              Palm Springs by Nakheel — Dubai
            </div>
            <p className="mt-[0.25rem] text-[0.75rem] leading-relaxed text-[#5c554e]">
              Residential project overview for Palm Springs in Hessyan First,
              Dubai. Specifications and Phase 1 launch figures reflect publicly
              reported November 2026 details and are subject to developer updates.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-[1rem] text-[0.75rem] font-medium text-[#5c554e] sm:pr-[7.5rem]">
            <a href="#residences" className="hover:text-[#1b1917]">
              Residences
            </a>
            <a href="#masterplan" className="hover:text-[#1b1917]">
              Masterplan
            </a>
            <a href="#payment-plan" className="hover:text-[#1b1917]">
              Payment Plan
            </a>
            <a href="#faq-section" className="hover:text-[#1b1917]">
              FAQ
            </a>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile Lead-Engine Bar (visible on < 768px) */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#e4dccf] bg-[#faf7f2]/95 px-[1rem] py-[0.625rem] backdrop-blur-md md:hidden">
        <div className="mx-auto flex max-w-[30rem] items-center gap-[0.5rem]">
          <a
            href="#lead-capture"
            className="flex flex-1 items-center justify-center gap-[0.375rem] rounded-full bg-[#1b1917] px-[0.875rem] py-[0.625rem] text-[0.8125rem] font-semibold text-[#faf7f2] transition hover:bg-[#a65d3b]"
          >
            <FileText className="h-[0.875rem] w-[0.875rem] shrink-0" />
            <span>Get Price List</span>
          </a>
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-[0.375rem] rounded-full border border-[#25D366] bg-[#25D366]/10 px-[0.875rem] py-[0.625rem] text-[0.8125rem] font-semibold text-[#177a3c]"
          >
            <MessageCircle className="h-[0.875rem] w-[0.875rem] shrink-0" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Floating WhatsApp Lead Button */}
      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-[4.75rem] right-[1rem] z-40 inline-flex items-center gap-[0.5rem] rounded-full bg-[#25D366] px-[1rem] py-[0.75rem] text-[0.8125rem] font-semibold text-white shadow-lg transition hover:bg-[#1ebe5d] md:bottom-[1.5rem] md:right-[1.5rem]"
      >
        <MessageCircle className="h-[1.125rem] w-[1.125rem] shrink-0" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
