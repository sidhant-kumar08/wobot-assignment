import React, { useState } from 'react';
import parse from 'html-react-parser';

function Shimmer() {

  return (
    <div className="flex flex-col w-72 h-72  justify-center bg-gray-200 rounded-xl hover:scale-110 transition duration-100 ease-linear items-center border border-gray-300">
      <div className='bg-gray-500'>
        <img className="rounded-lg shadow-sm" src='' alt='' />
      </div>

      <div className="flex flex-col items-center justify-center px-4 py-2">
        <h1 className="sm:text-lg md:text-xl font-inter text-[#3766E8] bg-gray-500 font-semibold"></h1>
        <p className="text-wrap sm:text-sm bg-gray-500 text-gray-700">
          
        </p>
        
      </div>
    </div>
  );
}

export default Shimmer;
