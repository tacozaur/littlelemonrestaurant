import React, {useState} from 'react';
import image from '../../../../assets/soupsandsalads-img.PNG';
import SoupAndSalads from './SoupsAndSalads.js';
import MenuContainer from '../../MenuContainer';

const SoupAndSaladsContainer = () => {
    const [isReverse, setIsReverse] = useState(false)

    return (
        <>
        <MenuContainer
        childComponent={SoupAndSalads}
        imageSrc={image}
        isReverse={!isReverse}
        />
        </>
    )
}

export default SoupAndSaladsContainer;
