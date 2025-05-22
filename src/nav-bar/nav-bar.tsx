import React  from 'react';
import './nav-bar.css';
import {Link} from "react-router-dom";
import LanguageChanger from '../pages/lang';

/* reference for navigation bar: 
* https://www.youtube.com/watch?v=PwWHL3RyQgk&ab_channel=Skillthrive
*/

function Navigation() {
  return (
    <header>
      <Link to="/"><img src="/mia-egypt/logos/icon.png" alt="icon" className="icon"></img></Link>
      <nav>
        <ul className="nav_links">
          <li><Link to="/visit"> Visit</Link></li>
          <li><Link to="/collections">Collections </Link></li>
          <li><Link to="/map"> Map </Link></li>
          <li><Link to="/history"> History </Link></li>
          <li><Link to="/contact"> Contact Us</Link></li>
        </ul>
      </nav>
      <LanguageChanger/>
    </header>
  );
}

export default Navigation;
