import React from 'react';
import ReactDOM from 'react-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

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

            </div>
            <div className='card-cont'>

            </div>
        </div>
    );
}

const Footer = () => {
    return (
        <div className='footer'>
            <FontAwesomeIcon icon="fa-regular fa-copyright" />
            <span>copyright</span>
            <span>facebook</span>
            <span>instagram</span>
            <span>twitter</span>
            <span>youtube</span>
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




