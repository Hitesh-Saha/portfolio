import React from "react";
import '../styles/home.css';
import resume from '../static/resume.pdf';
import SocialLinks from "./SocialLinks";

const HeroSection = () => {

  const handleDownload = () => {
    const pdfUrl = resume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Hitesh_Saha_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <>
      <div className="hero-section">
          <div className="hero-label">
            <div className="hero-name">
              <h1>Hi, It's <span style={{color: 'var(--secondary-color)'}}>Hitesh</span></h1>
            </div>
            <div className="hero-header">
              <h1><span className="text-header">F</span>ull <span className="text-header">S</span>tack <span className="text-header">D</span>eveloper <br/>
              <span className="text-header">W</span>eb <span className="text-header">D</span>esigner
              <br/> <span className="text-header">D</span>ev<span className="text-header">O</span>ps <span className="text-header">E</span>ngineer </h1>
            </div>
            <div className="hero-desc">
              <h5>
                Versatile developer who hacks at, makes and occasionally
                breaks things. Passionate for web designing and development. 😎✌️
              </h5>
            </div>
            <div className="d-flex flex-row gap-3">
              {/* <button className="btn btn-outline-primary fs-6 rounded-pill hero-btn" onClick={() => navigate('/about')}>More Info</button> */}
              <a className="btn btn-outline-primary fs-6 rounded-pill hero-btn" href="#about">More Info</a>
              <button className="btn btn-outline-primary fs-6 rounded-pill hero-btn" onClick={handleDownload}>Download CV</button>
            </div>
            <SocialLinks />
          </div>
        </div>
    </>
  );
};

export default HeroSection;
