import React from 'react';
import Button from '../../Button/Button'
import './contact.css';

const Contact = () => {
    return ( 
        <>
        <section className='contact'>
          
            <h2 className='contact-title'>Church Contact Form</h2>
          <div className='contact-form'>
          <form onSubmit={''}>
            <input type="text" name="name"  placeholder="Name" id="name" />
            <input type="email" name="email" placeholder="Email" id="mail" />
            <input type="text" name="subject" placeholder="Subject" id="topic" />
            <textarea type="text" name="message" placeholder="Message" id="message" />
            <Button>Send Message</Button>
          </form>
        </div>
      </section>
        </>
     );
}
 
export default Contact;