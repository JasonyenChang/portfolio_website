import React from 'react';
import Contact from '@/components/Contact/Contact';

const Contacts = () => {
    return (
        <div className="contacts-body">
            <Contact title="Email" content="jasonchang.tw.work@gmail.com" />
            <Contact title="LinkedIn" content="https://www.linkedin.com/in/jasonchang2022/" />
            <Contact title="Github" content="https://github.com/JasonyenChang" />
            <Contact title="Phone" content="886934087605" />
        </div>
    );
}

export default Contacts;