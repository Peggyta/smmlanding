import React from 'react';
import '../styles/Navbar.css';
//Image & Icons
import logo from '../images/Logo.png';
import divider from '../images/Divider.png';
import glow1 from '../images/Glow-1.svg';



const Navbar = () => {
    return (
        <div className='svg-container w-100 position-relative'>
            <div id="left" className='svg-left position-absolute'> 
            </div>
            <div id="right" className='svg-right position-absolute'>
            </div>
                <div className='nav-container'>
                    <ul className='nav-list d-flex justify-content-center align-items-center list-unstyled'>
                        <li><a className='nav nav-link-one text-decoration-none' href='#'>Sign in</a></li>
                        <li><a className='nav nav-link-two text-decoration-none' href='#'>Sign up</a></li>
                        <div>
                            <a href='#'><img src={logo} alt="logo" /></a>
                        </div>
                        <li><a className='nav nav-link-three text-decoration-none' href='#'>API</a></li>
                        <li><a className='nav nav-link-four text-decoration-none' href='#'>Services</a></li>
                    </ul>
                </div>
                <div className='d-flex justify-content-center'>
                    <img src={divider} alt='divider' />
                </div>
            
        </div>
    );
};

export default Navbar;