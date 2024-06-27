// src/components/auth/Password.jsx
import { Link } from 'react-router-dom';
import Logo from '../../assets/Footer/logo.png.png'

const Password = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img src={Logo} alt="Amazon Logo" className="h-16" />
        </div>
        <h2 className="text-4xl font-semibold mb-6">Sign in</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone-number">
              +919021373247 <Link to="#" className="text-blue-600 text-sm">Change</Link>
            </label>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="flex justify-between">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
          </div>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
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
