import { Link, useLocation } from "react-router-dom";

const navLinks = [
  {
    label: "Home",
    to: "/",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    label: "Shop",
    to: "/shop",
    icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    label: "Rentals",
    to: "/rentals",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    label: "Parts & Service",
    to: "/parts-service",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    label: "Financing",
    to: "/financing",
    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
  },
  {
    label: "FAQ",
    to: "/faq",
    icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    label: "Contact",
    to: "/contact",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <nav className="group hidden lg:flex fixed left-0 top-0 h-full z-50 flex-col w-16 hover:w-56 transition-[width] duration-300 ease-in-out bg-brand-dark/98 backdrop-blur-md border-r border-white/5 overflow-hidden shadow-xl">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-4 px-4 py-6 min-w-[14rem] shrink-0 hover:opacity-80 transition-opacity"
      >
        <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center shrink-0">
          <span className="text-white font-bold text-sm">G</span>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-150">
          <span className="text-white font-bold text-sm leading-tight block whitespace-nowrap">
            Golf Cart
          </span>
          <span className="text-brand-accent text-[10px] font-semibold uppercase tracking-widest whitespace-nowrap">
            Specialists
          </span>
        </div>
      </Link>

      <div className="mx-4 border-t border-white/10 shrink-0" />

      {/* Nav Items */}
      <div className="flex-1 flex flex-col py-4 gap-0.5 overflow-hidden">
        {navLinks.map((link) => {
          const isActive =
            link.to === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(link.to);
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`relative flex items-center gap-4 px-4 py-3 min-w-[14rem] transition-colors duration-200 ${
                isActive
                  ? "text-brand-accent"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-brand-accent rounded-r-full" />
              )}
              <svg
                className="w-5 h-5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d={link.icon}
                />
              </svg>
              <span className="text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-150">
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>

      <div className="mx-4 border-t border-white/10 shrink-0" />

      {/* Phone */}
      <a
        href="tel:7062214653"
        className="flex items-center gap-4 px-4 py-5 min-w-[14rem] text-gray-400 hover:text-brand-accent transition-colors duration-200 shrink-0"
      >
        <svg
          className="w-5 h-5 shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        <span className="text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-150">
          (706) 221-4653
        </span>
      </a>
    </nav>
  );
}
