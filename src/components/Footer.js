import React from 'react';
import '../styles/footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import {
    faEnvelope
  } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
        <div className='container'>
            <div className='row pb-3'>
                <div className="footer-col">
                    <h4>follow me</h4>
                    <div className="social-links">
                        <a href="#"><FontAwesomeIcon icon={faFacebookF}/></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
                        <a href="https://www.linkedin.com/in/hitesh-saha-5401671b3" target='_blank'><FontAwesomeIcon icon={faLinkedin}/></a>
                        <a href="#"><FontAwesomeIcon icon={faEnvelope}/></a>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="footer-col navMenu">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/skills">Skills</a></li>
                        {/* <li><a href="/journey">My Journey</a></li> */}
                        <li><a href="/contact">Contact Me</a></li>
                    </ul>
                </div> 
            </div>
            <div className='row'>
                <div className="footer-col">
                    <p>&copy;2023 Hitesh Saha | All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer