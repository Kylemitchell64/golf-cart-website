export default function ProductSpecs({ product }) {
  const specs = [
    { label: "Passengers", value: product.passengerCount },
    { label: "Year", value: product.year },
    { label: "Top Speed", value: product.topSpeed },
    { label: "Range", value: product.range },
    { label: "Battery", value: product.batteryType },
    { label: "Color", value: product.color },
    { label: "Condition", value: product.condition },
  ].filter((s) => s.value);

  return (
    <div className="bg-brand-light rounded-2xl p-6">
      <h3 className="font-semibold text-brand-dark mb-4">Specifications</h3>
      <dl className="divide-y divide-gray-200">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="flex items-center justify-between py-3"
          >
            <dt className="text-sm text-brand-muted">{spec.label}</dt>
            <dd className="text-sm font-medium text-brand-dark">
              {spec.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
