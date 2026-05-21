import { motion } from "framer-motion";
import { useScrollReveal, staggerContainer, fadeUp } from "../../hooks/useScrollReveal";
import SectionHeading from "../ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Tell Us About Your Event",
    description:
      "Fill out the rental quote form with your event details, dates, location, and the number of carts you need.",
  },
  {
    number: "02",
    title: "Get Your Custom Quote",
    description:
      "We'll contact you with pricing, availability, and a rental agreement tailored to your event.",
  },
  {
    number: "03",
    title: "We Deliver & Set Up",
    description:
      "We deliver the carts to your location, walk you through operation, and pick them up when you're done.",
  },
];

export default function RentalSteps() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="How It Works"
          title="Three Simple Steps"
          description="From inquiry to delivery, we make renting a golf cart effortless."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-brand-accent/20 transition-all duration-300 ease-out"
            >
              <span className="text-5xl font-bold text-brand-accent/15">
                {step.number}
              </span>
              <h3 className="text-xl font-bold text-brand-dark mt-2">
                {step.title}
              </h3>
              <p className="text-brand-muted mt-3 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
