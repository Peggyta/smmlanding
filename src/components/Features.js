import React from 'react';
import '../styles/Features.css';

const Features = () => {
    return (
        <div className='w-100'>
            <div className='features-container'>
                <div className='glow-area-one'></div>
                    <div className='features-title'><h2>Why <span className='span-one'>SMM</span>
                        <span className='span-two'>?</span>
                </h2></div>     
                <div>
                    <div className='ring-svg'>
                        <div className='features-description one'>
                            <p className='description-title'>Great Quality</p>
                            <p className='description-text one'>The quality of out SMM services will pleasantly surprise you</p>
                        </div>
                        <div className='features-description two'>
                            <p className='description-title'>Really Cheap</p>
                            <p className='description-text'>SMM services that we offer on our panel are extremely cheap</p>
                        </div>
                        <div className='features-description three'>
                            <p className='description-title'>Multiple Payment Systems</p>
                            <p className='description-text'>Great variety of payment methods for you to choose from</p>
                        </div>
                        <div className='features-description four'>
                            <p className='description-title'>Extra Quick Delivery</p>
                            <p className='description-text'>Customers order on our panel are processed very fast</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;