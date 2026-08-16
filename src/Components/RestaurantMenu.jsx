import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({});
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const menuUrl = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9690247&lng=72.8205292&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;

      const response = window.location.hostname === "localhost"
        ? await fetch(`http://localhost:3001/?url=${encodeURIComponent(menuUrl)}`)
        : await fetch(`/api/restaurants?resId=${resId}`);

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const text = await response.text();
      if (!text) {
        throw new Error("Empty response from menu API");
      }

      const json = JSON.parse(text);
      setMenuData(json);

      // Auto-expand first category with items
      const categories = getCategories(json);
      if (categories.length > 0) {
        setExpandedCategories({ 0: true });
      }
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };

  const getCategories = (data) => {
    return data?.data?.cards
      ?.find((card) => card?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.filter((card) => card?.card?.card?.itemCards?.length > 0)
      ?.map((card) => ({
        title: card?.card?.card?.title || "Other",
        items: card?.card?.card?.itemCards?.map((item) => item?.card?.info).filter(Boolean) || [],
      })) || [];
  };

  const toggleCategory = (index) => {
    setExpandedCategories((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const formatPrice = (price) => {
    if (!price) return "";
    return "₹" + (price / 100).toFixed(0);
  };

  // Loading state — shimmer cards
  if (!menuData) {
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

  const restaurantInfo = menuData?.data?.cards?.find((card) => card?.card?.card?.info)?.card?.card?.info;
  const categories = getCategories(menuData);

  const {
    name, cuisines, cloudinaryImageId, avgRatingString,
    totalRatingsString, costForTwoMessage, areaName, sla,
    isOpen,
  } = restaurantInfo || {};

  const deliveryTime = sla?.deliveryTime;

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
            {deliveryTime && (
              <span className="menu-badge">
                {deliveryTime} mins
              </span>
            )}
            {costForTwoMessage && (
              <span className="menu-badge">
                {costForTwoMessage}
              </span>
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
            <img
              className="menu-header-img"
              src={CDN_URL + cloudinaryImageId}
              alt={name}
            />
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
                <button
                  className="menu-category-header"
                  onClick={() => toggleCategory(catIndex)}
                >
                  <span>
                    {category.title}
                    <span className="menu-category-count"> ({category.items.length})</span>
                  </span>
                  <span className={`menu-chevron ${expandedCategories[catIndex] ? "expanded" : ""}`}>
                    ‹
                  </span>
                </button>

                {expandedCategories[catIndex] && (
                  <div className="menu-items-list">
                    {category.items.map((item, itemIndex) => (
                      <div key={`${item.id}-${itemIndex}`} className="menu-item">
                        <div className="menu-item-details">
                          <div className="menu-item-badges">
                            {item.itemAttribute?.vegClassifier && (
                              <span className={`veg-badge ${item.itemAttribute.vegClassifier === "VEG" ? "veg" : "nonveg"}`}>
                                <span className="veg-dot"></span>
                              </span>
                            )}
                            {item.isBestseller && (
                              <span className="bestseller-tag">Bestseller</span>
                            )}
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
                            <img
                              className="menu-item-img"
                              src={CDN_URL + item.imageId}
                              alt={item.name}
                            />
                          </div>
                        )}
                      </div>
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