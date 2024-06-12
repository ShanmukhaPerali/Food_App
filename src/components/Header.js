import { LOGO_URL } from "../utils/constants.js";
import { useState } from "react";


const Header =()=>{
    const [btnName, setBtnName] = useState("Sign In");

    return(
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo"
                    src={ LOGO_URL }
                />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    
                    <button className="Login" onClick={()=>{
                        btnName==="Log In" || btnName==="Sign In" ?setBtnName("Log Out"):setBtnName("Log In");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;