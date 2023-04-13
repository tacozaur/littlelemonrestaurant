import React from 'react';
import './styles.css'
import storyImgOne from '../assets/story-1.png'

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
            display: 'flex',
            flexDirection: isReverse ? 'row' : 'row-reverse',
            padding: `4rem 7.5rem ${paddingBottom} 7.5rem`,
            alignItems: 'center',
            gap: '10rem'
        },
        body: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
        },
        heading: {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
        },
        img: {
            minHeight: '160px',
            maxHeight: '280px',
            width: 'auto'
        }
    }

    return (
        <>
        <div style={textContainerStyles.textContainer}>
            {showText ?
                <div style={textContainerStyles.heading}>
                    <img
                    src={storyImgOne}
                    alt="Mario & John"
                    style={textContainerStyles.img}
                    />
                </div>
                :
                <div style={textContainerStyles.heading}>
                    <h1 class='bigHeading'>{heading}</h1>
                    <h2>{subheading}</h2>
                </div>
            }
            <div style={textContainerStyles.body}>
                {paragraphs.map((paragraph) => (
                    <p>{paragraph}</p>
                ))}
            </div>
        </div>
        </>
    )
}

export default TextContainer