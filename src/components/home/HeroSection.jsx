import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Local hero image — golf cart themed */}
      <img
        src="/images/hero/Gemini_Generated_Image_rao3rrao3rrao3rr%20%281%29.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105 transition-transform duration-1000"
      />

      {/* Horizontal gradient — left side fully dark for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/85 to-transparent" />
      {/* Vertical gradient — seals top and bottom into the dark canvas */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-brand-accent font-semibold text-sm uppercase tracking-[0.25em] mb-6"
        >
          Columbus, Georgia&apos;s Premier Dealer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight"
        >
          Premium Golf Carts,
          <br />
          <span className="text-brand-accent">Built Your Way</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
        >
          New and custom golf carts, pre-owned inventory, rentals, and expert
          service. Financing available with 0% interest for 36 months.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Button to="/shop" size="lg">
            Browse Inventory
          </Button>
          <Button to="/contact" variant="secondary" size="lg">
            Get a Quote
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-brand-accent rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
