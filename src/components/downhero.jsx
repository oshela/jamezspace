import React, { useState, useEffect } from 'react';

const Downhero = () => {
      const [currentIndex, setCurrentIndex] = useState(0);
      const textArray = [
        "Lorem ipsum dolor sit amet consectetur adipiscing elit arcu aliquam, leo neque lacinia sagittis venenatis nullam dictumst torquent,Lorem ipsum dolor sit amet consectetur adipiscing elit arcu aliquam, leo neque lacinia sagittis venenatis nullam dictumst.",
        "This is the second text.",
        "This is the third text.",
      ];
    
      const handlePrevClick = () => {
        setCurrentIndex((currentIndex - 1 + textArray.length) % textArray.length);
      };
    
      const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % textArray.length);
      };
    
      return (

<section className="bg-green-100 text-center mt-4">
  <div className="container mx-auto">
    <h1 className="md:text-5xl text-xl font-semibold text-green-600">Trusted by 1,000+ users!</h1>
    <div className="flex flex-row justify-center items-center mt-4">
      <button onClick={handlePrevClick} className="bg-green-200 hover:bg-green-300 text-gray-500 rounded-full p-4">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
<rect y="0.5" width="32" height="32" rx="16" fill="#BBF7D0"/>
<path d="M20.0963 25.1755C19.9007 25.1764 19.713 25.0985 19.5756 24.9593L11.7155 17.0993C11.4282 16.8116 11.4282 16.3455 11.7155 16.0578L19.5756 8.19777C19.8659 7.92723 20.3183 7.93521 20.599 8.21583C20.8796 8.49644 20.8876 8.94889 20.617 9.23923L13.2777 16.5786L20.617 23.9179C20.9044 24.2056 20.9044 24.6716 20.617 24.9593C20.4796 25.0985 20.2919 25.1764 20.0963 25.1755Z" fill="#16A34A"/>
</svg>
      </button>
      <div className="bg-white rounded-lg p-4 md:w-1/2 md:mx-4">
        <p className="text-xs md:text-sm text-gray-400 font-bold">{textArray[currentIndex]}</p>
      </div>
      <button onClick={handleNextClick} className="bg-green-200 hover:bg-green-300 text-gray-500 rounded-full p-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5.25l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  </div>
</section>
      );
    }
    
    <div className='bg-green-100'>


    </div>

export default Downhero