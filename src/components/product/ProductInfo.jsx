import Badge from "../ui/Badge";
import Button from "../ui/Button";

export default function ProductInfo({ product, onInquiry }) {
  const {
    name,
    price,
    compareAtPrice,
    condition,
    status,
    brand,
    description,
  } = product;

  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <Badge variant={condition === "New" ? "new" : "preowned"}>
          {condition}
        </Badge>
        {status === "Sold" ? (
          <Badge variant="sold">Sold</Badge>
        ) : (
          <Badge variant="available">Available</Badge>
        )}
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-brand-dark">{name}</h1>
      <p className="text-brand-muted mt-1">{brand}</p>

      <div className="mt-4 flex items-baseline gap-3">
        <span className="text-4xl font-bold text-brand-dark">
          ${price.toLocaleString()}
        </span>
        {compareAtPrice && (
          <span className="text-lg text-brand-muted line-through">
            ${compareAtPrice.toLocaleString()}
          </span>
        )}
      </div>

      {description && (
        <p className="mt-6 text-brand-muted leading-relaxed">{description}</p>
      )}

      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        {status !== "Sold" && (
          <Button onClick={onInquiry} size="lg" className="flex-1">
            Ask About This Cart
          </Button>
        )}
        <Button href="tel:7062214653" variant="outline" size="lg" className="flex-1">
          Call Us
        </Button>
      </div>
    </div>
  );
}
