import React from "react";
import ReactDOM from "react-dom/client"


const Header = ()=>{
    return(
        <nav className="nav">
            <div className="logo">
                <img src="https://res.cloudinary.com/de8ejendd/image/upload/v1785741262/gemini-svg_3_vqzehx.svg" alt="FoodieZone Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Offers</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </nav>
    )
}

const Body = ()=>{
    return (
        <div className="body">
            <div className="search">
                
            </div>
            <div className="res-card">
                
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return (
        <div className="main">
            <Header/>
            {/* //body
            //footer */}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)