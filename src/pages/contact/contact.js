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
              <label >Name</label>
              <input  type='text' placeholder='First Name' name='fname'/>
              <input  type='text' placeholder='Last Name' name='lname'/>
            </div>

            <div className='form digits'>
              <label >Phone</label>
              <input  type='number' placeholder='#### ### ####' name='number'/>
            </div>

            <div className='form email'>
              <label >Email</label>
              <input type='email' placeholder='Email' name='mail'/>
            </div>
          
            <div className='form info'>
              <label >Question?</label>
              <textarea type='text' name='details'/>
            </div>
            <Button change='btn1'>SEND</Button>
          </form>
           
        </section>
        </>
     );
}
 
export default Contact;