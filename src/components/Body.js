import ResCard from "./ResCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body=() =>{
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);


    return(
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setListOfRestaurants(filteredList);
                }}
                >
                Top Rated Restaurants
                </button>
            </div>
            <div className="res-con">
                {listOfRestaurants.map((restaurant) => (
                    <ResCard key={ restaurant.info.id } resData={ restaurant }/>
                ))}
            </div>
        </div>
    );
};

export default Body;