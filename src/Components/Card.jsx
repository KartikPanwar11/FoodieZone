import { CDN_URL } from "../utils/constants";

const Card = (props) => {
    const { resData } = props;
    const { name, cuisines, cloudinaryImageId, deliveryTime, avgRating } = resData;

    return(
        <div className="card">
            <img 
            className="res-img"
            src={CDN_URL + cloudinaryImageId} 
            alt={name} />
            <h3>{name}</h3>
            <p>{Array.isArray(cuisines) ? cuisines.join(", ") : cuisines}</p>
            <h5>{avgRating} stars</h5>
            <h5>{deliveryTime} mins</h5>
        </div>
    )
}

export default Card;