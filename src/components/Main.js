import React from 'react';
import '../App.css'
import './styles.css'
import Button from './Button';


const Hero = () => {
    return (
        <>
            <div className='hero-content-container'>
                <h1 style={{color: '#fff'}}>Fresh<span style={{color: '#ff6d00'}}> Food</span></h1>
                <div className='and-symbol'>
                    <p>&</p>
                </div>
                <h2>&nbsp;&nbsp;Great Taste</h2>
                <div className='hero-cta'>
                    <p>
                        Our food is made from the freshest indgriedents and this <br/> results in great taste in every bite.
                    </p>
                    <Button
                        to="/reservations"
                        bgColor='#ff6d00'
                        hoverBgColor='#faf4d3'
                        textColor='#fff'
                        hoverTextColor='#000'
                        text="Reserve a Table"
                        padding='1.5rem 3rem'
                    />
                </div>
            </div>
        </>
    )
}

export default Hero