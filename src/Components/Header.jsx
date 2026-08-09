import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = ()=>{

    const [isLoggedIn, setIsLoggedIn] = useState("Login");


    return(
        <nav className="nav">
            <div className="logo">
                <a href="/"><img src={LOGO_URL} alt="FoodieZone Logo" /> </a>
            </div>
            <div className="nav-items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/offers">Offers</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li className="cart-item">
                        <a href="/cart">
                            Cart
                        </a>
                    </li>
                    <li><button
                        onClick={()=>{
                            isLoggedIn === "Login" ? setIsLoggedIn("Logout") : setIsLoggedIn("Login");
                        }}
                        >
                        {isLoggedIn}
                        </button></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header