import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Collections from './pages/collections';
import Map from './pages/map';
import History from './pages/history';
import Contact from './pages/contact';
import Visit from './pages/visit';
import React from 'react';
import Navigation from './nav-bar/nav-bar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="mia-egypt/" element={<App/>}/>
        <Route path="mia-egypt/visit" element={<Visit/>}/>
        <Route path="mia-egypt/collections" element={<Collections/>}/>
        <Route path="mia-egypt/map" element={<Map />}/>
        <Route path="mia-egypt/history" element={<History/>}/>
        <Route path="mia-egypt/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </React.StrictMode>
);
