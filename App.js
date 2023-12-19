
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Shop from './Project/Shop';
import React from 'react';
import logo from './redux/pictures/logo.png'
import Navbar from './Project/Navbar'
import Home from './Project/Home';
import Cart from './Project/Cart';
import About from './Project/About';
import GoToPayment from './Project/GoToPayment';

// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <div  style={{backgroundColor: '#f8d1e0'}}>
        <Provider store={store}>
          <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
              <Route exact path="" element={<Home />}>  </Route>
              <Route exact path="/Shop" element={<Shop />}>  </Route>
              <Route exact path="/Cart" element={<Cart />}>  </Route>
              <Route exact path="/About" element={<About />}>  </Route>
              <Route exact path="/GoToPayment" element={<GoToPayment />}>  </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    </>
  );
}

export default App;