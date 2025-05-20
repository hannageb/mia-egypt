import React from 'react';
import './App.css';
import Navigation from './nav-bar/nav-bar';
import Footer from './nav-bar/footer';
//import fullLogo from './assets/full_logo.png';


function App() {
  return (
    <>
    <Navigation />
    {/*<img src={fullLogo} alt="full logo with text" />*/}
    <Footer/>
    </>
  );
}

export default App;
