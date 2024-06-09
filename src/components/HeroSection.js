import React from "react";
import '../styles/home.css';
import resume from '../static/resume.pdf';
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

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
      <div className="heroSection">
          <div className="HeroLabel">
            <div className="HeroName">
              <h2 style={{color: '#00a1ff'}}>Hi, I'm Hitesh</h2>
            </div>
            <div className="HeroHeader">
              <h1><span className="text-Header">F</span>ull <span className="text-Header">S</span>tack <span className="text-Header">D</span>eveloper <br/>
              <span className="text-Header">W</span>eb <span className="text-Header">D</span>esigner
              <br/> <span className="text-Header">D</span>ev<span className="text-Header">O</span>ps <span className="text-Header">E</span>ngineer </h1>
            </div>
            <div className="HeroDesc">
              <h5>
                Versatile developer who hacks at, makes and occasionally
                breaks things. Passionate for web designing and development. 😎✌️
              </h5>
            </div>
            <div className="d-flex flex-row gap-3">
              <button className="btn btn-outline-primary text-white fs-6 rounded-pill" onClick={() => navigate('/about')}>More Info</button>
              <button className="btn btn-outline-primary text-white fs-6 rounded-pill" onClick={handleDownload}>Download CV</button>
            </div>
          </div>
        </div>
    </>
  );
};

export default HeroSection;
