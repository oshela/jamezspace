
import react, { useState } from 'react';

const ProductList = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('recommended');
  const products = [
    {
      id: 1,
      image: '/iphone1.jpg',
      title: 'iPhone 14 Pro Max',
      price: '₦1,200,000',
      location: 'Abuja, Nigeria',
    },
    {
        id: 2,
        image: '/iphone1.jpg',
        title: 'iPhone 14 Pro Max',
        price: '₦1,500,000',
        location: 'Abuja, Nigeria',
      },
    
  ];

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  const handleSortByChange = (sortBy) => {
    setSortBy(sortBy);
  };

  return (
    <div className="container mx-auto px-4">
      <div className=" flex justify-between mb-4">
        <div className="hidden md:flex space-x-4">
          <button className={` p-2 font-semibold flex items-center ${viewMode === 'grid' ? 'text-black' : ''}`} onClick={() => handleViewModeChange('grid')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <g clip-path="url(#clip0_4742_1450)">   
              <path d="M27.5 16.2487V25C27.5 25.3315 27.3683 25.6495 27.1339 25.8839C26.8995 26.1183 26.5815 26.25 26.25 26.25H16.25V16.2487H27.5ZM13.75 16.2487V26.25H3.75C3.41848 26.25 3.10054 26.1183 2.86612 25.8839C2.6317 25.6495 2.5 25.3315 2.5 25V16.2487H13.75ZM13.75 3.75V13.7487H2.5V5C2.5 4.66848 2.6317 4.35054 2.86612 4.11612C3.10054 3.8817 3.41848 3.75 3.75 3.75H13.75ZM26.25 3.75C26.5815 3.75 26.8995 3.8817 27.1339 4.11612C27.3683 4.35054 27.5 4.66848 27.5 5V13.7487H16.25V3.75H26.25Z" fill="#6D7280"/>
              </g>
                <defs>
                  <clipPath id="clip0_4742_1450">
                    <rect width="30" height="30" fill="white"/>
                        </clipPath>
                          </defs>
                          </svg>
                              View in list</button>
          <button className={` p-2 flex items-center  font-semibold ${viewMode === 'list' ? 'text-black' : ''}`} onClick={() => handleViewModeChange('list')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M27.1875 9.6875H8.4375V7.1875H27.1875V9.6875ZM27.1875 16.25H8.4375V13.75H27.1875V16.25ZM27.1875 22.8125H8.4375V20.3125H27.1875V22.8125Z" fill="#16A34A"/>
          <path d="M5.625 7.5H3.75V9.375H5.625V7.5Z" fill="#16A34A"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.8125 7.5C2.8125 6.98223 3.23223 6.5625 3.75 6.5625H5.625C6.14277 6.5625 6.5625 6.98223 6.5625 7.5V9.375C6.5625 9.89277 6.14277 10.3125 5.625 10.3125H3.75C3.23223 10.3125 2.8125 9.89277 2.8125 9.375V7.5Z" fill="#16A34A"/>
          <path d="M5.625 14.0625H3.75V15.9375H5.625V14.0625Z" fill="#16A34A"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.8125 14.0625C2.8125 13.5447 3.23223 13.125 3.75 13.125H5.625C6.14277 13.125 6.5625 13.5447 6.5625 14.0625V15.9375C6.5625 16.4553 6.14277 16.875 5.625 16.875H3.75C3.23223 16.875 2.8125 16.4553 2.8125 15.9375V14.0625Z" fill="#16A34A"/>
          <path d="M5.625 20.625H3.75V22.5H5.625V20.625Z" fill="#16A34A"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.8125 20.625C2.8125 20.1072 3.23223 19.6875 3.75 19.6875H5.625C6.14277 19.6875 6.5625 20.1072 6.5625 20.625V22.5C6.5625 23.0178 6.14277 23.4375 5.625 23.4375H3.75C3.23223 23.4375 2.8125 23.0178 2.8125 22.5V20.625Z" fill="#16A34A"/>
          </svg>
            View in grid</button>
        </div>
        <div className='flex items-center gap-2'>
          <p>Sort By</p>
          <select className="border p-2 rounded-md" onChange={(e) => handleSortByChange(e.target.value)}>
            <option value="recommended">Recommended</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
          <p className="md:hidden">2823833 Items</p>
        </div>
      </div>

      <div className={`grid gap-4 ${viewMode === 'list' ? 'grid-cols-2' : 'grid-cols-1'}`}>
        {products.sort((a, b) => {
          if (sortBy === 'price-asc') {
            return a.price.localeCompare(b.price);
          } else if (sortBy === 'price-desc') {
            return b.price.localeCompare(a.price);
          } else {
            return 0;
          }
        }).map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p className="text-gray-500">{product.location}</p>
            <p className="text-lg font-bold">₦{product.price}</p>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"><a href="/product">
            View Item
              </a></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
  
