import React, { useEffect, useState } from 'react';

import logo from '../logo-header.png'
import './styles.css'
import Nav from './Nav.js'

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
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset
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
            backgroundColor: 'white'
            }}>
            <div className="logo">
                <Logo/>
            </div>
            <div className="nav">
                <Nav />
            </div>
        </header>
        </React.Fragment>

    )
}

export default Header
