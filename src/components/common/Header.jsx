import { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/header/logo.png';

const Header = () => {

  const categories = [
    "Electronics", "Clothing", "Home & Kitchen", "Beauty", "Toys",
    "Sports", "Automotive", "Books", "Movies & TV", "Music",
    "Video Games", "Pet Supplies", "Grocery", "Health"
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [value, setvalue] = useState([]);

  useEffect(() => {
    const store = JSON.parse(localStorage.getItem('alldata')) || [];
    setvalue(store);
    console.log(value)
}, []);
  return (
    <>
      <header className="bg-customBlue shadow-md text-white sticky top-0">
        <div className="container  mx-auto px-4 py-2 flex justify-between items-center flex-wrap">
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none lg:hidden"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
            <div className='p-2 hover:border-b'>
              <Link to="/"><img src={Logo} alt="Amazon Logo" className='w-28' /></Link>
            </div>
          </div>
          <div className='hidden lg:block text-center paddingheader hover:border-b'>
            <p className='text-xs lg:text-sm'>Delivering to Pune 440033</p>
            <b className='cursor-pointer text-xs lg:text-base'><i className="fa-solid fa-location-dot"></i> Update Location</b>
          </div>
          <div className='hidden lg:flex items-center bg-gray-200 rounded-md overflow-hidden h-11 w-full max-w-3xl'>
<<<<<<< HEAD
            <button className='bg-gray-300 text-black font-bold p-2 h-11'>
              <select className='bg-gray-300 w-full h-full' name="" id="">
                {categories.map((category, index) => (
                  <option key={index} className="whitespace-nowrap hover:border-b hover:cursor-pointer">
                    {category}
                  </option>
                ))}
=======
            <button className='bg-gray-300 text-black font-bold paddingheader h-11'>
              <select className='bg-gray-300 h-full' name="" id="">
                <option value="">All</option>
                <option value="">A</option>
                <option value="">B</option>
>>>>>>> 619ab82e33bc00d41c8ebe550a9f46e3f0ab68b5
              </select>
            </button>
            <input type="text" className='p-2 h-full flex-grow text-black' placeholder='Search Amazon.in' />
            <button className='p-2 bg-orange-400 h-11 w-14'>
              <i className="fa-solid fa-magnifying-glass text-black"></i>
            </button>
          </div>
          <div className="hidden lg:block ml-4 paddingheader hover:border-b">
            <select className='bg-customBlue text-white' name="" id="">
              <option value="">EN</option>
              <option value="">HN</option>
              <option value="">MA</option>
            </select>
          </div>
          <div className="hidden lg:block ml-4 paddingheader hover:border-b">
            <button className='text-left'>
              <Link to="/login">
                <p className='text-xs lg:text-sm'>Hello, sign in</p>
                <b className='text-xs lg:text-base'>Account & Lists</b>
              </Link>
            </button>
          </div>
          <div className="hidden lg:block  ml-4 p-1 hover:border-b">
            <button>
              <p className='text-xs lg:text-sm'>Returns</p>
              <b className='text-xs lg:text-base'>& Orders</b>
            </button>
          </div>
<<<<<<< HEAD
          <div className="p-2 ">
=======
          <div className="p-0">
>>>>>>> 619ab82e33bc00d41c8ebe550a9f46e3f0ab68b5
            <div className='md:hidden inline-flex'>
              <p className='mr-3'>Sign in</p>
              <button className=' mr-5'><i className="fa-solid fa-user text-white"></i></button>
            </div>
<<<<<<< HEAD
            <button><i className="fa-solid fa-cart-shopping w-6 lg:w-8"></i></button>
            <span className='text-xs hidden lg:inline-block lg:text-xl'>Cart</span>
=======
            <button><i className="fa-solid fa-cart-shopping w-6 lg:w-6"></i></button>
            <span className='text-xs hidden lg:inline-flex lg:text-xl '>Cart </span>
>>>>>>> 619ab82e33bc00d41c8ebe550a9f46e3f0ab68b5
          </div>
        </div>
        <div className='sm:hidden inline-flex items-center bg-gray-200 rounded-md mx-auto overflow-hidden h-11 w-full max-w-3xl'>
          <input type="text" className='p-2 h-full w-full flex-grow' placeholder='Search Amazon.in' />
          <button className='p-2 bg-orange-400 h-11 w-14'>
            <i className="fa-solid fa-magnifying-glass text-black"></i>
          </button>
        </div>

      </header>

      {isOpen && (
<<<<<<< HEAD
        <div className="w-64 lg:hidden absolute top-0 bg-gray-100 text-black p-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-dark focus:outline-none lg:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
=======
        <div className="w-64 lg:hidden absolute top-0 bg-gray-100 text-black paddingheader">
           <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark focus:outline-none lg:hidden"
>>>>>>> 619ab82e33bc00d41c8ebe550a9f46e3f0ab68b5
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
          <Link to="/" className="block py-1 border-b">Home</Link>
          <Link to="/about" className="block py-1 border-b">About</Link>
          <Link to="/services" className="block py-1 border-b">Services</Link>
          <Link to="/contact" className="block py-1">Contact</Link>
        </div>
      )}
    </>
  );
};

export default Header;
