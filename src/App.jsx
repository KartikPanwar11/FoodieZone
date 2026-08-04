import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import Card from "./Components/Card";
import Body from "./Components/Body";  
import Footer from "./Components/Footer";


const AppLayout = () =>{
    return (
        <div className="main">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)