import React from 'react';
import Button from '../../Button/Button';
import EventPage from '../../EventPage/EventPage';
import Beliefs from '../Beliefs/Belief';
import Church from '../church/church';
import BackImage from '../BackImage/BackImage';
import Connect from '../connect/connect';
import About from '../SA/About';
import './HomeContent.css'
import Line from '../../Button/under-line';

const HomeContent = () => {
    return ( 
        <>
        {/* Top section */}
        <BackImage />
        {/* Middle section */}
            <section>
                <Church />
            </section>
        {/* Beliefs section */}
            <section>
                <Beliefs />
                <Connect />
            </section>
            <section>
                <About />
            </section>
            {/* Bottom Section */}
            <h1 className='event-header'>EVENT/PROGRAM</h1>
            <section className='content-section'>
              <EventPage />
            </section> 
           <Line />
        </>
     );
}
 
export default HomeContent;