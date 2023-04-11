import React from 'react';
import '../App.css'
import './styles.css'
import Button from './Button';


const Hero = () => {
    return (
        <>
            <div className='hero-content-container'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <div className='hero-cta'>
                    <p className='pMedium-18'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Button
                        bgColor='#F4CE14'
                        hoverBgColor='#EE9972'
                        text="Reserve a Table"
                    />
                </div>
            </div>
            <div className='hero-image-container'></div>
        </>
    )
}

export default Hero