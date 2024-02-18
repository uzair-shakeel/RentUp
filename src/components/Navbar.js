import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import Logo from '../images/logo.png'

const Navbar = () => {

    return (
        <div>
            <header>
                <input type="checkbox" name="" id="toggler" />
                <label for="toggler" class="fas fa-bars"></label>

                <a href="#" className='logo'><img src={Logo} alt="" /></a>
                <div className='navbar'>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/services'}>Services</Link></li>
                        <li><Link to={'/blog'}>Blog</Link></li>
                        <li><Link to={'/pricing'}>Pricing</Link></li>
                        <li><Link to={'/contact'}>Contact</Link></li>
                    </ul>
                </div>
                {/* <div id='menu' className="fas fa-bars"></div> */}
                <button><i className="fas fa-regular fa-right-to-bracket"></i>Sign In</button>
            </header>
        </div>
    );
}

export default Navbar;
