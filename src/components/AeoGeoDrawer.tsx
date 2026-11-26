"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { Bot, CheckCircle2, Code2, ExternalLink, X } from "lucide-react";

interface AeoGeoDrawerProps {
  jsonLdString: string;
}

const AEO_GEO_SIGNALS = [
  "Schema.org @graph (WebPage + Speakable, Place, Organization, Product/AggregateOffer, FAQPage, BreadcrumbList)",
  "Answer-first #aeo-summary block + semantic <dl> key-value entity facts",
  "HTML <table> matrix for Aliso Townhouses & Rancho Villas pricing/sizes",
  "Crawler-readable <details> FAQ synced 1:1 with FAQPage JSON-LD",
  "GEO-ready /llms.txt factsheet + /robots.txt welcoming GPTBot, PerplexityBot, ClaudeBot & Google-Extended",
  "Next.js 16 static prerendering with canonical URL, OpenGraph, Twitter Card & /sitemap.xml",
];

export function AeoGeoDrawer({ jsonLdString }: AeoGeoDrawerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full border border-[#2d4a3e]/30 bg-[#2d4a3e]/10 px-3 py-1.5 text-xs font-semibold text-[#2d4a3e] transition hover:bg-[#2d4a3e] hover:text-white"
      >
        <Bot className="h-3.5 w-3.5 shrink-0" />
        <span>AEO / GEO Inspector</span>
      </button>

      {open &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="AEO and GEO Optimization Inspector"
            className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs"
          >
            <div className="flex h-full w-full max-w-xl flex-col bg-[#faf7f2] shadow-2xl">
              <div className="flex items-center justify-between border-b border-[#e4dccf] px-6 py-4">
                <div className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-[#a65d3b]" />
                  <h2 className="font-serif text-xl font-semibold text-[#1b1917]">
                    AEO &amp; GEO Implementation Inspector
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close inspector"
                  className="cursor-pointer rounded-full p-1.5 text-[#5c554e] hover:bg-[#e4dccf]/60 hover:text-[#1b1917]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 space-y-6 overflow-y-auto p-6">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#5c554e]">
                    Active Optimization Checklist
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {AEO_GEO_SIGNALS.map((signal) => (
                      <li
                        key={signal}
                        className="flex items-start gap-2.5 rounded-xl border border-[#e4dccf] bg-white p-3 text-xs leading-relaxed text-[#1b1917]"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2d4a3e]" />
                        <span>{signal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#5c554e]">
                    Crawler Endpoints
                  </h3>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {[
                      { label: "/llms.txt", href: "/llms.txt" },
                      { label: "/robots.txt", href: "/robots.txt" },
                      { label: "/sitemap.xml", href: "/sitemap.xml" },
                    ].map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#e4dccf] bg-white px-3.5 py-1.5 font-mono text-xs text-[#1b1917] hover:border-[#a65d3b] hover:text-[#a65d3b]"
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#5c554e]">
                    Embedded JSON-LD (@graph)
                  </h3>
                  <pre className="mt-2.5 max-h-80 overflow-auto rounded-xl border border-[#e4dccf] bg-[#1b1917] p-4 font-mono text-[11px] leading-relaxed text-[#faf7f2]">
                    {jsonLdString}
                  </pre>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
