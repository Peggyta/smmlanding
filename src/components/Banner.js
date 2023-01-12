import React from 'react';
import '../styles/Banner.css';
//Image & Icons
import mobile from '../images/Mobile-image.png';
import logoGrey from '../images/Logo-grey.png';
import logoIcon from '../images/logo-Icon.png';

const Banner = () => {
    return (
        <div className='w-100'>
            <div className='banner-container d-flex justify-content-between'>
                <div className='banner'>
                    <div className='description'>
                        <h1 className='smm-title'>SMM LAND <span className='panel-title'>PANEL</span></h1>
                        <p className='smm-text'>The ultimate source of different SMM services</p>
                        <p className='second-smm-text'>to meet your needs.</p>
                        <p className='smm-text-mobile'>The ultimate source of different SMM services
                            to meet your needs.
                        </p>
                    </div>
                    <div className='services d-flex'>
                        <div>
                            <img src={logoGrey} alt='logo' />
                        </div>
                        <div className='services-text'>
                            <p>Cheap services</p>
                            <p>Quick delivery</p>
                            <p>The Best!</p>
                        </div>
                    </div>
                    <div className='services-btn'>
                        <a className='btn-link text-decoration-none btn' href='#'>
                            <img className='logo-btn' src={logoIcon} alt='icon' />Services
                        </a>
                    </div>
                </div>
                <div className='img-container'>
                    <img className='mobile-img' src={mobile} alt='mobile' />
                </div>
            </div>
        </div>
    );
};

export default Banner;