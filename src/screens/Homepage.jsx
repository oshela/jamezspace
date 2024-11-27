import React from 'react'
import CategoryList from '../components/Categories'
import Topdeals from '../components/Topdeals'
import Downhero from '../components/downhero'
import Banner from '../components/banner'
const Homepage = () => {
  return (
<section>

<section className=' m-2 p-2 md:mx-20' >
        <div className='text-center p-2 md:space-y-2 md:m-10'>
            <h1 className='text-green-600 font-bold text-3xl md:text-5xl'>
                Discover amazing deals
            </h1>
            <p className='text-gray-600 text-sm md:text-base'>Currently showing items available at <span className="text-black font-semibold">Abuja, Nigeria.</span> To change your location, please use the drop-down menu below.</p>
            <select className=" text-sm md:text-base rounded-md border border-green-400 text-green-600 font-semibold p-2 text-center"name="" id="">
                  <option value="">Abuja Nigeria</option>
                  <option value="">Jos Nigeria</option>
                  <option value="">Nassarawa Nigeria</option>
                  
                </select>
        </div>

        <Banner/>
        <section className='md:grid md:grid-cols-4 gap-2'>
          
                
            <div className="col-span-1 rounded-md md:bg-gray-50 p-4 ">
                <h1 className='hidden md:block font-semibold text-lg'>Select item type</h1>
                    <CategoryList />
            </div>
            <div className="col-span-3">
                <Topdeals/>
            </div>
        </section>
       
    </section>
     <Downhero/>
</section>
  )
}

export default Homepage