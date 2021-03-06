// Contact
import React, { useState } from 'react';
import 'bootstrap';
import '../../styles/contact.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'message') {
            setMessage(value);
        }
    };
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`Hi ${name}, thanks for your message! Email provided: ${email}. Message: ${message}`);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className='container'>
            <h1 className='pageHead'>Contact Me</h1>
            <form className="form">
                <input
                    className='form-control custom-form'
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                />
                <input
                    className='form-control custom-form'
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Email"
                />
                <textarea
                    className='form-control custom-form'
                    rows="3"
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    placeholder="Message"
                />
                {/* <br></br> */}
                <button 
                    className='btn custom-btn'
                    type="button" 
                    onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Contact;