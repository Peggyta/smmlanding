import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import logoScroll from '../images/logo-Icon.png';
import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/feather/eye';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import '../styles/SignIn.css';

const SignIn = () => {
    const[type, setType] = useState('password');
    const[icon, setIcon] = useState(eyeOff);
    const{register, handleSubmit} = useForm({
        email: '',
        password: ''
    });
    const onError = (errors, e) => (console.log(errors, e));
   const passwordHandler = () => {
    if(type === 'password') {
        setIcon(eye)
        setType('text');
        
    } else {
        setIcon(eyeOff);
        setType('password');
    }
   }
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
                            <p className='sign-mobile-form'>Sign in to access or sign up to create your panel</p>
                        </div>
                        <form onSubmit={handleSubmit((data) => console.log(data), onError)} className='input-container d-flex'>
                            <div className='input-boxes d-flex gap-2'>
                                <div className='input-box'>
                                    <input className='input-field' type='text' name='email' 
                                     placeholder='Username' {...register('email',{required: true})} /> 
                                </div>
                                <div className='input-box'>
                                    <input className='input-field' type={type} name='password'
                                     placeholder='Password' {...register ('password', {required:true})} />
                                     <span onClick={passwordHandler} className='input-icon-hide'><Icon icon={icon} size={25}/></span>
                                </div>
                            </div>   
                        <div className='checkbox-container d-flex'>
                            <div className='checkbox-items'>
                                    <input type='checkbox' />
                                    <label className='remember-text'>Remember me</label>  
                            </div>
                            <div className='checkbox-items-mobile'>
                                <div className='d-flex justify-content-center'>
                                    <label className='switch'>
                                        <input type='checkbox' />
                                        <span className='slider round'></span>
                                    </label>
                                    <label className='remember-link-mobile'>Remember me</label>
                                </div>
                                <div className='pass-link-mobile'><a className='text-decoration-none' href='#'>Forgot password?</a></div>
                            </div>
                            <div className='sign-btn-section'>
                                <button className=' sign-btn text-decoration-none btn' type='submit'>
                                    <img src={logoScroll} alt='icon' />Sign in
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className='sign-pass-link d-flex'>
                        <div className='sign-pass-text'>
                            <p><NavLink className='text-decoration-none' to='/signup'>Sign Up</NavLink> for new account</p>
                        </div>
                        <div className='sign-pass-text' id='forgot-pass'>
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