import React from 'react';
import './Header.css'
import logo from '../../images/logo.jpg'

const Header = () => {
    return (
<div>
<div className='header'>
           <h2>Knowledge Cafe</h2>
           <img src={logo} alt="" />
 </div>
 <hr />
</div>
        
    );
};

export default Header;