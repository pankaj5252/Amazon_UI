import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/header/logo.png';

const Header = () => {
  const categories = [
    "Electronics", "Clothing", "Home & Kitchen", "Beauty", "Toys",
    "Sports", "Automotive", "Books", "Movies & TV", "Music",
    "Video Games", "Pet Supplies", "Grocery", "Health"
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    console.log('User logged out');
    setUser('')
  };

  const toggleDropdown1 = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <header className="bg-customBlue shadow-md text-white sticky top-0 z-50">
        <div className="container-fluid mx-auto py-2 px-2 flex justify-between items-center flex-wrap">
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
              <Link to="/"><img src={Logo} alt="Amazon Logo" className='w-24 mt-2' /></Link>
            </div>
          </div>
          <div className='hidden lg:block text-center paddingheader hover:border-b'>
            <p className='text-xs lg:text-sm'>Delivering to Pune 440033</p>
            <b className='cursor-pointer text-xs lg:text-base'><i className="fa-solid fa-location-dot"></i> Update Location</b>
          </div>
          <div className='hidden lg:flex items-center bg-gray-200 rounded-md overflow-hidden h-11 w-full max-w-3xl'>
            <button className='bg-gray-300 text-black font-bold p-2 h-11'>
              <select className='bg-gray-300 w-full h-full' name="" id="">
                {categories.map((category, index) => (
                  <option key={index} className="whitespace-nowrap hover:border-b hover:cursor-pointer">
                    {category}
                  </option>
                ))}
              </select>
            </button>
            <input type="text" className='p-2 h-full flex-grow font-semibold text-black' placeholder='Search Amazon.in' />
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
          <div className="hidden lg:block ml-4 paddingheader hover:border-b cursor-pointer">
            {user ? (
              <div className="relative">
                <div className="text-left cursor-pointer" onClick={toggleDropdown}>
                  <p className="text-xs lg:text-sm">Hello, <span className="font-bold">{user.name}</span></p>
                  <p className="text-xs lg:text-base">Account & Lists</p>
                </div>
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-customBlue border rounded-xl shadow-lg z-10">
                    <ul className="py-1">
                      <li className="px-4 py-2 hover:bg-gray-400 cursor-pointer">Profile</li>
                      <li className="px-4 py-2 hover:bg-gray-400 cursor-pointer">Orders</li>
                      <li className="px-4 py-2 hover:bg-gray-400 cursor-pointer" onClick={handleLogout}>Sign Out</li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link className='hover:text-white' to="/login">
                <p className='text-xs lg:text-sm'>Hello, sign in</p>
                <b className='text-xs lg:text-base'>Account & Lists</b>
              </Link>
            )}
          </div>
          <div className="hidden lg:block ml-4 paddingheader hover:border-b">
            <button className='text-left'>
              <Link className='hover:text-white' to="/orders">
                <p className='text-xs lg:text-sm'>Returns</p>
                <b className='text-xs lg:text-base'>& Orders</b>
              </Link>
            </button>
          </div>
          <div className="hidden lg:block ml-4 me-1 paddingheader hover:border-b">
            <button className='text-left'>
              <Link className='hover:text-white' to="/orders">
                <span className="text-xs hidden lg:inline-block lg:text-xl">Cart</span>
                <button><i className="fa-solid fa-cart-shopping w-6 lg:w-8"></i></button>
              </Link>
            </button>
          </div>
          <div className="p-2 flex items-center lg:hidden">
            <div className="relative inline-flex items-center">
              {user ? (
                <>
                  <b className="mr-3 cursor-pointer" onClick={toggleDropdown1}>{user.name}</b>
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-44 w-48 bg-customBlue border rounded-xl shadow-lg z-10">
                      <ul className="py-1">
                        <li className="px-4 py-2 hover:bg-gray-400 cursor-pointer">Profile</li>
                        <li className="px-4 py-2 hover:bg-gray-400 cursor-pointer">Orders</li>
                        <li className="px-4 py-2 hover:bg-gray-400 cursor-pointer" onClick={handleLogout}>Sign Out</li>
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <p className="mr-3"><Link to="/login">Sign in</Link></p>
              )}
              <button className="mr-5"><i className="fa-solid fa-user text-white"></i></button>
            </div>
            <button><i className="fa-solid fa-cart-shopping w-6 lg:w-8"></i></button>
            <span className="text-xs hidden lg:inline-block lg:text-xl">Cart</span>
          </div>
          <div className='sm:hidden inline-flex items-center bg-gray-200 rounded-md mx-auto overflow-hidden h-11 w-full max-w-3xl'>
            <input type="text" className='p-2 h-full w-full text-black fw-semibold flex-grow' placeholder='Search Amazon.in' />
            <button className='p-2 bg-orange-400 h-11 w-14'>
              <i className="fa-solid fa-magnifying-glass text-black"></i>
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="w-64 lg:hidden z-50 fixed top-0 bg-gray-700 text-white h-full pt-4 p-6 ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-dark focus:outline-none lg:hidden"
          >
            <svg
              className="h-6 w-6 text-white"
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
          <br />
          <b className='border-b'>All Category</b>
          {categories.map((category, index) => (
            <Link to={`/${category}`} key={index} className="block py-2 hover:cursor-pointer">
              {category}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
