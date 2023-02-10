import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import SignIn from './SignIn';
import Features from './Features';
import Begin from './Begin';
import MobileBegin from './MobileBegin';
import Slider from './Slider';
import Faq from './Faq';
import Footer from './Footer';

const Landing = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <SignIn />
            <Features />
            <Begin />
            <MobileBegin />
            <Slider />
            <Faq />
            <Footer />
        </div>
    );
};

export default Landing;