import React from 'react';
import MenuList from '../../MenuList'
import appetizersImg from '../../../../assets/appetizers-icon.PNG'


const Appetizers = () => {
    const APPETIZERS = [
        {
            name: 'Bruschetta',
            price: '$6.20',
            description: `Toasted bread with diced tomatoes,balsamic vinegar,
                            basil and cheese. Add pesto $1.00`
        },
        {
            name: 'Fired Mozzarella',
            price: '$7.65',
            description: 'Homemade fried cheese served with marinara sauce.'
        },
        {
            name: 'Antipasto Originale',
            price: '$15.80',
            description: `Original Italian cuts, salami, prosciutto, ham, fresh mozzarella,
                            tomatoes, artichockes herts and garlic oil eggplant.`
        },
        {
            name: 'Shrimp Scampi',
            price: '$10.25',
            description: `Small shrimp sauteed with garlic white wine and heavy cream
                            served over toasted bread`
        },
        {
            name: 'Melanzane Caprese',
            price: '$9.85',
            description: `Fried eggplant with mozzarella, tomato and basil, lightly backed
                            in the oven`
        },
    ]

    return <MenuList imageSrc={appetizersImg} title="APPETIZERS" items={APPETIZERS}/>
}

export default Appetizers