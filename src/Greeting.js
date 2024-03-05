import React from "react";
import greetingImage from './assets/images/greeting.jpg'

function Greeting() {
    return (
        <div className='flex justify-center items-center text-center rounded-lg md:rounded-3xl relative max-h-[36rem] overflow-hidden w-full'>
            <img className='object-contain rounded-lg md:rounded-3xl w-full' src={greetingImage} alt='greeting image' />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid">
                    <div className="text-gray-900 font-normal text-xs sm:text-nm md:text-nm mb-3 mx-auto bg-slate-200 rounded-md whitespace-pre">  Futó Attila:  </div>
                    <div className="text-gray-900 font-normal text-nm sm:text-lg md:text-3xl mb-3 mx-auto bg-slate-200 rounded-md whitespace-pre">  Shenanigans and doohickeys  </div>
            </div>
        </div>
    );
}

export default Greeting;