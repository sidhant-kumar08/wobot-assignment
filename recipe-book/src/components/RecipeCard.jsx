import React, { useState } from 'react';
import parse from 'html-react-parser';

function RecipeCard({ values }) {
  const [showFull, setShowFull] = useState(false); 

  function trimString(string) { // i used this function i found this on the internet sorry for that:(
    const words = string.split(/\s+/);
    const trimmed = words.slice(0, 25).join(' ');
    return `${trimmed}${words.length > 25 ? '...' : ''}`;
  }

  return (
    <div className="flex flex-col md:w-72 justify-center rounded-xl hover:scale-105 transition duration-100 ease-linear items-center border border-gray-300">
      <div>
        <img className="rounded-lg shadow-sm" src={values.image} alt={values.title} />
      </div>

      <div className="flex flex-col items-center justify-center px-4 py-2">
        <h1 className="sm:text-lg md:text-xl font-inter text-[#3766E8] font-semibold">{values.title}</h1>
        <p className="text-wrap sm:text: text-gray-700">
          {parse(trimString(values.instructions || ''))}
        </p>
        
      </div>
    </div>
  );
}

export default RecipeCard;
