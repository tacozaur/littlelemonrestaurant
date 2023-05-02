import React, { useEffect, useState } from 'react';

// import logo from '../logo-header.png'
import './styles.css'
import Nav from './Nav.js'
import Hamburger from './Hamburger';

// const logoStyles = {
//     display: "block",
//     width: "auto",
//     marginLeft: "auto",
//     marginRight: "auto",
//     height: "3rem"
// }

// const Logo = () => {
//     const logoPic = <img style={logoStyles} src={logo} alt="logo"/>;
//     return logoPic
// }


const Header = () => {
    const [isMinimized, setIsMinimized] = useState(false)
    const [prevScrollPos, setPrevScrollPos] = useState(0)

    const [isNavVisible, setIsNavVisible] = useState(false)


    useEffect(() => {
        const header = document.querySelector('header')

        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset
            const screenWidth = window.innerWidth

            if (currentScrollPos > 0) {
                header.style.backgroundColor = '#004643';
            } else {
                header.style.backgroundColor = 'transparent';
            }

            if (screenWidth < 768) {
                header.style.backgroundColor = 'transparent';
                header.style.transform= 'none'
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
            <Hamburger
            isNavVisible={isNavVisible}
            setIsNavVisible={setIsNavVisible}
            />
            <header
            style={{
                transitionDuration:'.5s',
                position: 'fixed',
                transform: isMinimized ? 'translateY(-150px)' : 'translateY(0)',
                }}>
                {/* <div className="logo">
                    <Logo/>
                </div> */}
                <div className="nav">
                    <Nav isNavVisible={!isNavVisible}/>
                </div>
            </header>
        </React.Fragment>

    )
}

export default Header
