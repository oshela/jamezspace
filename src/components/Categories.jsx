import React, { useState } from 'react';

  const CategoryItem = ({ image, title, count, subcategories }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div className="border-b border-gray-200 py-4">
        <div className="flex items-center justify-between cursor-pointer" onClick={toggleExpand}>
          <img src={image} alt={title} className="w-10 h-10 mr-4" />
          <div>
            <h3 className="text-sm font-medium">{title}</h3>
            <p className="text-gray-500 text-sm">{count} Items</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`w-6 h-6 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
        <ul className={`pl-8 ${isExpanded ? 'block' : 'hidden'}`}>
          {subcategories.map((subcategory, index) => (
            <li key={index} className="flex items-center justify-center space-x-10 ">
              <img src={subcategory.image} alt={subcategory.title} className="w-15 h-15 rounded-full mr-4" />
              <div>
                <p>{subcategory.title}</p>
                <p className="text-gray-500">{subcategory.count} Items</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  function CategoryList() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    const categories = [
      {
        title: 'Mobile phones & tablets',
        count: 2823833,
        image:'/categories/cat14.png',
        subcategories: [
          { title: 'Cars', count: 200000, image:'/categories/cat1.png'},
          { title: 'Motorcycles', count: 100000, image:'/categories/cat2.png'},
        ],
      },
      {
          title: 'Vehicles',
          count: 483944,
          image:'/categories/cat1.png',
          subcategories: [
            { title: 'Cars', count: 200000, image:'/categories/cat3.png' },
            { title: 'Motorcycles', count: 100000, image:'/categories/cat5.png' },
          ],
        },
        {
          title: 'Properties',
          count: 483944,
          image:'/categories/cat3.png',
          subcategories: [
            { title: 'New builds', count: 567834, image:'/categories/cat1.png' },
            { title: 'Rent', count: 678923, image:'/categories/cat2.png' },
            { title: 'Houses for sale', count: 385722,image:'/categories/cat3.png' },
            { title: 'land for sale', count: 384102, image:'/categories/cat4.png' },
            { title: 'Event Centers', count: 288241, image:'/categories/cat5.png' },
            { title: 'Short let propertise', count: 374711, image:'/categories/cat6.png' },
          ],
        },
        {
          title: 'Electronics',
          count: 483944,
          image:'/categories/cat9.png',
          subcategories: [
            { title: 'Cars', count: 200000, image:'/categories/cat7.png' },
            { title: 'Motorcycles', count: 100000, image:'/categories/cat8.png' },
          ],
        },
        {
          title: 'Home, Forniture & Appliences',
          count: 483944,
          image:'/categories/cat8.png',
          subcategories: [
            { title: 'Cars', count: 200000, image:'/categories/cat9.png'},
            { title: 'Motorcycles', count: 100000, image:'/categories/cat10.png' },
          ],
        },
        {
          title: 'Health & beauty',
          count: 483944,
          image:'/categories/cat11.png',
          subcategories: [
            { title: 'Cars', count: 200000, image:'/categories/cat11.png'},
            { title: 'Motorcycles', count: 100000, image:'/categories/cat12.png' },
          ],
        },
        {
          title: 'Fashion',
          count: 483944,
          image:'/categories/cat12.png',
          subcategories: [
            { title: 'Cars', count: 200000, image:'/categories/cat13.png' },
            { title: 'Motorcycles', count: 100000,image:'/categories/cat14.png' },
          ],
        },
        {
          title: 'Sport, Art & Outdoor',
          count: 483944,
          image:'/categories/cat13.png',
          subcategories: [
            { title: 'Cars', count: 200000, image:'/categories/cat1.png' },
            { title: 'Motorcycles', count: 100000, image:'/categories/cat2.png' },
          ],
        },
    ];
  
  
    return (
      <div>
        {/* Desktop View */}
        <div className="hidden md:block w-full max-w-sm mx-auto rounded-lg p-4">
              <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6   
   h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>   
  
              {/* Your category list here */}
              {categories.map((category) => (
                <CategoryItem key={category.title} {...category} />
              ))}
            </div>
  
        {/* Mobile View */}
        <div className="md:hidden flex justify-end">
          <button className="text-green-600 focus:outline-none" onClick={toggleMenu}>
            Select Categories {'>'}
          </button>
          <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="bg-gray-100 w-full max-w-sm mx-auto rounded-lg p-10">
              <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6   
   h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>   
  
              {/* Your category list here */}
              {categories.map((category) => (
                <CategoryItem key={category.title} {...category} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default CategoryList;

