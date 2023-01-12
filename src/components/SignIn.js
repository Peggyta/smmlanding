import React from 'react';
import logoScroll from '../images/logo-Icon.png';
import '../styles/SignIn.css';

const SignIn = () => {
    return (
        <div className='w-100'>
            <div className='sign-container'>
                <div className='scroll-section d-flex flex-column justify-content-center align-items-baseline '>
                    <div className='scroll-img'>
                        <img  src={logoScroll} alt='scroll' />
                    </div>
                    <div className='scroll-text'>
                        <p>Scroll</p>
                    </div>
                    <div className='scroll-line'>
                    </div>
                    <div className='sign-form'>
                        <div>
                            <h2 className='sign-title'>Sign <span>in</span></h2>
                            <p className='sign-form-items'>Sign in to access or sign up to create your panel in order to place view, like, subscription, followers, etc for</p>
                            <p className='sign-form-items'>your desired social media accounts. Facebook, Telegram, instagram, Youtube, Tiktok, Twitter, etc... </p>
                        </div>
                        <div className='input-container d-flex justify-content-between'>
                            <div className='input-box'>
                                <input className='input-field' type='text' placeholder='Username' />
                            </div>
                            <div className='input-box'>
                                <input className='input-field' type='password' placeholder='Password'  />
                            </div>
                        <div className='checkbox-container d-flex'>
                            <div className='checkbox-items d-flex align-items-center'>
                                    <input type='checkbox'/>
                                    <label className='remember-text'>Remember me</label>       
                            </div>
                            <div>
                                <a className=' sign-btn text-decoration-none btn' href='#'>
                                    <img src={logoScroll} alt='icon' />Sign in
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='sign-pass-link d-flex'>
                        <div className='sign-pass-text'>
                            <p><a className='text-decoration-none' href='#'>Sign Up</a> for new account</p>
                        </div>
                        <div className='sign-pass-text'>
                            <p><a className='text-decoration-none' href='#'>Forgot password?</a> click to recover</p>
                        </div>
                    </div> 
                </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;