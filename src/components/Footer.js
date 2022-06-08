import React from 'react';
import 'bootstrap';
import '../styles/footer.css';


export default function Footer() {
    return (
        <footer>
            <div className="container">
              <div className="custom-footer d-flex flex-wrap justify-content-center align-items-center" id="contact">
                <a href="https://github.com/lola-violet" target="_blank" rel="noreferrer"><i class="fa-brands fa-github fa-3x"></i></a>
                <a href="mailto:lolaviolet.dev@gmail.com" target="_blank" rel="noreferrer"><i class="fa-solid fa-envelope fa-3x"></i></a>
                <a href="https://www.linkedin.com/in/lolaapplegate/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin fa-3x"></i></a>
              </div>
            </div>
        </footer>
    )
}