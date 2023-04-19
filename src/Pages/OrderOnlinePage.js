import React from 'react';
import '../App.css'
import '../components/styles.css'

import './OrderOnlinePage.css'


import backgroundHeadingPhoto from '../assets/aboutUsBackground.jpg'
import FoodCategoryButton from '../components/CategoryButton';
import Card from '../components/Card';
import Footer from '../components/Footer';

import {APPETIZERS} from '../components/MenuComponents/FoodCategories/Appetizers/Appetizers'
import {SOUPSandSALADS} from '../components/MenuComponents/FoodCategories/SoupsAndSalads/SoupsAndSalads'
import {PIZZA} from '../components/MenuComponents/FoodCategories/Pizza/Pizza'
import {PASTA} from '../components/MenuComponents/FoodCategories/Pasta/Pasta'


const OrderOnlinePageHeading = {
        background: `linear-gradient(rgba(0, 0, 0, .65), rgba(0, 0, 0, .65)), url(${backgroundHeadingPhoto}) no-repeat center bottom`,
        backgroundSize: 'cover',
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
    }


const OrderOnlinePage = () => {


    return (
        <>
        <div className='OrderOnlinePageContainer'>
            <div style={OrderOnlinePageHeading} className='OrderOnlinePageHeading'>
            </div>
            <div className='OrderOnlinePageSubHeading'>
                <h1 className='title'>
                    Our Popular
                    <span> Menu</span>
                </h1>
                <p className='pRegular-16'>Skip the Wait - Order Online and Enjoy Delicious Food in Minutes</p>
            </div>
            <div className='foodCategoriesContainer'>
                <FoodCategoryButton text="Appetizers" targetId='appetizers'/>
                <FoodCategoryButton text="Soups & Salads" targetId='soups-salads'/>
                <FoodCategoryButton text="Pasta" targetId='pasta'/>
                <FoodCategoryButton text="Pizza" targetId='pizza'/>
            </div>
            <div className='quoteContainer'>
                <h1>
                "Indulge in our delicious offerings and satisfy your cravings - Order now and taste the difference!"
                </h1>
            </div>
            <div className='foodCardsContainer'>
                <h2 id='appetizers'>Appetizers</h2>
                <div className='foodCategoryCardList'>
                    {APPETIZERS.slice(0, -1).map((item, index) => (
                        <Card key={index} {...item} height='130px'/>
                    ))}
                </div>
                <h2 id='soups-salads'>Soups & Salads</h2>
                <div className='foodCategoryCardList'>
                    {SOUPSandSALADS.slice(0, -1).map((item, index) => (
                        <Card key={index} {...item} height='130px'/>
                    ))}
                </div>
                <h2 id='pasta'>Pasta</h2>
                <div className='foodCategoryCardList'>
                    {PASTA.slice(0, -1).map((item, index) => (
                        <Card key={index} {...item} height='130px'/>
                    ))}
                </div>
                <h2 id='pizza'>Pizza</h2>
                <div className='foodCategoryCardList'>
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