import React from 'react';
import Button from './Button';
import Card from './Card';
import '../App.css'

import { APPETIZERS } from './MenuComponents/FoodCategories/Appetizers/Appetizers';


const Specials = () => {

    return (
        <React.Fragment>
            <section className='highlightsContainer'>
                <div className='highlightsQuote'>
                    <p>
                        "Savor the Taste of Perfection: Where <span className='orange-text'> Freshness & Quality</span> Meet
                        - Discover the Culinary Delights of <span className='orange-text'>Our Restaurant</span>! We Avoid to Use Artificial 
                        Ingridients and Food Additives During Cooking Process."
                    </p>
                    <Button
                    to={'/menu'}
                    className='specialsMenuButton'
                    bgColor='#004643'
                    hoverBgColor='#0c1618'
                    textColor='#fff'
                    hoverTextColor='#fff'
                    text="Online Menu"
                    padding='1.5rem 8rem'
                    />
                </div>
                <div className='specialsHeading'>
                    <h1 className='specialsTitle'>This week's specials!</h1>

                </div>
                <div className='specialsContainer'>
                    {APPETIZERS.slice(0, -2).map((item, index) => (
                        <Card key={index} {...item} height='130px' width='345px'/>
                    ))}
                </div>
            </section>
        </React.Fragment>
    )
}

export default Specials