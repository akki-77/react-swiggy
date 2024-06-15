import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faYoutube, faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

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

export default Footer;