import React from 'react';
import 'bootstrap';
import '../styles/header.css';


export default function Header({ currentPage, handlePageChange }) {
    return (
        <div className="container-fluid custom-head justify-content-end">
            <ul className="nav">
                <li className="nav-item">
                    <a href="#about"
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link custom-navlink nav-active' : 'nav-link custom-navlink'}
                    > About </a>
                </li>
                <li className="nav-item">
                    <a href="#projects"
                        onClick={() => handlePageChange('Projects')}
                        className={currentPage === 'Projects' ? 'nav-link custom-navlink nav-active' : 'nav-link custom-navlink'}
                    > Projects </a>
                </li>
                <li className="nav-item">
                    <a href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link custom-navlink nav-active' : 'nav-link custom-navlink'}
                    > Contact </a>
                </li>
                <li className="nav-item">
                    <a href='https://docs.google.com/document/d/1S881cx-3PAj7i0RGGZZ0zgRjr9Aq-y0_eLNYEBAF56A/edit?usp=sharing' target="_blank" rel="noreferrer" className="nav-link custom-navlink"> Resume </a>
                </li>
            </ul>
        </div>
    )
}