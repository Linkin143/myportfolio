import React from 'react';
import { NavLink } from 'react-router-dom';
import "./HeroPage.css";

const HeroPage = () => {
    return (

        <div className='big-container'>
            <section className="banner" id="home">
                <div className="text-banner">
                    <h2>Hello, I'm a<br /><span> SDET and MERN Stack Developer.</span></h2>
                    <h3>I'm a here to help you.</h3>
                    <div className='pro-btns'>
                        <NavLink target='_blank' to="/about" className="btn btn-first">Know More</NavLink>
                        <NavLink target='_blank' to="/contact" className="btn btn-second">Contact Us</NavLink>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default HeroPage;