import React, { useEffect, useState } from 'react';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='review-style'>
            {
                reviews.map(review => <div className='border-style' >
                    <img src={review.picture} alt="" />
                    <p>Reviewer Name: {review.name}</p>
                    <p>Comments: {review.comments}</p>
                    <p>Ratings: {review.rating}</p>
                </div>
                )
            }
        </div>
    );
};

export default Reviews;