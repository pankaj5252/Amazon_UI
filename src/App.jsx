import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import NotFound from './components/NotFound';
import AddtoCart from './components/AddtoCart';
import Cart from './components/Cart';
import MultiDetails from './components/common/MultiDetails';
import Placeorder from './components/Placeorder';
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute'; // Ensure correct path

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addtocart" element={<ProtectedRoute element={<AddtoCart />} />} />
          <Route path="/cart" element={<ProtectedRoute element={<Cart />} />} />
          <Route path="/placeorder" element={<ProtectedRoute element={<Placeorder />} />} />
          <Route path="/multidetails" element={<ProtectedRoute element={<MultiDetails />} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
