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
    <div className="container">
      <h2 style={{textAlign: 'center'}}>{t("header")}</h2>
      <img src="/mia-egypt/logos/full-logo.png" alt="full logo" className="full-logo"></img>
    </div>

    <Footer /></>
  );
}

export default App;
