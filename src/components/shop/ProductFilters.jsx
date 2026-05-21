import { brands } from "../../data/products";

const categories = [
  { value: "", label: "All" },
  { value: "new", label: "New" },
  { value: "preowned", label: "Pre-Owned" },
  { value: "parts", label: "Parts" },
];

export default function ProductFilters({
  filters,
  updateFilter,
  clearFilters,
  activeFilterCount,
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-7">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-brand-dark text-base">Filters</h3>
        {activeFilterCount > 0 && (
          <button
            onClick={clearFilters}
            className="text-sm text-brand-accent hover:text-brand-accent-light transition-colors font-medium"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Category chips */}
      <div>
        <p className="text-xs font-semibold text-brand-muted uppercase tracking-widest mb-3">
          Category
        </p>
        <div className="flex flex-wrap gap-2">
          {categories.map((opt) => (
            <button
              key={opt.value}
              onClick={() => updateFilter("category", opt.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                (filters.category || "") === opt.value
                  ? "bg-brand-accent text-white border-brand-accent shadow-sm"
                  : "bg-white text-brand-dark border-gray-200 hover:border-brand-accent hover:text-brand-accent"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Brand */}
      <div>
        <p className="text-xs font-semibold text-brand-muted uppercase tracking-widest mb-3">
          Brand
        </p>
        <div className="relative">
          <select
            value={filters.brand || ""}
            onChange={(e) => updateFilter("brand", e.target.value)}
            className="w-full appearance-none px-4 py-2.5 pr-10 rounded-xl border border-gray-700 text-sm bg-brand-dark text-white focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent cursor-pointer"
          >
            <option value="">All Brands</option>
            {brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Passengers */}
      <div>
        <p className="text-xs font-semibold text-brand-muted uppercase tracking-widest mb-3">
          Passengers
        </p>
        <div className="flex gap-2">
          {["", "2", "4", "6"].map((v) => (
            <button
              key={v}
              onClick={() => updateFilter("passengers", v)}
              className={`flex-1 py-2 rounded-xl text-sm font-medium border transition-all duration-200 ${
                (filters.passengers || "") === v
                  ? "bg-brand-accent text-white border-brand-accent"
                  : "bg-white text-brand-dark border-gray-200 hover:border-brand-accent hover:text-brand-accent"
              }`}
            >
              {v || "All"}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <p className="text-xs font-semibold text-brand-muted uppercase tracking-widest mb-3">
          Price Range
        </p>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={filters.minPrice || ""}
            onChange={(e) => updateFilter("minPrice", e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent"
          />
          <input
            type="number"
            placeholder="Max"
            value={filters.maxPrice || ""}
            onChange={(e) => updateFilter("maxPrice", e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent"
          />
        </div>
      </div>
    </div>
  );
}
