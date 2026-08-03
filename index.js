import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Components/header";
import Card from "./Components/card";
import Body from "./Components/body";
import Footer from "./Components/footer";


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