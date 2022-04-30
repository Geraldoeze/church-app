import React from 'react';
import Button from '../../Button/Button';
import './connect.css';


const  Connect = () => {
    return ( 
        <>
          <div className='connect'>
              <img src='church1.jpg' alt='connect' className='imga' />
              <div className='connect-main'>
                  <h1 className='connect-h'>Connect With Us</h1>
                  <p className='connect-p'>If you want to be recieving messages and updates on your phone.
                      Connect with us to recieve text messages in the event of a service
                      cancellation. Click the Connect button to recieve SMS text alerts.
                  </p>
                  <Button change="btn22">CONNECT</Button>
              </div>
          </div>
        </>
     );
}
 
export default  Connect;