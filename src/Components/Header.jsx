import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = ()=>{

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const {loggedInUser} = useContext(UserContext);

    //selector to update the cart number and subscribing to the store using this hook
    const cartItems = useSelector(
        (store)=>store.cart.items
    )


    
    return(
        <nav className="nav">
            <div className="logo">
                <Link to="/" onClick={() => setMenuOpen(false)}><img src={LOGO_URL} alt="FoodieZone Logo" /> </Link>
            </div>
            <button
                className="nav-hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                {menuOpen ? "✕" : "☰"}
            </button>
            <div className={`nav-items ${menuOpen ? "nav-open" : ""}`}>
                <ul>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/offers" onClick={() => setMenuOpen(false)}>Offers</Link></li>
                    <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                    <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                    <li className="cart-item">
                        <Link to="/cart" onClick={() => setMenuOpen(false)} aria-label="Cart, 0 items">
                            🛒 ({cartItems.length})
                        </Link>
                    </li>
                    <li><button
                        onClick={()=>{
                            setIsLoggedIn(!isLoggedIn);
                        }}
                        >
                        {isLoggedIn ? `Hi, ${loggedInUser}` : "Login"}
                        </button></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header