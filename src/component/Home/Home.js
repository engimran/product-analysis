import React from 'react';
import './Home.css'
import image from './Image.jpg'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='selling-mouse'>
                <h2>Best Selling Mouse</h2>
                <h3>Our priority is the quality of our products</h3>
                <button className='button'>See More...</button>
            </div>
            <div className='image-size'>
                <img src={image} alt="" />
            </div>
        </div>

    );
};

export default Home;