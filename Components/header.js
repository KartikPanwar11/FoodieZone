const Header = ()=>{
    return(
        <nav className="nav">
            <div className="logo">
                <a href="/"><img src="https://res.cloudinary.com/de8ejendd/image/upload/v1785741262/gemini-svg_3_vqzehx.svg" alt="FoodieZone Logo" /> </a>
            </div>
            <div className="nav-items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/offers">Offers</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li className="cart-item">
                        <a href="/cart">
                            Cart <span className="cart-badge">0</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header