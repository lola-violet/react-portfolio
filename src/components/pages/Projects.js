// Projects
import React from 'react';
import 'bootstrap';
import '../../styles/projects.css';
import byobackpack from '../../images/byo_backpack.png';
import inspoJeopardy from '../../images/inspo-jeopardy.png';
import weatherDash from '../../images/weather-dash.png';



export default function Projects() {
    return (
        <div className='container'>
            <h1 className='pjpageHead'>Projects</h1>
            <div className='d-flex flex-wrap justify-content-evenly'>
                <div className='custom-card card d-flex col-10 col-md-8 col-lg-4 border border-white mx-1 mb-5'>
                    <img src={byobackpack} alt='BYO Backpack Logo' className='card-img-top img-fluid' />
                    <div className='card-body'>
                        <h3 className='card-title custom-title'>BYO Backpack</h3>
                    </div>
                    <div className='card-body custom-body'>
                        <p className='card-text custom-desc'>A full-stack collaborative event management application with CRUD functionality.</p>
                        <span className='custom-tech'>Handlebars | MySQL | JavaScript</span>
                    </div>
                    <div className='card-body d-flex justify-content-center'>
                        <a href='https://byo-backpack.herokuapp.com/' target="_blank" rel="noreferrer" className='custom-link card-link'>Application</a>
                        <a href='https://github.com/lola-violet/byo-backpack' target="_blank" rel="noreferrer" className='custom-link card-link'>Repository</a>
                    </div>
                </div>
                <div className='custom-card card d-flex col-10 col-md-8 col-lg-4 border border-white mx-1 mb-5'>
                    <img src={inspoJeopardy} alt='Inspirational Jeopardy Logo' className='card-img-top img-fluid' />
                    <div className='card-body'>
                        <h3 className='card-title custom-title'>Inspirational Jeopardy</h3>
                    </div>
                    <div className='card-body custom-body'>
                        <p className='card-text custom-desc'>A group project using a combination of server-side APIs to create a Jeopardy-style trivia quiz.</p>
                        <span className='custom-tech'>HTML | CSS | JavaScript</span>
                    </div>
                    <div className='card-body d-flex justify-content-center'>
                        <a href='https://lola-violet.github.io/inspirational-jeopardy/' target="_blank" rel="noreferrer" className='custom-link card-link'>Application</a>
                        <a href='https://github.com/lola-violet/inspirational-jeopardy' target="_blank" rel="noreferrer" className='custom-link card-link'>Repository</a>
                    </div>
                </div>
                <div className='custom-card card d-flex col-10 col-md-8 col-lg-4 border border-white mx-1 mb-5'>
                    <img src={weatherDash} alt='Weather Dashboard Logo' className='card-img-top img-fluid' />
                    <div className='card-body'>
                        <h3 className='card-title custom-title'>Weather Dashboard</h3>
                    </div>
                    <div className='card-body custom-body'>
                        <p className='card-text custom-desc'>A web application using OneWeather API to provide current weather & forecast data for a city, based on user's search input.</p>
                        <span className='custom-tech'>HTML | CSS | JavaScript</span>
                    </div>
                    <div className='card-body d-flex justify-content-center'>
                        <a href='https://lola-violet.github.io/weather-dashboard/' target="_blank" rel="noreferrer" className='custom-link card-link'>Application</a>
                        <a href='https://github.com/lola-violet/weather-dashboard' target="_blank" rel="noreferrer" className='custom-link card-link'>Repository</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

