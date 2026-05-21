import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-brand-accent text-white hover:bg-brand-accent-light shadow-lg shadow-brand-accent/20",
  secondary:
    "bg-transparent border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white",
  dark: "bg-brand-dark text-white hover:bg-brand-charcoal",
  outline:
    "bg-transparent text-brand-dark border-2 border-brand-dark hover:bg-brand-dark hover:text-white",
};

const sizes = {
  sm: "px-6 py-2.5 text-sm",
  md: "px-10 py-3.5 text-base",
  lg: "px-14 py-5 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 font-semibold rounded-full tracking-wide transition-all duration-300 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
