import { Link, useNavigate } from "react-router-dom";
import Logo from '../../assets/Footer/logo.png.png'
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate('/otp', { state: formData });
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border">
        <div className="flex justify-center mb-4">
          <Link to="/"><img src={Logo} alt="Amazon Logo" className="h-16" /></Link>
        </div>
        <h2 className="text-2xl font-semibold mb-6 text-center">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Your name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="First and last name"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
              Mobile number
            </label>
            <div className="flex">
              <select
                className="shadow appearance-none border rounded-l w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="country-code"
              >
                <option value="IN">IN +91</option>
                {/* Add more country codes as needed */}
              </select>
              <input
                className="shadow appearance-none border rounded-r w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="mobile"
                type="text"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <p className="text-xs text-gray-600">Passwords must be at least 6 characters.</p>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-full"
          >
            Verify mobile number
          </button>
          <div className="mt-4 text-center">
            <Link to="#" className="text-blue-600 text-sm">Buying for work? Create a free business account</Link>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">Already have an account? <Link to="/login" className="text-blue-600">Sign in</Link></p>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            By creating an account or logging in, you agree to Amazon{' '}
            <Link to="#" className="text-blue-600">Conditions of Use</Link> and{' '}
            <Link to="#" className="text-blue-600">Privacy Policy</Link>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
