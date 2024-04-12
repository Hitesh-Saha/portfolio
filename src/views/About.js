import React from 'react'
import Profile1 from '../assets/Profile1.png'
import Profile2 from '../assets/Profile2.png'
import '../styles/aboutMe.css'


const About = () => {
  return (
    <div>
      <div className="container-fluid mb-5">
        <div className="row py-4">
          <div className="col d-flex justify-content-center">
            <h1 className='font-monospace fw-bold'>
              About Me
            </h1>
          </div>
        </div>
        <div className="row align-items-center fs-5 mx-auto">
          <div className="col-4 image-container px-4">
            <div><img src={Profile1} alt="My Pic" className='rounded-2'></img></div>
            <div><img src={Profile2} alt="My Pic" className='rounded-2'></img></div>
          </div>
          <div className='col-8 px-5 about-profile'>
            <p>Hi, I'm Hitesh Saha, originally hailing from Jorhat, Assam.<br/>
              I am a fun loving, enthusiastic and friendly kind of a person. I like to meet new people, listen to music and I also enjoy developing apps. I share a deep passion for dance although I am not a trained dancer. I like to watch sci-fi movies and series during my free time.</p>
            <p>I joined MBRDI on 9th August, 2022 and started my career as a Graduate Engineer Trainee and since then it has been my immense pleasure to be a part of such an amazing organisation. It has been a great experience so far and the people here are very much supportive.</p>
            <p>I am a part of Data Factory Team and we are responsible for making the data actionable. We have 4 products in our team: Inspektor for checking Data Quality , Semantor for Data Mapping, Obfuskator for pseudonymization of data and Vincryptor for anonymization of VIN.
              We also have a landing page for our team which also integrates all the other products, "One stop Solution for all", called as Integrated Offering.
              I am a part of Semantor and we are responsible for creating a webapp that can be used for data mapping with existing ontologies with data validation. We offer an easy to use UI with a variety of features that enables our customers to interact with data seamlessly.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default About