import React from 'react';
import "./style.css"

interface IContact {
    title: string,
    content: string
}

const Contact = (props: IContact) => {
    const getContact = () => {
        switch (props.title) {
            case "Email":
                return (
                    <>
                        <span className='contact-title'>{`${props.title}: `}</span>
                        <a className='contact-content' href={`mailto:${props.content}`}>{props.content}</a>
                    </>
                )
            case "LinkedIn":
            case "Gitlab":
                return (
                    <>
                        <span className='contact-title'>{`${props.title}: `}</span>
                        <a className='contact-content' href={props.content} target="_blank">{props.content}</a>
                    </>
                )
            default:
                return (
                    <>
                        <>
                            <span className='contact-title'>{`${props.title}: `}</span>
                            <span className='contact-content'>{props.content}</span>
                        </>
                    </>
                )
        }
    }
    return (
        <div className='contact-item'>
            {getContact()}
        </div>
    );
}

export default Contact;