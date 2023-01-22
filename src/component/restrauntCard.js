import { IMG_CDN_LINK, RestrsuntData } from "../UtilsOrConstant/config";


const RestrauntCard = (props) => {
    return (
      <div className="card">
        <img src={IMG_CDN_LINK + props.restaurant.data.cloudinaryImageId} />
        <h2>{props.restaurant.data.name}</h2>
        <h3> {props.restaurant.data.cuisines.join()}</h3>
        <h4>{props.restaurant.data.avgRating} star</h4>
      </div>
    );
  };

  export default RestrauntCard;