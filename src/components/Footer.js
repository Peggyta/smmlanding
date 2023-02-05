import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className='footer-section'>
           <p className='footer-text'>Copyright © 2019-2022 <a href='#'>SMMLanding.com</a> All rights reserved.</p>
           <p className='designer'>UI Design - <span>Foxious</span> / Development - <span>Peggyta</span></p> 
        </div>
    );
};

export default Footer;