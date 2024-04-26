import React from "react";
import '../styles/navbar.css'
// import { Link } from "react-router-dom";
import resume from '../static/resume.pdf';
import { useLocation } from 'react-router-dom';


const Navbar = () => {
  const location = useLocation()

  const handleDownload = () => {
    const pdfUrl = resume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Hitesh_Saha_Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">Portfolio</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={'nav-link '+ (location.pathname === '/' ? 'active': '')} aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a href="/about" className={'nav-link '+ (location.pathname === '/about' ? 'active': '')}  aria-current="page">About</a>
              </li>
              <li className="nav-item">
                <a className={'nav-link '+ (location.pathname === '/skills' ? 'active': '')} href="/skills"  aria-current="page">Skills</a>
              </li>
              <li className="nav-item">
                <a className={'nav-link '+ (location.pathname === '/contact' ? 'active': '')} href="/contact"  aria-current="page">Contact Me</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/journey">My Journey</a>
              </li> */}
            </ul>
            <ul className="navbar-nav d-flex mb-2 mb-lg-0">
              <li className="" onClick={handleDownload}>
                  <button className="btn btn-outline-primary text-white fs-6">Download CV</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
    
  );
};

export default Navbar;
