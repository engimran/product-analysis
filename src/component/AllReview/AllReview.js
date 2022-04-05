import React from 'react';
import { Link } from 'react-router-dom';
import './AllReview.css'

const AllReview = () => {
    return (
        <div className='allReview'>
            <Link to="/reviews" >All Reviews</Link>
        </div>
    );
};

export default AllReview;