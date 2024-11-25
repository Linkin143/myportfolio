import React from 'react';
import CountUp from "react-countup";
import ExpertiseImg from "../assets/expertiseImg.gif";
import "./ExpertLevel.css";

const ExpertLevel = () => {
 

  return (

    <div className='expertise-header'>
      <h1>Expertise Level</h1>
      <div className='expertise-container'>
        <div className='expertise-box gif-img'>
          <img src={ExpertiseImg} alt=''></img>
        </div>
        <div className='expertise-box levels'>
          <div className='expertise1'>
            <div className='levelsname1'>
              <h2>  <i class="fa-solid fa-laptop-file"></i> Frontend Development</h2>
            </div>
            <div className='percentage'>
              <h2><CountUp start={0} end={95} duration={6} delay={3}/>%</h2>
            </div>

          </div>
          <div className='levels-line levels-line1'></div>
          <div className='expertise1'>
            <div className='levelsname1'>
              <h2>  <i class="fa-solid fa-server"></i> Backend Development</h2>
            </div>
            <div className='percentage'>
              <h2><CountUp start={0} end={90} duration={6} delay={3}/>%</h2>
            </div>

          </div>
          <div className='levels-line levels-line2'></div>
          <div className='expertise1'>
            <div className='levelsname1'>
              <h2><i class="fa-solid fa-screwdriver-wrench"></i> End To End Testing</h2>
            </div>
            <div className='percentage'>
              <h2><CountUp start={0} end={80} duration={6} delay={3}/>%</h2>
            </div>

          </div>
          <div className='levels-line levels-line3'></div>
          <div className='expertise1'>
            <div className='levelsname1'>
              <h2> <i class="fa-solid fa-database"></i> Database Technologies</h2>
            </div>
            <div className='percentage'>
              <h2><CountUp start={0} end={70} duration={6} delay={3}/>%</h2>
            </div>

          </div>
          <div className='levels-line levels-line4'></div>
          <div className='expertise1'>
            <div className='levelsname1'>
              <h2> <i class="fa-solid fa-cloud-arrow-up"></i> Cloud skills and Other Technologies</h2>
            </div>
            <div className='percentage'>
              <h2><CountUp start={0} end={75} duration={6} delay={3}/>%</h2>
            </div>

          </div>
          <div className='levels-line levels-line5'></div>
        </div>
      </div>
    </div>

  )
}

export default ExpertLevel;