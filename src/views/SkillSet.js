import React from "react";
import "../styles/skillset.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  designSkillsData,
  developSkillsData,
  devopsSkillsData,
  personalSkillsData,
} from "../static/skills";

const SkillSet = () => {
  const skillCardData = (item) => {
    return (
        <div className="col-12 col-md-4 col-lg-3 mx-auto my-4 d-flex justify-content-center align-items-center">
          <div className="radial-container">
            <CircularProgressbar
              counterClockwise="true"
              value={item.skillProgress}
              text={`${item.skillProgress}%`}
            />
            <h6 className="skill-name">{item.skillName}</h6>
          </div>
        </div>
      );
  };

  return (
    <div className="container mb-5">
      <div className="row pt-4">
        <div className="col d-flex justify-content-center">
          <h2 className="font-monospace fw-bold title">Skills</h2>
        </div>
      </div>
      <div className="col pt-5">
        <h4 className="font-monospace fw-bold skill-header">Web Design</h4>
      </div>
      <div className="skill-desc">
        {designSkillsData.map((item) => skillCardData(item))}
      </div>
      <div className="col pt-5">
        <h4 className="font-monospace fw-bold skill-header">Web Development</h4>
      </div>
      <div className="skill-desc">
        {developSkillsData.map((item) => skillCardData(item))}
      </div>
      <div className="col pt-5">
        <h4 className="font-monospace fw-bold skill-header">DevOps</h4>
      </div>
      <div className="skill-desc">
        {devopsSkillsData.map((item) => skillCardData(item))}
      </div>
      <div className="col pt-5">
        <h4 className="font-monospace fw-bold skill-header">
          Interpersonal Skills
        </h4>
      </div>
      <div className="skill-desc">
        {personalSkillsData.map((item) => skillCardData(item))}
      </div>
    </div>
  );
};

export default SkillSet;
