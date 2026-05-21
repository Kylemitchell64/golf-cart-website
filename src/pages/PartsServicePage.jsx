import { motion } from "framer-motion";
import { useScrollReveal, staggerContainer, fadeUp } from "../hooks/useScrollReveal";
import PageTransition from "../components/layout/PageTransition";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";

const services = [
  {
    title: "Battery Service",
    description:
      "Full battery replacement, testing, and maintenance for all electric cart brands. Lithium and lead-acid.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Tires & Wheels",
    description:
      "Standard, all-terrain, and low-profile tire options. Custom wheels and lift kits available.",
    icon: "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0-6C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
  },
  {
    title: "Body & Paint",
    description:
      "Custom paint jobs, body repair, seat reupholstery, and cosmetic restoration to make your cart look brand new.",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  },
  {
    title: "Electrical",
    description:
      "Controller upgrades, wiring repair, light kits, turn signals, and full electrical system diagnostics.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Performance Upgrades",
    description:
      "Speed controller upgrades, motor swaps, suspension lifts, and high-performance modifications.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Annual Maintenance",
    description:
      "Comprehensive annual inspections covering brakes, batteries, tires, steering, and all electrical systems.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
];

export default function PartsServicePage() {
  const { ref, isInView } = useScrollReveal();

  return (
    <PageTransition>
      <section className="relative pt-28 lg:pt-36 pb-28 lg:pb-32 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Parts & Service
            </p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Expert Service for Every Brand
            </h1>
            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
              Our certified technicians service all major golf cart brands.
              From routine maintenance to full custom builds.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 hover:shadow-2xl hover:shadow-brand-accent/20 transition-all duration-300 ease-out"
              >
                <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-brand-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={service.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-brand-dark">
                  {service.title}
                </h3>
                <p className="text-brand-muted mt-2 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <Button to="/contact" size="lg">
              Schedule Service
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
