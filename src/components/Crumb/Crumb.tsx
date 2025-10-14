import React from 'react';
import "./style.css";

interface ICrumb {
    title: string
}

const Crumb = ({ title }: ICrumb) => {
    return (
        <div className="skill">
            {title}
        </div>
    );
}

export default Crumb;