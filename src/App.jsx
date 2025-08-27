
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import AboutUs from './Aboutus/AboutUs';
import { useState } from 'react';
import LoginPopup from './components/LoginPopUp/LoginPopup';

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {
        showLogin ? <LoginPopup setShowLogin={setShowLogin}></LoginPopup> : <></>
      }
      <div>
        <Navbar setShowLogin={setShowLogin}></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<AboutUs></AboutUs>}></Route>
          <Route path='/contact' element={'/'}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/order' element={<PlaceOrder></PlaceOrder>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>

  );
};

export default App;