import React from 'react';
import Button from './Button';
import Card from './Card';

import GreekSalad from '../assets/greek-salad.jpg'
import Bruschettas from '../assets/bruchetta.svg'
import LemonDessert from '../assets/lemon-dessert.jpg'

const style = {

    specialsHeading: {
        display: 'flex',
        padding: '5rem 0 3rem 0',
        alignItems: 'center',
    },
    specialsContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        gap: '32px',
        alignItems: 'stretch'
    },
    highlightsContainer: {
        paddingBottom: '3rem'
    },
    specialsTitle: {
        flexGrow: 1,
        width: '50%'
    },
    specialsMenuButton: {
        width: '50%',
        alignSelf: 'flex-end'
    }
}


const Specials = () => {

    const foodSpecials = [
        {
            image: GreekSalad,
            title: 'Greek Salad',
            price: '$12.99',
            description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. '
        },
        {
            image: Bruschettas,
            title: 'Bruschettas',
            price: '$5.99',
            description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. '
        },
        {
            image: LemonDessert,
            title: 'Lemon Dessert',
            price: '$5.00',
            description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
        }
    ]


    return (
        <React.Fragment>
            <section style={style.highlightsContainer}>
                <div style={style.specialsHeading}>
                    <h1 style={style.specialsTitle}>This weeks specials!</h1>
                    <Button
                    to={'/menu'}
                    style = {style.specialsMenuButton}
                    bgColor='#F4CE14'
                    hoverBgColor='#EE9972'
                    text="Online Menu"
                    padding='16px 24px'
                    />
                </div>
                <div style={style.specialsContainer}>
                    {foodSpecials.map((item, index) => (
                        <Card key={index} {...item}/>
                    ))}
                </div>
            </section>
        </React.Fragment>
    )
}

export default Specials