import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuItem from "./MenuItem";

const RestaurantMenu = () => {
  const [expandedCategories, setExpandedCategories] = useState({ 0: true });
  const { restaurantInfo, categories, isLoading } = useRestaurantMenu();

  const toggleCategory = (index) => {
    setExpandedCategories((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  if (isLoading) {
    return (
      <div className="menu-page">
        <div className="menu-header-shimmer">
          <div className="shimmer-block shimmer-title"></div>
          <div className="shimmer-block shimmer-subtitle"></div>
          <div className="shimmer-block shimmer-meta"></div>
        </div>
        <div className="menu-items-shimmer">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="shimmer-item-card"></div>
          ))}
        </div>
      </div>
    );
  }

  const {
    name, cuisines, cloudinaryImageId, avgRatingString,
    totalRatingsString, costForTwoMessage, areaName, sla, isOpen,
  } = restaurantInfo;

  return (
    <div className="menu-page">
      {/* Restaurant Header */}
      <div className="menu-header">
        <div className="menu-header-info">
          <h1 className="menu-res-name">{name || "Restaurant"}</h1>
          <p className="menu-res-cuisines">
            {Array.isArray(cuisines) ? cuisines.join(", ") : cuisines}
          </p>
          <p className="menu-res-area">{areaName}</p>

          <div className="menu-res-meta">
            {avgRatingString && (
              <span className="menu-badge menu-badge-rating">
                <span className="star-icon">★</span> {avgRatingString}
                {totalRatingsString && (
                  <span className="rating-count"> ({totalRatingsString})</span>
                )}
              </span>
            )}
            {sla?.deliveryTime && (
              <span className="menu-badge">{sla.deliveryTime} mins</span>
            )}
            {costForTwoMessage && (
              <span className="menu-badge">{costForTwoMessage}</span>
            )}
          </div>

          {isOpen !== undefined && (
            <span className={`menu-open-status ${isOpen ? "open" : "closed"}`}>
              <span className="status-dot"></span>
              {isOpen ? "Open now" : "Closed"}
            </span>
          )}
        </div>

        {cloudinaryImageId && (
          <div className="menu-header-img-wrap">
            <img className="menu-header-img" src={CDN_URL + cloudinaryImageId} alt={name} />
          </div>
        )}
      </div>

      {/* Menu Categories */}
      <div className="menu-section">
        <h2 className="menu-section-title">Menu</h2>
        <div className="menu-categories">
          {categories.length > 0 ? (
            categories.map((category, catIndex) => (
              <div key={catIndex} className="menu-category">
                <button className="menu-category-header" onClick={() => toggleCategory(catIndex)}>
                  <span>
                    {category.title}
                    <span className="menu-category-count"> ({category.items.length})</span>
                  </span>
                  <span className={`menu-chevron ${expandedCategories[catIndex] ? "expanded" : ""}`}>‹</span>
                </button>

                {expandedCategories[catIndex] && (
                  <div className="menu-items-list">
                    {category.items.map((item, i) => (
                      <MenuItem key={`${item.id}-${i}`} item={item} index={i} />
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="menu-empty">Menu is currently unavailable.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;