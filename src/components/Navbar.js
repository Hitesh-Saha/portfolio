import React from "react";
import '../styles/navbar.css'
import { useLocation } from 'react-router-dom';


const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-supported-content" aria-controls="navbar-supported-content" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-supported-content">
            <ul className="navbar-nav d-flex justify-content-end me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={'nav-link '+ (location.pathname === '/' ? 'active': 'inactive')} aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className={'nav-link '+ (location.pathname === '/about' ? 'active': 'inactive')} href="/about" aria-current="page">About</a>
              </li>
              <li className="nav-item">
                <a className={'nav-link '+ (location.pathname === '/skills' ? 'active': 'inactive')} href="/skills"  aria-current="page">Skills</a>
              </li>
              <li className="nav-item">
                <a className={'nav-link '+ (location.pathname === '/contact' ? 'active': 'inactive')} href="/contact"  aria-current="page">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
    
  );
};

export default Navbar;
