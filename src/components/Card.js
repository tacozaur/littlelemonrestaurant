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
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.35)",
        paddingBottom: "1.25rem",
        width: "285px",
        height: "auto",
        display: "flex",
        rowGap: ".5rem",
        flexDirection: "column",
        ...hoverStyles[props.index],
      },
      cardImage: {
        width: "100%",
        height: "200px",
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
        padding: "0 1rem",
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
              <p className='pBold-18'>
                {props.title}
              </p>
              <span
              style={{ color: "#EE9972", fontWeight: "400" }}
              className='pExtraBoldUPPER-20'
              >
                {props.price}
              </span>
            </div>
            <div style={cardStyles.foodCardDescription }>
              <p
              style={{ color: "#495E57" }}
              className='pRegular-16'
              >
                {props.description}
              </p>
              <Button
                bgColor="#F4CE14"
                hoverBgColor="#333333"
                textColor ='#333'
                hoverTextColor= '#fff'
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