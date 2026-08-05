import Card from "./Card";
import restaurantList from "../Data/res-list";
import {useState} from "react";

const Body = ()=>{
    
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList); 
    
    let sortByRating = () => {
        const sortedList = restaurantList.filter((res) => res.starRating >= 4.5);
        setListOfRestaurants(sortedList);
        console.log(sortedList);
    }


    return (
        <div className="body">
            <div className="search">
                <input placeholder="Search For Restaurants"></input>
                <div className="search-actions">
                    <button type="button">Search</button>
                    <button type="button" 
                    className="sort-btn" 
                    onClick={sortByRating}
                    >Sort</button>
                </div>
            </div>
            <div className="res-card">
                {listOfRestaurants.map((restaurant) => (
                    <Card key={restaurant.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;