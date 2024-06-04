import React from 'react';
import '../styles/certifications.css'
import { certificationData } from '../static/certifications'

const Certifications = () => {
  return (
    <div className='certifications'>
      <div className='container pb-4 pt-4'>
        <div className='row pb-4'>
          <div className='certificationHeader'>
            <h1>Certifications</h1>
          </div>
        </div>
        <div className='row certificationDesc pr-4 pl-4'>
          {certificationData.map((item) => {
            return (
                <div className="col-12 col-md-5 col-lg-3 card flip-card" key={item.key}>
                  <img src={item.certificate} className="card-img-top" alt={item.certificateAlt} height='200px'/>
                  <div className="card-body">
                    <h5 className='certificateHeader font-monospace'>{item.certificateName}</h5>
                    <p className=''>{item.certificateVendor}</p>
                    <p>Expiry: <span>{item.Expiry}</span></p>
                    <a href={item.certificate} target='_blank' rel='noreferrer' className="btn btn-outline-primary">View</a>
                  </div>
                </div>
              // </div>
            )
          }
          )}
        </div>
      </div>
    </div>
  )
}

export default Certifications