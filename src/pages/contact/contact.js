import React from 'react';
import Button from '../../components/UIElements/Button/Button';
import './contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
    return ( 
        <>
        <section className='contact'>
          
          <form method='POST' onSubmit={handleSubmit} className='contact-form'>
            <h1 className='contact-text'>Contact Form</h1>

            <div className='form main'>
              <label className='label'>Name</label>
              <input className='form-name' type='text' placeholder='First Name' name='fname'/>
              <input className='form-name' type='text' placeholder='Last Name' name='lname'/>
            </div>

            <div className='form digits'>
              <label className='label'>Phone</label>
              <input className='form-phone' type='number' placeholder='#### ### ####' name='number'/>
            </div>

            <div className='form email'>
              <label className='label'>Email</label>
              <input className='form-mail' type='email' placeholder='Email' name='mail'/>
            </div>
          
            <div className='form info'>
              <label className='label'>Could we have some details about your question?</label>
              <textarea className='form-details' type='text' name='details'/>
            </div>
            <Button change='btn1'>SEND</Button>
          </form>
           
        </section>
        </>
     );
}
 
export default Contact;