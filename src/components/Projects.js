import React from 'react'
import '../styles/projects.css'
import { projectData } from '../static/projects'

const Projects = () => {

  const handleProject = (project) => {
    const link = document.createElement('a')
    link.href = project.projectLink
    link.target = '_blank'
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
      <div className='common-block even-block pt-4'>
          <div className='container mx-auto'>
            <div className='row pb-3 mb-5'>
              <div className='title'>
                <h2>Works</h2>
              </div>
            </div>
            <div className='project-desc pt-5'>
              {projectData.map((item) => {
                return (
                  <div className='project-card' onClick={() => handleProject(item)} key={item.key}>
                    <div className='img-box'>
                      <img src={item.projectImage} alt="..."/>
                    </div>
                    <div className='project-front'><h3 className='font-monospace fw-bold'>{item.projectName}</h3></div>
                    <div className='project-card-content'>
                      <h2 >{item.projectName}</h2>
                      <p >{item.projectDesc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
      </div>
    </>
  )
}

export default Projects