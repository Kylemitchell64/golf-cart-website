import { motion } from "framer-motion";
import { fadeUp } from "../hooks/useScrollReveal";
import PageTransition from "../components/layout/PageTransition";
import BusinessInfo from "../components/contact/BusinessInfo";
import MapEmbed from "../components/contact/MapEmbed";

export default function CustomerCarePage() {
  return (
    <PageTransition>
      <section className="relative pt-28 lg:pt-36 pb-28 lg:pb-32 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Customer Care
            </p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              We&apos;re Here for You
            </h1>
            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
              Our dedicated team of professionals is here to help you find the
              perfect cart, keep it running, and make sure you love every ride.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-brand-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Personalized Service",
                description:
                  "We take the time to understand your needs and help you find the right cart for your lifestyle.",
              },
              {
                title: "Expert Maintenance",
                description:
                  "Proactive maintenance programs to ensure your cart stays reliable and safe, season after season.",
              },
              {
                title: "Lasting Relationships",
                description:
                  "We believe in building relationships beyond the sale. Our customers become part of the family.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-brand-dark">
                  {item.title}
                </h3>
                <p className="text-brand-muted mt-2 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BusinessInfo />
            <MapEmbed />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
