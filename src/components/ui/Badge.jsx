const styles = {
  available: "bg-brand-green/10 text-brand-green border-brand-green/20",
  sold: "bg-brand-red/10 text-brand-red border-brand-red/20",
  new: "bg-brand-accent/10 text-brand-accent border-brand-accent/20",
  preowned: "bg-brand-muted/10 text-brand-muted border-brand-muted/20",
  deal: "bg-brand-red text-white border-brand-red",
};

export default function Badge({ variant = "available", children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border ${styles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
