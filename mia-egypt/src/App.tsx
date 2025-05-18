import React from 'react';
import './App.css';

function App() {
  return (
    <><title>MIA Egypt</title>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <><div className="nav-bar">
      <button
        className="home-button"
        onClick={() => {
          navigate('/');
        } }>Home</button>
      <button
        onClick={() => {
          navigate('/Collections');
        } }>Collections</button>
      <button
        onClick={() => {
          navigate('/Map');
        } }>Map</button>
      <button
        onClick={() => {
          navigate('/History');
        } }>History</button>
      <button
        onClick={() => {
          navigate('/Exhibition');
        } }>Exhibitions</button>
      <button>عربي</button>
    </div>
    <div className="background">
    </>
  );
}

export default App;
