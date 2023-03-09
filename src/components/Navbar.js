import React, {useState, useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
//Image & Icons
import logo from '../images/Logo.png';
import divider from '../images/Divider.png';
import user from '../images/user.png';
import hamburMenu from '../images/hambur.png';



const Navbar = () => {
    const [show, setShow] = useState(true);
    const [currentScrollY, setCurrentScrollY] = useState(0);
    const [sideBar, setSideBar] = useState(false);
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
                        <li><Link to='/login' className='nav nav-link-one text-decoration-none'>Sign in</Link></li>
                        <li><Link to='/signup' className='nav nav-link-two text-decoration-none'>Sign up</Link></li>
                        <div className='logo-container position-relative'>
                            <Link to='/'><img src={logo} alt="logo" /></Link>
                            <div className='logo-glow'></div>
                        </div>
                        <li><Link to='/api' className='nav nav-link-three text-decoration-none'>API</Link></li>
                        <li><Link to='/services' className='nav nav-link-four text-decoration-none'>Services</Link></li>
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
                    <a href='/'>
                        <img src={logo} alt='logo' />
                    </a>    
                </div>
                <div className={sideBar ? 'show-mobile-menu' : 'hide-mobile-menu' } onClick={() => setSideBar(!sideBar)}>
                    <div>
                        <img className={sideBar && 'mobile-icon' } src={hamburMenu} alt='hambur-menu' />
                        <ul className= {sideBar ? 'mobile-list-links' : 'hide-list-links'}>
                            <li><NavLink to='/login' className='nav' >Sign in</NavLink></li>
                            <li><NavLink to='/signup' className='nav'>Sign up</NavLink></li>
                            <li><NavLink to='/api' className='nav'>API</NavLink></li>
                            <li><NavLink to='/services' className='nav'>Services</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>   
        </div>
        </>
    );
};

export default Navbar;