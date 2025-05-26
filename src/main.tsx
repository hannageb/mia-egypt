import { Suspense } from 'react';
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
    <Suspense fallback={<div className="loading-screen"></div>}>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/visit" element={<Visit/>}/>
        <Route path="/collections" element={<Collections/>}/>
        <Route path="/map" element={<Map />}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Suspense>
    </BrowserRouter>
    </React.StrictMode>
);
