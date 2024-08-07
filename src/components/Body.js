import ResCard from "./ResCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import UserContext from "../utils/UserContext";

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

  const {loggedInUser, setUserName} = useContext(UserContext);

  // console.log("Body rendered");
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body flex flex-wrap">
      <div className="filter flex items-center px-60">
        <div className="search m-1 p-2">
          <input
            type="text"
            className="border border-solid border-black text-sm"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="py-0.5 px-4 bg-yellow-100 mx-2 text-sm"
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
            className="bg-orange-200 py-0.5 px-2 text-sm"
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

        <div className="m-1 p-2">
            <label>UserName: </label>
            <input className="border border-black p-2"
              value={loggedInUser}
              onChange={(e)=> setUserName(e.target.value)}
            ></input>

        </div>

      </div>
      <div className="res-con flex flex-wrap m-5 justify-between mx-20 px-5 ">
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
