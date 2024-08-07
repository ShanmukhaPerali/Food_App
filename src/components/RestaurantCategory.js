// import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    // const [showItems, setShowItems] = useState(0);
    // console.log(data);
    const handleClick = () =>{
        // setShowItems(!showItems);
        // console.log("Clicked");
        setShowIndex();
        showItems = !showItems;

    }

    return(
        <div>
            <div className="w-6/12 bg-gray-50 my-2 mx-auto p-4 shadow-lg ">
                {/* Accordion Header */}
                <div className="flex justify-between cursor-pointer" 
                onClick={handleClick}>
                    <span className="font-bold text-base">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>⬇️</span>
                {/* Accordion Body */}
                </div>
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    );
};

export default RestaurantCategory;