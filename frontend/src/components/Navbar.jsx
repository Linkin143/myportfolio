import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./Navbarstyles.css";



const Navbar = () => {

const [click,setClick] = useState(false);

const handleClick = () => setClick(!click)


const [color,setColor]=useState(false);

const changeColor =()=>{
    if(window.scrollY >= 1){
        setColor(true);
    }else{
        setColor(false);
    }
}
window.addEventListener("scroll",changeColor);

    return (
        <div className={color ? ("header header-bg") : ("header")}>

            <Link to="/"> <h1>
                My Portfolio
            </h1></Link>
            <ul style={{listStyleType:"none"}} className= {click ? ("nav-menu active") : ("nav-menu")}>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/project">
                        Project
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        Contact Us
                    </Link>
                </li>

            </ul>
            <div className='hamburger' onClick={handleClick}>

            {click ? (<FaTimes size={20} style={{color:"white"}}/>) : (<FaBars size={20} style={{color:"white"}}/>
            )}
              
              
              
            </div>


        </div>
    )
}

export default Navbar