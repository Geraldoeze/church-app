import React from 'react';
import Button from '../../../components/UIElements/Button/Button';
import './footerEvents.css';
import SocialM from '../../../components/Social-M/Social-M';


const FooterEvents = () => {
    return ( 
        <>
          <section className='footer-section'>
              <div className='footer-main'>
                  <h4>Global Assembly LOGO</h4>
                  <p>Welcome to Global Assembly ministry. A Jesus-centered church in Abuja</p>
                  <p><span>Contact Us</span> +234-9058833298</p>
              </div>
              <div className='footer-sub'>
                  <h4>UPCOMING SERVICES</h4>
                  <p>Sunday 9 AM Early Service</p>
                  <p>11 AM Morning Service</p>
                  <p>Wednesday 5 PM Bible study</p>                  
                  <p>Friday 5 PM Evening Service</p>
              </div>
              <div className='footer-links'>
                  <h4>Follow Us</h4>
                  <p>Stay connected with Christ Unveiled across several social media 
                      platfroms.
                  </p>
                  <SocialM />
              </div>
              <div className='footer-support'>
                <h4>DONATE & SUPPORT</h4>
                <p>Giving our resources strengthens our relationship with God
                  and frees us to live open-handedly, trusting God with our finances.    
                </p>
                <Button> DONATE TO GA</Button>
              </div>
          </section>
          
        </>
     );
}
 
export default FooterEvents;