import { motion } from "framer-motion";
import { useScrollReveal, fadeIn } from "../../hooks/useScrollReveal";

const clients = [
  "City of Columbus, GA",
  "Realtree",
  "Always Uptown",
  "Aflac",
  "Greystone Properties",
];

export default function ClientLogos() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="py-20 bg-brand-light border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.p
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-center text-sm text-brand-muted uppercase tracking-widest mb-8"
        >
          Trusted By
        </motion.p>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          className="flex flex-wrap items-center justify-center gap-10 md:gap-20"
        >
          {clients.map((client) => (
            <div
              key={client}
              className="text-brand-muted/40 hover:text-brand-dark transition-colors duration-300 cursor-default"
            >
              <span className="text-lg font-semibold whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
