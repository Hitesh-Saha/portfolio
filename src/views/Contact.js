import React, { useState } from 'react'
import '../styles/contact.css'
// import { useForm } from '@formspree/react';

const Contact = () => {
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ contact, setContact ] = useState('')
  const [ comment, setComment ] = useState('')
  const [ subject, setSubject ] = useState('')
  const [ submitted, setSubmitted ] = useState(false);
  const [ isSubmitting, setIsSubmitting ] = useState(false);
  // const [state, handleSubmit] = useForm('mwkjbege')
  // if(state.succeeded){
  //   setSubmitted(true)
  //   setFirstName('')
  //   setLastName('')
  //   setEmail('')
  //   setContact('')
  //   setComment('')
  //   setSubject('')
  //   setTimeout(() => {
  //     setSubmitted(false)
  //   }, 3000)
  // }
  const submitForm = async(e) => {
    setIsSubmitting(true)
    e.preventDefault()
    const url = 'https://formspree.io/f/mwkjbege'
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      contact: contact,
      message: comment,
      subject: subject
    }
    try{
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true)
        setIsSubmitting(false)
        setFirstName('')
        setLastName('')
        setEmail('')
        setContact('')
        setComment('')
        setSubject('')
        setTimeout(() => {
          setSubmitted(false)
        }, 3000)
      }

    }
    catch(e) {
      console.log(e)
    }
  }

  return (
    <div className=' common-block odd-block'>
      <div className='container mb-5' >
        <div className='row py-4 mb-3'>
          <div className="col d-flex justify-content-center">
            <h1 className='font-monospace fw-bold title'>
              Contact
            </h1>
          </div>
        </div>
        <div className='row gy-4'>
          <div className='col-8 mx-auto'>
            <form>
              <div className='row'>
                <div className="col-12 col-md-6">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control contact-input" id="floatingInput" name='firstName' placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    <label htmlFor="floatingInput">First Name</label>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control contact-input" id="floatingInput" name='lastName' placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    <label htmlFor="floatingInput">Last Name</label>
                  </div>
                </div>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control contact-input" id="floatingInput" name='email' placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="floatingInput">Email address</label>
                {/* <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div> */}
              </div>
              <div className="form-floating mb-3">
                <input type="number" className="form-control contact-input" id="floatingInput" name='phoneNumber' placeholder="contact" value={contact} onChange={(e) => setContact(e.target.value)}/>
                <label htmlFor="floatingInput">Mobile Number</label>
                {/* <div id="emailHelp" className="form-text text-light">We'll never share your contact number with anyone else.</div> */}
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control contact-input" id="floatingInput" name='subject' placeholder="subject" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                <label htmlFor="floatingInput">Subject</label>
              </div> 
              <div className="mb-3 form-floating">
                <textarea className="form-control contact-input" placeholder="Leave a comment here" name='message' id="floatingTextarea" style={{height: "100px"}} value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                <label htmlFor="floatingTextarea">Your Message</label>
              </div>
              <div className='d-flex justify-content-center pt-3'>
                <button type="submit" className="btn btn-outline-primary submit-btn shadow-lg" disabled={isSubmitting} onClick={(e) => submitForm(e)} >Submit</button>
              </div>
            </form>
          </div>
          {/* <div className='col-12 col-md-6 location-block'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31104.905488625303!2d77.71593303094218!3d12.964608512386313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11f35d0dfc83%3A0x30cfa512d80115f9!2sWhitefield%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714141198600!5m2!1sen!2sin" title='current location' height='100%' width='100%' style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div> */}
        </div>
      </div>
      {submitted && <div class="alert alert-success" role="alert">
        A simple success alert—check it out!
      </div>}
    </div>
  )
}

export default Contact;