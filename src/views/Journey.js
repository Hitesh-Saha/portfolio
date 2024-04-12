import React from "react";
import '../styles/journey.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import vueLogo from '../assets/Vue.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar
} from "@fortawesome/free-solid-svg-icons";
import AugustImage from '../assets/AugustImage.png';
import SeptemberImage from '../assets/SeptemberImage.png';
import OctoberImage from '../assets/OctoberImage.png';
import NovemberImage from '../assets/NovemberImage.png';
import DecemberImage from '../assets/DecemberImage.png'
import JanuaryImage from '../assets/JanuaryImage.png'
import FebruaryImage from '../assets/FebruaryImage.png'

const journeyData = [
  {
    key: 1,
    journeyDate: 'August 2022',
    journeyImg: AugustImage,
    journeyDetails: 'My Journey in MBRDI started with the onboarding session where we had games and we also had to make a group video on past, present and future of MBRDI. It was a month of meeting new people and making friends while I also got to learn a lot of things about the company. Company hierarchy was a bit tough to understand but it was really explained very well by my manager "Sandeep Anand". I also met one of the most interesting person who eventually became my lead, "Srikanth Shonti". I learned a lot of things from him such as creativity and team building. Most of the time of the month went by in onboarding session and mandatory web trainings.'
  },
  {
    key: 2,
    journeyDate: 'September 2022',
    journeyImg: SeptemberImage,
    journeyDetails: `The new month started with an amazing party. Later I was assigned the task to learn Vue.js and I started liking the framework as it is very dynamic. I created a Task App on Vue.js as my assignment. We also had our first PI planning that month where we got to know about all the products of data factory, though we couldn't contribute much but we understood most of the things. We were also introduced to the whole data factory team. I also completed the AZ-900 certification course by udemy and passed the AZ-900 Azure Fundamentals Certification by Microsoft.`
  },
  {
    key: 3,
    journeyDate: 'October 2022',
    journeyImg: OctoberImage,
    journeyDetails: `It was the month of festivals and it has been already two months of my journey, so far it has been an amazing experience with a lot of guidance and knowledge around. My Vue learning was almost about to end and I was assigned with a new task to learn about DevOps. I started learning Dockers and Containers, practiced them in open lab environments such as oreilly platform and then I moved to Azure DevOps. I also completed Azure DevOps Fundamentals course by Udemy. I created build pipelines in Azure DevOps pipelines for my personal projects and gained some knowledge about pipelines and yaml files.`
  },
  {
    key: 4,
    journeyDate: 'November 2022',
    journeyImg: NovemberImage,
    journeyDetails: 'I started this month with great enthusiasm. I started learning Kubernetes and DHC Paas and it amazed me in many ways. Coming from the development background, It helped me to brush up my networking knowledge as well. I was also assigned to work in a real project i.e., "Semantor" in the frontend, as it was based on Vue.js, The skills that I gained from last two months helped me a lot. I also participated in a three day SAFe workshop where we were taught about agile framework and methadologies and how to implement those in the projects that I am working on. My biggest achievement of this month was to appear for the SAFe Certification Exam and passing it. '
  },
  {
    key: 5,
    journeyDate: 'December 2022',
    journeyImg: DecemberImage,
    journeyDetails: `I was pretty much enjoying working in Semantor and this month brought me two new opportunities to upskill my knowledge. I was assigned two new projects one was "UNITE BI", formerly named as FOMO Company, which was assigned by "Crystal D'souza" to all GET's and the other being "MBDF Python project" which was assignedd by "Partha Ghosh" to the GET's of data factory. I was very much delighted to take up the task and setting up the whole project setup for UNITE BI and I also gave KT to all the GET's about react, tailwindcss, daisyUI, git & github. I also got to learn a lot about python and pyspark from MBDF Project. We also had our first annual department outing this month which was a big blast.`
  },
  {
    key: 6,
    journeyDate: 'January 2022',
    journeyImg: JanuaryImage,
    journeyDetails: `The new year started with a lot of responsibility as we had to give a demo of UNITE BI to our E3 "Shweta Kaushik". This made us work late night but finally the demo went well and that made us feel proud. Still there was a long way to go, as I took up the task of deploying the UNITE BI, both frontend and backend. I continued with my other projects as usual and learned many new things in my journey. We also had our 2nd PI planning this month and this time, I was able to contribute as I was already working on Semantor so I knew the features and the scope of the project. `
  },
  {
    key: 7,
    journeyDate: 'February 2022',
    journeyImg: FebruaryImage,
    journeyDetails: `This month started with a lot of tasks including the deployment of UniteBI. As I was already familiar with DHC Paas, Docker and BouncyPaastle but I faced a lot of challenges in deployment but eventually I overcomed all my challenges. We also completed MBDF Python project and successfully deployed it in databricks using DevOps pipelines. We also gave the demo to "Partha Ghosh" and he appreciated it so well. But far now I learned a lot of new things in MBRDI since last 6 months including DevOps, python, fastAPI, Databricks, Vue.js, etc, that will contribute more towards my career growth.`
  }

]

const Journey = () => {
  return (
    <div className="journey">
      <div className="container mb-5">
        <div className="row pt-4 mb-5">
            <div className="col d-flex justify-content-center">
                <h1 className='font-monospace fw-bold'>
                My Journey
                </h1>
            </div>
        </div>
        <VerticalTimeline layout='1-column-left' lineColor='#00a1ff'>
          <VerticalTimelineElement
            iconStyle={{ color: '#1d1d1b',background: '#00a1ff', display: 'flex', justifyContent: 'center', alignItems: 'center', top: '-33px', boxShadow: 'none', height: '4rem', width: '4rem', left: '-12px'}}
            icon={<FontAwesomeIcon icon={faCalendar} />}
            position='left'
            date='Start'
            dateClassName="journeyStart"
          />
          {journeyData.map((item) => {
            return (
              <VerticalTimelineElement
                  contentStyle={{ background: '#282828', color: '#fff', borderRadius: '10px', top: '-26px', boxShadow: 'none !important' }}
                  contentArrowStyle={{ borderRight: '7px solid #282828', boxShadow: 'none !important' }}
                  iconStyle={{ color: '#1d1d1b',background: '#00a1ff', display: 'flex', justifyContent: 'center', alignItems: 'center', top: '-33px', boxShadow: 'none', height: '4rem', width: '4rem', left: '-12px'}}
                  icon={<FontAwesomeIcon icon={faCalendar} />}
                >
                <div className="container">
                  <div className='row'>
                    <div className="col-4">
                      <img className="" src={item.journeyImg} alt="Card image cap" style={{height: '100%', width: '100%'}}/>
                    </div>
                  <div className="col-8">
                    <h3 className="journeyHeader">{item.journeyDate}</h3>
                    <p >{item.journeyDetails} </p>
                  </div>
                  </div>
                </div>
              </VerticalTimelineElement>
            )
          })}
        <VerticalTimelineElement
          iconStyle={{ color: '#1d1d1b',background: '#00a1ff', display: 'flex', justifyContent: 'center', alignItems: 'center', top: '33px', boxShadow: 'none', height: '4rem', width: '4rem', left: '-12px'}}
          icon={<FontAwesomeIcon icon={faCalendar} />}
          position='left'
          date='End'
          dateClassName="journeyEnd"
          />
      </VerticalTimeline>
      </div>
    </div>
  );
};

export default Journey;
