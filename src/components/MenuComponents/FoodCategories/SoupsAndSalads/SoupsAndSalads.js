import React from 'react';
import MenuList from '../../MenuList'
import saladsImg from '../../../../assets/salads-icon.PNG'

const SoupAndSalads = () => {
    const SOUPSandSALADS = [
        {
            name: 'Tuscany',
            price: '$9.25',
            description: `Baby spinach, dried cranberries, almonds & blue cheese
                            crumbs in a citrus vinegar dressing.`
        },
        {
            name: 'Soup of the Day',
            price: '$5.99',
            description: 'Home made soup. <br/> Ask your server.'
        },
        {
            name: 'Caprese',
            price: '$10.30',
            description: `Sliced fresh mozzarella, fresh tomatoes with basil and
                            balsamic vinaigrette.`
        },
        {
            name: 'Cesare',
            price: '$8.15',
            description: `Romaine, croutons, parmesan cheese, ceasar dressing.`
        },
        {
            name: 'Della Casa',
            price: '$8.49',
            description: `Mix greens, onions, tomatoes, cucumers, Kalamata olives
                            and white beans.`
        },
    ]

    return (
    <>
    <MenuList imageSrc={saladsImg} title="SOUPS & SALADS" items={SOUPSandSALADS}/>
    </>
    )
}

export default SoupAndSalads