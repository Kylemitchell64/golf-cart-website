import { useState } from "react";
import { motion } from "framer-motion";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { faqEntries } from "../data/faq";
import { fadeUp } from "../hooks/useScrollReveal";
import PageTransition from "../components/layout/PageTransition";

export default function FaqPage() {
  const [search, setSearch] = useState("");

  const filtered = faqEntries.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-28 lg:pt-36 pb-28 lg:pb-32 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-brand-accent font-semibold text-sm uppercase tracking-[0.2em] mb-5">
              Support
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              Frequently Asked<br />Questions
            </h1>
            <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto">
              Everything you need to know about buying, renting, and servicing
              your golf cart.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search + Accordion */}
      <section className="py-24 lg:py-32 bg-brand-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Search */}
          <div className="relative mb-12">
            <svg
              className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-muted/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-14 pr-5 py-4 rounded-2xl border border-gray-200 bg-white text-brand-dark placeholder-brand-muted/40 text-base focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent shadow-sm"
            />
          </div>

          {/* Accordion */}
          <div className="divide-y divide-gray-100">
            {filtered.map((faq, idx) => (
              <Disclosure key={faq.id}>
                {({ open }) => (
                  <div>
                    <DisclosureButton
                      className={`w-full flex items-start gap-6 py-8 text-left group transition-colors ${
                        open ? "" : "hover:bg-gray-50/50 -mx-4 px-4 rounded-xl"
                      }`}
                    >
                      {/* Number */}
                      <span className="text-brand-accent font-bold text-sm tracking-widest shrink-0 mt-1 w-8">
                        {String(idx + 1).padStart(2, "0")}
                      </span>

                      {/* Question */}
                      <span
                        className={`flex-1 text-lg font-semibold leading-snug transition-colors ${
                          open ? "text-brand-accent" : "text-brand-dark group-hover:text-brand-dark"
                        }`}
                      >
                        {faq.question}
                      </span>

                      {/* Chevron */}
                      <svg
                        className={`w-5 h-5 shrink-0 mt-0.5 transition-all duration-300 ${
                          open ? "rotate-180 text-brand-accent" : "text-brand-muted"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </DisclosureButton>

                    <DisclosurePanel className="pb-8 pl-14 pr-6">
                      <p className="text-brand-muted leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </DisclosurePanel>
                  </div>
                )}
              </Disclosure>
            ))}

            {filtered.length === 0 && (
              <div className="py-16 text-center">
                <svg
                  className="w-12 h-12 text-gray-200 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-brand-muted text-lg font-medium">
                  No matching questions found.
                </p>
                <p className="text-brand-muted/60 text-sm mt-1">
                  Try a different search term.
                </p>
              </div>
            )}
          </div>

          {/* Still have questions CTA */}
          {filtered.length > 0 && (
            <div className="mt-20 pt-12 border-t border-gray-100 text-center">
              <p className="text-brand-dark font-semibold text-xl mb-2">
                Still have questions?
              </p>
              <p className="text-brand-muted mb-6">
                Our team is happy to help with anything you need.
              </p>
              <a
                href="tel:7062214653"
                className="inline-flex items-center gap-2 rounded-full bg-brand-accent text-white font-semibold px-8 py-3 hover:bg-brand-accent-light transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call (706) 221-4653
              </a>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
