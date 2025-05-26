import React from 'react';
import './App.css';
import Navigation from './nav-bar/nav-bar';
import Footer from './nav-bar/footer';
import "./i18n"
import {useTranslation} from "react-i18next";

function App() {
  const{t} = useTranslation();
  return (
    <><Navigation />
    <div className="h-container">
        <h2 className="h-header">{t("header")}</h2>
        <div className='logo-and-text'>
          <div className="mission">
            <p>{t("mission")}</p>
          </div>
          <div className="logo-container">
            <div className="logo-bkgd"></div>
            <div className="full-logo">
              <img src="/mia-egypt/logos/full-logo.png" alt="logo with text"></img>
            </div>
          </div>
        </div>
        {/* carousel of some featured items */}
    </div>
    <Footer/></>
  );
}
export default App;
