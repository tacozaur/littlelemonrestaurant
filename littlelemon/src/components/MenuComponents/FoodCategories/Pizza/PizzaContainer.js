import React, {useState} from 'react';
import image from '../../../../assets/pizza-img.PNG';
import Pizza from './Pizza.js';
import MenuContainer from '../../MenuContainer';

const PizzaContainer = () => {
    const [isReverse, setIsReverse] = useState(false)

    return (
        <>
        <MenuContainer
        childComponent={Pizza}
        imageSrc={image}
        isReverse={!isReverse}
        />
        </>
    )
}

export default PizzaContainer;
