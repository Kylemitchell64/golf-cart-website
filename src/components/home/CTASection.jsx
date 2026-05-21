import { motion } from "framer-motion";
import { useScrollReveal, fadeUp } from "../../hooks/useScrollReveal";
import Button from "../ui/Button";

export default function CTASection() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="py-32 bg-brand-dark text-white border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Ready to Ride?
          </p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Visit Our Showroom Today
          </h2>
          <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto">
            5900 Coca Cola Blvd., Suite A, Columbus, GA 31909
            <br />
            Mon – Fri: 10:00 AM – 6:00 PM
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="tel:7062214653" size="lg">
              Call (706) 221-4653
            </Button>
            <Button to="/contact" variant="secondary" size="lg">
              Send a Message
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
