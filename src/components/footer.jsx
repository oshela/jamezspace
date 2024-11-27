import Logo from '/logo.png'
import Appstore from '/footer/appstore.png'
import Google from '/footer/Google.png'
import Play from '/footer/playstore.png'
const Footer = () => {
  return (
<section className="bg-black text-sm text-gray-200 text-center">
  <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-20">
    <div className="block col-span-1 ">
    <div className="flex items-center justify-center md:justify-start">
    <img src={Logo} alt="JamezSpace logo" />
    <h1 className="font-bold">JamezSpace</h1>
    </div>
      <p>
        JamezSpace is your trusted marketplace for buying and selling goods locally. We connect communities, offering a seamless platform for exchanging quality products and services. Info@jamezspace.com
    </p>
    </div>

    <div className="col-span-1 ">
      <h2 className='font-bold'>Services</h2>
      <ul className="list-none pl-4 md:pl-0">
        <li><a href="/">Home</a></li>
        <li><a href="/">Sell an item</a></li>
        <li><a href="/">About us</a></li>
        <li><a href="/">Support</a></li>
        <li><a href="/">Terms of service</a></li>
        <li><a href="/">FAQS</a></li>
      </ul>
    </div>
    <div className="col-span-1 flex flex-col md:flex-row items-center justify-between">
      <h1 className="font-semibold md:hidden">Access Jamezspace anytime anywhere</h1>
      <div className="block mt-4 md:mt-0">
        <a href="/">
          <img className="p-2" src={Appstore} alt="App Store icon" />
        </a>
        <a className="flex items-center p-2 border border-gray-100 w-full md:w-1/2 rounded" href="/">
          <img src={Play} alt="Play Store icon" />
          <img className="ml-2" src={Google} alt="Google Play icon" />
        </a>
      </div>
    </div>
    <div className="flex justify-center md:hidden">
      <a href="">
        <img src="" alt="" />
      </a>
      <a href="">
        <img src="" alt="" />
      </a>
      <a href="">
        <img src="" alt="" />
      </a>
      <a href="">
        <img src="" alt="" />
      </a>
    </div>
  </section>
</section>
  )
}

export default Footer