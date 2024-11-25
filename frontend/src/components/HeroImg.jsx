import React from 'react';
import { Link } from "react-router-dom";
import IntroImg from "../assets/p1.jpg";
import "./HeroImg.css";

const HeroImg = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='intro-img' src={IntroImg} alt='IntroImg'>

                </img>
                <div className='content'>
                    <p>
                        Hi, I am Prince Kumar.
                    </p>
                    <h1>
                        SDET and MERN Stack Developer.
                    </h1>
                    <div>
                        <Link to="/project" className='btn'>
                            Projects
                        </Link>
                        <Link to="/contact" className='btn btn-light'>
                            Contact
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeroImg;