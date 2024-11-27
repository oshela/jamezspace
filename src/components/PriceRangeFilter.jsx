import React, { useState } from 'react';

const PriceRangeFilter = () => {
  const [priceRange, setPriceRange] = useState([1000, 1000000]);

  const handleRangeChange = (event) => {
    setPriceRange([
      parseInt(event.target.value.split(',')[0]),
      parseInt(event.target.value.split(',')[1]),
    ]);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-2">Price, ₦</h3>
      <div className="flex justify-between mb-2">
        <div>
          <p className="text-sm">From</p>
          <input
            type="text"
            value={`₦${priceRange[0]}`}
            onChange={handleRangeChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>
        <div>
          <p className="text-sm">To</p>
          <input
            type="text"
            value={`₦${priceRange[1]}`}
            onChange={handleRangeChange}
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>
      </div>
      <input
        type="range"
        min="1000"
        max="1000000"
        value={`${priceRange[0]},${priceRange[1]}`}
        onChange={handleRangeChange}
        className="w-full h-2 bg-green-800 rounded-lg"
      />
    </div>
  );
};

export default PriceRangeFilter;