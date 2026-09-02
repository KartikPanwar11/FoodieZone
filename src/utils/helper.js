export const mapRestaurantData = (restaurants) => {
    return restaurants.map((restaurant) => {
        const { id, name, cuisines, cloudinaryImageId, avgRating, sla } = restaurant.info;

        return {
            id,
            name,
            cuisines: Array.isArray(cuisines) ? cuisines.join(", ") : cuisines,
            cloudinaryImageId,
            deliveryTime: sla?.deliveryTime,
            avgRating,
            promoted: Boolean(restaurant?.promoted ?? restaurant?.info?.promoted ?? false),
        };
    });
};
