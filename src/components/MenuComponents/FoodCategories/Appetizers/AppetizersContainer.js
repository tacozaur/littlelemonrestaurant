import React from 'react';
import image from '../../../../assets/appetizers-img.PNG';
import Appetizers from './Appetizers';
import MenuContainer from '../../MenuContainer';

const AppetizersContainer = () => {

    return (
        <>
        <MenuContainer childComponent={Appetizers} imageSrc={image}/>
        </>
    )
}

export default AppetizersContainer;
