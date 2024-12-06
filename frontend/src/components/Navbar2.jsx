import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import person1 from "../assets/accountant.png";
import PopupForm from './PopupForm';

import "./Navbar2.css";
const Navbar2 = () => {


    const [click, setClick] = useState(false);
    const [popClick, setPopclick] = useState(false);

    const handleClick = () => setClick(!click)



    return (
        <div className='container'>
            <nav>
                <div className="logo">
                    <NavLink to="/"> <img src={person1} alt="" /></NavLink>
                </div>
                <div class="container-eg-btn-4 uf-border">
                <Link onClick={() => setPopclick(!popClick)} class="button button-2">Subscribe</Link>
                </div>
                <div className={click ? "hamburger toggle" : "hamburger"} onClick={handleClick}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <ul className={click ? "nav-links open" : "nav-links"}>
                    <li className={click ? "fade" : ""}><Link to="/">Home</Link></li>
                    <li className={click ? "fade" : ""}><Link to="/project">Projects</Link></li>
                    <li className={click ? "fade" : ""}><Link to="/about">About</Link></li>
                    <li className={click ? "fade" : ""}><Link to="/contact">Contact Us</Link></li>
                    <li className={click ? "fade" : ""}><Link to="/service"></Link></li>

                    <li className={click ? "fade" : ""}><button className="login-button" href="#">Login</button></li>
                    <li className={click ? "fade" : ""} onClick={() => setPopclick(!popClick)}><button className="join-button" href="#">Subscribe</button></li>
                </ul>
            </nav>
            <PopupForm trigger={popClick} setTrigger={setPopclick}>
            </PopupForm>
        </div>
    )
}

export default Navbar2