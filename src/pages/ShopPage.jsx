import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useFilteredProducts } from "../hooks/useFilteredProducts";
import { fadeUp } from "../hooks/useScrollReveal";
import PageTransition from "../components/layout/PageTransition";
import ProductGrid from "../components/shop/ProductGrid";
import ProductFilters from "../components/shop/ProductFilters";

const sortOptions = [
  { value: "", label: "Featured" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "newest", label: "Newest First" },
];

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const { products, filters, loading, updateFilter, clearFilters, activeFilterCount } =
    useFilteredProducts();

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      updateFilter("category", category);
    }
  }, []);

  return (
    <PageTransition>
      <section className="pt-20 lg:pt-28 pb-24 bg-brand-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-10"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-brand-dark tracking-tight">
              Our Inventory
            </h1>
            <p className="text-brand-muted mt-3 text-lg">
              Browse our selection of new and pre-owned golf carts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
            <aside className="hidden lg:block">
              <div className="sticky top-8">
                <ProductFilters
                  filters={filters}
                  updateFilter={updateFilter}
                  clearFilters={clearFilters}
                  activeFilterCount={activeFilterCount}
                />
              </div>
            </aside>

            <main>
              {/* Count + sort bar */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                <p className="text-sm text-brand-muted font-medium">
                  <span className="text-brand-dark font-semibold">{products.length}</span>{" "}
                  cart{products.length !== 1 ? "s" : ""} found
                  {activeFilterCount > 0 && (
                    <button
                      onClick={clearFilters}
                      className="ml-3 text-brand-accent hover:text-brand-accent-light transition-colors"
                    >
                      Clear filters
                    </button>
                  )}
                </p>
                <div className="flex items-center gap-2">
                  <label className="text-sm text-brand-muted hidden sm:block">
                    Sort:
                  </label>
                  <div className="relative">
                    <select
                      value={filters.sort || ""}
                      onChange={(e) => updateFilter("sort", e.target.value)}
                      className="appearance-none text-sm bg-brand-dark border border-gray-700 rounded-full pl-4 pr-9 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent cursor-pointer"
                    >
                      {sortOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                      <svg className="w-3.5 h-3.5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <ProductGrid products={products} loading={loading} />
            </main>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
