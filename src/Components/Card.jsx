import restaurantList from "../Data/res-list";


const Card = (props)=>{
    const { resData } = props;
    const { name, cuisines, starRating, timeToArrive, image } = resData;
    return(
        <div className="card">
            <img 
            className="res-img"
            src={image} 
            alt={name} />
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <h5>{starRating} stars</h5>
            <h5>{timeToArrive}</h5>
        </div>
    )
}

export default Card;