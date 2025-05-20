import React, { useState }  from 'react';
import './nav-bar.css';
import { Form } from 'react-bootstrap';
import {Link} from "react-router-dom";
import icon from '../assets/icon.png';


/* reference for navigation bar: 
* https://www.youtube.com/watch?v=PwWHL3RyQgk&ab_channel=Skillthrive
*/

function Navigation() {
  const [language, setLanguage] = useState<string>("English")
  function changeLanguage(event: React.ChangeEvent<HTMLSelectElement>) {
    setLanguage(event.target.value)
  }
  
  return (
    <header>
      <Link to="/"><img src={icon} alt="icon" className="icon"/></Link>
      <nav>
        <ul className="nav_links">
          <li><Link to="/collections"> Collections </Link></li>
          <li><Link to="/map"> Map </Link></li>
          <li><Link to="/history"> History </Link></li>
          <li><Link to="/contact"> Contact Us</Link></li>
        </ul>
      </nav>
      <Form.Group>
        <Form.Select value={language} onChange={changeLanguage}>
          <option value="placeholder" disabled> 🌐 </option>
          <option value="english">English</option>
          <option value="arabic">عربي</option>
          <option value="french">Français</option>
        </Form.Select>
      </Form.Group>
    </header>
  );
}

export default Navigation;
