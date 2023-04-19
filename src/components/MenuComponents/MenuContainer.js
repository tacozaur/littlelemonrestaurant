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
        containerImage: {
            flex: 1,
            display: 'flex',
            justifyContent: isReverse ? 'flex-end' : 'flex-start',
        },
        containerBlank: {
            flex: 1,
        },

    }

    const ChildComponent = childComponent

    useEffect(() => {
        const handleResize = () => {
          const containerBlank = document.querySelector('.containerBlank');
          const containerImg = document.querySelector('.containerImg');
          const container = document.querySelector('.container');
          const containerMenuList = document.querySelector('.containerMenuList');
          const screenWidth = window.innerWidth;

          if (screenWidth < 768) {
            containerBlank.style.display = 'none';
            containerImg.style.display = 'none';
            container.style.flexDirection = 'column';
          }
        }
        // Call the resize handler on mount and on window resize
        handleResize();
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        }
      }, []);

    return (
        <>
        <div style={styles.container} className='container'>
            <div style={styles.containerImage} className='containerImg'>
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