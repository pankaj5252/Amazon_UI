import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Footer/logo.png.png';

const Login = () => {
    const [formData, setFormData] = useState({
        mobile: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { value } = e.target;
        setFormData({ mobile: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate('/password', { state: formData })
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md border">
                <div className="flex justify-center mb-4">
                    <Link to="/"><img src={Logo} alt="Amazon Logo" className="h-16" /></Link>
                </div>
                <h2 className="text-2xl font-semibold mb-6 text-center">Sign in</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emailOrMobile">
                            Enter mobile number
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="emailOrMobile"
                            type="text"
                            placeholder="Enter your  mobile phone number"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        type="submit"
                    >
                        Continue
                    </button>
                    <p className="text-sm text-gray-600 mt-4">
                        By continuing, you agree to Amazons
                        <Link to="#" className="text-blue-600"> Conditions of Use</Link> and{' '}
                        <Link to="#" className="text-blue-600">Privacy Notice</Link>.
                    </p>
                    <div className="mt-4 text-center">
                        <Link to="#" className="text-blue-600 text-sm">Need help?</Link>
                    </div>
                    <hr className="my-6" />
                    <div className="mt-4 text-center">
                        <Link to="#" className="text-blue-600 text-sm">Buying for work? Shop on Amazon Business</Link>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">New to Amazon?</p>
                        <Link
                            to="/register"
                            className="border font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline inline-block mt-2"
                        >
                            Create your Amazon account
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
