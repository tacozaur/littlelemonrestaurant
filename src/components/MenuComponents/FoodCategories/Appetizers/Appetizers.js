import React from 'react';
import MenuList from '../../MenuList'
import appetizersImg from '../../../../assets/appetizers-icon.PNG'

import bruschettaImg from './images/bruschetta.jpg'
import friedMozzarellaImg from './images/fried-mozzarella.jpg'
import antipastoImg from './images/antipasto-originale.jpg'
import milaneseCapreseImg from './images/milanese-caprese.jpg'


export const APPETIZERS = [
    {
        image:  bruschettaImg,
        title: 'Bruschetta',
        price: '$6.20',
        description: `Toasted bread with diced tomatoes,balsamic vinegar,
                        basil and cheese. Add pesto $1.00`
    },
    {
        image: friedMozzarellaImg,
        title: 'Fried Mozzarella',
        price: '$7.65',
        description: 'Homemade fried cheese served with marinara sauce.'
    },
    {
        image: antipastoImg,
        title: 'Antipasto Originale',
        price: '$15.80',
        description: `Italian dish, salami, prosciutto, mozzarella,
                        tomatoes, artichockes and garlic oil eggplant.`
    },
    {
        image: milaneseCapreseImg,
        title: 'Milanese Caprese',
        price: '$9.85',
        description: `Fried eggplant with mozzarella, tomato and basil, lightly backed
                        in the oven`
    },
    {
        title: 'Shrimp Scampi',
        price: '$10.25',
        description: `Small shrimp sauteed with garlic white wine and heavy cream
                        served over toasted bread`
    },
]

const Appetizers = () => {

    return <MenuList imageSrc={appetizersImg} title="APPETIZERS" items={APPETIZERS}/>
}

export default Appetizers