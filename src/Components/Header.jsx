import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ()=>{

    const [isLoggedIn, setIsLoggedIn] = useState("Login");
    const [menuOpen, setMenuOpen] = useState(false);

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
                    <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
                    <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
                    <li className="cart-item">
                        <Link to="/cart" onClick={() => setMenuOpen(false)}>
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