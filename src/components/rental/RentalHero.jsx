import { motion } from "framer-motion";
import { fadeUp } from "../../hooks/useScrollReveal";

export default function RentalHero() {
  return (
    <section className="relative py-32 bg-brand-dark text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://picsum.photos/seed/golfrent/1920/1080')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 to-brand-dark" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Golf Cart Rentals
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Rent for Any Occasion
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Weddings, festivals, corporate events, homecoming, churches, and
            more. Daily and weekend rates with delivery and pick-up included.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
