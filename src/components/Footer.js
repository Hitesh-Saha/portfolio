import React from 'react';
import '../styles/footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
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
                        <a href="https://www.facebook.com/share/5eaAze6pxaP5bD6Q/?mibextid=qi2Omg" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faFacebookF}/></a>
                        <a href="https://www.instagram.com/storm_charger_03?utm_source=qr&igsh=bjNid3Nwc3R5bHBw" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faInstagram}/></a>
                        <a href="https://www.linkedin.com/in/hitesh-saha-5401671b3" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin}/></a>
                        <a href="mailto:hiteshsaha52@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a>
                        <a href="https://github.com/Hitesh-Saha" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub}/></a>
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
                    <p>&copy;2024 Hitesh Saha | All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer