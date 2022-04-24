import React from 'react';
import Button from '../../Button/Button';
import Vision from '../vision/Vision';
import './church.css';

const Church = () => {
    return ( 
        <React.Fragment>
            <div className='church-main'>
                <div className='church-sub'>
                    <h2> Our Church</h2>
                    <p>We are on a mission to bring people closer to God. It doesnt matter your background or where you're from.
                        We are all equal in the eyes of God and so we all must come together as one family with God as our Father in Heaven.
                    </p>
                    <Button change="btn"> Learn More</Button>
                </div>
                <div className='church-image'>
                    <img src='service.jpg' alt='peace' />
                </div>
            </div>
            <Vision />
        </React.Fragment>
     );
}
 
export default Church;