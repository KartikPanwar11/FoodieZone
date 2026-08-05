import Card from "./Card";
import restaurantList from "../Data/res-list";

const Body = ()=>{

    let sortByRating = () => {
        const filteredRestaurants = restaurantList.filter((res) => res.starRating >= 4.5);
        console.log(filteredRestaurants);
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
                {restaurantList.map((restaurant) => (
                    <Card key={restaurant.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;