import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function FloatingButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-40 flex flex-col gap-3"
    >
      <Link
        to="/financing"
        className="rounded-full px-5 py-2.5 text-sm font-semibold shadow-xl border-2 border-brand-accent text-brand-accent bg-brand-dark/90 backdrop-blur-sm hover:bg-brand-accent hover:text-white transition-all duration-300 text-center whitespace-nowrap"
      >
        Finance Now
      </Link>
      <Link
        to="/contact"
        className="rounded-full px-5 py-2.5 text-sm font-semibold shadow-xl bg-brand-accent text-white hover:bg-brand-accent-light transition-all duration-300 text-center whitespace-nowrap"
      >
        Contact Us
      </Link>
    </motion.div>
  );
}
