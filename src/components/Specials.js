import React from 'react';
import Button from './Button';
import Card from './Card';

import { APPETIZERS } from './MenuComponents/FoodCategories/Appetizers/Appetizers';

const style = {

    specialsHeading: {
        display: 'flex',
        padding: '5rem 0 3rem 0',
        alignItems: 'center',
    },
    specialsContainer: {
        display: 'flex',
        gap: '1.5rem',
        justifyContent: 'center',
        marginBottom: '1.5rem',
    },
    highlightsContainer: {
        paddingBottom: '3rem'
    },
    specialsTitle: {
        flexGrow: 1,
        width: '50%'
    },
    specialsMenuButton: {
        width: '50%',
        alignSelf: 'flex-end'
    }
}


const Specials = () => {

    return (
        <React.Fragment>
            <section style={style.highlightsContainer}>
                <div style={style.specialsHeading}>
                    <h1 style={style.specialsTitle}>This weeks specials!</h1>
                    <Button
                    to={'/menu'}
                    style = {style.specialsMenuButton}
                    bgColor='rgb(73, 94, 87)'
                    hoverBgColor='#EE9972'
                    textColor='#fff'
                    hoverTextColor='#333'
                    text="Online Menu"
                    padding='16px 24px'
                    />
                </div>
                <div style={style.specialsContainer}>
                    {APPETIZERS.slice(0, -2).map((item, index) => (
                        <Card key={index} {...item} height='130px'/>
                    ))}
                </div>
            </section>
        </React.Fragment>
    )
}

export default Specials