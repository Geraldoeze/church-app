import React from 'react';
import Button from '../Button/Button';
import Line from '../Button/under-line';
import './EventPage.css'
import { Events } from './events';

const EventPage = () => {
    return (
        <>
          <h2>Events/Programs</h2>
          {Events.map((data, id) => {
             { return( 
              <>
                <div className='event-content__main' id={id}>
                    <div className='event-content__info'>
                        <img src={data.image} alt='img'/>
                    </div>
                    <div className='event-content__program'>
                        <h2>{data.name}</h2>
                        <p>{data.days}</p>
                        <p>{data.time}</p>
                        <div><Button to="/contact" change="btn" >Learn More</Button></div>
                    </div>    
                </div>
                <Line />
              </> 
            )}
             })} 
    </>
    );
}
 
export default EventPage;