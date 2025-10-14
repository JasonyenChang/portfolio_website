import React from 'react';
import Crumb from '@/components/Crumb/Crumb';

const skillSet = ["React", "NextJS", "CSS", "TailwindCSS", "TypeScript", "Django", "Docker", "AWS EC2", "AWS ECR", "CI/CD", "Git", "SQL Basics", "NodeJS"];
const About = () => {
    return (
        <div className="about-body">
            <div className="content">
                <span className="title">Get to know me</span>
                <div className="description">
                    <p>
                        I’m a Full-Stack Engineer who builds reliable, scalable web applications. I enjoy solving real problems with clean architecture, thoughtful design, and meaningful user experiences. Let’s build something great together.
                    </p>
                </div>
            </div>
            <div className="content">
                <span className="title">My skills</span>
                <div className="skills">
                    {
                        skillSet.map((skill, index) => (
                            <Crumb key={index} title={skill} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default About;