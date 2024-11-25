import React from 'react';
import "./ProjectDetail.css";
import ProjectDetail from "./ProjectDetail.jsx";
import WorkCardData from "./WorkCardData.js";


const Project = () => {
    return (
        <div className='pd-container'>
            <div className='pd-heading'>
                <h1>Project Details</h1>
            </div>
            <div className='pd-div'>
                {WorkCardData.map((val, ind) => {
                    return (
                        <ProjectDetail
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            detail={val.detail}
                            skill={val.skill}
                            view={val.view}
                            source={val.source}
                        />
                    )
                })

                }

            </div>
        </div>
    )
}

export default Project;