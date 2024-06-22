import React from 'react';
import logo from '../../assets/Footer/logo.png.png';
const Footer = () => {

  const backtotop=()=>{
    window.scrollTo(0,0) ; 
  }
  return (
    <footer className="text-white mt-3">
      <div className="container-fluid bg-gray-700 mx-auto grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex justify-center items-center p-4">
          <h4 className="font-bold text-center"><button onClick={backtotop} >Back to Top</button></h4>
        </div>
      </div>

      <div className="bg-gray-800 container-fluid  ">
        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 p-10   ">
          <div>
            <h5 className="font-bold mb-2 text-xl">Get to Know Us</h5>
            <ul>
              <li><a href="/careers" className="text-white hover:text-blue-700">Careers</a></li>
              <li><a href="/newsletter" className="text-white hover:text-blue-700">Amazon Newsletter</a></li>
              <li><a href="/about" className="text-white hover:text-blue-700">About Amazon</a></li>
              <li><a href="/sustainability" className="text-white hover:text-blue-700">Sustainability</a></li>
              <li><a href="/press" className="text-white hover:text-blue-700">Press Center</a></li>
              <li><a href="/investor" className="text-white hover:text-blue-700">Investor Relations</a></li>
              <li><a href="/devices" className="text-white hover:text-blue-700">Amazon Devices</a></li>
              <li><a href="/science" className="text-white hover:text-blue-700">Amazon Science</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2 text-xl">Make Money with Us</h5>
            <ul>
              <li><a href="/sell" className="text-white hover:text-blue-700">Sell products on Amazon</a></li>
              <li><a href="/sell-apps" className="text-white hover:text-blue-700">Sell apps on Amazon</a></li>
              <li><a href="/supply" className="text-white hover:text-blue-700">Supply to Amazon</a></li>
              <li><a href="/brand" className="text-white hover:text-blue-700">Protect & Build Your Brand</a></li>
              <li><a href="/affiliate" className="text-white hover:text-blue-700">Become an Affiliate</a></li>
              <li><a href="/driver" className="text-white hover:text-blue-700">Become a Delivery Driver</a></li>
              <li><a href="/delivery-business" className="text-white hover:text-blue-700">Start a package delivery business</a></li>
              <li><a href="/advertise" className="text-white hover:text-blue-700">Advertise Your Products</a></li>
              <li><a href="/publish" className="text-white hover:text-blue-700">Self-Publish with Us</a></li>
              <li><a href="/hub" className="text-white hover:text-blue-700">Host an Amazon Hub</a></li>
              <li><a href="/more" className="text-white hover:text-blue-700">See More Make Money with Us</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2 text-xl">Amazon Payment Products</h5>
            <ul>
              <li><a href="/rewards" className="text-white hover:text-blue-700">Amazon Rewards Visa Signature Cards</a></li>
              <li><a href="/store-card" className="text-white hover:text-blue-700">Amazon Store Card</a></li>
              <li><a href="/secured-card" className="text-white hover:text-blue-700">Amazon Secured Card</a></li>
              <li><a href="/business-card" className="text-white hover:text-blue-700">Amazon Business Card</a></li>
              <li><a href="/credit-line" className="text-white hover:text-blue-700">Amazon Business Line of Credit</a></li>
              <li><a href="/points" className="text-white hover:text-blue-700">Shop with Points</a></li>
              <li><a href="/marketplace" className="text-white hover:text-blue-700">Credit Card Marketplace</a></li>
              <li><a href="/reload" className="text-white hover:text-blue-700">Reload Your Balance</a></li>
              <li><a href="/converter" className="text-white hover:text-blue-700">Amazon Currency Converter</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2 text-xl">Let Us Help You</h5>
            <ul>
              <li><a href="/covid-19" className="text-white hover:text-blue-700">Amazon and COVID-19</a></li>
              <li><a href="/account" className="text-white hover:text-blue-700">Your Account</a></li>
              <li><a href="/orders" className="text-white hover:text-blue-700">Your Orders</a></li>
              <li><a href="/shipping" className="text-white hover:text-blue-700">Shipping Rates & Policies</a></li>
              <li><a href="/prime" className="text-white hover:text-blue-700">Amazon Prime</a></li>
              <li><a href="/returns" className="text-white hover:text-blue-700">Returns & Replacements</a></li>
              <li><a href="/content" className="text-white hover:text-blue-700">Manage Your Content and Devices</a></li>
              <li><a href="/recalls" className="text-white hover:text-blue-700">Your Recalls and Product Safety Alerts</a></li>
              <li><a href="/help" className="text-white hover:text-blue-700">Help</a></li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className='container-fluid bg-gray-800'>
          <div className='flex flex-row md:flex-row  sm:flex-row justify-center items-center text-center h-20'>
            <div className='flex justify-center items-center p-3'>
              <img src={logo} alt="logo" className='h-18 w-24' />
            </div>
            <div className='flex justify-center items-center gap-5 p-4'>
              <span className='border p-1 pe-8 rounded flex items-center'>
                <i className="fa-solid fa-globe p-2"></i>
                <button>English</button>
              </span>
              <span className='border p-1 pe-4 rounded flex items-center'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCnQXo7eUZqYL9_br-pTPTkbowPp_JvvFdqw&s" className='h-4 w-6 mr-2 ps-2' alt="flag" />
                <button>India</button>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid bg-slate-900'>
        <div className='container grid grid-cols-1 md:grid-cols-4 sm:grid-cols-1 gap-8 mx-auto text-center p-6'>
          <div>
            <h4>AbeBooks</h4>
            <ul>
              <li><a href="#" className='hover:text-blue-400' >Book Art & collectionable</a></li>
            </ul>
          </div>

          <div>
            <h4>Amazon Web Services</h4>
            <ul>
              <li><a href="#" className='hover:text-blue-400' >Scalable Cloud </a></li>
              <li><a href="#" className='hover:text-blue-400' >Computing Service </a></li>
            </ul>
          </div>

          <div>
            <h4>Audiable</h4>
            <ul>
              <li><a href="#" className='hover:text-blue-400' >Download</a></li>
              <li><a href="#" className='hover:text-blue-400' >Audia Books</a></li>
            </ul>
          </div>

          <div>
            <h4>IMDb</h4>
            <ul>
              <li><a href="#" className='hover:text-blue-400' >Movies , Tv's & Celebraties</a></li>
            </ul>
          </div>


          <div>
            <h4>ShopBop</h4>
            <ul>
              <li><a href="#" className='hover:text-blue-400' >Designer</a></li>
              <li><a href="#" className='hover:text-blue-400' >Fashion Brand</a></li>
            </ul>
          </div>

          <div>
            <h4>Amazon Business</h4>
            <ul>
              <li><a href="#" className='hover:text-blue-400' >EveryThing For Your Business </a></li>
            </ul>
          </div>

          <div>
            <h4>Prime Now</h4>
            <ul>
              <li><a href="#" className='hover:text-blue-400' >2-hour Delivery on Every Item</a></li>
            </ul>
          </div>

          <div>
            <h4>Amazon Prime Music</h4>
            <ul>
              <li><a href="#" className='hover:text-blue-400' >100 million songs , ad free <br></br> over 15 millions podcast episodes</a></li>
            </ul>
          </div>

        </div>
      </div>
      <hr />
      <div className='container-fluid bg-slate-900 text-center flex justify-center items-center p-4 h-20 mb-0'>
        <h3>Conditions of Use & Sale
          Privacy Notice
          Interest-Based Ads
           &#169; 2023 - 2024 , BY Krushna & Pankaj </h3>
      </div>
    </footer>
  );
};

export default Footer;
