import React from 'react'
import '../styles/contact.css'

const ContactMe = () => {
  return (
    <div>
      <div className='container mb-5' >
        <div className='row py-4'>
          <div className="col d-flex justify-content-center">
            <h1 className='font-monospace fw-bold text-white'>
                Contact Me
            </h1>
          </div>
        </div>
        <div className='row mx-5'>
          <form method='POST' action='https://formspree.io/f/mwkjbege'>
            <div className='row'>
              <div className="col">
                <div className="form-floating mb-3 text-dark">
                  <input type="text" className="form-control" id="floatingInput" name='firstName' placeholder="First Name"/>
                  <label for="floatingInput">First Name</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating mb-3 text-dark">
                  <input type="text" className="form-control" id="floatingInput" name='lastName' placeholder="Last Name"/>
                  <label for="floatingInput">Last Name</label>
                </div>
              </div>
            </div>
            <div className="form-floating mb-3 text-dark">
              <input type="email" className="form-control" id="floatingInput" name='email'placeholder="name@example.com"/>
              <label for="floatingInput">Email address</label>
              <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
            </div>
            <div className="form-floating mb-3 text-dark">
              <input type="text" className="form-control" id="floatingInput" name='phoneNumber' placeholder="contact"/>
              <label for="floatingInput">Contact</label>
              <div id="emailHelp" className="form-text text-light">We'll never share your contact number with anyone else.</div>
            </div>
            <div className="mb-3 form-floating text-dark">
              <textarea className="form-control" placeholder="Leave a comment here" name='message' id="floatingTextarea" style={{height: "100px"}}></textarea>
              <label for="floatingTextarea">Comments</label>
            </div>
            <div className='d-flex justify-content-center pt-3'>
              <button type="submit" className="btn btn-outline-primary submitBtn shadow-lg text-white" style={{width: "10rem",borderRadius: "0.8rem"}}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactMe