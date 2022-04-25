import React from 'react';
import Button from '../../Button/Button'
import './contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
    return ( 
        <>
        <section className='contact'>
          <h3 className='contact-logo'>LOGO</h3>
          <form method='POST' onSubmit={handleSubmit} className='contact-form'>
            <h1 className='contact-text'>Contact Form</h1>
            <div className='form'>
              <label className='label'>Name</label>
              <input className='form-name' type='text' placeholder='First Name'/>
              <input className='form-name' type='text' placeholder='LastName'/>
            </div>
            <div className='form'>
              <label className='label'>Phone</label>
              <input className='form-phone' type='number' placeholder='#### ### ####'/>
            </div>
            <div className='form'>
              <label className='label'>Email</label>
              <input className='form-mail' type='email' placeholder='Email'/>
            </div>
          
            <div className='form'>
              <label className='label'>Could we have some details about your question?</label>
              <textarea className='form-details' type='text'/>
            </div>
            <Button change='btn1'>SEND</Button>
          </form>
           
        </section>
        </>
     );
}
 
export default Contact;