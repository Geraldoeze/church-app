import React from 'react';
import './BackImage.css';
import Button from '../../UIElements/Button/Button';

export default function BackImage() {
        
   
    return ( 
      <div className='container'>
        <div className='ima'></div>        
        <div className='overlay'></div>
        <div className='text'>
            <h2>GLOBAL SOLUTION ASSEMBLY</h2>
            <h3>Sharing the love of Jesus Christ, setting the captives free, bringing hope, life, deliverance to several lifves and  bringing out the greatness in peoples live</h3>
            <Button to="/new">JOIN</Button>
        </div>
      </div>
     );
}