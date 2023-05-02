import React from 'react';
import './styles.css';
import Button from './Button';
import useHover from '../hooks/useHover';


const Card = (props) => {
    const [cardHover, hoverStyles, handleMouseHover, handleMouseLeave] = useHover()

    const cardStyles = {
      card: {
        backgroundColor: "#fff",
        borderRadius: "1rem",
        border: '2px solid black',
        paddingBottom: "1.25rem",
        width: props.width,
        height: "auto",
        display: "flex",
        rowGap: ".5rem",
        flexDirection: "column",
        ...hoverStyles[props.index],
      },
      cardImage: {
        width: "100%",
        height: "260px",
        backgroundColor: "white",
        objectFit: "cover",
        borderTopLeftRadius: "1rem",
        borderTopRightRadius: "1rem",
      },
      foodCardInfo: {
        display: "flex",
        gap: "2rem",
        flexDirection: "column",
      },
      foodCardHeading: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 .75rem",
      },
      foodCardDescription: {
        minHeight: props.height,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "0 1.5rem",
      },
      foodCardButton: {
        alignSelf: "flex-end",
      },
    };

    return (
      <React.Fragment>
        <article
          style={cardStyles.card}
          className="card"
          onMouseEnter={() => handleMouseHover(props.index)}
          onMouseLeave={() => handleMouseLeave(props.index)}
        >
          <div>
            <img
              src={props.image}
              alt={props.title}
              style={cardStyles.cardImage}
            />
          </div>
          <div style={cardStyles.foodCardInfo}>
            <div style={cardStyles.foodCardHeading} >
              <p style={{fontSize: '20px', fontWeight: 'bold'}}>
                {props.title}
              </p>
              <span
              style={{ color: "#ff6d00", fontWeight: "400" }}
              className='pExtraBoldUPPER-20'
              >
                {props.price}
              </span>
            </div>
            <div style={cardStyles.foodCardDescription }>
              <p
              style={{ color: "#495E57", height: '6rem' }}
              className='pRegular-16'
              >
                {props.description}
              </p>
              <Button
                bgColor='#ff6d00'
                hoverBgColor='#0c1618'
                textColor='#fff'
                hoverTextColor='#fff'
                style={cardStyles.foodCardButton}
                text="Add To Cart"
                padding='16px 24px'
              />
            </div>
          </div>
        </article>
      </React.Fragment>
    );
  };

export default Card;