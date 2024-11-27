import React, { useState } from 'react';
import Warn from './warning';
import productsData from './products.json';

function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(product.isFavorite);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="product-card bg-gray-50 p-4 rounded-lg text-center">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain rounded-lg mb-4"
        />
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={toggleFavorite}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-.621-.504-1.125-1.125-1.125H5.25A1.125 1.125 0 004.125 9.75v4.5a1.125 1.125 0 001.125 1.125h15.75a1.125 1.125 0 001.125-1.125v-4.5z"
            />
          </svg>
        </button>
      </div>
      <h3 className="text-lg font-bold">{product.title}</h3>
      <p className="text-gray-900 font-semibold">{product.price}</p>
      <button className="bg-green-600 w-full hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        <a href="/product">View Item</a>
      </button>
    </div>
  );
}

function Topdeals() {
  return (
    <div className="topdeals container mx-auto px-4 md:p-4">
       <h2 className=" text-large md:text-2xl font-extrabold mb-4">Top Deals</h2>
      <Warn />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Topdeals;