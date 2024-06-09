import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
    const {resData} = props;
    return(
        <div className="rescard-con">
            <div className="img-div-con">
              <img className="img-con"   src={ CDN_URL  +  resData.info.cloudinaryImageId }
              />
            </div>
            <div className="res-details-con">
              <h3 className="resname">{resData.info.name}</h3>
              <h4 className="ratingTime"><span>{resData.info.avgRating}stars</span> . {resData.info.sla.deliveryTime } Mins</h4>
              <h4 className="resname1">{resData.info.cuisines.join(', ')}</h4>
              <h4 className="offerDetail">{ resData.info.costForTwo }</h4>
            </div>
        </div>
    );
};

export default ResCard;