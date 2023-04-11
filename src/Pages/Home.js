import React from 'react';

import '.././App.css';

import Hero from '../components/Main.js';
import Specials from '../components/Specials.js';
import CustomersSay from '../components/Testimonials.js';
import Chicago from '../components/Chicago.js';
import Footer from '../components/Footer.js';





const Home = () => {

    return (
    <section>
    <React.Fragment>
        <div>
            <div className='layout'>
                <div className='hero hero-nested'>
                    <Hero/>
                </div>
                <div className='highlights'>
                    <Specials/>
                </div>
                <div className='testimonials testimonials-nested'>
                    <CustomersSay/>
                </div>
                <div className='about about-flex'>
                    <Chicago/>
                </div>
                <div className='footer footer-nested'>
                    <Footer/>
                </div>
            </div>
        </div>
    </React.Fragment>
    </section>
    )
}

export default Home;
