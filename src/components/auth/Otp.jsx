import { useLocation } from 'react-router-dom';

const Otp = () => {
  const location = useLocation();
  const formData = location.state;

  return (
    <div>
      <h1>OTP</h1>
      <p>Name: {formData.name}</p>
      <p>Mobile: {formData.mobile}</p>
      <p>Password: {formData.password}</p>
    </div>
  )
}

export default Otp;
