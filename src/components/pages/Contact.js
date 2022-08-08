// Contact
import React from 'react';
import 'bootstrap';
import '../../styles/contact.css';

function Contact() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 mb-5' id='aboutMe'>
                    <h1 className='pageHead'>Contact Me</h1>
                    <h4>Via Email: <a className='contactLink' href="mailto:lolaviolet.dev@gmail.com" target="_blank" rel="noreferrer">lolaviolet.dev@gmail.com</a></h4>
                    <h4>Via LinkedIn: <a className='contactLink' href="https://www.linkedin.com/in/lolaapplegate/" target="_blank" rel="noreferrer">linkedin.com/in/lolaapplegate/</a></h4>
                    <h4>Via GitHub: <a className='contactLink' href="https://github.com/lola-violet" target="_blank" rel="noreferrer">github.com/lola-violet</a></h4>
                    <h4>View Full Resume: <a className='contactLink' href="https://drive.google.com/file/d/1oSPLNqU-zbrf4RIw08C6Wdgc70HUG_uf/view" target="_blank" rel="noreferrer">View in Browser</a></h4>
                </div>
            </div>
        </div>
    );
}

export default Contact;