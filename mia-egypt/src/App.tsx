import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
    <div className="nav-bar" style={{justifyContent: 'center'}}>
        <div className="home-button">
        <button
          onClick={() => {
            navigate('/');
          } }>Home</button>
        </div>
        <div className='navigation'>
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
        </div>
      </div>
  );
}

export default App;
