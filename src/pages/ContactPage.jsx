import { motion } from "framer-motion";
import { fadeUp } from "../hooks/useScrollReveal";
import PageTransition from "../components/layout/PageTransition";
import ContactForm from "../components/contact/ContactForm";
import MapEmbed from "../components/contact/MapEmbed";

const infoItems = [
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    label: "Address",
    value: "5900 Coca Cola Blvd.\nSuite A, Columbus, GA 31909",
    href: "https://maps.google.com/?q=5900+Coca+Cola+Blvd+Columbus+GA",
  },
  {
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    label: "Phone",
    value: "(706) 221-4653",
    href: "tel:7062214653",
  },
  {
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    label: "Hours",
    value: "Mon – Fri: 10:00 AM – 6:00 PM\nSat – Sun: Closed",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left — dark info panel */}
        <div className="lg:w-2/5 bg-brand-dark text-white flex flex-col relative overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
              backgroundImage:
                "url('https://picsum.photos/seed/golfcontact/800/1200')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/70 to-brand-dark" />

          <div className="relative z-10 flex flex-col h-full p-10 lg:p-14 xl:p-20">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-14">
              <div className="w-10 h-10 bg-brand-accent rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <div>
                <span className="text-white font-bold text-base leading-tight block">
                  Golf Cart
                </span>
                <span className="text-brand-accent text-[11px] font-semibold uppercase tracking-widest">
                  Specialists
                </span>
              </div>
            </div>

            {/* Heading */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex-1"
            >
              <p className="text-brand-accent font-semibold text-sm uppercase tracking-[0.2em] mb-5">
                Contact Us
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-10">
                Let&apos;s Talk<br />Golf Carts
              </h1>

              {/* Info items */}
              <div className="space-y-7">
                {infoItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center shrink-0">
                      <svg
                        className="w-5 h-5 text-brand-accent"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d={item.icon}
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-sm text-gray-300 hover:text-white transition-colors leading-relaxed whitespace-pre-line"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <a
                  href="https://www.facebook.com/GolfCartSpecialists"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Follow us on Facebook
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right — form panel */}
        <div className="lg:w-3/5 bg-brand-white flex items-start lg:items-center justify-center p-10 lg:p-14 xl:p-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-2">
              Send Us a Message
            </h2>
            <p className="text-brand-muted mb-8 text-base">
              We usually respond within a few hours during business hours.
            </p>
            <ContactForm />

            <div className="mt-8">
              <MapEmbed />
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
