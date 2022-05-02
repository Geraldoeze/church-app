import React from 'react';
import Button from '../../components/UIElements/Button/Button';
import './Join.css';

const Join = () => {
    const submitHandler = (e) => {
        e.preventDefault()
    }
    return (  
        <div className='Join'>
            <h2> Add your Email to connect to Us</h2>
            <form onSubmit={submitHandler} className="Join-form" method='POST'>
                <label>Add your Mail Address</label>
                <input type="email" name="mail" placeholder='Email' />
                <Button change='btn21'>CONNECT</Button>
            </form>
        </div>
    );
}
 
export default Join;