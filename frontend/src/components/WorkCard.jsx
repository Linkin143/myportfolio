import React from 'react';
import { NavLink } from 'react-router-dom';
import "./WorkCard.css";

function WorkCard(props) {

    return (
        <div className='project-card'>
            <img src={props.imgsrc} alt='workImg...'></img>
            <h2 className='project-title'>{props.title}</h2>
            <div className='pro-details'>
                <p>
                    {props.text}
                </p>
                <div className='pro-btns pro-btn-workcard'>
                    <NavLink to={props.details} className="btn">Details</NavLink>
                    <NavLink target='_blank' to={props.source} className="btn">Source</NavLink>
                </div>
            </div>
        </div>
    )
}

export default WorkCard;