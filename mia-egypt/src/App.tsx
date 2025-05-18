import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
    <>
    <title>MIA Egypt</title>
    <div className="nav-bar">
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
    </>
  );
}

export default App;
