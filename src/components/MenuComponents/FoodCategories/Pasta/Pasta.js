import React from 'react';
import MenuList from '../../MenuList'
import pastaImg from '../../../../assets/pasta-icon.PNG'


const Pasta = () => {
    const PASTA = [
        {
            name: 'Bolognese',
            price: '$13.60',
            description: `Home made meat sauce, spaghetti, and fresh mozzarella cheese.`
        },
        {
            name: 'Carbonara',
            price: '$13.90',
            description: 'Creamy sauce with onions, pancetta, egg yolk and parmezan cheese.'
        },
        {
            name: 'Patriota',
            price: '$14.45',
            description: `Tomatoes, basil, garlic and fresh mozzarella in white wine sauce.`
        },
        {
            name: 'Alio E Olio',
            price: '$11.95',
            description: `Garlic oil & crushed red pepper in a white wine sauce.`
        },
        {
            name: 'Fra Diavolo',
            price: '$15.05',
            description: `Choice of pasta with garlic spicy plum tomato sauce and jalapeno pepper.`
        },
    ]

    return (
    <>
    <MenuList imageSrc={pastaImg} title="PASTA" items={PASTA}/>
    </>
    )
}

export default Pasta