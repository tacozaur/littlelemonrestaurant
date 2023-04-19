import image from '../../../../assets/pasta-img.PNG';
import Pasta from './Pasta.js';
import MenuContainer from '../../MenuContainer';

const PastaContainer = () => {

    return (
        <>
        <MenuContainer
        childComponent={Pasta}
        imageSrc={image}
        />
        </>
    )
}

export default PastaContainer;
