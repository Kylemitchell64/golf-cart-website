import { motion } from "framer-motion";
import { useScrollReveal, fadeUp } from "../../hooks/useScrollReveal";

export default function DeliveryPromo() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="py-32 bg-brand-dark text-white overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Delivery & Pick-Up
            </p>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Free Shipping
              <br />
              <span className="text-brand-accent">Within 150 Miles</span>
            </h2>
            <p className="mt-6 text-gray-400 text-lg max-w-md">
              We deliver your new cart right to your door. Beyond 150 miles,
              delivery is just $1 per mile. Pick-up service also available for
              maintenance and repairs.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "150", label: "Free Miles", suffix: "mi" },
              { value: "$1", label: "Per Mile After", suffix: "/mi" },
              { value: "0%", label: "Interest Rate", suffix: "" },
              { value: "36", label: "Month Terms", suffix: "mo" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 rounded-2xl p-6 text-center border border-white/10"
              >
                <p className="text-3xl md:text-4xl font-bold text-brand-accent">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
