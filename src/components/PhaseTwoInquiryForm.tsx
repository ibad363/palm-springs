"use client";

import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
  MessageCircle,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/palm-springs-data";

interface PhaseTwoInquiryFormProps {
  compact?: boolean;
  idPrefix?: string;
}

export function PhaseTwoInquiryForm({
  compact = false,
  idPrefix = "lead",
}: PhaseTwoInquiryFormProps) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [collection, setCollection] = useState("Aliso Townhouses (3–4 BR)");
  const [intent, setIntent] = useState("Family End-User");
  const [submitted, setSubmitted] = useState(false);
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;

    const message = [
      "Hello! I'm interested in Palm Springs by Nakheel (Dubai).",
      `Name: ${name.trim()}`,
      `Contact: ${contact.trim()}`,
      `Preferred Unit: ${collection}`,
      `Profile: ${intent}`,
      "Please share Floorplans, Price List & Phase 2 updates.",
    ].join("\n");

    const whatsappUrl = buildWhatsAppUrl(message);

    setSubmittedWhatsAppUrl(whatsappUrl);
    setSubmitted(true);

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  if (submitted) {
    return (
      <div className="flex flex-col justify-between rounded-2xl border border-[#2d4a3e]/30 bg-white p-[1.5rem] shadow-lg sm:p-[2rem]">
        <div>
          <div className="inline-flex items-center gap-[0.5rem] rounded-full bg-[#2d4a3e] px-[0.75rem] py-[0.25rem] text-[0.75rem] font-medium text-white">
            <CheckCircle2 className="h-[0.875rem] w-[0.875rem]" />
            Inquiry Ready
          </div>
          <h3 className="mt-[1rem] font-serif text-[1.5rem] font-semibold text-[#1b1917]">
            Floorplan &amp; Phase 2 Pack Unlocked
          </h3>
          <p className="mt-[0.5rem] text-[0.875rem] leading-relaxed text-[#5c554e]">
            Thank you, <span className="font-semibold text-[#1b1917]">{name}</span>.
            Your details for{" "}
            <span className="font-semibold text-[#1b1917]">{collection}</span> (
            {intent}) are ready. Click below if WhatsApp didn&apos;t open
            automatically:
          </p>
        </div>

        <div className="mt-[1.25rem] flex flex-wrap items-center gap-[0.75rem]">
          <a
            href={submittedWhatsAppUrl || buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[0.5rem] rounded-full bg-[#25D366] px-[1.25rem] py-[0.6875rem] text-[0.8125rem] font-semibold text-white transition hover:bg-[#1ebe5d]"
          >
            <MessageCircle className="h-[1rem] w-[1rem]" />
            <span>Send on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setName("");
              setContact("");
              setSubmittedWhatsAppUrl("");
            }}
            className="cursor-pointer rounded-full border border-[#1b1917]/20 px-[1rem] py-[0.625rem] text-[0.75rem] font-semibold text-[#1b1917] hover:bg-[#1b1917] hover:text-white"
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[#e4dccf] bg-white p-[1.25rem] shadow-xl sm:p-[1.75rem]"
    >
      <div className="flex flex-wrap items-center justify-between gap-[0.5rem]">
        <span className="inline-flex items-center gap-[0.375rem] rounded-full bg-[#f2ece1] px-[0.75rem] py-[0.25rem] text-[0.6875rem] font-semibold uppercase tracking-wider text-[#a65d3b]">
          <Sparkles className="h-[0.75rem] w-[0.75rem]" />
          Priority Release Access
        </span>
        <span className="text-[0.75rem] font-medium text-[#2d4a3e]">
          Phase 2 Registration Open
        </span>
      </div>

      <h3 className="mt-[0.875rem] font-serif text-[1.5rem] font-semibold leading-snug text-[#1b1917]">
        {compact
          ? "Download Floorplans & Phase 2 Price List"
          : "Request Phase 2 Release & Floorplan Pack"}
      </h3>
      <p className="mt-[0.25rem] text-[0.8125rem] leading-relaxed text-[#5c554e]">
        Get unit layouts, 60/40 payment schedules, and pre-launch allocation alerts.
      </p>

      <div className="mt-[1.125rem] space-y-[0.875rem]">
        <div>
          <label
            htmlFor={`${idPrefix}-name`}
            className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-[#5c554e]"
          >
            Full Name
          </label>
          <input
            id={`${idPrefix}-name`}
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Layla Al Mansoori"
            className="mt-[0.375rem] w-full rounded-xl border border-[#e4dccf] bg-[#faf7f2] px-[0.875rem] py-[0.625rem] text-[0.875rem] text-[#1b1917] outline-hidden transition focus:border-[#a65d3b] focus:bg-white"
          />
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-contact`}
            className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-[#5c554e]"
          >
            WhatsApp or Email
          </label>
          <input
            id={`${idPrefix}-contact`}
            type="text"
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="+971 50 000 0000 or name@example.com"
            className="mt-[0.375rem] w-full rounded-xl border border-[#e4dccf] bg-[#faf7f2] px-[0.875rem] py-[0.625rem] text-[0.875rem] text-[#1b1917] outline-hidden transition focus:border-[#a65d3b] focus:bg-white"
          />
        </div>

        <div className="grid gap-[0.75rem] sm:grid-cols-2">
          <div>
            <label
              htmlFor={`${idPrefix}-collection`}
              className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-[#5c554e]"
            >
              Preferred Unit
            </label>
            <select
              id={`${idPrefix}-collection`}
              value={collection}
              onChange={(e) => setCollection(e.target.value)}
              className="mt-[0.375rem] w-full rounded-xl border border-[#e4dccf] bg-[#faf7f2] px-[0.75rem] py-[0.625rem] text-[0.875rem] text-[#1b1917] outline-hidden focus:border-[#a65d3b] focus:bg-white"
            >
              <option>Aliso Townhouses (3–4 BR)</option>
              <option>Rancho Villas (4–5 BR)</option>
              <option>Both Collections</option>
            </select>
          </div>

          <div>
            <label
              htmlFor={`${idPrefix}-intent`}
              className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-[#5c554e]"
            >
              Buyer Profile
            </label>
            <select
              id={`${idPrefix}-intent`}
              value={intent}
              onChange={(e) => setIntent(e.target.value)}
              className="mt-[0.375rem] w-full rounded-xl border border-[#e4dccf] bg-[#faf7f2] px-[0.75rem] py-[0.625rem] text-[0.875rem] text-[#1b1917] outline-hidden focus:border-[#a65d3b] focus:bg-white"
            >
              <option>Family End-User</option>
              <option>Long-Term Investor</option>
              <option>Broker / Agency</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="flex w-full cursor-pointer items-center justify-center gap-[0.5rem] rounded-full bg-[#1b1917] px-[1.25rem] py-[0.8125rem] text-[0.875rem] font-semibold text-[#faf7f2] transition hover:bg-[#a65d3b]"
        >
          <MessageCircle className="h-[1rem] w-[1rem]" />
          <span>Get Floorplans via WhatsApp</span>
        </button>

        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-[0.5rem] rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-[1.25rem] py-[0.6875rem] text-[0.8125rem] font-semibold text-[#177a3c] transition hover:bg-[#25D366]/20"
        >
          <MessageCircle className="h-[1rem] w-[1rem]" />
          <span>Direct WhatsApp Inquiry</span>
        </a>

        <div className="flex items-center justify-center gap-[0.375rem] pt-[0.125rem] text-[0.75rem] text-[#5c554e]">
          <PhoneCall className="h-[0.75rem] w-[0.75rem] text-[#2d4a3e]" />
          <span>Instant digital brochure · Zero spam guarantee</span>
        </div>
      </div>
    </form>
  );
}
