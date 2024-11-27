import React, { useState } from 'react';

function Banner() {
  const images = [
    "/banner/Banner.png",
    "/banner/Banner1.png",
    "/banner/2.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
        <>
           <div class="md:block relative hidden">
    <img src={images[currentIndex]} alt="Image" class="w-full h-full object-cover" />
    <div class="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-around">
      <button onClick={handlePrevClick} class="bg-gray-100 hover:bg-gray-300 md:p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white md:px-8"> 
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" fill="none" className="w-2 h-2 md:w-6 md:h-6">
        <rect  rx="32" fill="white" fill-opacity="0.49"/>
        <path d="M40.1926 49.351C39.8014 49.3528 39.426 49.197 39.1511 48.9187L23.431 33.1986C22.8563 32.6232 22.8563 31.691 23.431 31.1157L39.1511 15.3955C39.7318 14.8545 40.6367 14.8704 41.1979 15.4317C41.7592 15.9929 41.7751 16.8978 41.234 17.4785L26.5554 32.1571L41.234 46.8358C41.8087 47.4112 41.8087 48.3433 41.234 48.9187C40.9592 49.197 40.5837 49.3528 40.1926 49.351Z" fill="black"/>
        </svg>
      </button>
      <div class="md:space-y-4 text-center"> <h1 class="md:text-4xl text-white">Reach thousands of buyers with ease on JamezSpace.</h1>
        <button class="text-white border hover:text-gray-100 border-white md:py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">Start selling</button>
      </div>
      <button onClick={handleNextClick} class="bg-gray-200 hover:bg-gray-300 md:p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white md:px-8"> 
        <svg xmlns="http://www.w3.org.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-2 h-2 md:w-6 md:h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5.25l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  </div>
  <div class="sm:block md:hidden flex flex-col items-center justify-center">
  <img src={images[currentIndex]} alt="Image" class="w-full h-32 object-cover rounded-md" />
  <div class="absolute flex justify-between w-2/3">
    <button onClick={handlePrevClick} class="text-gray-300 font-extrabold  ">
      {''}
    </button>
    <div class="">
      <h1 class="text-sm font-extrabold text-white">Reach thousands of buyers with ease.</h1>
      <div className="flex justify-start">
      <button class="text-white border px-2 py-1 border-white  text-xs rounded-md ">start selling</button>
      </div>
    </div>
    <button onClick={handleNextClick} class="text-gray-300 font-extrabold">
      {''}
    </button>
  </div>
</div>
        </>
  );
}

export default Banner;