"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Overview", href: "#aeo-summary" },
  { label: "Residences", href: "#residences" },
  { label: "Masterplan", href: "#masterplan" },
  { label: "Location", href: "#location" },
  { label: "Payment Calculator", href: "#payment-plan" },
  { label: "FAQ", href: "#faq-section" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        className="inline-flex h-[2.25rem] w-[2.25rem] shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#e4dccf] bg-white text-[#1b1917] transition hover:border-[#a65d3b] lg:hidden"
      >
        <Menu className="h-[1.125rem] w-[1.125rem]" />
      </button>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs lg:hidden"
          >
            <div className="flex h-full w-full max-w-[20rem] flex-col bg-[#faf7f2] p-[1.25rem] shadow-2xl">
              <div className="flex items-center justify-between border-b border-[#e4dccf] pb-[1rem]">
                <div>
                  <div className="font-serif text-[1.25rem] font-semibold text-[#1b1917]">
                    Palm Springs
                  </div>
                  <div className="text-[0.6875rem] uppercase tracking-[0.14em] text-[#5c554e]">
                    By Nakheel · Dubai
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                  className="cursor-pointer rounded-full p-[0.5rem] text-[#5c554e] hover:bg-[#e4dccf]/60 hover:text-[#1b1917]"
                >
                  <X className="h-[1.25rem] w-[1.25rem]" />
                </button>
              </div>

              <nav className="mt-[1.25rem] flex flex-1 flex-col gap-[0.375rem]">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl px-[0.875rem] py-[0.75rem] text-[0.9375rem] font-medium text-[#1b1917] transition hover:bg-[#f2ece1]"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-[0.875rem] w-[0.875rem] text-[#a65d3b]" />
                  </a>
                ))}
              </nav>

              <div className="border-t border-[#e4dccf] pt-[1rem]">
                <a
                  href="#lead-capture"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-[0.5rem] rounded-full bg-[#1b1917] px-[1.25rem] py-[0.875rem] text-[0.875rem] font-semibold text-[#faf7f2] transition hover:bg-[#a65d3b]"
                >
                  <span>Unlock Floorplans &amp; Prices</span>
                  <ArrowRight className="h-[1rem] w-[1rem]" />
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
