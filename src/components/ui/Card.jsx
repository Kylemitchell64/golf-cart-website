import { motion } from "framer-motion";

export default function Card({ children, className = "", hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.2 }}
      className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
