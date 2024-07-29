import React from 'react'
import '../styles/technologies.css'
// import VueLogo from '../assets/vueLogo.webp'
// import DockerLogo from '../assets/dockerLogo.png'
// import DevopsLogo from '../assets/devopsLogo.png'
// import FastApiLogo from '../assets/fastapiLogo.png'
import JSLogo from '../assets/icons/js.png'
import HTMLLogo from '../assets/icons/html.png'
import CSSLogo from '../assets/icons/css.png'
import TSLogo from '../assets/icons/typescript.png'
import ReactLogo from '../assets/icons/react.png'
import VueLogo from '../assets/icons/vue.png'
import NodeLogo from '../assets/icons/node.png'
import ExpressLogo from '../assets/icons/express.png'
import PythonLogo from '../assets/icons/python.png'
import FastAPILogo from '../assets/icons/fastapi.png'
import BootstrapLogo from '../assets/icons/bootstrap.png'
import TailwindLogo from '../assets/icons/tailwind.png'
import DaisyUILogo from '../assets/icons/daisyui.png'
import MaterialUILogo from '../assets/icons/materialui.png'
import SassLogo from '../assets/icons/sass.png'
import MongoLogo from '../assets/icons/mongo.png'
import PostgresLogo from '../assets/icons/postgres.png'
import LinuxLogo from '../assets/icons/linux.png'
import GitLogo from '../assets/icons/git.png'
import GithubLogo from '../assets/icons/github.png'
import DockerLogo from '../assets/icons/docker.png'
import DevopsLogo from '../assets/icons/devops.png'
import NginxLogo from '../assets/icons/nginx.png'
import ReduxLogo from '../assets/icons/redux.png'

const Technologies = () => {

  return (
    <>
      <div className='common-block odd-block pt-4 '>
        <div className='container-fluid mb-5'>
          <div className='row mb-5'>
            <div className='title'>
              <h1>Technologies</h1>
            </div>
          </div>        
          {/* <div className='technologiesDesc row pt-5'>
            <div className='container pb-4 mx-auto shadow-lg'>
              <div className='row'>
                <div className='col-6 technologyBlogImage' style={{height: '15rem', width: '30rem'}}>
                  <img src={VueLogo} alt="Vue Logo" style={{height: '100%', width: '100%'}}></img>
                </div>
                <div className='col-6 technologyBlogDesc mx-auto '>
                  <h5 className='technologyBlogHeader font-monospace fw-bold pb-2'>Vue.js</h5>
                  <p >Vue is one of the best JavaScript framework for building user interfaces. I learnt vue.js after joining MBRDI since august and as coming from react and js background, It was quite easy to learn. I also created a Task app on vue with authentication and restricted acccess for my learnings assignment. I did an udemy course where i also learnt about a lot of libraries for vue 3 such as vue router and vuex.</p>
                </div>
              </div>
            </div>
            <div className='container pb-4 mx-auto shadow-lg'>
              <div className='row'>
                <div className='col-6 technologyBlogDesc mx-auto '>
                  <h5 className='technologyBlogHeader font-monospace fw-bold pb-2'>Docker</h5>
                  <p>Docker and containers are impressive technologies that makes development much more dynamic. When I started learning it, I was very much amazed and started practising it in open lab environment platforms such as oreilly and KodeCloud. Then I also looked into DHC Caas and kubernetes and how to deploy containers in bouncyCaastle, which is an internal kubernetes cluster playground. I also did some courses on dockers as well as kubernetes in Udemy.</p>
                </div>
                <div className='col-6 technologyBlogImage' style={{height: '15rem', width: '30rem'}}>
                  <img src={DockerLogo} alt="Docker Logo" style={{height: '100%', width: '100%'}}></img>
                </div>
              </div>
            </div>
            <div className='container pb-4 mx-auto shadow-lg'>
              <div className='row'>
                <div className='col-6 technologyBlogImage' style={{height: '15rem', width: '30rem'}}>
                  <img src={DevopsLogo} alt="DevOps Logo" style={{height: '100%', width: '100%'}}></img>
                </div>
                <div className='col-6 technologyBlogDesc mx-auto '>
                  <h5 className='technologyBlogHeader font-monospace fw-bold pb-2'>Azure DevOps</h5>
                  <p>Azure DevOps is a collaborative approach to develop a product that brings together all the developers, project manager as well as deployment teams. I did some udemy courses on Azure devops as well as looked into some youtube videos for deep knowledge. I also created some pipelines for the learnings. Finally, I created a complete build pipeline from scratch in MBDF python project.</p>
                </div>
              </div>
            </div>
            <div className='container pb-4 mx-auto shadow-lg'>
              <div className='row'>
                <div className='col-6 technologyBlogDesc mx-auto '>
                  <h5 className='technologyBlogHeader font-monospace fw-bold pb-2'>Fast API</h5>
                  <p>FastAPI is a Web framework for developing RESTful APIs in Python. As I have already worked on REST API's in node.js, It was pretty much easy for me to relate to it and learn fastapi and it also has a very good documentation that can give us the solution to almost every question. I created some backend api's while working in UniteBI project.</p>
                </div>
                <div className='col-6 technologyBlogImage' style={{height: '15rem', width: '30rem'}}>
                  <img src={FastApiLogo} alt="FastApi Logo" style={{height: '100%', width: '100%'}}></img>
                </div>
              </div>
            </div>
          </div> */}
          <div className='row'>
            <div className='d-flex flex-row gap-5 flex-wrap justify-content-center'>
              <div>
                <img src={HTMLLogo} height='50px' width='50px' alt='Technology'></img>
              </div>
              <div>
                <img src={CSSLogo} height='50px' width='50px' alt='Technology'></img>
              </div>
              <div>
                <img src={JSLogo} height='50px' width='50px' alt='Technology'></img>
              </div>
              <div>
                <img src={TSLogo} height='50px' width='50px' alt='Technology'></img>
              </div>
              <div>
                <img src={ReactLogo} height='50px' width='50px' alt='Technology'></img>
              </div>
              <div>
                <img src={VueLogo} height='50px' width='50px' alt='Technology'></img>
              </div>
              <div>
                <img src={NodeLogo} height='50px' width='50px' alt='Technology'></img>
              </div>
              <div>
                <img src={ExpressLogo} height='50px' width='50px' alt='Technology'></img>
              </div>
              <div>
                <img src={PythonLogo} height='50px' width='50px' alt='Technology'></img>
              </div>
              <div>
                <img src={FastAPILogo} height='50px' width='50px' alt='Technology'></img>
              </div>
              <div>
                <img src={BootstrapLogo} height='50px' width='80px' alt='Technology'></img>
              </div>
              <div>
                <img src={TailwindLogo} height='50px' width='50px' alt='Technology'></img>
              </div>
              <div>
                <img src={DaisyUILogo} height='50px' width='100px' alt='Technology'></img>
              </div>
              <div>
                <img src={MaterialUILogo} height='50px' width='50px' alt='Technology'></img>
              </div>
              <div>
                <img src={SassLogo} height='50px' width='80px' alt='Technology'></img>
              </div>
              <div>
                <img src={MongoLogo} height='50px' width='50px' alt='Technology'></img>
              </div>
              <div>
                <img src={PostgresLogo} height='50px' width='50px' alt='Technology'></img>
              </div>
              <div>
                <img src={LinuxLogo} height='50px' width='50px' alt='Technology'></img>
              </div>
              <div>
                <img src={GitLogo} height='50px' width='50px' alt='Technology'></img>
              </div>
              <div>
                <img src={GithubLogo} height='50px' width='50px' alt='Technology'></img>
              </div>
              <div>
                <img src={DockerLogo} height='50px' width='50px' alt='Technology'></img>
              </div>
              <div>
                <img src={ReduxLogo} height='50px' width='50px' alt='Technology'></img>
              </div>
              <div>
                <img src={DevopsLogo} height='50px' width='80px' alt='Technology'></img>
              </div>
              <div>
                <img src={NginxLogo} height='50px' width='80px' alt='Technology'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Technologies