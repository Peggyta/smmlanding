import React from 'react';
import '../styles/Begin.css';
//Images
import sideLogo from '../images/logo-Icon.png';

const Begin = () => {
    return (
        <div className='w-100'>
            <div className='begin-container'>
                <div className='begin-items'>
                    <div className='glow-area-two'></div>
                    <div className='begin-scroll-text'>
                        <p>Scroll</p>
                    </div>
                    <div className='begin-scroll-img'>
                        <img  src={sideLogo} alt='scroll' />
                    </div>
                    <div className='begin-line'></div>
                    <div className='begin-title-container'>
                        <h2>Where to <span>Begin</span>?</h2>
                    </div>
                </div>
                <div className='begin-description-box'>
                        <div className='begin-description-title one'>
                            <p>Create an account</p>
                            <div className='begin-logo one'>
                                <img src={sideLogo} alt='logo' />
                            </div>
                        </div>
                        <div className='begin-description-title two'>
                            <p>Adding funds</p>
                            <div className='begin-logo two'>
                                <img src={sideLogo} alt='logo' />
                            </div>
                        </div>
                        <div className='begin-description-title three'>
                            <p>Pick a service</p>
                            <div className='begin-logo three'>
                                <img src={sideLogo} alt='logo' />
                            </div>
                        </div>
                        <div className='begin-description-title four'><p>Enjoy great results</p></div>
                    </div>
                <div className='begin-description'>
                    <div className='begin-description-card'>
                        <div className='begin-description-text'>
                            <p>Begin with signing up and</p>
                            <p>and then log in to your account</p>
                        </div>
                    </div>
                    <div className='begin-description-card'>
                        <div className='begin-description-text'>
                            <p>The next step is to choose</p>
                            <p>a payment method and add funds.</p>
                        </div>
                    </div>
                    <div className='begin-description-card'> 
                        <div className='begin-description-text'>
                            <p>Pick the SMM service you want</p>
                            <p>and easily place your orders.</p>
                        </div>
                    </div> 
                    <div className='begin-description-card'>
                        <div className='begin-description-text'>
                            <p>You will be informed once your</p>
                            <p>order is complete. it won't take long.</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Begin;