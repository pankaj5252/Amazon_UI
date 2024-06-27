import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import AddtoCart from './components/AddtoCart';
import Cart from './components/Cart';
import MultiDetails from './components/common/MultiDetails';
import Placeorder from './components/Placeorder';
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute'; 
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Password from './components/auth/Password';

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* <Header />
        <MiniHeader /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addtocart" element={<ProtectedRoute element={<AddtoCart />} />} />
          <Route path="/cart" element={<ProtectedRoute element={<Cart />} />} />
          <Route path="/placeorder" element={<ProtectedRoute element={<Placeorder />} />} />
          <Route path="/multidetails" element={<ProtectedRoute element={<MultiDetails />} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/password" element={<Password />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </AuthProvider>
  );
}

export default App;
