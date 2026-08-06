import Card from "./Card";
import restaurantList from "../Data/res-list";
import { mapRestaurantData } from "../utils/helper";
import { useState, useEffect } from "react";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        const restaurants =
            json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            
        if (restaurants) {
            setListOfRestaurants(mapRestaurantData(restaurants));
        }
    };

    const sortByRating = () => {
        const sortedList = listOfRestaurants.filter((res) => res.avgRating >= 4.2);
        setListOfRestaurants(sortedList);
    };

    return (
        <div className="body">
            <div className="search">
                <input placeholder="Search For Restaurants"></input>
                <div className="search-actions">
                    <button type="button">Search</button>
                    <button type="button" 
                    className="sort-btn" 
                    onClick={sortByRating}
                    >Top Rated</button>
                </div>
            </div>
            <div className="res-card">
                {listOfRestaurants.map((res) => (
                    <Card key={res.id} resData={res} />
                ))}
            </div>
        </div>
    )
};
export default Body;