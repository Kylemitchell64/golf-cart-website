import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getFeaturedProducts } from "../../api/products";
import { useScrollReveal, staggerContainer, fadeUp } from "../../hooks/useScrollReveal";
import SectionHeading from "../ui/SectionHeading";
import ProductCard from "../shop/ProductCard";

export default function FeaturedCarts() {
  const [featured, setFeatured] = useState([]);
  const { ref, isInView } = useScrollReveal();

  useEffect(() => {
    getFeaturedProducts().then(setFeatured);
  }, []);

  return (
    <section className="py-32 bg-brand-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          label="Featured Inventory"
          title="Handpicked for You"
          description="Our most popular carts, ready for immediate delivery."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featured.map((product) => (
            <motion.div key={product.id} variants={fadeUp}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
