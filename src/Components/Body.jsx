import Card from "./Card";
import restaurantList from "../Data/res-list";
import { mapRestaurantData } from "../utils/helper";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";



const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const SWIGGY_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const CORS_PROXY = "http://localhost:3001/?url=";

    const parseSwiggyResponse = (json) => {
        const cards = json?.data?.cards || [];
        const allRestaurants = [];
        const seenIds = new Set();

        for (const card of cards) {
            const restaurants = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            if (restaurants && Array.isArray(restaurants)) {
                for (const res of restaurants) {
                    const id = res?.info?.id;
                    if (id && !seenIds.has(id)) {
                        seenIds.add(id);
                        allRestaurants.push(res);
                    }
                }
            }
        }

        return allRestaurants.length > 0 ? allRestaurants : null;
    };

    const fetchData = async () => {
        try {
            let restaurants = null;

            if (window.location.hostname !== "localhost") {
                // Production (Vercel): use serverless API route — no CORS issues
                const res = await fetch("/api/restaurants");
                if (res.ok) {
                    const json = await res.json();
                    restaurants = parseSwiggyResponse(json);
                }
            }

            if (!restaurants) {
                // Localhost dev: Parcel can't run serverless functions,
                // so use a CORS proxy to reach Swiggy directly
                const res = await fetch(CORS_PROXY + encodeURIComponent(SWIGGY_URL));
                if (res.ok) {
                    const json = await res.json();
                    restaurants = parseSwiggyResponse(json);
                }
            }

            if (restaurants && restaurants.length > 0) {
                const mapped = mapRestaurantData(restaurants);
                setAllRestaurants(mapped);
                setListOfRestaurants(mapped);
                setIsLoading(false);
                return;
            }

            throw new Error("No restaurants found in response");
        } catch (err) {
            console.warn("Live fetch failed, using fallback data:", err.message);
            // Last resort: static fallback data
            setAllRestaurants(restaurantList);
            setListOfRestaurants(restaurantList);
            setIsLoading(false);
        }
    };

    const sortByRating = () => {
        const sortedList = allRestaurants.filter((res) => res.avgRating >= 4.2);
        setListOfRestaurants(sortedList);
    };
    
    // Use isLoading state — not list length — to control Shimmer
    if (isLoading) return <Shimmer />;

    return (
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
                    <Link key={res.id} to={"/restaurant/" + res.id} className="card-link">
                        <Card resData={res} />
                    </Link>
                ))}
            </div>
        </div>
    )
};
export default Body;