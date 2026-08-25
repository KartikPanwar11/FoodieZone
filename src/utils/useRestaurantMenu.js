import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useRestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const menuUrl = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9690247&lng=72.8205292&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;

        const response = window.location.hostname === "localhost"
          ? await fetch(`http://localhost:3001/?url=${encodeURIComponent(menuUrl)}`)
          : await fetch(`/api/restaurants?resId=${resId}`);

        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        const text = await response.text();
        if (!text) throw new Error("Empty response from menu API");

        setMenuData(JSON.parse(text));
      } catch (error) {
        console.error("Failed to fetch menu:", error);
      }
    };

    fetchMenu();
  }, [resId]);

  const restaurantInfo = menuData?.data?.cards
    ?.find((card) => card?.card?.card?.info)?.card?.card?.info || {};

  const categories = menuData?.data?.cards
    ?.find((card) => card?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards
    ?.filter((card) => card?.card?.card?.itemCards?.length > 0)
    ?.map((card) => ({
      title: card?.card?.card?.title || "Other",
      items: card?.card?.card?.itemCards?.map((item) => item?.card?.info).filter(Boolean) || [],
    })) || [];

  return { restaurantInfo, categories, isLoading: !menuData };
};

export default useRestaurantMenu;
