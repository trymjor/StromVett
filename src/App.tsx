import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './variables.css';

import {Footer, Navbar} from './common/';

import TilbudSide from './tilbudside/tilbudside';
import SkjemaSide from './skjemaside/skjemaside';
import Home from './home/home';
import PageNotFound from './pagenotfound/pagenotfound';

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
