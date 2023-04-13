import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';




const Button = (props) => {
    const {padding} = props;

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
            padding: padding,
            borderRadius: '6px',
            border: 'none',
            backgroundColor: buttonHover ? props.hoverBgColor : props.bgColor,
            fontSize: 'var(--p)',
            fontWeight: '500',
            cursor: 'pointer'
        },
        link: {
            textDecoration: 'none',
            color: buttonHover ? "#fff" : "#333",
        }
    }

    return (
        <>
            <button
                style={buttonStyles.button}
                onMouseEnter={handleMouseHover}
                 onMouseLeave={handleMouseLeave}
                >
                <Link
                to={props.to}
                style={buttonStyles.link}
                >
                    {props.text}
                </Link>
            </button>
        </>
    )
}

export default Button;