import React from 'react';
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
import '../styles/social.css';

const SocialLinks = () => {
  return (
    <div className="social-links d-flex gap-2">
        <a href="https://www.facebook.com/share/5eaAze6pxaP5bD6Q/?mibextid=qi2Omg" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faFacebookF}/></a>
        <a href="https://www.instagram.com/storm_charger_03?utm_source=qr&igsh=bjNid3Nwc3R5bHBw" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faInstagram}/></a>
        <a href="https://www.linkedin.com/in/hitesh-saha-5401671b3" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin}/></a>
        <a href="mailto:hiteshsaha52@gmail.com"><FontAwesomeIcon icon={faEnvelope}/></a>
        <a href="https://github.com/Hitesh-Saha" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub}/></a>
    </div>
  )
}

export default SocialLinks;