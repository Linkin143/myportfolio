import React from 'react';
import "./TechWork.css";

import TechWorkImg from "../assets/techwork.png";

const TechWork = () => {
  return (
    <div className='tech-work-container'>
        <div className='tech-work techImg'>
            <img src={TechWorkImg} alt=''></img>
        </div>
        <div className='tech-work'></div>
    </div>
  )
}

export default TechWork