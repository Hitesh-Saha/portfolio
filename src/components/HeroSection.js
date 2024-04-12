import React from "react";
import '../styles/home.css'

const HeroSection = () => {
  return (
    <>
      <div className="heroSection">
          <div className="HeroLabel">
            <div className="HeroName">
              <h2>Hi, I'm Hitesh</h2>
            </div>
            <div className="HeroHeader">
              <h1><span className="text-Header">S</span>oftware <span className="text-Header">D</span>eveloper <br/>
              <span className="text-Header">W</span>eb <span className="text-Header">D</span>esigner
              <br/> <span className="text-Header">D</span>ev<span className="text-Header">O</span>ps <span className="text-Header">E</span>ngineer </h1>
            </div>
            <div className="HeroDesc">
              <h5>
                Versatile developer who hacks at, makes and occasionally
                breaks things. Passionate for web designing and development. 😎✌️
              </h5>
            </div>
          </div>
        </div>
    </>
  );
};

export default HeroSection;
