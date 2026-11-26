"use client";

import Image from "next/image";
import { useState } from "react";
import { Check, Home, Layers, Maximize2 } from "lucide-react";
import { UNIT_SPECS, type UnitSpec } from "@/lib/palm-springs-data";

type FilterOption = "All" | "Aliso" | "Rancho";

const FILTER_OPTIONS: { id: FilterOption; label: string; count: number }[] = [
  { id: "All", label: "All Residences", count: UNIT_SPECS.length },
  {
    id: "Aliso",
    label: "Aliso Townhouses",
    count: UNIT_SPECS.filter((u) => u.collection === "Aliso").length,
  },
  {
    id: "Rancho",
    label: "Rancho Villas",
    count: UNIT_SPECS.filter((u) => u.collection === "Rancho").length,
  },
];

function UnitCard({ unit }: { unit: UnitSpec }) {
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#e4dccf] bg-white shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f2ece1]">
        <Image
          src={unit.image}
          alt={unit.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-[5rem] bg-gradient-to-t from-black/65 to-transparent" />
        <div className="absolute top-[0.75rem] left-[0.75rem] flex items-center gap-[0.5rem]">
          <span className="rounded-full bg-[#1b1917]/85 px-[0.75rem] py-[0.25rem] text-[0.75rem] font-medium tracking-wide text-[#faf7f2] backdrop-blur-xs">
            {unit.collection} {unit.category}
          </span>
        </div>
        <div className="absolute right-[0.75rem] bottom-[0.75rem] left-[0.75rem] flex flex-wrap items-end justify-between gap-[0.5rem] text-white">
          <span className="font-mono text-[0.75rem] uppercase tracking-wider text-white/95">
            {unit.bedrooms} BR · {unit.floors}
          </span>
          <span className="rounded-full bg-[#a65d3b] px-[0.625rem] py-[0.1875rem] text-[0.75rem] font-semibold">
            From {unit.startingPriceAed}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-[1.25rem] sm:p-[1.5rem]">
        <h3 className="fluid-h3 font-serif font-semibold tracking-tight text-[#1b1917]">
          {unit.name}
        </h3>

        <div className="mt-[1rem] grid grid-cols-2 gap-[0.75rem] rounded-xl bg-[#faf7f2] p-[0.75rem] text-[0.75rem]">
          <div className="flex min-w-0 items-center gap-[0.5rem] text-[#5c554e]">
            <Maximize2 className="h-[0.875rem] w-[0.875rem] shrink-0 text-[#a65d3b]" />
            <div className="min-w-0">
              <div className="text-[0.625rem] uppercase tracking-wider">Approx. BUA</div>
              <div className="truncate font-semibold text-[#1b1917]">
                {unit.approxSizeSqFt}
              </div>
            </div>
          </div>
          <div className="flex min-w-0 items-center gap-[0.5rem] text-[#5c554e]">
            <Layers className="h-[0.875rem] w-[0.875rem] shrink-0 text-[#2d4a3e]" />
            <div className="min-w-0">
              <div className="text-[0.625rem] uppercase tracking-wider">
                {unit.approxPlotSqFt ? "Typical Plot" : "Levels"}
              </div>
              <div className="truncate font-semibold text-[#1b1917]">
                {unit.approxPlotSqFt ?? unit.floors}
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-[1rem] flex-1 space-y-[0.5rem] text-[0.875rem] text-[#5c554e]">
          {unit.highlights.map((item) => (
            <li key={item} className="flex items-start gap-[0.5rem]">
              <Check className="mt-[0.1875rem] h-[1rem] w-[1rem] shrink-0 text-[#2d4a3e]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-[1.25rem] flex flex-wrap items-center justify-between gap-[0.5rem] border-t border-[#e4dccf] pt-[1rem] text-[0.75rem]">
          <span className="inline-flex items-center gap-[0.375rem] font-medium text-[#a65d3b]">
            <Home className="h-[0.875rem] w-[0.875rem] shrink-0" />
            <span>{unit.phase1Status}</span>
          </span>
          <a
            href="#lead-capture"
            className="font-semibold text-[#1b1917] underline decoration-[#a65d3b]/50 underline-offset-4 hover:decoration-[#a65d3b]"
          >
            Get Floorplan →
          </a>
        </div>
      </div>
    </article>
  );
}

export function ResidenceExplorer() {
  const [filter, setFilter] = useState<FilterOption>("All");

  const visibleUnits =
    filter === "All"
      ? UNIT_SPECS
      : UNIT_SPECS.filter((u) => u.collection === filter);

  return (
    <div className="space-y-[2.25rem]">
      <div className="flex flex-wrap items-center justify-between gap-[1rem]">
        <div
          role="tablist"
          aria-label="Filter residences by collection"
          className="flex w-full flex-wrap gap-[0.375rem] rounded-2xl border border-[#e4dccf] bg-[#f2ece1] p-[0.375rem] sm:inline-flex sm:w-auto sm:rounded-full"
        >
          {FILTER_OPTIONS.map((option) => {
            const active = filter === option.id;
            return (
              <button
                key={option.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(option.id)}
                className={`flex-1 cursor-pointer whitespace-nowrap rounded-xl px-[0.875rem] py-[0.5rem] text-[0.8125rem] font-semibold transition-all sm:flex-initial sm:rounded-full sm:px-[1rem] sm:text-[0.875rem] ${
                  active
                    ? "bg-[#1b1917] text-[#faf7f2] shadow-xs"
                    : "text-[#5c554e] hover:text-[#1b1917]"
                }`}
              >
                {option.label}{" "}
                <span className={active ? "text-[#faf7f2]/75" : "text-[#5c554e]/75"}>
                  ({option.count})
                </span>
              </button>
            );
          })}
        </div>

        <p className="text-[0.8125rem] text-[#5c554e] sm:text-[0.875rem]">
          Freehold ownership · Phase 1 (977 homes) sold out in Nov 2026
        </p>
      </div>

      <div className="grid gap-[1.5rem] md:grid-cols-2 lg:grid-cols-3">
        {visibleUnits.map((unit) => (
          <UnitCard key={unit.id} unit={unit} />
        ))}
      </div>

      {/* Semantic HTML table for instant AEO/GEO extraction & buyer comparison */}
      <div className="overflow-hidden rounded-2xl border border-[#e4dccf] bg-white">
        <div className="border-b border-[#e4dccf] bg-[#f2ece1]/70 px-[1.25rem] py-[1rem] sm:px-[1.5rem]">
          <h3 className="font-serif text-[1.25rem] font-semibold text-[#1b1917]">
            Unit Specification &amp; Phase 1 Reference Pricing Matrix
          </h3>
          <p className="mt-[0.25rem] text-[0.75rem] text-[#5c554e]">
            Structured comparison of all five residential typologies launched in Palm Springs by Nakheel.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[42rem] border-collapse text-left text-[0.875rem]">
            <thead>
              <tr className="border-b border-[#e4dccf] bg-[#faf7f2] text-[0.75rem] uppercase tracking-wider text-[#5c554e]">
                <th scope="col" className="px-[1.5rem] py-[0.875rem] font-semibold">
                  Collection &amp; Unit
                </th>
                <th scope="col" className="px-[1rem] py-[0.875rem] font-semibold">
                  Bedrooms
                </th>
                <th scope="col" className="px-[1rem] py-[0.875rem] font-semibold">
                  Floors
                </th>
                <th scope="col" className="px-[1rem] py-[0.875rem] font-semibold">
                  Approx. Size
                </th>
                <th scope="col" className="px-[1rem] py-[0.875rem] font-semibold">
                  Launch Price
                </th>
                <th scope="col" className="px-[1.5rem] py-[0.875rem] font-semibold">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e4dccf]">
              {UNIT_SPECS.map((unit) => (
                <tr key={unit.id} className="hover:bg-[#faf7f2]/70">
                  <th scope="row" className="px-[1.5rem] py-[1rem] font-semibold text-[#1b1917]">
                    {unit.name}
                  </th>
                  <td className="px-[1rem] py-[1rem] text-[#5c554e]">{unit.bedrooms} BR</td>
                  <td className="px-[1rem] py-[1rem] text-[#5c554e]">{unit.floors}</td>
                  <td className="px-[1rem] py-[1rem] font-mono text-[0.75rem] text-[#1b1917]">
                    {unit.approxSizeSqFt}
                    {unit.approxPlotSqFt ? ` (${unit.approxPlotSqFt})` : ""}
                  </td>
                  <td className="px-[1rem] py-[1rem] font-semibold text-[#a65d3b]">
                    From {unit.startingPriceAed}
                  </td>
                  <td className="px-[1.5rem] py-[1rem] text-[0.75rem] text-[#2d4a3e]">
                    {unit.phase1Status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
