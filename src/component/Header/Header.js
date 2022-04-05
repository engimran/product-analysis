import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='navigate-style'>
                <Link to="/" >Home</Link>
                <Link to="/reviews" >Reviews</Link>
                <Link to="/deshbord" >Deshbord</Link>
                <Link to="/blogs" >Blogs</Link>
                <Link to="/about" >About</Link>
            </nav>
        </div>
    );
};

export default Header;