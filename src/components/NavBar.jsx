
const NavBar = () => {
  return (
<section>
<nav className='hidden md:block bg-green-900 text-white text-black'>
        <ul className='flex justify-center items-center w-full p-4 gap-32'>
            <li>
            <a href='/' className='flex items-center'>
                <img src='/logo.png' alt="Logo" />
                <p>Jamezspace</p>
            </a>
            </li>
            <li>
                <input type="text" className=' md:border-none border-2 px-16 md:py-4 rounded-md text-gray-200 w-4/5 md:w-full' placeholder={'Search'}/>
            </li>
            <li className=' text-sm hover:text-gray-500'>
                <a href="/">
                    Login
                </a>
            </li>
            <li className='text-sm hover:text-gray-500'>
                <a href="/">
                    Signup
                </a>
            </li>
            
            <li className='text-sm hover:text-gray-500'>
                <button className='bg-green-600 px-8 py-2 rounded-md'>List item</button>
            </li>
        </ul>
    </nav>
    <nav className="sm:block md:hidden bg-white ">
   
        <div className="container px-4 py-2 items-center">
        <div className="flex items-center justify-between">
            <li className='flex items-center'>
                <img src='/logo.png' alt="Logo" />
                <p className="font-semibold">Jamezspace</p>
            </li>
            <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
            <path d="M33.3337 33.5518L27.0375 27.2444M30.5266 18.815C30.5266 21.9789 29.2698 25.0133 27.0325 27.2506C24.7952 29.4879 21.7608 30.7448 18.5968 30.7448C15.4328 30.7448 12.3984 29.4879 10.1612 27.2506C7.92388 25.0133 6.66699 21.9789 6.66699 18.815C6.66699 15.651 7.92388 12.6166 10.1612 10.3793C12.3984 8.14202 15.4328 6.88513 18.5968 6.88513C21.7608 6.88513 24.7952 8.14202 27.0325 10.3793C29.2698 12.6166 30.5266 15.651 30.5266 18.815V18.815Z" stroke="#080341" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
            
            <button className="">
                <a href="/productcat">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.5 13.9685H7.5V11.4685H32.5V13.9685Z" fill="#080341"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.5 21.4685H7.5V18.9685H32.5V21.4685Z" fill="#080341"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.5 28.9685H7.5V26.4685H32.5V28.9685Z" fill="#080341"/>
            </svg>
                </a>
            </button>
            </div>
            
            </div>
        </div>
    </nav>
</section>
  )
}

export default NavBar