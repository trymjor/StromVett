import React from 'react';
import './App.css';

import './variables.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Avtaler from './components/avtaler/avtaler';

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
