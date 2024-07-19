import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants.js";
import { useState } from "react";
import useInternetStatus from "../utils/useInternetStatus.js";


const Header =()=>{
    const [btnName, setBtnName] = useState("Sign In");
    const internetStatus = useInternetStatus();

    return(
        <div className="flex  bg-yellow-200 my-1 justify-between">
            <div className="logo-container">
                <img 
                    className="logo w-32 p-2 transform: scale-110"
                    src={ LOGO_URL }
                />
            </div>

            <div className="flex items-center transition duration-500 ease-in-out">
                <ul className="flex m-4 p-4 text-xl ">
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
                </ul>
            </div>
        </div>
    );
};

export default Header;