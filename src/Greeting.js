import React from "react";
import greetingImage from './assets/images/greeting.jpg' 

function Greeting() {
    return (
    <div className=' overflow-hidden rounded-3xl relative'>
        <img className='' src={greetingImage} alt='greeting image' />
    </div>
    );
}

export default Greeting;