import { REST_CARD_IMAGE_URL_PREFIX } from '../utils/constants';

const Star = ({ filled, onClick }) => {
    return (
      <span onClick={onClick} style={{ cursor: 'pointer', color: filled ? 'gold' : 'gray' }}>
        ★
      </span>
    );
  };

const RestCard = (props) => {
    const restaurantData = props.restaurantData.info;
    return (
        <div className='rest-card-cont'>
            {console.log(restaurantData)}
             <img src={REST_CARD_IMAGE_URL_PREFIX + restaurantData.cloudinaryImageId} alt="gigiRigolatto" style={{ width: '350px', height: '250px' }} />
            <div className='rest-card-data'>
                <h3>{restaurantData.name}</h3>
                <h4>{restaurantData.cuisines.join(", ")}</h4>
            </div>
            <p>{restaurantData.costForTwo}</p>
            <div>
                
                {Array.from({length: Math.floor(restaurantData.avgRating) }).map((_, index) => (
                    <Star
                        key={index}
                        filled={Math.floor(restaurantData.avgRating)}
                    />
                ))}
            </div>
        </div>
    );
};

export default RestCard;