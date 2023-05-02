import React, { useEffect } from 'react';
import '../styles.css'
import '../../App.css'


const MenuContainer = ({
    childComponent,
    imageSrc,
    isReverse
}) => {

    const styles = {
        container: {
            minHeight: '50vh',
            display: 'flex',
            flexDirection: isReverse ? 'row-reverse' : 'row',
            alignItems: 'flex-start',
            justifyContent: 'center',
        },
        containerMenuList: {
            flex: 1,
            display: 'flex',
        },
        containerImg: {
            flex: 1,
            display: 'flex',
            justifyContent: isReverse ? 'flex-end' : 'flex-start',
        },
        containerBlank: {
            flex: 1,
        },

    }

    const ChildComponent = childComponent

    return (
        <>
        <div style={styles.container} className='container'>
            <div style={styles.containerImg} className='containerImg'>
                <img src={imageSrc} alt="Appetizers" style={{maxWidth: '400px', height: 'auto'}}/>
            </div>
            <div style={styles.containerMenuList} className='containerMenuList'>
                <ChildComponent/>
            </div>
            <div style={styles.containerBlank} className='containerBlank'>
            </div>
        </div>
        </>
    )
}

export default MenuContainer