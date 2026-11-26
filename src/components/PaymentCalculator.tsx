"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";
import { UNIT_SPECS } from "@/lib/palm-springs-data";

function formatAed(amount: number): string {
  return `AED ${amount.toLocaleString("en-US")}`;
}

export function PaymentCalculator() {
  const [selectedId, setSelectedId] = useState(UNIT_SPECS[0].id);

  const selectedUnit =
    UNIT_SPECS.find((u) => u.id === selectedId) ?? UNIT_SPECS[0];
  const price = selectedUnit.startingPriceNumeric;
  const booking10 = Math.round(price * 0.1);
  const construction50 = Math.round(price * 0.5);
  const handover40 = Math.round(price * 0.4);

  return (
    <div className="rounded-2xl border border-[#e4dccf] bg-white p-[1.25rem] shadow-xs sm:p-[1.75rem]">
      <div className="flex flex-wrap items-center justify-between gap-[0.5rem]">
        <span className="inline-flex items-center gap-[0.375rem] text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[#2d4a3e]">
          <Calculator className="h-[0.875rem] w-[0.875rem]" />
          60 / 40 Payment Estimator
        </span>
        <span className="font-mono text-[0.75rem] text-[#5c554e]">
          Handover: Oct 2030
        </span>
      </div>

      <div className="mt-[1rem]">
        <label
          htmlFor="calc-unit-select"
          className="block text-[0.75rem] font-semibold uppercase tracking-wider text-[#5c554e]"
        >
          Select Residence Typology
        </label>
        <select
          id="calc-unit-select"
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
          className="mt-[0.375rem] w-full rounded-xl border border-[#e4dccf] bg-[#faf7f2] px-[0.875rem] py-[0.6875rem] text-[0.875rem] font-medium text-[#1b1917] outline-hidden focus:border-[#a65d3b] focus:bg-white"
        >
          {UNIT_SPECS.map((unit) => (
            <option key={unit.id} value={unit.id}>
              {unit.name} — From {unit.startingPriceAed} ({unit.approxSizeSqFt})
            </option>
          ))}
        </select>
      </div>

      <div className="mt-[1.25rem] grid gap-[0.75rem] sm:grid-cols-3">
        <div className="rounded-xl border border-[#e4dccf] bg-[#faf7f2] p-[0.875rem]">
          <div className="font-mono text-[0.6875rem] uppercase tracking-wider text-[#5c554e]">
            10% On Booking
          </div>
          <div className="mt-[0.25rem] font-serif text-[1.375rem] font-semibold text-[#1b1917]">
            {formatAed(booking10)}
          </div>
          <div className="text-[0.6875rem] text-[#5c554e]">Reservation deposit</div>
        </div>

        <div className="rounded-xl border border-[#e4dccf] bg-[#faf7f2] p-[0.875rem]">
          <div className="font-mono text-[0.6875rem] uppercase tracking-wider text-[#5c554e]">
            50% Construction
          </div>
          <div className="mt-[0.25rem] font-serif text-[1.375rem] font-semibold text-[#1b1917]">
            {formatAed(construction50)}
          </div>
          <div className="text-[0.6875rem] text-[#5c554e]">Installments to May 2029</div>
        </div>

        <div className="rounded-xl border border-[#a65d3b]/30 bg-[#a65d3b]/5 p-[0.875rem]">
          <div className="font-mono text-[0.6875rem] uppercase tracking-wider text-[#a65d3b]">
            40% On Handover
          </div>
          <div className="mt-[0.25rem] font-serif text-[1.375rem] font-semibold text-[#1b1917]">
            {formatAed(handover40)}
          </div>
          <div className="text-[0.6875rem] text-[#5c554e]">Target Oct 2030</div>
        </div>
      </div>
    </div>
  );
}
