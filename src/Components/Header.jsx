import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ()=>{

    const [isLoggedIn, setIsLoggedIn] = useState("Login");


    return(
        <nav className="nav">
            <div className="logo">
                <Link to="/"><img src={LOGO_URL} alt="FoodieZone Logo" /> </Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/offers">Offers</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li className="cart-item">
                        <Link to="/cart">
                            Cart
                        </Link>
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