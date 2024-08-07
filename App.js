import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Error from "./src/components/Error";
// import AboutUs from "./src/components/AboutUs";
import ContactUs from "./src/components/ContactUs";
import RestaurantMenu from "./src/components/RestaurantMenu";
import UserContext from "./src/utils/UserContext";

const Grocery = lazy(()=>import("./src/components/Grocery"));
const AboutUs = lazy(()=>import("./src/components/AboutUs"));



const AppLayout = () =>{

    const [userName, setUserName] = useState();
    
    //Authentication

    useEffect(()=>{
        const data = {
            name: "ShanmukhaPerali",
        };
        setUserName(data.name);
    },[])


    return(
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div className="app">
            <Header/>
            < Outlet />
        </div>
        </UserContext.Provider>
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
                element:<Suspense fallback={<h2>loading...</h2>}><AboutUs/></Suspense>,
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
