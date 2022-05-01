import React from 'react';
import './Join.css';

const Join = () => {
    const submitHandler = (e) => {
        e.preventDefault()
    }
    return (  
        <div className='Join'>
            <h2> Add your Email to connect to Us</h2>
            <form onSubmit={submitHandler} className="Join-form">
                <label>Add your Mail Address</label>
                <input type="" name="" />
            </form>
        </div>
    );
}
 
export default Join;