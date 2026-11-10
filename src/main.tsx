import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import Navigation from './nav-bar/nav-bar';
import Throbber from './pages/throbber';

const Collections = lazy(() => import('./pages/collections'));
const Map = lazy(() => import('./pages/map'));
const History = lazy(() => import('./pages/history'));
const Contact = lazy(() => import('./pages/contact'));
const Visit = lazy(() => import('./pages/visit'));
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navigation/>
    <Suspense fallback={<Throbber size={64}/>}>
      <Routes>
        <Route path="mia-egypt/" element={<App/>}/>
        <Route path="mia-egypt/visit" element={<Visit/>}/>
        <Route path="mia-egypt/collections" element={<Collections/>}/>
        <Route path="mia-egypt/map" element={<Map />}/>
        <Route path="mia-egypt/history" element={<History/>}/>
        <Route path="mia-egypt/contact" element={<Contact/>}/>
      </Routes>
    </Suspense>
    </BrowserRouter>
    </React.StrictMode>
);
