import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Footer/logo.png.png'; // Corrected the import path
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";

const Password = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const mobileNumber = location.state;

  const [formData, setFormData] = useState({
    mobile: mobileNumber.mobile,
    password:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      const response = await axios.post('https://amazon-backend-6eco.onrender.com/login', formData);
      if (response.data.token) {
        const userData = JSON.stringify(response.data.user);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', userData);
        console.log(response.data); // Log response for debugging
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        console.log(response.data); // Log response for debugging
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle specific errors here, e.g., display a message to the user
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border">
        <div className="flex justify-center mb-4">
          <img src={Logo} alt="Amazon Logo" className="h-16" />
        </div>
        <h2 className="text-4xl font-semibold mb-6">Sign in</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone-number">
              +91{mobileNumber.mobile} <Link to="/login" className="text-blue-600 text-sm">Change</Link>
            </label>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="flex justify-between">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password" // Corrected the name attribute
                type="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button
            type="submit" // Added type="submit" for form submission
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Sign in
          </button>
          <Link to="#" className="text-blue-600 text-sm ml-2 float-end">Forgot Password</Link>

          <div className="flex items-center mt-4">
            <input type="checkbox" id="keep-signed-in" className="mr-2" />
            <label htmlFor="keep-signed-in" className="text-sm text-gray-700">Keep me signed in.</label>
            <Link to="#" className="text-blue-600 text-sm ml-2">Details</Link>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">or</p>
            <button
              className="mt-2 bg-white border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Get an OTP on your phone
            </button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              <Link to="#" className="text-blue-600">Conditions of Use</Link> and <Link to="#" className="text-blue-600">Privacy Notice</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Password;
