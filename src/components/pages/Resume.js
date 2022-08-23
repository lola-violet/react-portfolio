// About
import React from 'react';
import 'bootstrap';
import '../../styles/resume.css';
// import resume from '../../assets/lolaapplegate_resume.pdf';

export default function About() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 mb-5' id='aboutMe'>
                    <h1 className='pageHead'>Resume</h1>
                    <br></br>
                    <p className='skillList'>Git | Markdown | Heroku | HTML | CSS | JavaScript | jQuery | Third-party APIs | Bootstrap | Materialize</p>
                    <p className='skillList'>Node.js | Inquirer | Handlebars | React | Material UI | Express.js | MySQL | Sequelize | Insomnia | MongoDB | Mongoose | MongoDB Compass</p>
                    <div className='d-flex justify-content-center'>
                        {/* <a href={resume} target="_blank" rel="noreferrer" className='resume-link card-link'>View Full Resume</a> */}
                        <a className='resume-link card-link' href="https://drive.google.com/file/d/12ng51ve0BuHq6X5NT2NLDyEfg1_O1uHR/view" target="_blank" rel="noreferrer">View Full Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
}