import Warn from "../components/warning"
import Card from "../components/card"
import Button from "../components/button"
import Iphone from '/iphone1.jpg'
import Target from '/icons/target.png'
import Time from '/icons/time.png'
import Banner from "../components/banner"




const Product = () => {
  return (
    <section className="md:mx-20">
        <div className='grid md:grid-cols-3 gap-1 md:m-10'>
            <button className='producttopbuttons'>All ads</button>
            <button className='producttopbuttons'>mobile phones & tablets</button>
            <button className='producttopbuttons bg-green-600 text-white'> iphone 14 pro max</button>
            <section className='md:col-span-2 m-2'>
                <div className='w-full'>
                    <Warn/>
                </div>
                <section>
                    <div className="w-full">
                        <img className="w-2/3"src={Iphone} alt="image" />
                    </div>
                    <div className="flex md:m-4 w-20 h-20">
                        <img src={Iphone} alt="image" />
                        <img src={Iphone} alt="image" />
                    </div>
                    <div className="border-b-2 border-gray-100 md:space-y-4">
                        <div className="flex justify-between">
                            <div className="">
                            <h1 className="md:text-2xl font-bold">iphone 14 pro max</h1>
                            <h2 className="md:text-2xl font-semibold">₦1,200,000</h2>
                            </div>
                            <div>
                                <Button bg='bg-orange-100'>
                                    <p className="text-orange-500 px-4 text-sm md:text-base">Promoted</p>
                                </Button>
                            </div>
                        </div>
                        
                        <div className="flex gap-2 text-sm">
                            <div className="flex items-center gap-1">
                                <img className='w-4 h-4' src='/icons/views.png' alt="" />
                                <p>location</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <img className='w-4 h-4' src={Time} alt="" />
                                <p>time</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <img className='w-4 h-4' src='' alt="" />
                                <p>views</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-b-2 border-gray-100 p-4">
                        <h1 className="font-bold">Description:</h1>
                        <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Quas animi, reiciendis, vel veniam explicabo voluptatibus esse natus expedita,
                            pariatur praesentium nihil nemo libero obcaecati? Voluptas temporibus sed obcaecati animi officiis.</p>
                    </div>
                    <div className="border-b-2 border-gray-100 text-sm">
                        <table>
                            <tr>
                                <td>Brand</td>
                                <td>Model</td>
                                <td>Condition 1</td>
                            </tr>
                            <tr>
                                <td>Apple</td>
                                <td>iphone 14 pro max</td>
                                <td>Used</td>
                            </tr>
                            <tr>
                                <td>Condition 2</td>
                                <td>Internal storage</td>
                                <td>Card slot</td>
                            </tr>
                            <tr>
                                <td>No crack</td>
                                <td>64gb</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>Screen size</td>
                                <td>Ram</td>
                                <td>Card slot</td>
                            </tr>
                            <tr>
                                <td>Fill</td>
                                <td>Fill</td>
                                <td>No</td>
                            </tr>
                        </table>
                    <div className="flex justify-end">
                        <select className="text-green-600 p-2" name="" id="">
                            <option value="">View all</option>
                        </select>
                    </div>
                    </div>
                    <section>
                        <div className="flex items-center text-sm md:text-base">
                            <img src='/icons/address.png' alt="" />
                            <h2 className="text-green-600 font-semibold">Vendors address</h2>
                        </div>
                        <div className="grid grid-cols-2 text-sm text-gray-500">
                            <div className="flex items-center">
                                <img src={Target} alt="" />
                                <p>Abuja,Nigeria</p>
                            </div>
                            <div className="flex items-center">
                                <img src={Time} alt="" />
                                <p>Open Monday - Saturday, 09:00 AM - 6:00 P</p>
                                </div>
                            <div>Shop 34B, Bannex Plaza, Wuse II</div>
                            <div>
                                <div href="" className="bg-orange-100 rounded-full p-4 text-orange-700 md:w-1/2 text-center">Closed now</div>
                            </div>
                        </div>
                    </section>
                </section>
                <div className="grid grid-cols-2 gap-2 mt-10">
                    <Button><p className="text-white">Contact vendor</p></Button>
                    <Button><p className="text-white">Make an order</p></Button>
                </div>
            </section>
        {/* sidebar */}
            <section className="md:col-span-1">
                <Card>
                <h1 className="text-3xl font-bold">₦1,200,000</h1>
                   <div className="flex items-center text-sm">
                   <p className="text-gray-600">Market Value: ₦930K ~ 1M </p>
                   <img className='w-4 h-4' src='/icons/info.png' alt="" />
                   </div>
                  
                    <Button bg='bg-white' round='rounded-none'>Price History</Button>
                </Card>
                   
                <Card>
                    <div className="text-center md:p-4">
                        <div className="flex  justify-center items-center">
                        <img src='/icons/profile.png' alt="" />
                        <h1 className="text-2xl font-bold">OneRealGadget</h1>
                        </div>
                        <p className="text-xs text-gray-500">About 2yrs onJamezSpace <span className="bg-orange-100 text-orange-800 p-2 rounded-full">Verified user</span></p>
                        
                        <Button><div className="flex items-center justify-center">
                        <img src='/icons/vendor.png' alt="" /><p className="text-white">Contact vendor</p>
                            </div></Button>
                        <Button>
                        <div className="flex items-center justify-center">
                            <img src='/icons/offer.png' alt="" /><p className="text-white">Make an offer</p>
                            </div></Button>
                    </div>
                </Card>
                <Card>
                    <h1 className="productheaders">Reviews and Ratings </h1>
                    <div className="flex gap-1 p-2">
                        <img className='rounded-full h-20 w-18'src='/user.png' alt="" />
                        <div>
                            <h1>Name</h1>
                            <span>stars</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit arcu aliquam, leo neque lacinia sagittis venenatis nullam dictumst torquent,Lorem ipsum dolor sit amet consectetur adipiscing elit arcu aliquam, leo neque lacinia sagittis venenatis nullam dictumst torquent.
                            </p>
                        </div>
                        <p>Date</p>
                    </div>
                    <Button><p className="text-white">View More (20+ reviews)</p></Button>
                </Card>
                <Card>
                    <h1 className=" productheaders">Share items</h1>
                    <div className="flex gap-6">
                        <img className="bg-green-600 rounded-full"src='/icons/facebook.png'alt="image" />
                        <img className="bg-green-600 rounded-full" src='/icons/whatsapp.png' alt="image" />
                        <img className="bg-green-600 rounded-full" src= '/icons/instagram.png' alt="image" />
                        <img className="bg-green-600 rounded-full" src='/icons/linktree.png' alt="image" />
                    </div>
                </Card>
               <Card>
                    <h1 className="productheaders">Jamezspace safety tips </h1>
                    <ol>
                        <li>1. Never pay in advance, even for delivery charges</li>
                        <li>2. Arrange to meet the seller in a safe, public location.</li>
                        <li>3. Thoroughly inspect the item to ensure it meets your expectations.</li>
                        <li>4. Confirm that the packed item is the same one you have inspected.</li>
                        <li>5. Only make payment once you are completely satisfied with the item.</li>
                    </ol>
                    <Button bg='bg-orange-100' className='text-0range-600'>Mark Product as Unavailable</Button>
                    <Button bg='bg-red-100' >
                        <div className="text-red-600 justify-center flex items-center">
                        <img src="/flag.png" alt="" />
                        <p>Report Abuse</p>
                        </div>
                       
                    </Button>
               </Card>
               <Card>
               <div class="bg-orange-400 border border-gray-200 rounded-lg shadow-md p-6">
                    <img src="/lady.png" alt="Product Image" class="w-full h-48 object-cover rounded-lg mb-4" />

                    <h2 class="text-white text-xl font-bold mb-2">Reach thousands of buyers with ease on JamezSpace.</h2>

                    <button class="text-white font-bold py-2 px-4 rounded border border-white">Start Selling</button>
                </div>
               </Card>
            </section>
        </div>

    </section>
  )
}

export default Product