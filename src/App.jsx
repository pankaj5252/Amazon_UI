import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import NotFound from './components/NotFound'
import AddtoCart from './components/AddtoCart';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addtocart" element={<AddtoCart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
