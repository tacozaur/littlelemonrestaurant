import React from 'react';
import './styles.css';

import logo from '../logo-footer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <>
            <div className='footer-container'>
                <div class='footer-flex-item'>
                    <img src={logo} alt='logo'/>
                </div>
                <div class='footer-flex-item'>
                    <ul>
                        <li className='pExtraBold-16'>Contact</li>
                        <li className='pRegular-16'>2318 Patterson Fork Road, Chicago</li>
                        <li className='pRegular-16'>+1 209-586-1795</li>
                        <li className='pRegular-16'>contact@littlelemon.com</li>
                    </ul>
                </div>
                <div class='footer-flex-item last'>
                    <ul>
                        <li className='pExtraBold-16'>Social Media</li>
                        <li>
                            <FontAwesomeIcon
                            icon={faFacebook}
                            size='lg'
                            className='social-media-icon'
                            />
                        </li>
                        <li>
                            <FontAwesomeIcon
                            icon={faInstagram}
                            size='lg'
                            className='social-media-icon'
                            />
                        </li>
                        <li>
                            <FontAwesomeIcon
                            icon={faTiktok}
                            size='lg'
                            className='social-media-icon'
                            />
                        </li>
                        <li>
                            <FontAwesomeIcon
                            icon={faTwitter}
                            size='lg'
                            className='social-media-icon'
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer

