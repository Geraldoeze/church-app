import React from 'react';
import './Social-M.css';
import 'primeicons/primeicons.css'
import Line from '../Button/under-line';

const SocialM = () => {
    return ( 
            <ul className='social-list'>
                <a href='www.facebook.com' ><i className='pi pi-facebook' style={{'fontSize': '1.5em'}}></i></a>
                <a href='www.youtube.com' ><i className='pi pi-youtube' style={{'fontSize': '1.5em'}}></i></a>
                <a href='www.twitter.com' ><i className='pi pi-twitter' style={{'fontSize': '1.5em'}} ></i></a>
            </ul>
     );
}
 
export default SocialM;