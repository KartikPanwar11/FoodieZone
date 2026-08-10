import Card from "./Card";
import restaurantList from "../Data/res-list";
import { mapRestaurantData } from "../utils/helper";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(
                "https://corsproxy.io/?url=https://swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );

            const json = await data.json();
            const restaurants =
                json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

            if (restaurants) {
                const mappedRestaurants = mapRestaurantData(restaurants);
                setAllRestaurants(mappedRestaurants);
                setListOfRestaurants(mappedRestaurants);
            } else {
                setAllRestaurants(restaurantList);
                setListOfRestaurants(restaurantList);
            }
        } catch (error) {
            setAllRestaurants(restaurantList);
            setListOfRestaurants(restaurantList);
        } finally {
            setIsLoading(false);
        }
    };

    const sortByRating = () => {
        const sortedList = allRestaurants.filter((res) => res.avgRating >= 4.2);
        setListOfRestaurants(sortedList);
    };


    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="search">

                <input placeholder="Search For Restaurants" value={searchText} 
                onChange={(e)=>{setSearchText(e.target.value)}}></input>
                
                <div className="search-actions">
{/* Search button  */}
                    <button type="button"
                    onClick={() => {
                        const query = searchText.trim().toLowerCase();
                        const filteredRes = query
                            ? allRestaurants.filter((res) =>
                                res?.name?.toLowerCase().includes(query)
                            )
                            : allRestaurants;
                        setListOfRestaurants(filteredRes);}}>
                    Search
                    </button>
{/* Sort button */}
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