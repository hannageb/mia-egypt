import React from 'react';
import './App.css';
import Navigation from './nav-bar/nav-bar';
import Footer from './nav-bar/footer';


function App() {
  return (
    <><Navigation />
    <div className="home-background"></div>
    <img src="/mia-egypt/logos/full-logo.png" alt="full logo" className="full-logo"></img>
    <Footer /></>
  );
}

export default App;
