import React from 'react';
import MenuList from '../../MenuList'
import pizzaImg from '../../../../assets/pizza-icon.PNG'

import pepperoniImg from './images/pepperoni.jpg'
import sausageImg from './images/sausage.jpg'
import mushroomImg from './images/mushroom.jpg'
import quatroCheeseImg from './images/quatrocheese.jpg'

export const PIZZA = [
    {
        image: pepperoniImg,
        title: 'Pepperoni & Basil',
        price: '$16.65',
        description: `Mario's pepperoni, burrata, basil, red sauce`
    },
    {
        image: sausageImg,
        title: 'Sausage',
        price: '$15.25',
        description: 'Sausage, giardiniera, mozzarella, basil, red sauce.'
    },
    {
        image: mushroomImg,
        title: 'Miso Mushroom',
        price: '$13.00',
        description: `Shiitake mushrooms, blakc garlic, miso onions, green onions, mozzarella`
    },
    {
        image: quatroCheeseImg,
        title: 'Quatro Cheese',
        price: '$12.60',
        description: `Burrata, parmezan, basil, red sauce. (vegetarian)`
    },
    {
        title: 'Fig & Pig',
        price: '$14.60',
        description: `Caramelized onions, figs, confit pork, good balsamic.`
    },
]

const Pizza = () => {

    return (
    <>
    <MenuList imageSrc={pizzaImg} title="PIZZA" items={PIZZA}/>
    </>
    )
}

export default Pizza