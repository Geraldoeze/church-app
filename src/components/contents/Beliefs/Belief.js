import React from 'react';
import './Beliefs.css';


const Beliefs = () => {
    return ( 
        <>
          <p className='p-text'>Our Church-Centered Values</p>
           <h1 className='h-text'>What We Believe</h1> 
          <section className='beliefs'>
              <div className='beliefs-main'>
                  <img  className='pic'  src='piano.jpg' alt='belief' />
                  <h2 className='text-h2'>Salvation</h2>
                  <p className='text-p2'>We believe that everyone deserves salvation in this world. 
                      No matter their past or current lives, we are all God's children.
                      God loves us so much that if we come back to him with a repentant heart, 
                      he will always for give his children.
                  </p>
              </div>
              <div className='beliefs-main'>
                  <img className='pic' src='piano.jpg' alt='sme'/>
                  <h2 className='text-h2'>The Holy Spirit</h2>
                  <p className='text-p2'>The third person in the holy trinity, the spirit that filled the presence 
                     where moses was standing near the burning bush.
                     The spirit that visited the apostles in the upper room after the resurection of 
                     christ.
                  </p>
              </div>
              <div className='beliefs-main'>
                  <img  className='pic' src='cchh.jpg' alt='coome'/>
                  <h2 className='text-h2'>The Bible</h2>
                  <p className='text-p2'>We believe that the Bible has the words of God. And the word of God is power.
                        The books of the bible, the old and new testaments contains records of the past that has happened and the future
                        that is yet to happen.
                        We study the bible in every one of our sessions and programs.

                  </p>
              </div>
          </section>
        </>
     );
}
 
export default Beliefs;
