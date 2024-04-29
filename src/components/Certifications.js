import React from 'react';
import '../styles/certifications.css'
import { certificationData } from '../static/certifications'

const Certifications = () => {
  return (
    <div className='certifications'>
      <div className='container mb-5'>
        <div className='row pb-4'>
          <div className='certificationHeader'>
            <h1>Certifications</h1>
          </div>
        </div>
        <div className='row certificationDesc mx-auto'>
          {certificationData.map((item) => {
            return (
                <div className="col-3 card flip-card mx-3 mb-5">
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