import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-total'>
           <ul>
               <Link to='/'>Home</Link>
               <Link to='/Service'>Service</Link>
               <Link to='/About'>About</Link>
               <Link to='/Blog'>Blog</Link>
            </ul> 
        </div>
    );
};

export default Header;