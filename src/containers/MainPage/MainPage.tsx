import React, { useState, useRef } from 'react';
import { History, LocationState } from 'history';
import { Button } from 'antd';
import IMG from "@/statics/images/avatar.jpg";
import About from './About';
import Projects from './Projects';
import Contacts from './Contacts';
import Worker from "@/statics/images/worker.png";
import "./style.css";

const MainPage = () => {
    const [hideMenu, setHideMenu] = useState(true);
    const divRef = useRef<HTMLDivElement | null>(null);
    const handleClickMenu = () => {
        var x = document.getElementById('myTopnav');
        if (x?.className === "topnav") {
            x.className += " responsive";
            setHideMenu(false);
        } else {
            if (x?.className) {
                x.className = "topnav";
                setHideMenu(true);
            }
        }
    }

    const handleClickAbout = () => {
        const element = document.getElementById("main");
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
        if (!hideMenu) handleClickMenu();
    }

    const handleClickProject = () => {
        const element = document.getElementById("project");
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
        if (!hideMenu) handleClickMenu();
    }

    const handleClickContact = () => {
        const element = document.getElementById("contact");
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
        if (!hideMenu) handleClickMenu();
    }
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div className="topnav" id="myTopnav">
                <img src={IMG} />
                {
                    !hideMenu
                        ? <>
                            <span onClick={handleClickAbout}>ABOUT</span>
                            <span onClick={handleClickProject}>PROJECT</span>
                            <span onClick={handleClickContact}>CONTACT</span>
                            <span className="icon" onClick={handleClickMenu}>
                                <i className="fa fa-bars"></i>
                            </span>
                        </>
                        : <>
                            <span onClick={handleClickContact}>CONTACT</span>
                            <span onClick={handleClickProject}>PROJECT</span>
                            <span onClick={handleClickAbout}>ABOUT</span>
                            <span className="icon" onClick={handleClickMenu}>
                                <i className="fa fa-bars"></i>
                            </span>
                        </>
                }
            </div>
            <div id="main" className="main" ref={divRef}>
                <div style={{ height: "65px" }}></div>
                <div id="about" className="about">
                    <About />
                    <div className="img-div"><img src={Worker} /></div>
                </div>
                <div id="project" className="project"><Projects /></div>
                <div id="contact" className="contact"><Contacts /></div>
            </div>
        </div>
    )
};

export default MainPage;