import React, { useEffect, useState } from 'react';

import logo from '../logo-header.png'
import './styles.css'
import Nav from './Nav.js'
import { text } from '@fortawesome/fontawesome-svg-core';

const logoStyles = {
    display: "block",
    width: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    height: "3rem"
}

const Logo = () => {
    const logoPic = <img style={logoStyles} src={logo} alt="logo"/>;
    return logoPic
}


const Header = () => {
    const [isMinimized, setIsMinimized] = useState(false)
    const [prevScrollPos, setPrevScrollPos] = useState(0)


    useEffect(() => {
        const header = document.querySelector('header')

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset
            if (currentScrollPos > 0) {
                header.style.backgroundColor = '#495E57';
            } else {
                header.style.backgroundColor = 'rgba(1, 1, 1, .35)';
            }

            const isScrolledDown = currentScrollPos >= prevScrollPos

            setIsMinimized(isScrolledDown)
            setPrevScrollPos(currentScrollPos)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [prevScrollPos])

    return (
        <React.Fragment>
        <header style={{
            transitionDuration:'.5s',
            transform: isMinimized ? "translateY(-150px)" : "translateY(0)",
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            }}>
            <div className="logo">
                <Logo/>
            </div>
            <div className="nav">
                <Nav/>
            </div>
        </header>
        </React.Fragment>

    )
}

export default Header
