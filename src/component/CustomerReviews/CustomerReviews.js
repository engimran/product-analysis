import React, { useEffect, useState } from 'react';
import './CustomerReviews.css'

const CustomerReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div><h1 className='headline'>Customer Reviews</h1>
            <div className='review-style'>

                {
                    reviews.slice(0, 6).map(review => <div className='border-style' >
                        <img src={review.picture} alt="" />
                        <p>Reviewer Name: {review.name}</p>
                        <p>Comments: {review.comments}</p>
                        <p>Ratings: {review.rating}</p>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default CustomerReviews;