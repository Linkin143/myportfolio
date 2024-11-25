import React from 'react';
import { NavLink } from 'react-router-dom';
import "./AnimatedIntro.css";


const AnimatedIntro = () => {
    return (

        <figure>
            <h1>
                Crafting the world with website designing
            </h1>
            <figcaption>
                I am a passionate software developer with a keen eye for crafting efficient, scalable, and user-friendly solutions. My expertise spans various programming languages and frameworks, allowing me to build robust applications that meet diverse needs. I thrive on solving complex problems and continuously learning new technologies to stay at the forefront of the industry. Whether working on backend systems, frontend interfaces, or full-stack development, I am committed to delivering high-quality code and seamless user experiences. Let's connect and bring innovative ideas to life together!

            </figcaption>
            <div className='pro-btns'>
                <NavLink to="/contact" className="btn">Let's Connect</NavLink>
            </div>
        </figure>


    )
}

export default AnimatedIntro