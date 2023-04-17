import React from 'react';
import './MenuList.css'
import '../styles.css'

const MenuList = ({imageSrc, title, items}) => {

    const itemList = items.map(
        item =>
        <div className='MenuListItem'>
            <div className='ListItemHeading'>
                <p className='ListItemName pBold-18'>{item.title}</p>
                <p className='ListItemPrice pMedium-16'>{item.price}</p>
            </div>
            <p className='ListItemDescription pRegular-16'>{item.description}</p>
        </div>
        )

    return (
        <>
        <div className='MenuList'>
            <div className='MenuListHeading'>
                <img class="MenuListTitleIcon"src={imageSrc} alt={title}/>
                <h2>{title}</h2>
            </div>
            <div>
                {itemList}
            </div>
        </div>
        </>
    )
}

export default MenuList