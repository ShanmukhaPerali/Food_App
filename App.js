import React from "react";
import ReactDOM from "react-dom/client";


const Header =()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img 
                    className="logo"
                    src="https://cdn.dribbble.com/users/1191192/screenshots/4250680/foodie_faster.jpg"
                />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const ResCard = () => {
    return(
        <div className="rescard-con">
            <img className="img-con"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT--eiYxnqvQSZWIpV8reQix67vOzvsvL_R9A&s"
            />
            <h3>Rusted Spoon</h3>
            <h4>North,South Indian</h4>
            <h4>4.3 stars</h4><h4>48 Min</h4>
        </div>
    );
};

const Body=() =>{
    return(
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-con">
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
            </div>
        </div>
    );
};


const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);