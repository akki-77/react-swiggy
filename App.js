import React from 'react';
import ReactDOM from 'react-dom/client';

import Logo from './resources/images/Logo.png';
import resData from './resources/json-data/res-data.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faYoutube, faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const restSearch = () => {

}

const Star = ({ filled, onClick }) => {
    return (
      <span onClick={onClick} style={{ cursor: 'pointer', color: filled ? 'gold' : 'gray' }}>
        ★
      </span>
    );
  };

const Header = () => {
    return (
        <div className='header'>
            <div>
                <img className='img-logo' src={Logo} alt="Logo" />
            </div>
            <div className='nav-cont'>
                <ul className='nav-list'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li><FontAwesomeIcon icon={faCartShopping} /></li>
                </ul>
            </div>
        </div>
    );
};

const RestCard = (props) => {
    const restaurantData = props.restaurantData.info;
    return (
        <div className='rest-card-cont'>
            {console.log(restaurantData)}
             <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restaurantData.cloudinaryImageId} alt="gigiRigolatto" style={{ width: '350px', height: '250px' }} />
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

const Body = () => {
    return (
        <div className='body'>
            <div className='rest-search'>
                <div className='rest-search-icon'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <form onSubmit={restSearch}>
                    <input
                        className='rest-search-field'
                        type="text"
                        placeholder="Search Reastaurent"
                    />
                </form>
            </div>
            <div className='card-cont'>
                {resData.data.cards[0].card.card.gridElements.infoWithStyle.restaurants.map((restaurant) => (
                    <RestCard key={restaurant?.info?.id} restaurantData={restaurant} />
                ))}
            </div>
        </div>
    );
}

const Footer = () => {
    return (
        <div className='footer'>
            <span>Copyright <FontAwesomeIcon icon={faCopyright} /> 2022 - 2025 | All rights reserved.</span>
            <span>Terms and Conditions</span>
            <span><FontAwesomeIcon icon={faYoutube} size="2x" /></span>
            <span><FontAwesomeIcon icon={faInstagram} size="2x" /></span>
            <span><FontAwesomeIcon icon={faFacebook} size="2x" /></span>
            <span><FontAwesomeIcon icon={faTwitter} size="2x" /></span>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className='app-layout'>
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);




