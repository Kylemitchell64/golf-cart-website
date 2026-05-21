import { motion } from "framer-motion";
import { useScrollReveal, fadeUp } from "../../hooks/useScrollReveal";

export default function SectionHeading({
  label,
  title,
  description,
  light = false,
  center = true,
}) {
  const { ref, isInView } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp}
      className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-16`}
    >
      {label && (
        <p className="text-brand-accent font-semibold text-xs uppercase tracking-[0.3em] mb-4">
          {label}
        </p>
      )}
      <h2
        className={`text-4xl md:text-5xl font-bold leading-tight tracking-tight ${
          light ? "text-white" : "text-brand-dark"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-gray-300" : "text-brand-muted"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
