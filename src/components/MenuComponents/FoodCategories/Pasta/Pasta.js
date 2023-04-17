import React from 'react';
import MenuList from '../../MenuList'
import pastaImg from '../../../../assets/pasta-icon.PNG'

import bologneseImg from './images/bolognese.jpg'
import carbonaraImg from './images/carbonara.jpeg'
import patriotaImg from './images/patriota.jpg'
import alioeOlioImg from './images/alioeolio.jpg'

export const PASTA = [
    {
        image: bologneseImg,
        title: 'Bolognese',
        price: '$13.60',
        description: `Home made meat sauce, spaghetti, and fresh mozzarella cheese.`
    },
    {
        image: carbonaraImg,
        title: 'Carbonara',
        price: '$13.90',
        description: 'Creamy sauce with onions, pancetta, egg yolk and parmezan cheese.'
    },
    {
        image: patriotaImg,
        title: 'Patriota',
        price: '$14.45',
        description: `Tomatoes, basil, garlic and fresh mozzarella in white wine sauce.`
    },
    {
        image: alioeOlioImg,
        title: 'Alio E Olio',
        price: '$11.95',
        description: `Garlic oil & crushed red pepper in a white wine sauce.`
    },
    {
        title: 'Fra Diavolo',
        price: '$15.05',
        description: `Choice of pasta with garlic spicy plum tomato sauce and jalapeno pepper.`
    },
]


const Pasta = () => {

    return (
    <>
    <MenuList imageSrc={pastaImg} title="PASTA" items={PASTA}/>
    </>
    )
}

export default Pasta