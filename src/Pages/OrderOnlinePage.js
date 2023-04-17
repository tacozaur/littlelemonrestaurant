import React from 'react';
import '../App.css'
import '../components/styles.css'
import backgroundHeadingPhoto from '../assets/aboutUsBackground.jpg'
import FoodCategoryButton from '../components/CategoryButton';
import Footer from '../components/Footer';

import {APPETIZERS} from '../components/MenuComponents/FoodCategories/Appetizers/Appetizers'
import {SOUPSandSALADS} from '../components/MenuComponents/FoodCategories/SoupsAndSalads/SoupsAndSalads'
import {PIZZA} from '../components/MenuComponents/FoodCategories/Pizza/Pizza'
import {PASTA} from '../components/MenuComponents/FoodCategories/Pasta/Pasta'
import Card from '../components/Card';



const styles = {
    OrderOnlinePageContainer: {
        height: '100%',
        diplay: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
    },
    OrderOnlinePageHeading: {
        minHeight: '220px',
        width: '100%',
        background: `linear-gradient(rgba(0, 0, 0, .65), rgba(0, 0, 0, .65)), url(${backgroundHeadingPhoto}) no-repeat center bottom`,
        backgroundSize: 'cover',
        WebKitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
    },
    OrderOnlinePageSubHeading: {
        margin: '3rem 0',
    },
    title: {
        letterSpacing: '.25rem',
        wordSpacing: '1rem',
    },
    span: {
        color: 'rgb(244, 206, 20)'
    },
    foodCategoriesContainer: {
        display: 'flex',
        gap: '3rem',
        justifyContent: 'center',
        marginBottom: '3rem',
    },
    foodCardsContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        justifyContent: 'center',
        marginBottom: '4.5rem',
    },
    foodCategoryCardList: {
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem',
        padding: '2rem 0',
    }
}

const OrderOnlinePage = () => {


    return (
        <>
        <div style={styles.OrderOnlinePageContainer}>
            <div style={styles.OrderOnlinePageHeading}>
            </div>
            <div style={styles.OrderOnlinePageSubHeading}>
                <h1 style={styles.title}>
                    Our Popular
                    <span style={styles.span}> Menu</span>
                </h1>
                <p className='pRegular-16'>Skip the Wait - Order Online and Enjoy Delicious Food in Minutes</p>
            </div>
            <div style={styles.foodCategoriesContainer}>
                <FoodCategoryButton text="Appetizers" targetId='appetizers'/>
                <FoodCategoryButton text="Soups & Salads" targetId='soups-salads'/>
                <FoodCategoryButton text="Pasta" targetId='pasta'/>
                <FoodCategoryButton text="Pizza" targetId='pizza'/>
            </div>
            <div>
                <h1
                style={{
                    width: '60vw',
                    margin: '5rem auto',
                    fontStyle: 'italic',
                }}
                >
                "Indulge in our delicious offerings and satisfy your cravings - Order now and taste the difference!"
                </h1>
            </div>
            <div style={styles.foodCardsContainer}>
                <h2 id='appetizers'>Appetizers</h2>
                <div style={styles.foodCategoryCardList}>
                    {APPETIZERS.slice(0, -1).map((item, index) => (
                        <Card key={index} {...item} height='130px'/>
                    ))}
                </div>
                <h2 id='soups-salads'>Soups & Salads</h2>
                <div style={styles.foodCategoryCardList}>
                    {SOUPSandSALADS.slice(0, -1).map((item, index) => (
                        <Card key={index} {...item} height='130px'/>
                    ))}
                </div>
                <h2 id='pasta'>Pasta</h2>
                <div style={styles.foodCategoryCardList}>
                    {PASTA.slice(0, -1).map((item, index) => (
                        <Card key={index} {...item} height='130px'/>
                    ))}
                </div>
                <h2 id='pizza'>Pizza</h2>
                <div style={styles.foodCategoryCardList}>
                    {PIZZA.slice(0, -1).map((item, index) => (
                        <Card key={index} {...item} height='130px'/>
                    ))}
                </div>
            </div>
            <div className='footer footer-nested'>
                <Footer/>
            </div>
        </div>
        </>
    )
}

export default OrderOnlinePage