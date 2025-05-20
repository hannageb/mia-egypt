import React from 'react';
import './App.css';
import Navigation from './nav-bar/nav-bar';
import Footer from './nav-bar/footer';


function App() {
  return (
    <div className="container">
      <Navigation />
      <img src="./full_logo.png" alt="icon w/ text"></img>
      <Footer/>
    </div>
  );
}

export default App;
