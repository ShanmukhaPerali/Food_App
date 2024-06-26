import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body=() =>{
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants,setFiltredRestaurants] = useState([]);

    const [searchText,setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5061743&lng=80.6480153&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
        const json =  await data.json();
        // console.log(json);
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFiltredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // console.log("Body rendered");
    return listOfRestaurants.length===0 ? (<Shimmer/>) 
    :(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" 
                    value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}>

                    </input>
                    <button className="search-btn" onClick={()=>{
                        const filteredRestaurants = listOfRestaurants.filter(
                            (res)=> res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
                        )
                        setFiltredRestaurants(filteredRestaurants);
                        // console.log(searchText);
                    }}>
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setFiltredRestaurants(filteredList);
                }}
                >
                Top Rated Restaurants
                </button>
            </div>
            <div className="res-con">
            {filteredRestaurants.map((restaurant) => (
                    <Link
                        key={ restaurant.info.id }
                        to={"/restaurants/"+restaurant.info.id}>
                    <ResCard resData={ restaurant }/></Link>
                ))}
            </div>
        </div>
    );
};

export default Body;