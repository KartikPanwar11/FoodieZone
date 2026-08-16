import { useEffect } from "react";

const RestaurantMenu = () => {

    useEffect (()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async ()=>{
        {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9690247&lng=72.8205292&restaurantId=952722&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        console.log(json);
        }
    };



  return (
    <div className="res-menu">
      <h1>Restaurant Name</h1>
      <h2>Menu</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      
    </div>
  );
};

export default RestaurantMenu;