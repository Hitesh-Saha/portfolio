import React from "react";
import '../styles/navbar.css'
// import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Hitesh Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex justify-content-end me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={'nav-link '+ (location.pathname === '/' ? 'active': 'inactive')} aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a href="/about" className={'nav-link '+ (location.pathname === '/about' ? 'active': 'inactive')}  aria-current="page">About</a>
              </li>
              <li className="nav-item">
                <a className={'nav-link '+ (location.pathname === '/skills' ? 'active': 'inactive')} href="/skills"  aria-current="page">Skills</a>
              </li>
              <li className="nav-item">
                <a className={'nav-link '+ (location.pathname === '/contact' ? 'active': 'inactive')} href="/contact"  aria-current="page">Contact Me</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/journey">My Journey</a>
              </li> */}
            </ul>
            {/* <ul className="navbar-nav d-flex mb-2 mb-lg-0">
              <li className="" >
                  <button className="btn btn-outline-primary text-white fs-6">Download CV</button>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
    </>
    
  );
};

export default Navbar;
