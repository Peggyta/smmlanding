import React from 'react';
import '../styles/MobileBegin.css';
import downLogo from '../images/logo-Icon.png';

const MobileBegin = () => {
    return (
        <div className='mobile-begin'>
            <div className='mobile-begin-title'>
                <h2>Where to <span>Begin</span>?</h2>
                <div className='glow-area-three'></div>
            </div>

            <div className='mobile-begin-card'>
                <div className='mobile-begin-t-box one'>
                    <p className='mobile-begin-titles'><span className='card-number one'>01</span> Create an account</p>
                    <div className='down-logo one'><img src={downLogo} alt='logo' /></div>
                </div>
                <div className='mobile-begin-text'>
                    <p className='second-line'>Begin with signing up and and then log in to your account</p>
                </div>
            </div>
            <div className='mobile-begin-card'>
                <div className='mobile-begin-t-box two'>
                    <p className='mobile-begin-titles'><span className='card-number two'>02</span> Adding funds</p>
                    <div className='down-logo two'><img src={downLogo} alt='logo' /></div>
                </div>
                <div className='mobile-begin-text'>
                    <p className='second-line'>The next step is to choose a payment method and add funds.</p>
                </div>
            </div>
            <div className='mobile-begin-card'>
                <div className='mobile-begin-t-box three'>
                    <p className='mobile-begin-titles'><span className='card-number three'>03</span> Pick a service</p>
                    <div className='down-logo'><img src={downLogo} alt='logo' /></div>
                </div>
                <div className='mobile-begin-text'>
                    <p className='second-line'>Pick the SMM service you want and easily place your orders.</p>
                </div>
            </div>
            <div className='mobile-begin-card'>
                <div className='mobile-begin-t-box four'>
                    <p className='mobile-begin-titles'><span className='card-number four'>04</span> Enjoy great results</p>
                </div>
                <div className='mobile-begin-text'>
                    <p className='second-line'>You will be informed once your order is complete. it won't take long.</p>   
                </div>
            </div>
        </div>
    );
};

export default MobileBegin;