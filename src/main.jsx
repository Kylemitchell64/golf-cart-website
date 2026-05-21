import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import RentalPage from "./pages/RentalPage";
import PartsServicePage from "./pages/PartsServicePage";
import FinancingPage from "./pages/FinancingPage";
import CustomerCarePage from "./pages/CustomerCarePage";
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="shop/:slug" element={<ProductDetailPage />} />
          <Route path="rentals" element={<RentalPage />} />
          <Route path="parts-service" element={<PartsServicePage />} />
          <Route path="financing" element={<FinancingPage />} />
          <Route path="customer-care" element={<CustomerCarePage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
