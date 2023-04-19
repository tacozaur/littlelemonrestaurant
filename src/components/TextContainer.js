import React, { useEffect } from 'react';
import './styles.css'
import storyImgOne from '../assets/story-1.png'
import './TextContainer.css'

const TextContainer = ({
    heading,
    subheading,
    paragraphs,
    isReverse,
    showText,
    paddingBottom
}) => {


    const textContainerStyles = {
        textContainer: {
            flexDirection: isReverse ? 'row' : 'row-reverse',
            padding: `4rem 5% ${paddingBottom} 5%`,
        }

    }

    useEffect(() => {
        const textContainer = document.querySelector('.textContainer')
        const screenWidth = window.innerWidth;

        if (screenWidth < 768) {
            textContainer.style.paddingTop = '0';
            textContainer.style.paddingBottom = '0'
        }
    })

    return (
        <>
        <div style={textContainerStyles.textContainer} className='textContainer'>
            <div className='headings'>
                {showText ?
                    <div className='heading'>
                        <img
                        src={storyImgOne}
                        alt="Mario & John"
                        className='img'
                        />
                    </div>
                    :
                    <div className='heading'>
                        <h1 class='bigHeading'>{heading}</h1>
                        <h2>{subheading}</h2>
                    </div>
                }
            </div>
            <div className='body'>
                {paragraphs.map((paragraph) => (
                    <p>{paragraph}</p>
                ))}
            </div>
        </div>
        </>
    )
}

export default TextContainer