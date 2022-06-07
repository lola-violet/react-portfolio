// Contact
import React, { useState } from 'react';

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
        alert(`Hello ${name}, your email is ${email}, you message was ${message}`);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <section>
            <h1>Contact Me</h1>
            <form className="form">
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="E-Mail"
                />
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    placeholder="Message"
                />
                <br></br>
                <button type="button" onClick={handleFormSubmit}>
                    Send
                </button>
            </form>
        </section>
    );
}

export default Contact;