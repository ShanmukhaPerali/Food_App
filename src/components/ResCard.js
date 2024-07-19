import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
    const {resData} = props;
    return(
        <div className="rescard-con relative h-[260px] w-[305px] rounded-lg mx-1 my-5 text-left hover:cursor-pointer hover:scale-95">
            <div className="img-div-con h-[68%] rounded-lg ">
              <img className="img-con w-full h-full object-cover rounded-lg "   
                src={ CDN_URL  +  resData.info.cloudinaryImageId } 
              />
              
            </div>
            <div className="res-details-con no-underline text-inherit h-[30%]">
              <h3 className="resname text-2xl font-bold truncate overflow-hidden">{resData.info.name}</h3>
              <h4 className="ratingTime text-xl font-semibold"><span>{resData.info.avgRating}stars</span> . {resData.info.sla.deliveryTime } Mins</h4>
              <h4 className="resname1 text-xl truncate overflow-hidden">{resData.info.cuisines.join(', ')}</h4>
              <h4 className="offerDetail text-left absolute top-[52%] text-4xl font-bold text-white bg-black bg-opacity-60">{ resData.info.costForTwo }</h4>
            </div>
        </div>
    );
};

export default ResCard;