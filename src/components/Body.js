import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFiltredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");
  const internetStatus = useInternetStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5061743&lng=80.6480153&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFiltredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (internetStatus === false)
    return <h1>Oops! unable to connect Check ur Internet Connection!!</h1>;

  // console.log("Body rendered");
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body flex flex-wrap">
      <div className="filter flex items-center px-[620px]">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="py-1 px-4 bg-yellow-100 mx-4"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setFiltredRestaurants(filteredRestaurants);
              // console.log(searchText);
            }}
          >
            Search
          </button>
        </div>

        <div>
          <button
            className="bg-orange-200 py-1 px-4 "
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

      </div>
      <div className="res-con flex flex-wrap m-5 justify-between mx-40 px-8 ">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <ResCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
