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
          <Route path='/' element={<Home />} />
          <Route path='/StromVett' element={<Home/>}/>
          <Route path='/tilbud' element={<PricingPage/>}/>
          <Route path='/skjema' element={<FormPage/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
