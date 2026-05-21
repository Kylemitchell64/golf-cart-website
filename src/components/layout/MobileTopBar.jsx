import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Rentals", to: "/rentals" },
  { label: "Parts & Service", to: "/parts-service" },
  { label: "Financing", to: "/financing" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export default function MobileTopBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 h-14 bg-brand-dark/95 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">G</span>
          </div>
          <div>
            <span className="text-white font-bold text-sm leading-tight block">
              Golf Cart
            </span>
            <span className="text-brand-accent text-[10px] font-semibold uppercase tracking-widest">
              Specialists
            </span>
          </div>
        </Link>
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2 text-white hover:text-brand-accent transition-colors"
          aria-label="Open menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu
            links={navLinks}
            currentPath={location.pathname}
            onClose={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
