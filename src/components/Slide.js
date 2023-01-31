import React from 'react';
import '../styles/Slider.css';
import photo from '../images/Photo.png';

const Slide = (props) => {
    return (
        <div className='carousel-sections'>
            <div className='carousel-sec-one'><img src={photo} alt='photo' /></div>
            <div className='carousel-sec-two'>
                <h4>{props.title}</h4>
                <p className='carousel-title'>{props.prefix}</p>
                <p className='crousel-paragraph'>{props.description}</p>
            </div>
        </div>
    );
};

export default Slide;