import React from 'react';
import EventPage from '../../components/EventPage/EventPage';
import Beliefs from '../../components/contents/Beliefs/Belief';
import Church from '../../components/contents/church/church';
import BackImage from '../../components/contents/BackImage/BackImage';
import Connect from '../../components/contents/connect/connect';
import About from '../../components/contents/SA/About';
import './HomeContent.css'
import Line from '../../components/UIElements/Line/under-line';

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
        {/* Overseer Section */}
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