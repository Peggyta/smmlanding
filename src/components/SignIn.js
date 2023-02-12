import React, {useState, useEffect} from 'react';
import logoScroll from '../images/logo-Icon.png';
import eyelid from '../images/eye.png';
import '../styles/SignIn.css';

const SignIn = () => {
    const[data, setData] = useState ({
        userName: "",
        password: "",
    });
    const[entered, setEntered] = useState({});
    const [error, setErrors] = useState({});

    useEffect(()=> {
        setErrors(data)
    },[data,entered]);

    const changeHandler = event => {
        if(event.target.name === "isAccepted") {
            setData({...data,[event.target.name]: event.target.checked})
        } else {
            setData({...data,[event.target.name]: event.target.value})
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
                        <div className='input-container d-flex'>
                            <div className='input-boxes d-flex gap-2'>
                                <div className='input-box'>
                                    <input className='input-field' type='text' name='userName' 
                                    value={data.userName} placeholder='Username' onChange={changeHandler} />
                                    {error.userName && entered.userName && <span>{error.userName}</span>}
                                </div>
                                <div className='input-box'>
                                    <input className='input-field' type='password' name='password'
                                    value={data.password} placeholder='Password' onChange={changeHandler} />
                                    {error.password && entered.password && <span>{error.password}</span>}
                                        <img className='input-icon-hide' src={eyelid} alt='hide password' />
                                </div>
                            </div>   
                        <div className='checkbox-container d-flex'>
                            <div className='checkbox-items'>
                                    <input type='checkbox'/>
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