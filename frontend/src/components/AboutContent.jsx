import React from 'react';
import { Link } from 'react-router-dom';
import Abtimg from "../assets/aboutimg.png";
import Abtimg2 from "../assets/aboutimg2.png";
import "./AboutContent.css";

const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1>Who Am I?</h1>
                <p>I am SDET and MERN stack developer. I make responsive and end-to-end tested websites for my clients.</p>
                <Link to="/contact" >
                    <button className='btn'>Contact US</button>
                </Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img className='img' src={Abtimg} alt='true'></img>
                    </div>
                    <div className='img-stack bottom'>
                        <img className='img' src={Abtimg2} alt='true'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;