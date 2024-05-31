import React from 'react';
import ReactDOM from 'react-dom/client';

import gigiRigolatto from './resources/images/Gigi_Rigolatto.png';

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
                <img className='img-logo' src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwMzMtYS0xNC1hXzIta3N5NXNveGguanBn.jpg" alt="Logo" />
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

const Body = () => {
    return (
        <div className='body'>
            <div className='rest-search'>
                <form onSubmit={restSearch}>
                    <div className='rest-search-icon'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                    <input
                        className='rest-search-field'
                        type="text"
                        placeholder="Search Reastaurent"
                    />
                </form>
            </div>
            <div className='card-cont'>
                <div className='rest-card-cont'>
                    <img src={gigiRigolatto} alt="gigiRigolatto" style={{ width: '350px', height: '250px' }} />
                    <div className='rest-card-data'>
                        <div>
                            <h3>Gigi Rigolatto</h3>
                            <h4>Italian American </h4>
                            <h5>5.0 stars</h5>
                            
                            {[1,2,3,4,5,6,7].map((index) => (
                                <Star
                                    key={index}
                                    filled={index}
                                />
                            ))}
                        </div>
                        <div>
                            <p>400 for two</p>
                            <p>50 mins</p>
                        </div>
                    </div>
                </div>
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




