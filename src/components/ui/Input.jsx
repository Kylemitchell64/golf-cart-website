import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, error, type = "text", className = "", ...props },
  ref
) {
  const isTextarea = type === "textarea";
  const Component = isTextarea ? "textarea" : "input";

  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-brand-dark mb-1.5">
          {label}
          {props.required && <span className="text-brand-red ml-0.5">*</span>}
        </label>
      )}
      <Component
        ref={ref}
        type={isTextarea ? undefined : type}
        rows={isTextarea ? 4 : undefined}
        className={`w-full px-4 py-3 rounded-lg border bg-white text-brand-dark placeholder-brand-muted/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 focus:border-brand-accent ${
          error ? "border-brand-red" : "border-gray-200"
        }`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-brand-red">{error}</p>}
    </div>
  );
});

export default Input;
