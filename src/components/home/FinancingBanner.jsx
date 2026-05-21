import { motion } from "framer-motion";
import { useScrollReveal, fadeUp } from "../../hooks/useScrollReveal";
import Button from "../ui/Button";

export default function FinancingBanner() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="py-28 bg-brand-light border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="bg-gradient-to-r from-brand-dark to-brand-charcoal rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div>
            <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-2">
              Sheffield Financial
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              0% Interest for 36 Months
            </h3>
            <p className="text-gray-400 mt-2">
              For qualifying customers. Pre-qualify online in minutes.
            </p>
          </div>
          <Button to="/financing" variant="primary" size="lg" className="shrink-0">
            Pre-Qualify Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
