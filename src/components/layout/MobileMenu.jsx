import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function MobileMenu({ links, currentPath, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 lg:hidden"
    >
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-brand-dark shadow-2xl"
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <span className="text-white font-bold text-lg">Menu</span>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={onClose}
              className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                currentPath === link.to
                  ? "text-brand-accent bg-brand-accent/10"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
          <a
            href="tel:7062214653"
            className="flex items-center justify-center gap-2 w-full py-3 bg-brand-accent text-white font-semibold rounded-lg hover:bg-brand-accent-light transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (706) 221-4653
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
