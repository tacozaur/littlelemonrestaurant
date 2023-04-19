import React from 'react';
import './styles.css'

const Hamburger = ({setIsNavVisible, isNavVisible}) => {
    const toggleNav = () => setIsNavVisible(!isNavVisible)

    return (
        <div className='hamburger-container'>
            <div className="hamburger">
                <button onClick={toggleNav}>
                    {isNavVisible ? "☰" : "✕"}
                </button>
            </div>
        </div>
    )
}

export default Hamburger;