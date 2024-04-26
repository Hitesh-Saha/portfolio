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
      <div className='project pt-4'>
          <div className='container-fluid mx-auto'>
            <div className='row pb-3'>
              <div className='projectHeader'>
                <h1>My Works</h1>
              </div>
            </div>
            <div className='projectDesc pt-5'>
              {projectData.map((item) => {
                return (
                  <div className='projectCard' onClick={() => handleProject(item)} key={item.key}>
                    <div className='imgbox'>
                      <img src={item.projectImage} alt="..."/>
                    </div>
                    <div className='projectFront'><h3 className='font-monospace fw-bold'>{item.projectName}</h3></div>
                    <div className='projectCardContent'>
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