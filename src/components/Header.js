import React from 'react';
import 'bootstrap';
import '../styles/header.css';


export default function Header({ currentPage, handlePageChange }) {
    return (
        <div className="container-fluid custom-head justify-content-end">
            <ul className="nav">
                <li className="nav-item custom-navlink">
                    <a href="#about"
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    > About </a>
                </li>
                <li className="nav-item custom-navlink">
                    <a href="#projects"
                        onClick={() => handlePageChange('Projects')}
                        className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                    > Projects </a>
                </li>
                <li className="nav-item custom-navlink">
                    <a href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    > Contact </a>
                </li>
                <li className="nav-item custom-navlink">
                    <a href='public/lola_applegate_resume.pdf' target="_blank" className="nav-link"> Resume </a>
                </li>
            </ul>
        </div>
    )
}