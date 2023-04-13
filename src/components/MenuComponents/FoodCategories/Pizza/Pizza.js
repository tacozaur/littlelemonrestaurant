import React from 'react';
import MenuList from '../../MenuList'
import pizzaImg from '../../../../assets/pizza-icon.PNG'

const Pizza = () => {
    const PIZZA = [
        {
            name: 'Pepperoni & Basil',
            price: '$16.65',
            description: `Mario's pepperoni, burrata, basil, red sauce`
        },
        {
            name: 'Sausage',
            price: '$15.25',
            description: 'Sausage, giardiniera, mozzarella, basil, red sauce.'
        },
        {
            name: 'Miso Mushroom',
            price: '$13.00',
            description: `Shiitake mushrooms, blakc garlic, miso onions, green onions, mozzarella`
        },
        {
            name: 'Quatro Cheese',
            price: '$12.60',
            description: `Burrata, parmezan, basil, red sauce. (vegetarian)`
        },
        {
            name: 'Fig & Pig',
            price: '$14.60',
            description: `Caramelized onions, figs, confit pork, good balsamic.`
        },
    ]

    return (
    <>
    <MenuList imageSrc={pizzaImg} title="PIZZA" items={PIZZA}/>
    </>
    )
}

export default Pizza