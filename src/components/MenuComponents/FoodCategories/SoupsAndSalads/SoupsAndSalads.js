import React from 'react';
import MenuList from '../../MenuList'
import saladsImg from '../../../../assets/salads-icon.PNG'

import tuscanyImg from './images/tuscany.jpg'
import soupOfDayImg from './images/soupofday.jpg'
import capreseImg from './images/caprese.jpg'
import cesareImg from './images/cesare.jpg'

export const SOUPSandSALADS = [
    {
        image: tuscanyImg,
        title: 'Tuscany',
        price: '$9.25',
        description: `Baby spinach, dried cranberries, almonds & blue cheese
                        crumbs in a citrus vinegar dressing.`
    },
    {
        image: soupOfDayImg,
        title: 'Soup of the Day',
        price: '$5.99',
        description: `Home made soup. Ask the  server about the available options.`
    },
    {
        image: capreseImg,
        title: 'Caprese',
        price: '$10.30',
        description: `Sliced fresh mozzarella, fresh tomatoes with basil and
                        balsamic vinaigrette.`
    },
    {
        image: cesareImg,
        title: 'Cesare',
        price: '$8.15',
        description: `Romaine, croutons, parmesan cheese, ceasar dressing.`
    },
    {
        title: 'Della Casa',
        price: '$8.49',
        description: `Mix greens, onions, tomatoes, cucumers, Kalamata olives
                        and white beans.`
    },
]

const SoupAndSalads = () => {

    return (
    <>
    <MenuList imageSrc={saladsImg} title="SOUPS & SALADS" items={SOUPSandSALADS}/>
    </>
    )
}

export default SoupAndSalads