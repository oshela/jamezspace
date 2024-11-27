import Warn from "../components/warning";
import Card from "../components/card";
import Button from "../components/button";
import ProductList from "../components/catproducts";
import Banner from "../components/banner";
import PriceRangeFilter from "../components/PriceRangeFilter";
import React, { useState } from 'react';
const Productcat = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>

    <section className="md:mx-20">

      <div className="md:m-10">
        <Banner/>
        </div>
        <div className="flex items-center justify-between">
        <h1 className="md:text-2xl catheader">Mobile Phones and tablets</h1>
        <div className="md:hidden">
        <button className="text-green-600 text-sm" onClick={toggleMenu}>
          Select Categories
        </button>
        </div>
        </div>
        
        <Warn/>
        <section className="grid md:grid-cols-3 gap-2">
         
         <section className=" hidden md:block col-span-1">
            <Card>
              <h1 className=" catheader">Categories</h1>
              <h2 className="font-semibold">mobile phones & tablets</h2>
              <Button><p className="text-white">Mobile phones</p></Button>
              <Button bg='bg-white'>Accesories for phones</Button>
              <Button bg='bg-white'>Smart watches & trackers</Button>
              <Button bg="bg-white">Tablets</Button>

            </Card>
            <Card>
              <h1 className=" catheader">Location</h1>
              
              <div className="w-full text-white bg-green-600 rounded-md text-center p-4 m-2" >
                <img src="" alt="" />
                <select className="bg-green-600 "name="" id="">
                  <option value="">Abuja Nigeria</option>
                  <option value="">Jos Nigeria</option>
                  <option value="">Nassarawa Nigeria</option>
                  
                </select>
              </div>
              
            </Card>
            <Card>
      
                <PriceRangeFilter/>
            
            </Card>
            <Card>
              <h1 className="catheader">Discount</h1>
              <form className="p-2">
                <input className="radio" type="radio" id="all" name="gender" value="male" checked />
                <label htmlFor="all"> Show all</label><br />

                <input className="radio" type="radio" id="discount" name="gender" value="female" />
                <label  htmlFor="discount"> With discount</label><br />

                <input className="radio" type="radio" id="noDiscount" name="gender" value="other" />
                <label htmlFor="noDiscount"> Without discount</label>
            </form>

            </Card>
            <Card>
              <h1 className=" catheader">Verified Sellers</h1>
                <form className="p-2">

                    <input className="radio" type="radio" name="gender" value="male" checked /> Show all<br/>
                    <input className="radio" type="radio" name="gender" value="female" /> Verified Sellers<br/>
                    <input className="radio" type="radio" name="gender" value="other"/> Unverified seller

                  </form>

            </Card>
          </section>

      {/* Mobile View */}
      <div className="md:hidden">
        <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="bg-white w-full max-w-sm mx-auto rounded-lg p-4">
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6   
 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>   

            {/* Your category list content here */}
            <section className="grid grid-cols-1 gap-4">
            <Card>
              <h1 className=" catheader">Categories</h1>
              <h2 className="font-semibold">mobile phones & tablets</h2>
              <Button><p className="text-white">Mobile phones</p></Button>
              <Button bg='bg-white'>Accesories for phones</Button>
              <Button bg='bg-white'>Smart watches & trackers</Button>
              <Button bg="bg-white">Tablets</Button>

            </Card>
            <Card>
              <h1 className=" catheader">Location</h1>
              
              <div className="w-full text-white bg-green-600 rounded-md text-center p-4 m-2" >
                <img src="" alt="" />
                <select className="bg-green-600 "name="" id="">
                  <option value="">Abuja Nigeria</option>
                  <option value="">Jos Nigeria</option>
                  <option value="">Nassarawa Nigeria</option>
                  
                </select>
              </div>
              
            </Card>
            <Card>
      
                <PriceRangeFilter/>
            
            </Card>
            <Card>
              <h1 className="catheader">Discount</h1>
              <form className="p-2">
                <input className="radio" type="radio" id="all" name="gender" value="male" checked />
                <label htmlFor="all"> Show all</label><br />

                <input className="radio" type="radio" id="discount" name="gender" value="female" />
                <label  htmlFor="discount"> With discount</label><br />

                <input className="radio" type="radio" id="noDiscount" name="gender" value="other" />
                <label htmlFor="noDiscount"> Without discount</label>
            </form>

            </Card>
            <Card>
              <h1 className=" catheader">Verified Sellers</h1>
                <form className="p-2">

                    <input className="radio" type="radio" name="gender" value="male" checked /> Show all<br/>
                    <input className="radio" type="radio" name="gender" value="female" /> Verified Sellers<br/>
                    <input className="radio" type="radio" name="gender" value="other"/> Unverified seller

                  </form>

            </Card>
            </section>
          </div>
        </div>
      </div>
          
          <section className="col-span-2">
            <section>
              <ProductList/>
            </section>
          </section>
        </section>

    </section>
    </>
  )
}

export default Productcat