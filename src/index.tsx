import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Collections from './pages/collections';
import Map from './pages/map';
import History from './pages/history';
import Contact from './pages/contact';
import Visit from './pages/visit';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/visit" element={<Visit/>}/>
      <Route path="/collections" element={<Collections/>}/>
      <Route path="/map" element={<Map />}/>
      <Route path="/history" element={<History/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
