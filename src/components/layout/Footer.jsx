import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Shop New Carts", to: "/shop?category=new" },
  { label: "Pre-Owned Carts", to: "/shop?category=preowned" },
  { label: "Rentals", to: "/rentals" },
  { label: "Parts & Service", to: "/parts-service" },
  { label: "Financing", to: "/financing" },
];

const supportLinks = [
  { label: "Contact Us", to: "/contact" },
  { label: "FAQ", to: "/faq" },
  { label: "Customer Care", to: "/customer-care" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg leading-tight block">
                  Golf Cart
                </span>
                <span className="text-brand-accent text-xs font-semibold uppercase tracking-widest">
                  Specialists
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Columbus, Georgia&apos;s premier destination for new and pre-owned
              golf carts, rentals, parts, and expert service.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm hover:text-brand-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Support
            </h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm hover:text-brand-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Visit Us
            </h3>
            <div className="space-y-3 text-sm">
              <p>
                5900 Coca Cola Blvd.
                <br />
                Suite A, Columbus, GA 31909
              </p>
              <p>
                <a
                  href="tel:7062214653"
                  className="hover:text-brand-accent transition-colors"
                >
                  (706) 221-4653
                </a>
              </p>
              <p>Mon – Fri: 10:00 AM – 6:00 PM</p>
              <a
                href="https://www.facebook.com/GolfCartSpecialists"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-brand-accent transition-colors mt-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Golf Cart Specialists. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
