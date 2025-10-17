import React from 'react';
import Crumb from '../Crumb/Crumb';
import "./style.css";

interface IProject {
    name: string,
    description: string,
    image: string,
    skills: string[],
    url: string
}

const Project = (props: IProject) => {
    const handleNavigateTo = () => {
        if (props.url !== "") window.open(props.url, '_blank');
    }
    return (
        <div className="project-body">
            <img src={props.image} onClick={handleNavigateTo} />
            <div>
                <span className="title">{props.name}</span>
                <div className="description">{props.description}</div>
                <span className="title">Skills Used</span>
                <div className="skills">
                    {
                        props.skills.map((skill, index) => (
                            <Crumb key={index} title={skill} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Project;