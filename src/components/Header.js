import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants.js";
import { useState, useContext } from "react";
import useInternetStatus from "../utils/useInternetStatus.js";
import UserContext from "../utils/UserContext.js";


const Header =()=>{
    const [btnName, setBtnName] = useState("Sign In");
    const internetStatus = useInternetStatus();
    const { loggedInUser } = useContext(UserContext);
    console.log(loggedInUser);
    

    return(
        <div className="flex  bg-yellow-200 my-1 justify-between h-20">
            <div className="logo-container m-0">
                <img 
                    className="logo w-24 p-2 transform: scale-110"
                    src={ LOGO_URL }
                />
            </div>

            <div className="flex items-center transition duration-500 ease-in-out">
                <ul className="flex m-4 p-4 text-base ">
                    <li className="px-3">Internet Status: {internetStatus?"🟢":"🔴" }</li>
                    <li className="px-3 hover:font-bold">
                        <Link to="/">Home</Link></li>
                    <li className="px-3 hover:font-bold"><Link to="/aboutus">About us</Link></li>
                    <li className="px-3 hover:font-bold"><Link to="/contactus">Contact us</Link></li>
                    <li className="px-3 hover:font-bold"><Link to ="/Grocery">Grocery</Link></li>
                    <li className="px-3 hover:font-bold">Cart</li>
                    
                    <button className="Login px-3 hover:font-bold" onClick={()=>{
                        btnName==="Log In" || btnName==="Sign In" ?setBtnName("Log Out"):setBtnName("Log In");
                    }}>{btnName}</button>

                    <li className="font-bold italic hover:text-sky-600">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;