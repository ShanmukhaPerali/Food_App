import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {
    // console.log(items);
    return(
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="border-b-2 text-left p-2 m-2 flex justify-between">
                    <div className="w-9/12">
                        <div className="py-3 ">
                            <span className="font-semibold">{item.card.info.name}</span>
                            <span> - ₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                        </div>
                        <p>{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4 ">
                        <div className="absolute">
                            <button className="p-1 mx-7 my-12 bg-white text-sm rounded-md text-green-800">
                                 Add+ 
                            </button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} alt="img" className="w-24 h-20 "/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;