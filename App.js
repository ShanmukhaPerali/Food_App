import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Error from "./src/components/Error";
import AboutUs from "./src/components/AboutUs";
import ContactUs from "./src/components/ContactUs";
import RestaurantMenu from "./src/components/RestaurantMenu";

const Grocery = lazy(()=>import("./src/components/Grocery"));

const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            < Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:< Body />,
            },
            {
                path:"/contactUs",
                element:<ContactUs/>
            },
            {
                path:"/aboutus",
                element:<AboutUs />,
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>,
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
            },
        ],
        errorElement:<Error/>,
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={ appRouter }/>);
