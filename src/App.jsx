import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import NotFound from './components/NotFound'
import AddtoCart from './components/AddtoCart';
import Cart from './components/Cart';
import MultiDetails from './components/common/MultiDetails';


function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addtocart" element={<AddtoCart />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/multidetails" element={<MultiDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
