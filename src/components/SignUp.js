import React from 'react';
import { NavLink } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import Navbar from './Navbar';
import '../styles/SignUp.css';

const SignUp = () => {
    const{
        register, 
        handleSubmit,
        getValues,
        watch, 
        formState: {errors},
    } = useForm({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPaword: '',
        isAccepted: false
    });
    const onError = (errors,e) => console.log(errors, e);
    return (
    <>
    <Navbar />
        <div className='signUp-form'>
            <form className='signUp' onSubmit={handleSubmit((data) => console.log(data), onError)}>
                <div className='form-titles'>
                    <h2 className='sign-title'>Sign <span>Up</span></h2>
                    <p className='signUp-form-text'>To create a SMM Dashbord</p>
                </div>
                <div className='form-section'>
                    <label>Name</label>
                    <input 
                    name='firstName' type='text'
                    placeholder='enter name'
                    {...register('firstName', {required: true, minLength:4})} />
                    {errors.firstName && <p className='err-msg'>Name must be at least 5 characters.</p>}
                </div>
                <div className='form-section'>
                    <label>Email</label>
                    <input 
                    name='email' type='email'
                    placeholder='enter email'
                    {...register('email', {required: true ,pattern: /\S+@\S+\.\S+/.test })} />
                    {errors.email && <p className='err-msg'>Please enter valid email.</p>}
                </div>
                <div className='form-section'>
                    <label>Password</label>
                    <input 
                    name='password' type='password'
                    placeholder='enter password'
                    {...register('password', {required:true, minLength: 8})} />
                    {errors.password && <p className='err-msg'>Password must be at least 8 characters long</p>}
                </div>
                <div className='form-section'>
                    <label>Confirm Password</label>
                    <input 
                    name='confirmPassword' type='password'
                    placeholder='confirm password'
                    {...register('confirmPassword', {required:true, minLength: 8})} />
                    {watch('confirmPassword') !== watch('password') 
                    && getValues('confirmPassword') ? <p className='err-msg'>Password doesn't match</p> : null}
                </div>
                <div className='accept-rules'>
                    <div className='accept-box'>
                        <input
                        name='isAccepted' type='checkbox'
                        {...register('isAccepted', {required:true})}/>
                        <label className='accept-text'>I accept the terms & policy</label>
                    </div> 
                    <div>
                        {errors.isAccepted && <div className='err-terms'>Please accept our terms</div>}
                    </div> 
                </div>
                <div className='submit-button'>
                    <button type='submit'>Sign in </button>
                </div>
                <div className='login-text'>
                    <p>Already have an account? <NavLink to='/login' className='login-link'>Sign in</NavLink></p>
                </div>
            </form>
        </div>
    </>
    );
};

export default SignUp;