import React from 'react';
import { NavLink } from "react-router-dom";
import "./ProjectDetail.css";

const ProjectDetail = (props) => {
    return (

        <div className='pd-card pd-detail1'>
            <div className='pd-image'>
                <img src={props.imgsrc} alt='' />
            </div>
            <div className='pd-details'>
                <h1>{props.title}</h1>
                <p>{props.detail}</p>
                <span className='skillset' >
                    <p>{props.skill}</p>





                </span>
                <div className='pd-btn'>
                    <NavLink target='_blank' to={props.view} className="project-btn">&nbsp;&nbsp;View&nbsp;&nbsp;</NavLink>
                    <NavLink target='_blank' to={props.source} className="project-btn">Source</NavLink>
                </div>

            </div>
        </div>

    )
}

export default ProjectDetail