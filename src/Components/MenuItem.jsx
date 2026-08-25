import { CDN_URL } from "../utils/constants";

const formatPrice = (price) => {
  if (!price) return "";
  return "₹" + (price / 100).toFixed(0);
};

const MenuItem = ({ item, index }) => (
  <div key={`${item.id}-${index}`} className="menu-item">
    <div className="menu-item-details">
      <div className="menu-item-badges">
        {item.itemAttribute?.vegClassifier && (
          <span className={`veg-badge ${item.itemAttribute.vegClassifier === "VEG" ? "veg" : "nonveg"}`}>
            <span className="veg-dot"></span>
          </span>
        )}
        {item.isBestseller && <span className="bestseller-tag">Bestseller</span>}
      </div>
      <h4 className="menu-item-name">{item.name}</h4>
      <p className="menu-item-price">
        {formatPrice(item.finalPrice || item.defaultPrice || item.price)}
      </p>
      {item.ratings?.aggregatedRating?.rating && (
        <div className="menu-item-rating">
          <span className="star-icon small">★</span>
          <span>{item.ratings.aggregatedRating.rating}</span>
          {item.ratings.aggregatedRating.ratingCountV2 && (
            <span className="item-rating-count">
              ({item.ratings.aggregatedRating.ratingCountV2})
            </span>
          )}
        </div>
      )}
      {item.description && (
        <p className="menu-item-desc">
          {item.description.length > 120
            ? item.description.slice(0, 120) + "…"
            : item.description}
        </p>
      )}
    </div>
    {item.imageId && (
      <div className="menu-item-img-wrap">
        <img className="menu-item-img" src={CDN_URL + item.imageId} alt={item.name} />
      </div>
    )}
  </div>
);

export default MenuItem;
