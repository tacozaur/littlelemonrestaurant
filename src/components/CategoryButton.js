import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const FoodCategoryButton = (props) => {
    const [buttonHover, setButtonHover] = useState(false);

    const handleMouseHover = () => {
        setButtonHover(true);
    }

    const handleMouseLeave = () => {
        setButtonHover(false);
    }

    const handleClick = () => {
        const target = document.getElementById(props.targetId);
        target.scrollIntoView({ behavior: 'smooth'})
    }

    const buttonStyles = {
        button: {
            transition: 'all .2s ease-in',
            padding: '1rem 2.5rem',
            minWidth: '180px',
            borderRadius: '6px',
            border: 'none',
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.35)",
            backgroundColor: buttonHover ? 'rgba(73,94,87, 1)' : 'rgba(73,94,87, .75)',
            fontSize: '1.25rem',
            fontWeight: '500',
            cursor: 'pointer',
            color: 'white',
        }
    }

    return (
        <>
            <button
            style={buttonStyles.button}
            onClick={handleClick}
            onMouseEnter={handleMouseHover}
            onMouseLeave={handleMouseLeave}
            >
                {props.text}
            </button>
        </>
    )
}

export default FoodCategoryButton;