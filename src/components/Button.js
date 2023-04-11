import React, { useState } from 'react';
import '../App.css';




const Button = (props) => {
    const [buttonHover, setButtonHover] = useState(false);

    const handleMouseHover = () => {
        setButtonHover(true);
    }

    const handleMouseLeave = () => {
        setButtonHover(false);
    }

    const buttonStyles = {
        button: {
            transition: '.3s',
            padding: '16px 24px',
            borderRadius: '6px',
            border: 'none',
            backgroundColor: buttonHover ? props.hoverBgColor : props.bgColor,
            color: buttonHover ? "#fff" : "#333",
            fontSize: 'var(--p)',
            fontWeight: '500',
            cursor: 'pointer'
        }
    }

    return (
        <>
            <button
                style={buttonStyles.button}
                class='btn'
                onMouseEnter={handleMouseHover}
                onMouseLeave={handleMouseLeave}
                >
                {props.text}
            </button>
        </>
    )
}

export default Button;