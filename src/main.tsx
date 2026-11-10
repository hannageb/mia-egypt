import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy} from 'react';
import Navigation from './nav-bar/nav-bar';
import Throbber from './pages/throbber';

const Collections = lazy(() => import('./pages/collections'));
const MapPage = lazy(() => import('./pages/map'));
const HistoryPage = lazy(() => import('./pages/history'));
const Contact = lazy(() => import('./pages/contact'));
const Visit = lazy(() => import('./pages/visit'));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navigation/>
    <Suspense fallback={<Throbber/>}>
      <Routes>
        <Route path="mia-egypt/" element={<App/>}/>
        <Route path="mia-egypt/visit" element={<Visit/>}/>
        <Route path="mia-egypt/collections" element={<Collections/>}/>
        <Route path="mia-egypt/map" element={<MapPage/>}/>
        <Route path="mia-egypt/history" element={<HistoryPage/>}/>
        <Route path="mia-egypt/contact" element={<Contact/>}/>
      </Routes>
    </Suspense>
    </BrowserRouter>
    </React.StrictMode>
);
