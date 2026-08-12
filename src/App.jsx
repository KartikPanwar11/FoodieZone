import React from "react";
import ReactDOM from "react-dom/client"
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
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
            <Outlet/>
            <Footer/>
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
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

    }],
        errorElement: <ErrorPage/>
    },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)