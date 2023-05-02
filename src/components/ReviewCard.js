import React from 'react'
import './styles.css'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import useHover from '../hooks/useHover';


const ReviewCard = (props) => {

        // Calculate star rating base on rating prop
        const starRating = (rating) => {
            const fullStars = Math.floor(rating)
            const decimalPart = rating - fullStars
            const halfStars = Math.ceil(rating - fullStars) === 1 ? 1 : 0
            const emptyStars = 5 - fullStars - (decimalPart > 0 ? 1 : 0)
            const stars = []

            // Push full stars
            for (let i = 0; i < fullStars; i++) {
              stars.push(
                <FontAwesomeIcon
                  icon={faStar}
                  style={reviewCardStyles.reviewCardRatingStar}
                  key={i}
                />
              )
            }

            // Push half stars
            for (let i = 0; i < halfStars; i++) {
              stars.push(
                <FontAwesomeIcon
                  icon={faStarHalfAlt}
                  style={reviewCardStyles.reviewCardRatingStar}
                  key={`half-${i}`}
                />
              )
            }

            // Push empty stars
            for (let i = 0; i < emptyStars; i++) {
                stars.push(
                  <FontAwesomeIcon
                    icon={faStar}
                    style={reviewCardStyles.reviewCardRatingStar}
                    key={`empty-${i}`}
                    color="#ccc"
                  />
                )
            }

            return stars
          }


    const reviewCardStyles = {

        reviewCard: {
            color: 'white',
            flex: '0 1 calc(25% - 20px)',
            maxWidth:'300px',
            padding: '20px',
            textAlign: 'center',
            borderRadius: '16px',
        },
        reviewCardImage: {
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            margin: '0 auto 20px',
            display: 'block',
            objectFit: 'cover'
        },
        reviewCardName: {
            marginBottom: '10px',
        },
        reviewCardRating: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '10px',
        },
        reviewCardRatingStar: {
            fontSize :'1rem',
            color: '#ffd700'
        }
    }

    return (
        <div
        style={reviewCardStyles.reviewCard}
        >
            <img src={props.image} alt={props.title} style={reviewCardStyles.reviewCardImage}/>
            <p
            style={reviewCardStyles.reviewCardName}
            className='pExtraBold-16'
            >
              {props.name}
            </p>
            <div style={reviewCardStyles.reviewCardRating}>{starRating(props.rating)}</div>
            <p className='pRegular-16'>
            <em>{props.text}</em>
            </p>
        </div>
    )
}

export default ReviewCard