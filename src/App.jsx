import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
// import MiniHeader from './components/common/MiniHeader';
// import Header from './components/common/Header'
// import Footer from './components/common/Footer'
import NotFound from './components/NotFound'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Password from './components/auth/Password'

function App() {

  return (
    <>
      <Router>
        {/* <Header />
        <MiniHeader /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/password" element={<Password />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default App
