import Card from "./Card";
import restaurantList from "../Data/res-list";

const Body = ()=>{
    return (
        <div className="body">
            <div className="search">
                <input placeholder="Search For Restaurants"></input>
                <button>Search</button>
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