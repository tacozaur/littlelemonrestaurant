import React from 'react';
import Button from './Button';
import Card from './Card';
import '../App.css'

import { APPETIZERS } from './MenuComponents/FoodCategories/Appetizers/Appetizers';


const Specials = () => {

    return (
        <React.Fragment>
            <section className='highlightsContainer'>
                <div className='specialsHeading'>
                    <h1 className='specialsTitle'>This weeks specials!</h1>
                    <Button
                    to={'/menu'}
                    className='specialsMenuButton'
                    bgColor='rgb(73, 94, 87)'
                    hoverBgColor='#EE9972'
                    textColor='#fff'
                    hoverTextColor='#333'
                    text="Online Menu"
                    padding='16px 24px'
                    />
                </div>
                <div className='specialsContainer'>
                    {APPETIZERS.slice(0, -1).map((item, index) => (
                        <Card key={index} {...item} height='130px'/>
                    ))}
                </div>
            </section>
        </React.Fragment>
    )
}

export default Specials