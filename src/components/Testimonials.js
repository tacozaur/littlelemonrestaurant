import React from 'react';
import ReviewCard from './ReviewCard';

const CustomersSay = () => {

    const restaurantReviews = [
        {
          name: "John Smith",
          text: "''The food was amazing and the service was outstanding! I will definitely be back.''",
          image: "https://i.pravatar.cc/300",
          rating: 5
        },
        {
          name: "Jane Doe",
          text: "''This is my new favorite restaurant! The atmosphere is great and the food is delicious.''",
          image: "https://i.pravatar.cc/150",
          rating: 5
        },
        {
          name: "Bob Johnson",
          text: "''I had a wonderful experience at this restaurant. The staff was friendly and the food was top-notch.''",
          image: "https://i.pravatar.cc/150",
          rating: 4.5,
        },
        {
            name: "Emi Paole",
            text: "''The food was amazing and the service was outstanding! I will definitely be back.''",
            image: "https://i.pravatar.cc/200",
            rating: 5
        }
    ];

    return (
        <React.Fragment>
            <>
                <section class='testimonials-container'>
                    <div class='testimonials-heading'>
                        <h1>Testimonials</h1>
                    </div>
                    <div class='testimonials-list-container'>
                        {restaurantReviews.map((item, index) => (
                            <ReviewCard key={index} {...item}/>
                        ))}
                    </div>
                </section>
            </>
        </React.Fragment>
    )
}

export default CustomersSay