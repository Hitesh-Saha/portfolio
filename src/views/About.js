import React from 'react'
import Profile from '../assets/new-profile.jpg'
// import Profile2 from '../assets/Profile2.png'
import '../styles/aboutMe.css'


const About = () => {
  return (
    <div className="container-fluid pb-5 aboutDesc" id='about'>
      <div className="row pt-4">
        <div className="col d-flex justify-content-center">
          <h1 className='font-monospace fw-bold aboutHeader'>
            About Me
          </h1>
        </div>
      </div>
        <hr style={{width: '80%', margin: 'auto'}}></hr>
      <div className="row align-items-center fs-5 mx-auto gy-4">
        {/* <div className="col-4 image-container px-4">
          <div><img src={Profile1} alt="My Pic" className='rounded-2'></img></div>
          <div><img src={Profile2} alt="My Pic" className='rounded-2'></img></div>
        </div> */}
        <div className='col-12 col-lg-4 image-container pt-4'><img src={Profile} alt="My Pic" className='rounded-2'></img></div>
        <div className='col-12 col-lg-8 px-5 about-profile'>
          <p>Hi, I'm Hitesh Saha, originally hailing from Jorhat, Assam.<br/>
            I am a fun loving, enthusiastic and friendly kind of a person. I like to meet new people, listen to music and I also enjoy developing apps. I share a deep passion for dance although I am not a trained dancer. I like to watch sci-fi movies and series during my free time.</p>
          <p>I am a Full Stack Web Developer with 2+ years of experience in IT. I started my career as a Member Technical Staff at Ziroh Labs Pvt. Ltd. where I worked as a frontend developer in creating an encryted mailing software.</p>
          <p>I joined MBRDI as a Graduate Engineer Trainee where I was part of a dynamic team and I was responsible for creating a webapp that can be used for data mapping with existing semantic ontologies along with data validation. We offer an easy to use UI with a variety of features that enables our customers to interact with data seamlessly. I worked in the frontend side of the application in Vue.js. I also worked on few other projects with different tech stacks that include React.js and material UI for the frontend and fastapi and postgres for the backend.</p>
        </div>
      </div>
    </div>
  )
}

export default About