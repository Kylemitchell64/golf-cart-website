import { products } from "../data/products";

export async function getProducts(filters = {}) {
  let filtered = [...products];

  if (filters.category) {
    filtered = filtered.filter((p) => p.category === filters.category);
  }
  if (filters.brand) {
    filtered = filtered.filter((p) => p.brand === filters.brand);
  }
  if (filters.color) {
    filtered = filtered.filter((p) => p.color === filters.color);
  }
  if (filters.passengers) {
    filtered = filtered.filter(
      (p) => p.passengerCount === Number(filters.passengers)
    );
  }
  if (filters.minPrice) {
    filtered = filtered.filter((p) => p.price >= Number(filters.minPrice));
  }
  if (filters.maxPrice) {
    filtered = filtered.filter((p) => p.price <= Number(filters.maxPrice));
  }
  if (filters.status) {
    filtered = filtered.filter((p) => p.status === filters.status);
  }

  if (filters.sort === "price_asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (filters.sort === "price_desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (filters.sort === "newest") {
    filtered.sort((a, b) => b.year - a.year);
  }

  return filtered;
}

export async function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) || null;
}

export async function getFeaturedProducts() {
  return products.filter((p) => p.isFeatured);
}

export async function getRelatedProducts(product, limit = 3) {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
}
