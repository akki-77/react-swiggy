import Logo from '../../resources/images/Logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

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

export default Header;