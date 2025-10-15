import React from 'react';
import Project from '@/components/Project/Project';
import Engineerforce from "@/statics/images/engineerforce.png";
import HosonoAI from "@/statics/images/hosonoai.png";
import GooglePixel from "@/statics/images/googlepixel.png";
import Cost from "@/statics/images/cost.png";
import ABC from "@/statics/images/abc.png";
import Wisdom from "@/statics/images/wisdom.png";
import "./style.css";

const projectList = [
    {
        name: "Engineerforce",
        description: "Engineerforce is a project management platform featuring spreadsheet-style task structuring, project breakdown, cost estimation, task assignment, and progress tracking. It includes AI-powered WBS generation and AI-based effort and risk estimation to enhance project planning efficiency and decision-making.",
        image: Engineerforce,
        skills: ["React", "JavaScript", "CSS", "Cypress", "Django", "OpenAI", "Gemini"],
        url: "https://drive.google.com/file/d/1fJE8SAE_lUCMrygbqwKjtkkYQgY4KNoF/view?usp=sharing"
    },
    {
        name: "Hosono AI",
        description: "Hosono AI is a domain knowledge Q&A platform powered by LLM retrieval. It aggregates the public speeches and political commentary of Japanese Diet member Goshi Hosono, and uses Dify to manage sources such as YouTube, Voicy, and note. Users can ask political questions on the platform, and the AI assistant responds in a style aligned with Hosono’s viewpoints by retrieving relevant context from a vector-based knowledge base.",
        image: HosonoAI,
        skills: ["React", "Dify", "Python"],
        url: "https://drive.google.com/file/d/1QCBucjkqBO90ft6wNcl3A5N3KaZ6jyRe/view?usp=sharing"
    },
    {
        name: "Google Pixel",
        description: "The Google Pixel Sales Training Platform is an internal e-learning system used to deliver product knowledge and sales training for retail teams. Our team was responsible for developing the course and video management modules, including course creation, video upload/editing, training content configuration, and learning flow setup to enable standardized internal training across sales channels.",
        image: GooglePixel,
        skills: ["NextJS", "TailwindCSS"],
        url: "https://drive.google.com/file/d/1todzItXeqo12cneQjql2N07IIAE6yv_Q/view?usp=sharing"
    },
    {
        name: "Cost Living Around You",
        description: "Built a system that automatically crawls and aggregates daily cost-of-living data, processes it, and visualizes trends for users in a clear and accessible dashboard.",
        image: Cost,
        skills: ["React", "NodeJS", "JavaScript", "CSS", "TypeScript", "Docker", "AWS EC2", "AWS ECR", "SQL Basics"],
        url: "http://jasonchang.website:8080/#/costliving"
    },
    {
        name: "Project ABC",
        description: "Project ABC is an internal procurement KPI analytics system developed for Wistron. It provides visibility into purchasing performance across functions, departments, and individual buyers by calculating contribution values based on rebate, PPV (purchase price variance), and free sample savings. The system aggregates annual KPI targets set by the procurement division and visualizes performance tracking to support decision-making and supplier negotiation strategies.",
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