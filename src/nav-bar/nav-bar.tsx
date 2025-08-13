import './nav-bar.css';
import {NavLink} from "react-router-dom";
import LanguageChanger from '../pages/lang';
import { useTranslation } from 'react-i18next';

/* reference for navigation bar: 
* https://www.youtube.com/watch?v=PwWHL3RyQgk&ab_channel=Skillthrive
*/

function Navigation() {
  const{t} = useTranslation();
  return (
    <header>
      <NavLink to="mia-egypt/"><img src="logos/icon.png" alt="icon" className="icon"></img></NavLink>
      <nav>
        <ul className="nav_links">
          <li><NavLink to="mia-egypt/visit" style={({isActive}) => (
            isActive ? {fontWeight: 'bold',} :{})}>{t("visit")}</NavLink></li>
          <li><NavLink to="mia-egypt/collections" style={({isActive}) => (
            isActive ? {fontWeight: 'bold',}:{})}>{t("collections")}</NavLink></li>
          <li><NavLink to="mia-egypt/map" style={({isActive}) => (
            isActive ? {fontWeight: 'bold',} : {})
            }>{t("map")}</NavLink></li>
          <li><NavLink to="mia-egypt/history" style={({isActive}) => (
            isActive ? {fontWeight: 'bold',} : {})
            }>{t("history")} </NavLink></li>
          <li><NavLink to="mia-egypt/contact" style={({isActive}) => (
            isActive ? {fontWeight: 'bold',} : {})
            }>{t("contact")}</NavLink></li>
        </ul>
      </nav>
      <LanguageChanger/>
    </header>
  );
}

export default Navigation;
