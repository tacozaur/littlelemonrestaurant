import React from 'react';
import '../App.css'
import '../components/styles.css'
import backgroundHeadingPhoto from '../assets/aboutUsBackground.jpg'

import TextContainer from '../components/TextContainer'

import AppetizersContainer from '../components/MenuComponents/FoodCategories/Appetizers/AppetizersContainer';
import SoupAndSaladsContainer from '../components/MenuComponents/FoodCategories/SoupsAndSalads/SoupsAndSaladsContainer';
import PastaContainer from '../components/MenuComponents/FoodCategories/Pasta/PastaContainer';
import PizzaContainer from '../components/MenuComponents/FoodCategories/Pizza/PizzaContainer';

import Footer from '../components/Footer';
import Button from '../components/Button';


const styles = {
    MenuPageContainer: {
        height: '100%',
        diplay: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    },
    MenuSection: {
        marginBottom: '6rem'
    },
    MenuPageHeading: {
        minHeight: '220px',
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
        marginBottom: '6rem'
    },
    title: {
        letterSpacing: '.5rem',
        wordSpacing: '2rem',
    }
}

const MenuPage = () => {


    return (
        <>
        <div style={styles.MenuPageContainer}>
            <div style={styles.MenuPageHeading}>
                <h1 style={styles.title}>ONLINE FOOD LIST</h1>
            </div>
            <div style={styles.MenuSection}>
                <TextContainer
                    heading='Our Story'
                    subheading='Why We Started It?'
                    paragraphs={[
                    "Little Lemon restaurant was born from the passion and hard work of two brothers, Mario and John. Growing up, they were always surrounded by delicious food and a strong sense of family, which inspired them to pursue a career in the culinary industry. After studying at some of the best culinary schools in the country and gaining experience in various high-end restaurants, the brothers decided to bring their talents back to their hometown and open their own restaurant. They wanted to create a place that embodied their family values and offered simple yet delicious food made with the freshest ingredients.",
                    "Together, Mario and John have created a restaurant that is truly a reflection of their personalities and values. Little Lemon is not just a place to eat; it's a place where customers feel like part of the family. With its cozy atmosphere, delicious food, and friendly service, Little Lemon has become a beloved neighborhood restaurant that people keep coming back to again and again.",
                    ]}
                    paddingBottom='4rem'
                />
            </div>
            <div style={styles.MenuSection}>
                <AppetizersContainer/>
            </div>
            <div style={styles.MenuSection}>
                <SoupAndSaladsContainer/>
            </div>
            <div style={styles.MenuSection}>
                <PastaContainer/>
            </div>
            <div style={styles.MenuSection}>
                <PizzaContainer/>
            </div>
            <div style={styles.MenuSection}>
                <Button
                to="/reservations"
                bgColor='#F4CE14'
                hoverBgColor='rgb(244, 120, 50)'
                textColor='#333'
                hoverTextColor='#fff'
                text="Reserve a Table"
                padding='24px 52px'
                />
            </div>
            <div className='footer footer-nested'>
                <Footer/>
            </div>
        </div>
        </>
    )
}

export default MenuPage