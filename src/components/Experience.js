import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experienceData } from "../static/experiences";
import '../styles/experience.css';

const Experience = () => {
  return (
    <div className="common-block even-block">
      <div className="container pb-4 pt-4">
        <div className="row pb-4 mb-5">
            <h2 className='title'>
                Experience
            </h2>
        </div>
        <VerticalTimeline lineColor='#00e5ff'>
          {experienceData.map((item) => {
            return (
              <VerticalTimelineElement
                  contentStyle={{ background: 'var(--secondary-background)', color: 'var(--primary-text)', borderRadius: '10px', top: '-22px'}}
                  contentArrowStyle={{ borderRight: '10px solid var(--secondary-color)', boxShadow: 'none !important' }}
                  iconClassName="icon-class"
                //   date={item.duration}
                //   dateClassName="duration-class"
                >
                <div className="container">
                  <div className='row'>
                    <div className="col-12" style={{textAlign: 'left'}}>
                        <h3 className="experience-header">{item.designation}</h3>
                        <h4 className="pb-2">{item.company}</h4>
                        <span className="duration-class">{item.duration}</span> <span className="badge rounded-pill p-2">{item.location}</span>
                        <p>{item.description} </p>
                    </div>
                  </div>
                </div>
              </VerticalTimelineElement>
            )
          })}
        {/* <VerticalTimelineElement
          iconStyle={{ color: '#1e1e1e',background: '#00a1ff', display: 'flex', justifyContent: 'center', alignItems: 'center', top: '33px', boxShadow: 'none', height: '4rem', width: '4rem', left: '-12px'}}
          icon={<FontAwesomeIcon icon={faCalendar} />}
          position='left'
          date='End'
          dateClassName="journeyEnd"
          /> */}
      </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
