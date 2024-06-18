// src/components/Header.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/">Logo</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
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
        </div>
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-white md:relative md:flex md:items-center md:w-auto md:bg-transparent transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col md:flex-row md:ml-auto">
            <Link
              to="/"
              className="block py-2 px-4 text-gray-800 border-b border-gray-200 md:border-none"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 px-4 text-gray-800 border-b border-gray-200 md:border-none"
            >
              About
            </Link>
            <Link
              to="/services"
              className="block py-2 px-4 text-gray-800 border-b border-gray-200 md:border-none"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block py-2 px-4 text-gray-800 md:border-none"
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
