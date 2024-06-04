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
        <div className="col-md-3 mx-auto my-4 d-flex justify-content-center align-items-center">
          <div className="radialContainer">
            <CircularProgressbar
              counterClockwise="true"
              value={item.skillProgress}
              text={`${item.skillProgress}%`}
            />
            <h6 className="skillName">{item.skillName}</h6>
          </div>
        </div>
      );
  };

  return (
    <div className="container mb-5">
      <div className="row pt-4">
        <div className="col d-flex justify-content-center">
          <h1 className="font-monospace fw-bold skillTitleHeader">My Skills</h1>
        </div>
      </div>
      <div className="col pt-5">
        <h4 className="font-monospace fw-bold skillHeader">Web Design</h4>
      </div>
      <div className="skillDesc">
        {designSkillsData.map((item) => skillCardData(item))}
      </div>
      <div className="col pt-5">
        <h4 className="font-monospace fw-bold skillHeader">Web Development</h4>
      </div>
      <div className="skillDesc">
        {developSkillsData.map((item) => skillCardData(item))}
      </div>
      <div className="col pt-5">
        <h4 className="font-monospace fw-bold skillHeader">DevOps</h4>
      </div>
      <div className="skillDesc">
        {devopsSkillsData.map((item) => skillCardData(item))}
      </div>
      <div className="col pt-5">
        <h4 className="font-monospace fw-bold skillHeader">
          Interpersonal Skills
        </h4>
      </div>
      <div className="skillDesc">
        {personalSkillsData.map((item) => skillCardData(item))}
      </div>
    </div>
  );
};

export default SkillSet;
