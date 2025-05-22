import React  from 'react';
import './nav-bar.css';
import {Link} from "react-router-dom";
import LanguageChanger from '../pages/lang';
import { useTranslation } from 'react-i18next';

/* reference for navigation bar: 
* https://www.youtube.com/watch?v=PwWHL3RyQgk&ab_channel=Skillthrive
*/

function Navigation() {
  const{t} = useTranslation();
  return (
    <header>
      <Link to="/"><img src="/mia-egypt/logos/icon.png" alt="icon" className="icon"></img></Link>
      <nav>
        <ul className="nav_links">
          <li><Link to="/visit">{t("visit")}</Link></li>
          <li><Link to="/collections">{t("collections")}</Link></li>
          <li><Link to="/map">{t("map")} </Link></li>
          <li><Link to="/history">{t("history")} </Link></li>
          <li><Link to="/contact">{t("contact")}</Link></li>
        </ul>
      </nav>
      <LanguageChanger/>
    </header>
  );
}

export default Navigation;
