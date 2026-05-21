const info = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Address",
    value: "5900 Coca Cola Blvd.\nSuite A, Columbus, GA 31909",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "(706) 221-4653",
    href: "tel:7062214653",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Hours",
    value: "Mon – Fri: 10:00 AM – 6:00 PM\nSat – Sun: Closed",
  },
];

export default function BusinessInfo() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-6">
      <h3 className="font-semibold text-brand-dark text-lg">Get in Touch</h3>
      {info.map((item) => (
        <div key={item.label} className="flex gap-4">
          <div className="text-brand-accent shrink-0 mt-0.5">{item.icon}</div>
          <div>
            <p className="text-sm font-medium text-brand-dark">{item.label}</p>
            {item.href ? (
              <a
                href={item.href}
                className="text-sm text-brand-muted hover:text-brand-accent transition-colors whitespace-pre-line"
              >
                {item.value}
              </a>
            ) : (
              <p className="text-sm text-brand-muted whitespace-pre-line">
                {item.value}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
