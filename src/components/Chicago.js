import React from 'react';
import './styles.css';
import '../App.css'
import storyImgOne from '../assets/story-1.png'
import storyImgTwo from '../assets/story-2.png'


const Chicago = () => {
    return (
        <>
            <div className='about-content-container'>
                <div className='about-container-title'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                </div>
                <div className='about-container-description'>
                    <p className='pRegular-16'>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis class aptent taciti sociosqa. <br/>Ad litora torquent
Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper</p>
                </div>
            </div>
            <div className='restaurant-images-container'>
                    <img src={storyImgOne} alt='Owners'/>
                    <img src={storyImgTwo} alt='Owners'/>
            </div>
        </>
    )
}

export default Chicago

