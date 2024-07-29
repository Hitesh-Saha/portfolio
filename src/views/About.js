import React from "react";
import Profile from "../assets/new-profile.jpg";
// import Profile2 from '../assets/Profile2.png'
import "../styles/about.css";

const About = () => {
  return (
    <div className="common-block odd-block">
      <div className="container pb-5">
        <div className="row pt-4 mb-5">
          <div className="col d-flex justify-content-center">
            <h2 className="font-monospace fw-bold title">About Me</h2>
          </div>
        </div>
        <div className="row align-items-center fs-5 justify-content-center gap-2">
          {/* <div className="col-4 image-container px-4">
            <div><img src={Profile1} alt="My Pic" className='rounded-2'></img></div>
            <div><img src={Profile2} alt="My Pic" className='rounded-2'></img></div>
          </div> */}
          <div className="col-8 col-lg-4 image-container">
            <img src={Profile} alt="My Pic" className="" />
          </div>
          <div className="col-12 col-lg-7 px-5 about-profile">
            <p>
              Hi, I'm Hitesh Saha, a Full Stack Web Developer from Jorhat,
              Assam.
              <br />I am a fun-loving, enthusiastic, and friendly person. I
              enjoy meeting new people, listening to music, and developing apps.
              I have a deep passion for dance, even though I am not a trained
              dancer. During my free time, I love watching sci-fi movies and
              series.
            </p>
            <p>
              With over 2 years of experience in IT, I have honed my skills as a
              Full Stack Web Developer. I began my career as a Member Technical
              Staff at Ziroh Labs Pvt. Ltd., where I worked as a frontend
              developer, contributing to the creation of encrypted mailing
              software.
            </p>
            <p>
            I then joined Mercedes Benz Research and Development India as a Software Consultant, where I am part of a dynamic team responsible for creating a web app for data mapping with existing semantic ontologies along with data validation. 
            Our solution offers an easy-to-use UI with various features, enabling our customers to interact with data seamlessly. 
            I worked on the frontend of the application using Vue.js. Additionally, I contributed to several other projects utilizing different tech stacks, including React.js and Material UI for the frontend and FastAPI and PostgreSQL for the backend.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
