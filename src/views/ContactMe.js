import React from 'react'
import '../styles/contact.css'
import { useState } from 'react'
import { useForm } from '@formspree/react';

const ContactMe = () => {
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ contact, setContact ] = useState('')
  const [ comment, setComment ] = useState('')
  const [state, handleSubmit] = useForm('mwkjbege')
  if(state.succeeded){
    alert('Form submitted Successfully')
    setFirstName('')
    setLastName('')
    setEmail('')
    setContact('')
    setComment('')
  }
  return (
    <div className=' backgroundOverlay'>
      <div className='container mb-5' >
        <div className='row py-4'>
          <div className="col d-flex justify-content-center">
            <h1 className='font-monospace fw-bold text-white'>
                Contact Me
            </h1>
          </div>
        </div>
        <div className='row mx-5'>
          <div className='col-6'>
            <form onSubmit={handleSubmit}>
              <div className='row'>
                <div className="col">
                  <div className="form-floating mb-3 text-dark">
                    <input type="text" className="form-control" id="floatingInput" name='firstName' placeholder="First Name" value={firstName} onInput={(e) => setFirstName(e.target.value)}/>
                    <label for="floatingInput">First Name</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating mb-3 text-dark">
                    <input type="text" className="form-control" id="floatingInput" name='lastName' placeholder="Last Name" value={lastName} onInput={(e) => setLastName(e.target.value)}/>
                    <label for="floatingInput">Last Name</label>
                  </div>
                </div>
              </div>
              <div className="form-floating mb-3 text-dark">
                <input type="email" className="form-control" id="floatingInput" name='email'placeholder="name@example.com" value={email} onInput={(e) => setEmail(e.target.value)}/>
                <label for="floatingInput">Email address</label>
                <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
              </div>
              <div className="form-floating mb-3 text-dark">
                <input type="text" className="form-control" id="floatingInput" name='phoneNumber' placeholder="contact" value={contact} onInput={(e) => setContact(e.target.value)}/>
                <label for="floatingInput">Contact</label>
                <div id="emailHelp" className="form-text text-light">We'll never share your contact number with anyone else.</div>
              </div>
              <div className="mb-3 form-floating text-dark">
                <textarea className="form-control" placeholder="Leave a comment here" name='message' id="floatingTextarea" style={{height: "100px"}} value={comment} onInput={(e) => setComment(e.target.value)}></textarea>
                <label for="floatingTextarea">Comments</label>
              </div>
              <div className='d-flex justify-content-center pt-3'>
                <button type="submit" className="btn btn-outline-primary submitBtn shadow-lg text-white" style={{width: "10rem",borderRadius: "0.8rem"}}>Submit</button>
              </div>
            </form>
          </div>
          <div className='col-6'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31104.905488625303!2d77.71593303094218!3d12.964608512386313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11f35d0dfc83%3A0x30cfa512d80115f9!2sWhitefield%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714141198600!5m2!1sen!2sin" width="600" height="450" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe