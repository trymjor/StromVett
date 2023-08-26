import React from 'react';
import './App.css';

import './variables.css';

import {Navbar, Footer, Hero, About, Avtaler} from './components';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Avtaler/>
      <Footer/>
    </div>
  );
}

export default App;
