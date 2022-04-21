import React from 'react';
import Button from '../../Button/Button';
import Line from '../../Button/under-line';
import EventPage from '../../EventPage/EventPage';
import SocialM from '../../Social-M/Social-M';
import Church from '../church/church';
import About from '../SA/About';
import './HomeContent.css'

const HomeContent = () => {
    return ( 
        <>
        {/* Top section */}
         <div className='container'>
             <div className='ima'></div>
             <div className='overlay'></div>
             <div className='text'>
                 <h2>GLOBAL SOLUTION ASSEMBLY</h2>
                 <h3>Sharing the love of Jesus Christ, setting the captives free, bringing hope, life, deliverance to several lifves and  bringing out the greatness in peoples live</h3>
                 <Button>JOIN</Button>
             </div>
         </div>
        {/* Middle section */}
            <Line />
            <section>
                <Church />
            </section>
            <section className='content-section'>
              <EventPage />
            </section> 
            {/* Bottom Section */}
            <section>
                <Line />
                <About />
            </section>
            <SocialM />
        </>
     );
}
 
export default HomeContent;