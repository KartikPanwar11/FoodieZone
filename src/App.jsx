import ReactDOM from "react-dom/client";
import {useState,useEffect} from "react";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Offers from "./Components/Offer";
import Body from "./Components/Body";  
import RestaurantMenu from "./Components/RestaurantMenu";
import Footer from "./Components/Footer";
import ErrorPage from "./Components/Error";
import UserContext from "./utils/UserContext";


const AppLayout = () =>{

    const [userName,setUserName] = useState();

    useEffect(()=>{
        const data = {
            name:"Kartik",
        };
        setUserName(data.name)
    },[])


    return (
        <UserContext.Provider value={{loggedInUser:userName}}>
            <div className="main">
                <Header/>
                <Outlet/>
                <Footer/>
            </div>
        </UserContext.Provider>
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

    },
    {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>
    },
],
        errorElement: <ErrorPage/>
    },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)