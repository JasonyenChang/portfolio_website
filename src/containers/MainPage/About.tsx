import React from 'react';
import Crumb from '@/components/Crumb/Crumb';
import LinkedIn from "@/statics/images/linkedin_icon.png";
import Github from "@/statics/images/github_icon.png";
import Phone from "@/statics/images/phone_icon.png";
import Email from "@/statics/images/email_icon.png";

const skillSet = ["React", "NextJS", "CSS", "TailwindCSS", "TypeScript", "Django", "Docker", "AWS EC2", "AWS ECR", "CI/CD", "Git", "SQL Basics", "NodeJS"];
const About = () => {
    return (
        <div className="about-body">
            <div className="content">
                <div className="icon">
                    <span className="title">Get to know me</span>
                    <img
                        src={LinkedIn}
                        style={{ cursor: 'pointer' }}
                        onClick={() => window.open('https://www.linkedin.com/in/jasonchang2022/', '_blank')}
                    />
                    <img
                        src={Github}
                        style={{ cursor: 'pointer' }}
                        onClick={() => window.open('https://github.com/JasonyenChang', '_blank')}
                    />
                </div>
                <div className="description">
                    <p>
                        Hi, my name is Jason, I’m a Full-Stack Engineer who builds reliable, scalable web applications. I enjoy solving real problems with clean architecture, thoughtful design, and meaningful user experiences. Let’s build something great together.
                    </p>
                </div>
                <div className="contact_info">
                    <img
                        src={Phone}
                    />
                    <span>886+934087605</span>
                </div>
                <div className="contact_info">
                    <img
                        src={Email}
                    />
                    <span>jasonchang.tw.work@gmail.com</span>
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