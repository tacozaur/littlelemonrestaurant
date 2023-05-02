import React from 'react';
import CartIcon from '../assets/cart-icon.png'

import './styles.css';
import '../App.css';

import { Link }  from 'react-router-dom'

const cartIconStyle = {
    width: '48px',
    height: '48px'
}

const navItems = [
    'Home',
    'About',
    'Menu',
    'Reservations',
    'Order Online'
]

const Nav = ({isNavVisible}) => {

        return (
            <React.Fragment>
            <nav>
                <ul style={{display: isNavVisible ? 'flex' : 'none'}}>
                    <li>
                      <Link to="/" className="nav-item pExtraBoldUPPER-20"><p>{navItems[0]}</p></Link>
                    </li>
                    <li>
                    <Link to="/about-us" className="nav-item pExtraBoldUPPER-20"><p>{navItems[1]}</p></Link>
                    </li>
                    <li>
                    <Link to="/menu" className="nav-item pExtraBoldUPPER-20"><p>{navItems[2]}</p></Link>
                    </li>
                    <li>
                    <Link to="/reservations" className="nav-item pExtraBoldUPPER-20"><p>{navItems[3]}</p></Link>
                    </li>
                    <li>
                    <Link to="/online-order" className="nav-item pExtraBoldUPPER-20"><p>{navItems[4]}</p></Link>
                    </li>
                    <li>
                    <Link to="/" className="nav-item cartt">
                        <img
                    src={CartIcon}
                    alt='Cart'
                    style={cartIconStyle}
                    />
                    </Link>
                    </li>
                </ul>
            </nav>
            </React.Fragment>
        )
}

export default Nav