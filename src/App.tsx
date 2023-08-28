import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import './variables.css';

import {Footer, Navbar} from './common/';

import PricingPage from './pricingpage/PricingPage';
import FormPage from './formpage/FormPage';
import Home from './home/home';
import PageNotFound from './pagenotfound/pagenotfound';


function App() {
  return (
    <Router>
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/tilbudSide' element={<PricingPage/>}/>
          <Route path='/skjemaSide' element={<FormPage/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
