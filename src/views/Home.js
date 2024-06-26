import React from 'react'
import HeroSection from '../components/HeroSection.js';
import Technologies from '../components/Technologies.js';
import Certifications from '../components/Certifications.js';
import Projects from '../components/Projects.js';
// import About from './About.js';
import '../styles/home.css'

const Home = () => {
  return (
    <div className="parallax">
        <HeroSection/>
        {/* <About/> */}
        <Certifications/>
        <Projects/>
        <Technologies/>
    </div>
  )
}

export default Home