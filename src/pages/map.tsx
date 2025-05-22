import Navigation from '../nav-bar/nav-bar';
import Footer from '../nav-bar/footer';
import './map.css';
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";
import "../i18n"

function Map() {
  const {t} = useTranslation();
  return (
    <><Navigation /><div className="container">
      <img src="/mia-egypt/map.jpg" alt="map"></img>
      <span className="umayyad-abbasid"><Link to="/collections" style={{ textWrap: 'wrap', fontSize: '11px' }} state={{ filters: ["Umayyad-Abbasid"] }}>{t("umayyad_abbasid")}</Link></span>
      <span className="fatimid"><Link to="/collections" state={{ filters: ["Fatimid"] }}>{t("fatimid")}</Link></span>
      <span className="ayyubid"><Link to="/collections"state={{ filters: ["Ayyubid"] }}>{t("ayyubid")}</Link></span>
      <span className="mamluk"><Link to="/collections"state={{ filters: ["Mamluk"] }}>{t("mamluk")}</Link></span>
      <span className="mamluk-ottoman"><Link to="/collections" style={{ textWrap: 'wrap', fontSize: '12px' }}state={{ filters: ["Mamluk-Ottoman"] }}>{t("mamluk_ottoman")}</Link></span>
      <span className="ottoman"><Link to="/collections" style={{ textWrap: 'wrap', fontSize: '11px' }}state={{ filters: ["Ottoman"] }}>{t("ottoman")}</Link></span>
      <span className="ottoman2"><Link to="/collections" style={{ textWrap: 'wrap', fontSize: '11px' }}state={{ filters: ["Ottoman"] }}>{t("ottoman")}</Link></span>
      <span className="medicine"><Link to="/collections" style={{ fontSize: '12px' }}>{t("medicine")}</Link></span>
      <span className="nature"><Link to="/collections" style={{ textWrap: 'wrap', fontSize: '12px' }}>{t("nature")}</Link></span>
      <span className="calligraphy"><Link to="/collections" style={{ textWrap: 'wrap', fontSize: '12px', color: 'black' }}>{t("calligraphy")}</Link></span>
    </div><Footer /></>
  );
}

export default Map;