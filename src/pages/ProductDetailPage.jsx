import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getProductBySlug, getRelatedProducts } from "../api/products";
import { fadeUp } from "../hooks/useScrollReveal";
import PageTransition from "../components/layout/PageTransition";
import ImageGallery from "../components/product/ImageGallery";
import ProductInfo from "../components/product/ProductInfo";
import ProductSpecs from "../components/product/ProductSpecs";
import ProductCard from "../components/shop/ProductCard";
import ContactForm from "../components/contact/ContactForm";
import Modal from "../components/ui/Modal";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [showInquiry, setShowInquiry] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    getProductBySlug(slug).then((p) => {
      setProduct(p);
      if (p) getRelatedProducts(p).then(setRelated);
    });
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <p className="text-brand-muted">Loading...</p>
      </div>
    );
  }

  return (
    <PageTransition>
      <section className="pt-28 pb-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-brand-accent transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Inventory
          </Link>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <ImageGallery images={product.images} name={product.name} />
            <div className="space-y-8">
              <ProductInfo
                product={product}
                onInquiry={() => setShowInquiry(true)}
              />
              <ProductSpecs product={product} />
            </div>
          </motion.div>

          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-bold text-brand-dark mb-8">
                Similar Carts
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Modal
        isOpen={showInquiry}
        onClose={() => setShowInquiry(false)}
        title={`Ask About ${product.name}`}
      >
        <ContactForm productName={product.name} />
      </Modal>
    </PageTransition>
  );
}
