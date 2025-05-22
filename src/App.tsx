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
    <div className="home-background"></div>
    <h2 style={{justifyContent: 'center'}}>{t("header")}</h2>
    <img src="/mia-egypt/logos/full-logo.png" alt="full logo" className="full-logo"></img>
    <Footer /></>
  );
}

export default App;
