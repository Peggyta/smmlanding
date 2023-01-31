import React from 'react';
import Slide from './Slide';
import '../styles/Slider.css'; 
import { Carousel } from 'react-responsive-carousel'; 
import "react-responsive-carousel/lib/styles/carousel.css"; 


const Slider = () => {
    const items = [
        {id:1, title:"Brad Garcia", prefix: "Model/Entrepreneur", description: "To be honest, I didn't even expect that the results of ordering SMM services on this panel would be so good, I'm very impressed! Definitely ordering more soon."},
        {id:2, title:"Brad Garcia", prefix: "Model/Entrepreneur", description: "To be honest, I didn't even expect that the results of ordering SMM services on this panel would be so good, I'm very impressed! Definitely ordering more soon."},
        {id:3, title:"Brad Garcia", prefix: "Model/Entrepreneur", description: "To be honest, I didn't even expect that the results of ordering SMM services on this panel would be so good, I'm very impressed! Definitely ordering more soon."}]
    return (
        <div className='w-100'>
            <div className='testimonial-bg'>
                <div className='stars-bg'></div>
                <div className='carousel-container'>
                    <div className='carousel-title-container'>
                        <h2>Success <span>Stories</span></h2>
                        <div className='glow-area-four'></div>
                        <p>Learn how you can benefit from using our panel by checking out
                        some of the customer reviews.
                        </p>
                    </div>
                <Carousel autoPlay interval="5000" transitionTime="2000" infiniteLoop showThumbs={false} showStatus={false}>
                    {items.map( i => <Slide key={i.id}
                    title={i.title} prefix={i.prefix} description={i.description} />)}                            
                </Carousel>
                </div>  
            </div> 
        </div>
    );
};

export default Slider;