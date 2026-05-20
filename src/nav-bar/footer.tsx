import { NavLink } from 'react-router-dom';
import './footer.css';
import {useTranslation} from "react-i18next";


function Footer() {
  const{t} = useTranslation();
  const add = t('address').split("|")
  return (
    <footer>
      <div className="row">
        <div className='col' id="pages">
          <ul className="pages">
            <li><NavLink to="/mia-egypt" style={({isActive}) => (
            isActive ? {fontWeight: 'bold',} :{})}>{t('Home')}</NavLink></li>
            <li><NavLink to="/mia-egypt/visit" style={({isActive}) => (
            isActive ? {fontWeight: 'bold',} :{})}>{t('Visit')}</NavLink></li>
            <li><NavLink to="/mia-egypt/collections" style={({isActive}) => (
            isActive ? {fontWeight: 'bold',} :{})}>{t('Collections')}</NavLink></li>
            <li><NavLink to="/mia-egypt/map" style={({isActive}) => (
            isActive ? {fontWeight: 'bold',} :{})}>{t('Map')}</NavLink></li>
            <li><NavLink to="/mia-egypt/history" style={({isActive}) => (
            isActive ? {fontWeight: 'bold',} :{})}>{t('History')}</NavLink></li>
            <li><NavLink to="/mia-egypt/contact" style={({isActive}) => (
            isActive ? {fontWeight: 'bold',} :{})}>{t('Contact')}</NavLink></li>
          </ul>
        </div>
          <div className='col' id="hours+location">
            <p className="hours">{t('f_times').split("|")[0]}<br/>{t('f_times').split("|")[1]}</p>
            <p className="address">{add[0]}<br/>{add[1]}<br/>{add[2]}</p>
          </div>
          <div className='col' id="socials">
            <ul className="socials">
              <li><a href="https://www.instagram.com/miainegypt/"><img alt="insta" src="logos/instagram-logo.png"></img></a></li>
              <li><a href="https://www.facebook.com/miaegypt/"><img alt="fb" src="logos/facebook-logo.png"></img></a></li>
              <li><a href="https://www.youtube.com/channel/UCSmBrnaDLCS4yncyAieG5rw"><img alt="yt" src="logos/youtube-logo.png"></img></a></li>
            </ul>
          </div>
          <div className='col' id="logo">
           <img src="logos/long-logo.jpg" alt="long logo"></img>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
