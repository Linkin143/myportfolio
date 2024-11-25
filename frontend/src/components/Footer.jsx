import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Footer.css";





const Footer = () => {
    return (
        <div className='footer-div'>
            <footer className="footer">
                <div className="footer-left col-md-4 col-sm-6">
                    <p className="about">
                        <span> About me</span> MERN Stack Developer and Software development engineer in test.
                    </p>
                    <div className="icons">
                        
                        <NavLink target='_blank' to="https://x.com/Linkinpark3110"><i className="fa fa-twitter"></i></NavLink>
                        <NavLink target='_blank'  to="https://www.linkedin.com/in/prince-kumar-07759b246/"><i className="fa fa-linkedin"></i></NavLink>
                        
                        <NavLink target='_blank' to="https://www.instagram.com/park___linkin_/"><i className="fa fa-instagram"></i></NavLink>
                    </div>
                </div>
                <div className="footer-center col-md-4 col-sm-6">
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span> VIP colony, Lajpat Nagar, Argora</span> Ranchi, India</p>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <p> (+91) 776 202 4920</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><NavLink target='_blank' to="https://mail.google.com/mail/u/0/#inbox?compose=FZxzwjpjqFZmJwnQTBSBBnnSHjhgHKVrDXllcCrzbvQrpcFcLhnPGKWRfRFlthzQNxLmtDGTMJSqQQzqxxzzVlsblDXnWRpdBlVqkLpWsNSdwllgQxZdvjRsFftfCbrmXmSfkKggpNgztqZshcZZsHQzphGpqtZwzTdhg"> kumarprince143p143@gmail.com</NavLink></p>
                    </div>
                </div>
                <div className="footer-right col-md-4 col-sm-6">
                    <h2> FutureX<span>Team</span></h2>
                    <p className="menu">
                        <NavLink to="/"> Home</NavLink> |
                        <NavLink to="/about"> About</NavLink> |
                        <NavLink to="/project"> Projects</NavLink> |
                        <NavLink to="/contact"> Contact Us</NavLink> 
                        
                    </p>
                    <p className="name">  FutureX &copy; 2024</p>
                </div>
            </footer>

        </div>
    )
}

export default Footer