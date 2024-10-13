
import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Portfolio />
      <Services />
      <About />
      <Contact />
    </div>
  );
}

export default App;
