import React from 'react';
import Button from '../../Button/Button';
import './footerEvents.css';
import SocialM from '../../Social-M/Social-M';
import Line from '../../Button/under-line';

const FooterEvents = () => {
    return ( 
        <>
          <section className='footer-section'>
              <div className='footer-main'>
                  <h4>Global Assembly</h4>
                  <p>Along Aso drive Maitama Abuja</p>
                  <p><span>Contact Us</span> +234-9058833298</p>
              </div>
              <div className='footer-sub'>
                  <h4>Join our Mailing List</h4>
                  <input className='input'/><Button>Sign Up</Button>
              </div>
              <div className='footer-links'>
                  <h4>Follow Us</h4>
                  <SocialM />
              </div>
          </section>
          
        </>
     );
}
 
export default FooterEvents;