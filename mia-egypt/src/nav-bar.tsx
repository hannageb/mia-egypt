import React from 'react';
import './nav-bar.css';
import { useNavigate } from 'react-router-dom';


function Navigation() {
  const navigate = useNavigate();
  return (
    <>
    <title>MIA Egypt</title>
    <div className="nav-bar">
      <button
        className="home-button"
        onClick={() => {
          navigate('/');
        }}>
        <img src="/public/icon.png" width="300" height="300" alt="logo"/>
      </button>
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
          navigate('/Exhibitions');
        } }>Exhibitions</button>
      <button>ع</button>
    </div>
    </>
  );
}

export default Navigation;
