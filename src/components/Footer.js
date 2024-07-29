import React from 'react';
import '../styles/footer.css';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="footer">
        <div className='container'>
            <div className='row pb-3'>
                <div className="footer-col">
                    <h4>follow me</h4>
                    <SocialLinks />
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
                    <p>Copyright &copy; Hitesh Saha | 2024 | All Rights Reserved</p>
                    <p>Developed with 💓 from Hitesh Coder 👨‍💻</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer