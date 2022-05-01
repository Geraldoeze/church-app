import React from 'react';
import Line from '../../UIElements/Line/under-line';
import './Vision.css';

const Vision = () => {
    return ( 
        <>
        <div className='vision'>
          <div className='vision-main'>
            <h2>Our Vision</h2> 
            <p>Providing solution to every life's challenges and problem through the word of God and the power of the 
                holy spirit to build, change and transform lives and community, locally and globally.
            </p>
          </div>  
          <div className='vision-image'>
              <img src='ima.jpg' alt='love' /> 
          </div>
        </div>
        <Line />
        </>
     );
}
 
export default Vision;