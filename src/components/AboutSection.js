import React from "react";
import "../styles/about.css";
import Profile from "../assets/new-profile.jpg";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
    const navigate = useNavigate()
  return (
    <>
      <div className="common-block odd-block" id="about">
        <div className="container pb-5">
          <div className="row pt-4 mb-5">
            <div className="col d-flex justify-content-center">
              <h2 className="font-monospace fw-bold title">About Me</h2>
            </div>
          </div>
          <div className="row align-items-center fs-5 justify-content-center gap-2">
            <div className="col-8 col-lg-4 image-container">
              <img src={Profile} alt="My Pic" className="" />
            </div>
            <div className="col-12 col-lg-7 px-5 text-start">
              <p>
                Hi, I'm Hitesh Saha, a Full Stack Web Developer from Jorhat,
                Assam.
                <br />I am a fun-loving, enthusiastic, and friendly person. I
                enjoy meeting new people, listening to music, and developing
                apps. I have a deep passion for dance, even though I am not a
                trained dancer. During my free time, I love watching sci-fi
                movies and series.
              </p>
              <p>
                With over 2 years of experience in IT, I have honed my skills as
                a Full Stack Web Developer. I began my career as a Member
                Technical Staff at Ziroh Labs Pvt. Ltd., where I worked as a
                frontend developer, contributing to the creation of encrypted
                mailing software.
              </p>
                <div className="d-flex flex-row gap-3">
                    <button
                    className="btn btn-outline-primary fs-6 rounded-pill hero-btn"
                    onClick={() => navigate('/about')}
                    >
                    read more
                    </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
