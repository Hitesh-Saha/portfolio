import React, {useEffect} from 'react';
import '../styles/skillset.css';
// import '../styles/contact.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const designSkillsData = [
    {
        "id": 1,
        "skillName": "HTML5",
        "skillProgress": "90",
        "progressColor": "bg-success"
    },
    {
        "id": 2,
        "skillName": "CSS3",
        "skillProgress": "85",
        "progressColor": "bg-success"
    },
    {
        "id": 3,
        "skillName": "Bootstrap5",
        "skillProgress": "90",
        "progressColor": "bg-success"
    },
    {
        "id": 4,
        "skillName": "DaisyUI",
        "skillProgress": "90",
        "progressColor": "bg-success"
    },
    {
        "id": 5,
        "skillName": "TailwindCSS",
        "skillProgress": "85",
        "progressColor": "bg-primary"
    },
]

const developSkillsData = [
    {
        "id": 1,
        "skillName": "JavaScript",
        "skillProgress": "80",
        "progressColor": "bg-primary"
    },
    {
        "id": 2,
        "skillName": "ReactJS",
        "skillProgress": "85",
        "progressColor": "bg-primary",
    },
    {
        "id": 3,
        "skillName": "VueJS",
        "skillProgress": "75",
        "progressColor": "bg-info"
    },
    {
        "id": 4,
        "skillName": "NodeJS",
        "skillProgress": "65",
        "progressColor": "bg-primary",
    },
    {
        "id": 5,
        "skillName": "Linux & Bash",
        "skillProgress": "70",
        "progressColor": "bg-info"
    },
    {
        "id": 6,
        "skillName": "MongoDB",
        "skillProgress": "60",
        "progressColor": "bg-info"
    },
    {
        "id": 7,
        "skillName": "Python",
        "skillProgress": "60",
        "progressColor": "bg-info"
    },
    {
        "id": 8,
        "skillName": "PySpark",
        "skillProgress": "50",
        "progressColor": "bg-warning"
    },
    {
        "id": 9,
        "skillName": "FASTAPI",
        "skillProgress": "60",
        "progressColor": "bg-warning"
    },
    {
        "id": 10,
        "skillName": "TypeScript",
        "skillProgress": "50",
        "progressColor": "bg-warning"
    },
    {
        "id": 11,
        "skillName": "ExpressJS",
        "skillProgress": "55",
        "progressColor": "bg-warning"
    },
]

const devopsSkillsData = [
    {
        "id": 1,
        "skillName": "Docker & Containers",
        "skillProgress": "60",
        "progressColor": "bg-warning"
    },
    {
        "id": 2,
        "skillName": "Kubernetes",
        "skillProgress": "60",
        "progressColor": "bg-warning"
    },
    {
        "id": 3,
        "skillName": "Azure DevOps",
        "skillProgress": "70",
        "progressColor": "bg-info"
    },
    {
        "id": 4,
        "skillName": "Git & Github",
        "skillProgress": "90",
        "progressColor": "bg-success"
    },
    {
        "id": 5,
        "skillName": "DHC Paas",
        "skillProgress": "60",
        "progressColor": "bg-success"
    },
    {
        "id": 6,
        "skillName": "Databricks",
        "skillProgress": "50",
        "progressColor": "bg-success"
    }
]

const personalSkillsData = [
    {
        "id": 1,
        "skillName": "Problem Solving",
        "skillProgress": "80",
        "progressColor": "bg-warning"
    },
    {
        "id": 2,
        "skillName": "Team work",
        "skillProgress": "85",
        "progressColor": "bg-warning"
    },
    {
        "id": 3,
        "skillName": "Presentation Skills",
        "skillProgress": "75",
        "progressColor": "bg-info"
    },
    {
        "id": 4,
        "skillName": "Communication Skills",
        "skillProgress": "85",
        "progressColor": "bg-success"
    },
    {
        "id": 5,
        "skillName": "Creativity",
        "skillProgress": "80",
        "progressColor": "bg-success"
    },
    {
        "id": 6,
        "skillName": "Logic Building",
        "skillProgress": "80",
        "progressColor": "bg-success"
    }
]

const SkillSet = () => {
    useEffect(()=>{
         
    },[])

  return (
        <div className="container mb-5">
            <div className="row pt-4">
                <div className="col d-flex justify-content-center">
                    <h1 className='font-monospace fw-bold'>
                    My Skills
                    </h1>
                </div>
            </div>
            <div className='col pt-5'>
                <h4 className='font-monospace fw-bold skillHeader' >Web Design</h4></div>
            <div className="skillDesc">
                {designSkillsData.map((item) => {
                    return (
                        <div className='col-md-3 mx-auto my-4 d-flex justify-content-center align-items-center'>
                            <div className='radialContainer'>
                                <CircularProgressbar counterClockwise='true' value={item.skillProgress} text={`${item.skillProgress}%`} />
                                <h6 className='skillName'>{item.skillName}</h6>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='col pt-5'><h4 className='font-monospace fw-bold skillHeader' >Web Development</h4></div>
            <div className="skillDesc">
                {developSkillsData.map((item) => {
                    return (
                        <div className='col-md-3 mx-auto my-4 d-flex justify-content-center align-items-center'>
                            <div className='radialContainer'>
                                <CircularProgressbar counterClockwise='true' value={item.skillProgress} text={`${item.skillProgress}%`} />
                                <h6 className='skillName'>{item.skillName}</h6>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='col pt-5'><h4 className='font-monospace fw-bold skillHeader' >DevOps</h4></div>
            <div className="skillDesc">
                {devopsSkillsData.map((item) => {
                    return (
                        <div className='col-md-3 mx-auto my-4 d-flex justify-content-center align-items-center'>
                            <div className='radialContainer'>
                                <CircularProgressbar counterClockwise='true' value={item.skillProgress} text={`${item.skillProgress}%`}/>
                                <h6 className='skillName'>{item.skillName}</h6>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='col pt-5'><h4 className='font-monospace fw-bold skillHeader' >Interpersonal Skills</h4></div>
            <div className="skillDesc">
                {personalSkillsData.map((item) => {
                    return (
                        <div className='col-md-3 mx-auto my-4 d-flex justify-content-center align-items-center'>
                            <div className='radialContainer'>
                                <CircularProgressbar counterClockwise='true' value={item.skillProgress} text={`${item.skillProgress}%`} />
                                <h6 className='skillName'>{item.skillName}</h6>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
  )
}

export default SkillSet