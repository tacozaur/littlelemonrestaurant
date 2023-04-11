import React from 'react';
import './styles.css';
import Button from './Button';
import useHover from '../hooks/useHover';


const Card = (props) => {
    const [cardHover, hoverStyles, handleMouseHover, handleMouseLeave] = useHover()

    const cardStyles = {
      card: {
        backgroundColor: "#fff",
        borderRadius: "16px",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.35)",
        paddingBottom: "20px",
        width: "285px",
        height: "auto",
        display: "flex",
        rowGap: "8px",
        flexDirection: "column",
        ...hoverStyles[props.index],
      },
      cardImage: {
        width: "100%",
        height: "200px",
        backgroundColor: "white",
        objectFit: "cover",
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
      },
      foodCardInfo: {
        display: "flex",
        gap: "32px",
        flexDirection: "column",
      },
      foodCardHeading: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 12px",
      },
      foodCardDescription: {
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "0 12px",
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
                bgColor="#EDEFEE"
                hoverBgColor="#333333"
                style={cardStyles.foodCardButton}
                text="Order a Delivery"
              />
            </div>
          </div>
        </article>
      </React.Fragment>
    );
  };

export default Card;