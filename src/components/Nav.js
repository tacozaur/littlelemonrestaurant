import React from 'react';

import './styles.css';
import '../App.css';

import { Link }  from 'react-router-dom'

const navItems = [
    'Home',
    'About',
    'Menu',
    'Reservations',
    'Order Online',
    'Login'
]

const Nav = () => {
        return (
            <React.Fragment>
            <nav>
                <ul>
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
                    <Link to="/login" className="nav-item pExtraBoldUPPER-20"><p>{navItems[5]}</p></Link>
                    </li>
                </ul>
            </nav>
            </React.Fragment>
        )
}

export default Nav