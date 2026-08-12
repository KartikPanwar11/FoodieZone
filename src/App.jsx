import React from "react";
import ReactDOM from "react-dom/client"
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Offers from "./Components/Offer";
import Card from "./Components/Card";
import Body from "./Components/Body";  
import Footer from "./Components/Footer";
import ErrorPage from "./Components/Error";


const AppLayout = () =>{
    return (
        <div className="main">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path:"/contact",
        element:<Contact/>
    },
    {
        path:"/offers",
        element:<Offers/>

    }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)