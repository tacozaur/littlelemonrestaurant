import React, { useState } from 'react';

import backgroundHeadingPhoto from '../assets/aboutUsBackground.jpg'


import '.././App.css';
import '../components/styles.css'
import TextContainer from '../components/TextContainer';
import Footer from '../components/Footer';

const styles = {
    aboutUsPageContainer: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    aboutUsPageHeading: {
        minHeight: '440px',
        width: '100%',
        color: 'white',
        background: `linear-gradient(rgba(0, 0, 0, .65), rgba(0, 0, 0, .65)), url(${backgroundHeadingPhoto}) no-repeat center bottom`,
        backgroundSize: 'cover',
        WebKitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
  }

const AboutUs = () => {

    const [isReverse, setIsReverse] = useState(false)
    const [showText, setShowText] = useState(false)

    return (
        <>
        <div style={styles.aboutUsPageContainer}>
            <div style={styles.aboutUsPageHeading}>
            <h1>Little Lemon's Story</h1>
            <h2>About us</h2>
            </div>
            <TextContainer
                heading='Our Story'
                subheading='Why We Started It?'
                paragraphs={[
                "Little Lemon restaurant was born from the passion and hard work of two brothers, Mario and John. Growing up, they were always surrounded by delicious food and a strong sense of family, which inspired them to pursue a career in the culinary industry. After studying at some of the best culinary schools in the country and gaining experience in various high-end restaurants, the brothers decided to bring their talents back to their hometown and open their own restaurant. They wanted to create a place that embodied their family values and offered simple yet delicious food made with the freshest ingredients.",
                "Together, Mario and John have created a restaurant that is truly a reflection of their personalities and values. Little Lemon is not just a place to eat; it's a place where customers feel like part of the family. With its cozy atmosphere, delicious food, and friendly service, Little Lemon has become a beloved neighborhood restaurant that people keep coming back to again and again.",
                ]}
                isReverse={!isReverse}
                showText={showText}
                paddingBottom='4rem'
            />
            <TextContainer
            heading='Who We Are'
            subheading=''
            paragraphs={[
            "Who We Are?",
            "John, on the other hand, is the restaurant's front-of-house manager. He is the friendly face that greets customers at the door and makes sure that everyone feels welcome and comfortable. John has a natural talent for hospitality and has created a warm and inviting atmosphere at Little Lemon. He takes pride in providing excellent service and making sure that every customer leaves the restaurant satisfied.",
            "Mario is the head chef at Little Lemon and is responsible for creating the restaurant's signature dishes. He is a perfectionist when it comes to food, and his attention to detail is what sets Little Lemon apart from other restaurants in town. Mario's culinary skills are matched only by his passion for creating memorable dining experiences for his customers.",
            ]}
            isReverse={isReverse}
            showText={!showText}
            paddingBottom='8rem'
        />
        </div>
        <div className='footer footer-nested'>
            <Footer/>
        </div>
    </>
    )
}

export default AboutUs
