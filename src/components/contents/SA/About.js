import React from 'react';
import Line from '../../UIElements/Line/under-line';
import './About.css';

const About = () => {
    return ( 
        <React.Fragment>
        <div className='sa-main'>
            <div className='sa-image'>
                <img src='book.jpg' alt='pastor' />
            </div>
            <div className='sa-text'>
                <h2>About the OveseeR</h2>
                <p>
                     Through the prophetic ministry spanning more than a decade, Prophet Sunday M. Abiodun has
					helped so many to experience deliverance, discovery and fulfillment of destiny through the
					interpretation of the word of God. Presiding over a universal interdenominational network
					of Global Solution Assembly (Solution Night) in several state capital of Nigeria with the
					message "There is no Problem without a Solution" He has a great prophetic insight and
					revelation coupled with teaching ministry with which he organizes a TV programme "solution
					on Air". That has brought hope life and deliverance to several lives and homes. Prophet
					Sunday M. Abiodun is a trained business man and graduate of Business Administration. He is
					happily married to Pastor (Mrs) Victoria Abiodun and blessed with four children [4s]. He
                   is the author of the bestselling book "The Beauty of My Destiny".
                </p>
            </div>
        </div>
        <Line />
        </React.Fragment>
     );
}
 
export default About;