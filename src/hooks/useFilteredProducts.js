import { useState, useEffect, useMemo } from "react";
import { getProducts } from "../api/products";

export function useFilteredProducts() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    getProducts(filters).then((data) => {
      if (!cancelled) {
        setProducts(data);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [filters]);

  const updateFilter = (key, value) => {
    setFilters((prev) => {
      if (!value) {
        const next = { ...prev };
        delete next[key];
        return next;
      }
      return { ...prev, [key]: value };
    });
  };

  const clearFilters = () => setFilters({});

  const activeFilterCount = Object.keys(filters).length;

  return { products, filters, loading, updateFilter, clearFilters, activeFilterCount };
}
