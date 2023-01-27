import React, {useState, useEffect} from 'react';
import '../styles/Navbar.css';
//Image & Icons
import logo from '../images/Logo.png';
import divider from '../images/Divider.png';
import user from '../images/user.png';
import hamburMenu from '../images/hambur.png';


const Navbar = () => {
    const [show, setShow] = useState(true);
    const [currentScrollY, setCurrentScrollY] = useState(0);
    const controlNav = () => {
        if(typeof window !== 'undefined') {
            if(window.scrollY > currentScrollY) {
                setShow(false); //hide nav
            } else {
                setShow(true); // show nav
            }
            setCurrentScrollY(window.scrollY); //current page location
        }
    };
    useEffect(()=>{
        if(typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNav);
            return () => {
                window.removeEventListener('scroll', controlNav);
            };
        }
    },[currentScrollY]);
    return (
        <>
        <div className='glow-images position-relative'>
                <div className='svg-left position-absolute'> </div>
                <div className='svg-right position-absolute'></div>
            </div>
        <div className='svg-container'>
            <div className={show ? 'active': 'hidden'}>
                <ul className='nav-list d-flex justify-content-center align-items-center list-unstyled position-relative z-index-1  '>
                        <li><a className='nav nav-link-one text-decoration-none' href='#'>Sign in</a></li>
                        <li><a className='nav nav-link-two text-decoration-none' href='#'>Sign up</a></li>
                        <div className='logo-container position-relative'>
                            <a href='#'><img src={logo} alt="logo" /></a>
                            <div className='logo-glow'></div>
                        </div>
                        <li><a className='nav nav-link-three text-decoration-none' href='#'>API</a></li>
                        <li><a className='nav nav-link-four text-decoration-none' href='#'>Services</a></li>
                    </ul>
                    <div className='divider-container justify-content-center'>
                        <img src={divider} alt='divider' />
                    </div> 
                </div>
        </div>
        <div className='mobile-menu position-relative'>
            <div className='mobile-svg position-absolute'></div>
            <div className='mobile-items position-relative z-index-1'>
                <div>
                    <a href='#'>
                        <img className='mobile-icons' src={user} alt='user' />
                    </a>  
                </div>
                <div>
                    <a href='#'>
                        <img src={logo} alt='logo' />
                    </a>    
                </div>
                <div>
                    <a href='#'>
                        <img className='mobile-icons' src={hamburMenu} alt='hambur-menu' />
                    </a>
                </div>
            </div>   
        </div>
        </>
    );
};

export default Navbar;