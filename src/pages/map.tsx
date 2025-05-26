import React from 'react';
import Navigation from '../nav-bar/nav-bar';
import Footer from '../nav-bar/footer';
import './map.css';
/*import {useTranslation} from "react-i18next";
import "../i18n"*/

function Map() {
  //const {t} = useTranslation();
  let zoom = 1.1;
  return (
    <><Navigation /><div className="container">
      {/** so this zoom doesn't actually work so fix pls  */}
      <img style={{transition: 'transform .2s', cursor: 'zoom-in', transform: 'scale(zoom)'}} src="/mia-egypt/map.jpg" alt="map" className="map" onClick={()=>zoom++}></img>
    </div><Footer /></>
  );
}

export default Map;