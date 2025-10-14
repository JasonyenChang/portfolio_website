import React from 'react';
import Project from '@/components/Project/Project';
import Engineerforce from "@/statics/images/engineerforce.png";
import CostLiving from "@/statics/images/cost-living.png";
import ABC from "@/statics/images/abc.png";
import Wisdom from "@/statics/images/wisdom.png";
import "./style.css";

const projectList = [
    {
        name: "Engineerforce",
        description: "This is a SaaS platform specifically designed for the IT industry to simplify and enhance the accuracy of man-hour estimation. By utilizing Engineerforce, users can move beyond Excel files and focus on more pressing matters.",
        image: Engineerforce,
        skills: ["React", "JavaScript", "CSS", "Cypress", "Django Basics"],
        url: "https://app.engineerforce.io/accounts/login/"
    },
    {
        name: "Cost Living Around You",
        description: "The system scrapes daily cost-of-living data from a website and presents a summary of the information to users.",
        image: CostLiving,
        skills: ["React", "NodeJS", "JavaScript", "CSS", "TypeScript", "Docker", "AWS EC2", "AWS ECR", "SQL Basics"],
        url: "http://jasonchang.website:8080/#/costliving"
    },
    {
        name: "Project ABC",
        description: "The system displays KPI values using different types of charts, such as pie charts and stacked charts.",
        image: ABC,
        skills: ["React", "JavaScript", "CSS", "Bizchart"],
        url: ""
    },
    {
        name: "Wisdom",
        description: "This is a data governance dashboard website that displays various types of data from multiple sources.",
        image: Wisdom,
        skills: ["React", "JavaScript", "CSS", "Bizchart"],
        url: ""
    }
]
const Projects = () => {
    return (
        <div>
            {
                projectList.map((project) => (
                    <>
                        <Project name={project.name} description={project.description} image={project.image} skills={project.skills} url={project.url} />
                        <br />
                        <br />
                    </>
                ))
            }
        </div>
    );
}

export default Projects;