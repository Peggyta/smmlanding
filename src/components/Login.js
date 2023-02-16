import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import Navbar from './Navbar';
import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/feather/eye';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import '../styles/SignUp.css';
import Toggle from './Toggle';

const Login = () => {
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eye);
    const {register, handleSubmit, formState: {errors}, control}= useForm({
        email: '',
        password: ''
    });

    const passwordHandle = () => {
        if(type==='password') {
            setType('text')
            setIcon(eye)
        } else { 
            setType('password')
            setIcon(eyeOff)
        }
    }
    return (
    <>
        <Navbar />
        <div className='signUp-form'>
            <form className='signUp' onSubmit={handleSubmit((data)=> console.log(data))}>
            <div className='form-titles'>
                    <h2 className='sign-title'>Sign <span>In</span></h2>
                    <p className='signUp-form-text'>To create a SMM Dashbord</p>
                </div>
                <div className='form-section'>
                    <label>Email</label>
                    <input 
                    name='email' type='email'
                    placeholder='enter email'
                    {...register('email', {required: true ,pattern: /\S+@\S+\.\S+/.test})} />
                    {errors.email && <p className='err-msg'>Please enter valid email.</p>}
                </div>
                <div className='form-section'>
                    <label>Password</label>
                    <input
                    name='password' type={type}
                    placeholder='enter password'
                    {...register('password', {required: true})} />
                    {errors.password && <p className='err-msg'>Enter your password</p>}
                    <span onClick={passwordHandle} className='eye-icon'><Icon icon={icon} size={22} /></span>
                </div>
                <div className='toggle-smm-section'>
                    {/* <div className='toggle-smm-land'>
                        <input name='toggle' type='checkbox' control={control} />
                        <label>Remember me</label>
                    </div> */}
                    <Controller
                    control={control}
                    name="profileStatus"
                    render={({ field: { ref, ...field } }) => <Toggle {...field} />}
                    />
                    <div><a href='#'>Forgot password?</a></div>
                </div>
                <div className='submit-button'>
                    <button type='submit'>Sign in </button> 
                </div>
                <div className='login-text'>
                    <p>Do not have an account? <NavLink to='/signup' className='login-link'>Sign up</NavLink></p>
                </div>
                
            </form>
        </div>
    </>
    );
};

export default Login;