import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './variables.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

import {TilbudSide, Home, SkjemaSide, PageNotFound} from './pages/';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/tilbud' element={<TilbudSide/>}/>
          <Route path='/skjemaSide' element={<SkjemaSide/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
