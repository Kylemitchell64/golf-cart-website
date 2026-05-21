import { Link } from "react-router-dom";
import Badge from "../ui/Badge";

export default function ProductCard({ product }) {
  const {
    slug,
    name,
    price,
    compareAtPrice,
    condition,
    status,
    color,
    passengerCount,
    images,
  } = product;

  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
      <Link to={`/shop/${slug}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <img
            src={`${images[0]}/v1/fill/w_400,h_300,al_c,q_60/image.jpg`}
            alt={name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            {status === "Sold" ? (
              <Badge variant="sold">Sold</Badge>
            ) : (
              <Badge variant={condition === "New" ? "new" : "preowned"}>
                {condition}
              </Badge>
            )}
            {compareAtPrice && status !== "Sold" && (
              <Badge variant="deal">Great Deal</Badge>
            )}
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-semibold text-brand-dark text-lg leading-snug group-hover:text-brand-accent transition-colors">
            {name}
          </h3>
          <p className="text-sm text-brand-muted mt-1">
            {color} &middot; {passengerCount} Passenger
          </p>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-brand-dark">
              ${price.toLocaleString()}
            </span>
            {compareAtPrice && (
              <span className="text-sm text-brand-muted line-through">
                ${compareAtPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
